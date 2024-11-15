import React from 'react'
import {useState, useRef} from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import emailjs from '@emailjs/browser';
import {Link} from 'react-router-dom'

const Quotation = () => {
    const [instagram, setInstragram] = useState("https://www.instagram.com/teamglyptika/")
    const [linkedIn, setLinkedIn] = useState("https://www.linkedin.com/in/glyptika/")
    const [fiverr, setFiverr] = useState("https://www.fiverr.com/teamglyptika/create-stunning-3d-models-animations-and-visual-effects-for-your-project")
    const [contact_number, setContact_number] = useState('8810207029')
    const [address, setAddess] = useState("Venture Lab, Thapar University, Patiala")
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [details,setDetails] = useState('');
    const form = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const service_id = 'service_borakaa'
        const template_id = 'template_2h41989'
        const public_key = 'emtVCf7DKKt-U0J5j'
        const templateParams ={
            from_name: name,
            from_email: email,
            to_name : 'Glyptika',
            message:details,    
        }
        emailjs.send(service_id, template_id, templateParams, public_key).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              setName('');
              setEmail('');
              setDetails('');
              setPhone('')
            },
            (error) => {
              console.log('FAILED...', error);
            },
        )
    }

  return (
    <div className='section quotation' id='quotation'>
      <div className="quotation-info">
        <div className="quotation-text">
            Let’s Collaborate
        </div>
        <div className="address">
            <div className="social">
                <p className='m-15'>Find us</p>
                <div className="icons m-15">
                    <Link to={instagram}>
                        <FaInstagram />
                    </Link>
                    <Link to={linkedIn}>
                        <FaLinkedin />
                    </Link>
                    <Link to={fiverr}>
                        <TbBrandFiverr />
                    </Link>

                </div>
            </div>
            <div className="contact">
                <p className='m-15'>{address}</p>
                <p className='m-15'>{contact_number}</p>
            </div>
        </div>  
      </div>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-4 w-full">
            <label className="block text-white-700 text-sm font-bold mb-2" for="name">
                Your Full Name
            </label>
            <input value={name} className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Full Name" onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" for="e_mail">
                E-mail
            </label>
            <input value={email} className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline" id="e_mail" type="text" placeholder="E-mail" onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className="mb-4">
            <label className="block text-grey-700 text-sm font-bold mb-2" for="phone">
                Phone
            </label>
            <input value={phone} className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline w-50" id="phone" type="text" placeholder="phone" onChange={(e)=> setPhone(e.target.value)} />
        </div>
        <div className="mb-4 w-full">
            <label className="block text-white-700 text-sm font-bold mb-2" for="project">
                Project Details
            </label>
            <input value={details} className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline" id="project" type="text" style={{height:"15vh"}} placeholder="project" onChange={(e)=> setDetails(e.target.value)} />
        </div>

        <button type='submit' className='btn-submit'>Submit</button>
      </form>
    </div>
  )
}

export default Quotation
