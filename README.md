# Spam Classifier Website

This project is a web-based spam classifier that uses a trained Naive Bayes model to determine if a given message is spam or ham (not spam). The application consists of a backend built with Flask and a frontend built with React.

## Project Overview

The goal of this project is to provide a user-friendly interface where users can input text to check if it is classified as spam or ham. The project is built in two main parts:
1. **Backend**: Handles the machine learning model and the API for classification.
2. **Frontend**: A React-based interface for users to interact with the classifier.

## How It Works

1. **Data Collection and Preparation**:
   - A dataset containing labeled spam and ham messages was collected.
   - The data was cleaned and transformed using a Count Vectorizer to convert text into a format suitable for model training.

2. **Model Training**:
   - A Naive Bayes classifier was trained on the vectorized data to classify messages as spam or ham.
   - The trained model and the Count Vectorizer were serialized (pickled) to be reused by the backend.

3. **Backend**:
   - The backend is built with Flask.
   - It loads the pickled Naive Bayes model and Count Vectorizer to handle incoming classification requests.
   - An API endpoint is provided to accept text input, classify it as spam or ham, and return the result.

4. **Frontend**:
   - The frontend is built with React.
   - It provides a simple interface where users can enter text and view the classification result (spam or ham) returned by the backend.

## Technologies Used

- **Machine Learning Model**: Naive Bayes classifier
- **Backend**: Flask
- **Frontend**: React
- **Vectorization**: Count Vectorizer
