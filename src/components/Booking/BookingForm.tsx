import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const BookingForm = () => {
  const [state, handleSubmit] = useForm("xyyapwwj");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form action="https://formspree.io/f/xyyapwwj" method="post" onSubmit={handleSubmit} className='bg-[#355834] container pt-[6rem] md:pt-[8rem]'>
   <div className="flex flex-row-reverse justify-evenly"> 
   <div className="">
    <h1>You can also reach us via:</h1>
    <ul>
    <li>Tel: 9112345678</li>
    <li>info@mysite.com</li>
    </ul>
   </div>
   <div className="border-2 rounded-md p-10"> 
   <div className="mb-5 flex flex-col gap-1">
   <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
        className=''
      />
      <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
      />
   </div>
   
    <div className="mb-5 flex flex-col gap-1">
    <label htmlFor="email">
        Email 
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className=''
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
    </div>
     
 <div className="mb-5 flex flex-col gap-1">
 <label htmlFor="phone">
        Phone
      </label>
      <input
        id="phone"
        type="phone" 
        name="phone"
        className=''
      />
      <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
      />
 </div>

<div className="mb-5 flex flex-col gap-1">
<label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className=''
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
</div>

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
    </div>
    </form>
  );
}

export default BookingForm;