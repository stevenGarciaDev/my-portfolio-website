import React from 'react';
import styled from 'styled-components';

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    
`;

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h2>Contact me</h2>
                <p>Send a message and I will be in touch</p>
                <ContactForm>
                    <label>Full Name</label>
                    <input 
                        type='text'
                        name='full_name'
                    />

                    <label>Email</label>
                    <input 
                        type='email'
                        name='email'
                    />

                    <label>Your Message</label>
                    <textarea 
                        type='text'
                        name='message'
                    />
                </ContactForm>
            </div>
        );
    }
}

export default Contact;