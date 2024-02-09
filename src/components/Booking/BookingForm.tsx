import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BookingForm = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://getform.io/f/937edbda-c665-40a4-b476-aa1ec8cc7420', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Message sent successfully');
      } else {
        toast.error('Please fill out all fields before you submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An unexpected error occurred. Please try again later.');
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="bg-secondary w-full dark:bg-dark pb-20">
      <div className="container">
        <div className="bg-primary text-[#121420]">
          <div className="text-center">
            <h1 className="md:font-medium pb-[1rem] text-[18px] md:text-[29px] pt-4">GET A QUOTE</h1>
            <p className="pb-[2rem] md:pb-[5rem]">Ready to rent a vehicle for your next adventure? Fill out your details below, and a team member will get in touch with a quote soon.</p>
          </div>
          <div className="container">
            <form onSubmit={handleSubmit} className="flex  flex-col">
              <div className="mb-4">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  maxLength={30}
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="placeholder-[#121420] p-2 bg-transparent border-b-2 rounded-md border-[#121420] text-[#121420] focus:outline-none w-full"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  maxLength={30}
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="placeholder-[#121420] p-2 bg-transparent border-b-2 rounded-md border-[#121420] text-[#121420] focus:outline-none w-full"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="placeholder-[#121420] p-2 bg-transparent border-b-2 rounded-md border-[#121420] text-[#121420] focus:outline-none w-full"
                />
           </div>
           <div className="mb-6">
           <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="placeholder-[#121420] p-2 bg-transparent border-b-2 rounded-md border-[#121420] text-[#121420] focus:outline-none w-full"
                />
           </div>
                     

              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Comments..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="placeholder-[#121420] p-2 bg-transparent border-2 text-[#121420] border-[#121420] rounded-md focus:outline-none md:mt-[2rem] w-full"
                />
              </div>

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="text-[#111111] bg-secondary px-7 py-2 md:px-14 md:py-5 mb-10 md:mb-20 hover:bg-[#111111] hover:text-secondary duration-300 hover:scale-105"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
