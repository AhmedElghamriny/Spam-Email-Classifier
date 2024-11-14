import React, { useState } from 'react';
import './Landing.css';
import axios from 'axios'; // Import Axios
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the specific icons

const Landing = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [prediction, setPrediction] = useState('...'); // State for prediction result

  // Handle the button click
  const handleCheckSpam = async () => {
    try {
      const response = await axios.post('http://localhost:5000/predict', {
        data: email, // Send the email content to the backend
      });
      // Update prediction based on the response
      setPrediction(response.data.prediction[0] === 1 ? 'Spam' : 'Ham');
    } catch (error) {
      console.error('Error fetching prediction:', error);
      setPrediction('Error'); // Update the prediction state on error
    }
  };

  return (
    <div className='landing_page'>
      <div className='landing_page_border-box'>
        <div className='landing_page_container-A content-container'>
          <p className='landing_page_container-A_title'>Welcome to Your Spam Detective!</p>
        </div>
        <div className='landing_page_container-B content-container'>
          <div className='landing_page_container-B_1'>
            <textarea 
              id="email" 
              name="email" 
              placeholder="Enter email message" 
              rows="25" 
              value={email} // Bind the value to the state
              onChange={(e) => setEmail(e.target.value)} // Update state on change
            />
            <div className='check-button-container'> 
              <button type="button" className="check-button" onClick={handleCheckSpam}>Check Spam</button>
            </div>
          </div>
          <div className='landing_page_container-B_2'>
            <div className='landing_page_container-B_2-A'>
              <p className='landing_page_container-B_2_title-opening'>Prediction &#123;</p>
            </div>
            <div className='landing_page_container-B_2-B'>
              <p className='placeholder'>{prediction}</p> {/* Display the prediction */}
            </div>
            <div className='landing_page_container-B_2-C'>
              <p className='landing_page_container-B_2_title-closing'>&#125;</p>
            </div>
          </div>
        </div>
        <div className='landing_page_container-C content-container'>
          <div className='social-media-icons'>
            <a href="https://www.instagram.com/ahmed.elghamriny?igsh=MXduaXV0Nm1vNGFrbg==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className='icon' />
            </a>
            <a href="https://github.com/AhmedElghamriny/Spam-Email-Classifier-Website" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className='icon' />
            </a>
            <a href="https://www.linkedin.com/in/ahmedelghamriny/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className='icon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
