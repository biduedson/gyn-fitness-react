import React, { useRef } from 'react'
import './join.css'
import emailjs from '@emailjs/browser'

function Join() {


    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7rgf7l8', 'template_pbvg0dq', form.current, 'uh4XatQ26gf7tEdkf')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <div className="Join">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className="right-j">

                <form ref={form} className='email-container' onSubmit={sendEmail}>
                    <input type="email" className='user_email' name='user_email' placeholder='Enter your Email address' />
                    <button className='btn btn-j' >Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join
