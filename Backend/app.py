from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the model and the vectorizer
with open('Naive_model.pkl', 'rb') as model_file, open('Vectorizer.pkl', 'rb') as vectorizer_file:
    model = pickle.load(model_file)
    cv = pickle.load(vectorizer_file)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json['data']  # Get data from the request
        print(f"Received data: {data}")  # Log the received data
        data_vectorized = cv.transform([data]).toarray()  # Use transform instead of fit_transform
        prediction = model.predict(data_vectorized)  # Make predictions
        print(f"Model prediction: {prediction}")  # Log the prediction
        return jsonify({'prediction': prediction.tolist()})  # Return prediction as JSON
    except Exception as e:
        print(f"Error: {str(e)}")  # Log the error
        return jsonify({'error': str(e)}), 400  # Return error message and 400 status code


if __name__ == '__main__':
    app.run(debug=True)
