import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rxomqub', 'template_fj0aa18', form.current, 'HqwlU_tXB9aHHhYf4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <React.Fragment>
      <div className='flex'>
        {/* <div>
          <CategoryList />
        </div> */}
        <div className='flex flex-col w-full mx-auto h-screen p-10 dark:bg-slate-800 bg-stone-200 text-gray-200'>
          <div className='mb-4 text-center mx-auto'>
            <h1 className="font-bold text-4xl p-2">Contact</h1>
            <p className='p-2'>Want to work with us? Fill out the form underneath and we will get back to you as soon as possible.</p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="flex-col w-72 mx-auto rounded-md">
            <input type="text" name="from_name" placeholder="Name *" required className='mb-3 bg-gray-50 border text-gray-900 text-sm focus:ring-red-400 focus:border-red-400 block p-2.5 w-full border-gray-600 placeholder-gray-400 mx-auto rounded-md'/>
            <input type="email" name="from_email" placeholder="Email *" required className='mb-3 bg-gray-50 border text-gray-900 text-sm focus:ring-red-400 focus:border-red-400 block w-full p-2.5  border-gray-600 placeholder-gray-400 rounded-md' />
            <input type="text" name="discord" placeholder="Discord *" required className='mb-3 bg-gray-50 border text-gray-900 text-sm focus:ring-red-400 focus:border-red-400 block w-full p-2.5  border-gray-600 placeholder-gray-400 rounded-md' />
            <input type="text" name="budget" placeholder="Budget *" required className='mb-3 bg-gray-50 border text-gray-900 text-sm focus:ring-red-400 focus:border-red-400 block w-full p-2.5  border-gray-600 placeholder-gray-400 rounded-md' />
            <input type="text" name="size" placeholder="Size *" required className='mb-3 bg-gray-50 border text-gray-900 text-sm focus:ring-red-400 focus:border-red-400 block w-full p-2.5  border-gray-600 placeholder-gray-400 rounded-md' />
            <textarea type="text" name="details" placeholder="Details *" required className='mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-2/4 w-full p-2.5  dark:border-gray-600 rounded-md'/>
            <button type="submit" value="Send" className='border cursor-pointer dark:border-gray-700 text-gray-600 font-black transition duration-500 ease-in-out delay-550 hover:dark:border-red-200 hover:text-red-200 font-bold py-2 px-6 mr-4 rounded-lg header-title float-right'> Send </button>
          </form>
        </div>
      </div>
  </React.Fragment>
  )
}

export default Contact;