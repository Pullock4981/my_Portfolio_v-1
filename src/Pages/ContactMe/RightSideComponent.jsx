

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const RightSideComponent = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Set current time if you're using {{time}} in EmailJS
        const currentTime = new Date().toLocaleString();
        form.current.time.value = currentTime;

        emailjs.sendForm(
            'ashik4981',               // service ID
            'template_hk64f6d',        // template ID
            form.current,
            'xaFHmATheP0ZSRYi5'        // public key
        ).then((result) => {
            console.log(result.text);
            MySwal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thank you for contacting me. I’ll get back to you shortly.',
                confirmButtonColor: '#3085d6'
            });
            form.current.reset();
        }, (error) => {
            console.error(error.text);
            MySwal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Message failed to send: ' + error.text,
                confirmButtonColor: '#d33'
            });
        });
    };

    return (
        <div className='bg-[#111] rounded-3xl p-6'>
            <h1 className='lg:text-5xl text-3xl font-bold mb-6'>
                Let’s work <span className='text-sky-600'>together.</span>
            </h1>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
                <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    required
                    className="bg-gray-700 p-3 rounded-xl"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    className="bg-gray-700 p-3 rounded-xl"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Your Subject *"
                    required
                    className="bg-gray-700 p-3 rounded-xl"
                />
                <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message *"
                    required
                    className="bg-gray-700 p-3 rounded-xl"
                />
                <input type="hidden" name="time" />

                <input
                    type="submit"
                    value="Send Message"
                    className="bg-gray-700 text-white font-bold py-3 px-6 rounded-xl hover:bg-white hover:text-black transition"
                />
            </form>
        </div>
    );
};

export default RightSideComponent;
