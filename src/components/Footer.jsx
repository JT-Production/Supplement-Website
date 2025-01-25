import React from 'react'
import Logo from '../assets/Logo.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import Button from './Button';
const Footer = () => {
  return (
    <footer>
        <div className="flex justify-center px-40 ">
            <div className="grid lg:grid-cols-4 gap-5 text-white ">
                <div className="lg:mx-auto">
                    <img src={Logo} alt="" />
                    
                    <p className='my-2'>Suspen dise tempus oncu enim pellen teste pretium.</p>
                    <div className="flex ">
                    <FaFacebookF  className='me-3 text-xl'/>
                    <FaInstagram  className='me-3 text-xl'/>
                    <FaTwitter className='me-3 text-xl'/>
                    <FaLinkedinIn className='me-3 text-xl'/>
                    <FaYoutube className='me-3 text-xl'/>
                    </div>
                </div>
                <div className="lg:mx-auto">
                    <p className='text-xl font-monts'>Link</p>
                    <ul className="list-none my-2">
                        <li className='uppercase text-sm font-monts font-thin '>About</li>
                        <li className='uppercase text-sm font-monts font-thin '>Privacy</li>
                        <li className='uppercase text-sm font-monts font-thin '>Return</li>
                        <li className='uppercase text-sm font-monts font-thin '>Terms</li>
                    </ul>
                </div>
                <div className="lg:mx-auto">
                <p className='text-xl font-monts'>Contact</p>
                    <ul className="list-none my-2">
                        <li className='text-sm font-monts font-thin '> 123 456 7891
                        </li>
                        <li className='text-sm font-monts font-thin '>joeyofficial707@gmail.com</li>
                        <li className='text-sm font-monts font-thin '>Phoenix, Arizona 947 Dogwood Road</li>
                       
                    </ul>
                </div>
                <div className="">
                <p className='text-xl font-monts'>Send Your Message</p>
                    <form action="" className='py-4'>
                      
                        <div className="flex">
                            <input type="text" placeholder='Full Name' className='bg-black border py-2 me-4 px-2 w-[120px] border-zinc-800 active:border-zinc-800  focus:outline-none focus:border-white placeholder:text-neutral-600'/>
                                <input type="email" placeholder='Email' className='bg-black border py-2 me-4 px-2 w-[120px] border-zinc-800 active:border-zinc-800  focus:outline-none focus:border-white placeholder:text-neutral-600'/>
                        </div>
                        <div className="flex justify-start py-2 ">
                        <textarea name="message" id="" placeholder='Message' className='lg:w-[450px] h-20 bg-black border py-2 me-4 px-2  border-zinc-800 active:border-zinc-800  focus:outline-none focus:border-white placeholder:text-neutral-600'></textarea>
                        </div>
                        <Button text={"Send Now"}/>
                    </form>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer