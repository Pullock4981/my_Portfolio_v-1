import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const RightSideComponent = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'ashik4981',     
            'template_hk64f6d',    
            form.current,
            'xaFHmATheP0ZSRYi5'      
        ).then((result) => {
            console.log(result)
            alert("Message Sent!");
            form.current.reset();
        }, (error) => {
            alert("Message failed: " + error.text);
        });
    };
    return (
        <div className='bg-[#111] rounded-3xl p-6'>
            <h1 className='lg:text-5xl text-3xl font-bold mb-6'>
                Let’s work <span className='text-sky-600'>together.</span>
            </h1>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
                <input type="text" name="user_name" placeholder="Name *" required className="bg-gray-700 p-3 rounded-xl" />
                <input type="email" name="user_email" placeholder="Email *" required className="bg-gray-700 p-3 rounded-xl" />
                <input type="text" name="subject" placeholder="Your Subject *" required className="bg-gray-700 p-3 rounded-xl" />
                <textarea name="message" rows="4" placeholder="Your Message *" required className="bg-gray-700 p-3 rounded-xl" />
                <input type="submit" value="Send Message" className="bg-gray-700 text-white font-bold py-3 px-6 rounded-xl hover:bg-white hover:text-black transition" />
            </form>
        </div>
    );
};

export default RightSideComponent;