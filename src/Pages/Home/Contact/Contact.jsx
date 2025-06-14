import React,  {useRef } from 'react';
import "../Contact/Contact.css";
// import React, { useRef  } from 'react';
import emailjs from '@emailjs/browser';

	  export const Contact = () => {
		 
		  const form = useRef();

		const sendEmail = (e) => {
			    e.preventDefault();

			    emailjs.sendForm('service_8sw4tvt', 'template_d7ddism', form.current, {
				        publicKey: 'EK0gTF7z1uyzfyDGZ',
					      
			      })
				    .then(
					    () => {
						              console.log('SUCCESS!');
									  form.current.reset(); //lipiamos el formulario
						            
					    },
					    (error) => {
						              console.log('FAILED...', error.text);
						            
					    },
				      
				    );
			  
		}



	return (
	<div className = 'contact section-p'>
		<div className = 'container'>		
		   <div className = 'contact-section' id ="contact">
			<div className ='section-title'>
			     <h3 className = 'text-brown'>contact<span className = 'text-dark'>me</span></h3>
			<p className = 'text'>We offer the right Solutions for your Panama trip.</p>
			</div>
	
		   </div> 	
		   <form ref={form} className = 'contact-form' onSubmit={sendEmail}>
			<div className = 'form-elem'>
			 <input type="text" className="form-control" placeholder='Name'  name="user_name" id ="name"/>
		
			</div>
				 <div className = 'form-elem'>   
   		      <input type="email" className ="form-control" placeholder='E-mail'  name="user_email" id = "email" />
				 </div>	
		      <div className = 'form-elem'>	
			     <textarea rows ="2" className = "form-control" placeholder ='Message' name="message" id = "message"/>
		      </div>	
			<div className = 'form-element'>
			<button  type="submit"   className =' text-white submit-btn fw-3 fs-22'>Send</button>
	                 </div>
		    </form>
		</div>
	  </div>		
	
	
	)


	  }
export default Contact
