import React, { useRef } from "react";
import Header from "./Header";

export default function Contact() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    function validateInputs() {
        // Clear previous styles
        const inputs = [nameRef.current, emailRef.current, subjectRef.current, messageRef.current];
        inputs.forEach(input => {
            if (input) {
                input.style.border = '';
            }
        });
    
        // Check for empty inputs
        let allFilled = true; // Flag to check if all inputs are filled
        inputs.forEach(input => {
            if (input && input.value.trim() === '') {
                input.style.border = '2px solid red';
                allFilled = false; // Mark as not all filled
            }
        });
    
        if (allFilled) {
            // Reload the page if all fields are filled
            window.location.reload();
        }
    }
    

    return (
        <>
            <Header />
            <div className="contact-us" id="contact-data">
                <h4>Contact Us</h4>
                <h1>Contact For Any Query</h1>
                <div className="contact-us-data">
                    <input 
                        className="name-input" 
                        type="text" 
                        ref={nameRef} 
                        placeholder="Your Name" 
                    />
                    <input 
                        className="email-input" 
                        type="email" 
                        ref={emailRef} 
                        placeholder="Your Email" 
                    />
                </div>
                <div className="contact-us-data-two">
                    <input 
                        id="subject-input" 
                        type="text" 
                        ref={subjectRef} 
                        placeholder="Subject" 
                    />
                </div>
                <div className="contact-us-data-three">
                    <textarea 
                        id="message-input" 
                        ref={messageRef} 
                        placeholder="Leave the message"
                    ></textarea>
                </div>
                <div className="contact-us-data-four">
                    <button 
                        id="button" 
                        type="button" 
                        onClick={validateInputs}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </>
    );
}
