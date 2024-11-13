import React from 'react'
import { toast } from 'react-toastify';
import {motion} from 'framer-motion'

function Contact() {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "61ffaa54-605f-4fb3-b21c-2d667790c8d3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult('');
    }
  };
  return (
    <motion.div 
    initial={{opacity:0 , x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'
    id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2
        text-center'>Contact <span className='underline underline-offset-4 decoration-1 
        under font-light'>With Us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? 
        Let's Build Your Future Together</p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your Name
                    <input className='w-full border border-gray-300 rounded py-3
                    px-4 mt-2' type="text" name='Name' placeholder='Your Name'
                    required />
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email
                    <input className='w-full border border-gray-300 rounded py-3
                    px-4 mt-2' type="email" name='Email' placeholder='Your Email'
                    required />
                </div>
            </div>
            <div>
                Message
                <textarea className='w-full border border-gray-300 rounded py-3
                px-4 mt-2 h-48 resize none' placeholder='Message' name="Message" required>
                </textarea>
            </div>
            <button className='px-12 py-2 mx-auto text-center rounded md mt-8 bg-blue-700 text-white '>
               {result? result:" Send Message"}</button>

        </form>
    </motion.div>
  )
}

export default Contact