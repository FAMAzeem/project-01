//import React from 'react'
import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';




function Contact() {

  const history=useHistory()

  const [msg,setMsg]=useState({
    name:"",
    email:"",
    message:""
  });

  const handleChange=(event) =>{
    let name =event.target.name;
    let value=event.target.value;

    setMsg({...msg,[name]:value});
  }


  const handleSubmit=async(event)=>{
    event.preventDefault();

    const{name,email, message} =msg;

    try{
      const res=await fetch('/message',{
        method:"POST",
        headers:{
          "Content-type" :"application/json"
        },
        body :JSON.stringify({
          name,email,message
        })
      })
      if(res.status === 400 || !res){
        window.alert("Message Not Sent. Try Again Later")
      }else{
        window.alert("Message Sent");
        setMsg({
          name:"",
          email:"",
          message:""
        })
       
      }

    }catch(error){
       console.log(error); 
    }
  } 

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
            <div className="row mb-5">
                <div className="col-12">
                <h3 className="fs-5 text-center mb-0">
                     Contact Us
                    </h3>
                    <h1 className="display-6 text-center mb-5">
                        Have Some <b>Quetions? </b>Services
                    </h1>
                    <hr className='w-25 mx-auto'/> 
                </div>
            </div>
 
            <div className="row">
                <div className="col-md-6">
                    <img src='/assets/contact5.jpg' className='w-75 '/>
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} method='POST'>
                    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Your Name</label>
  <input type="name" class="form-control" id="name" placeholder="Muhammed Azeem" name="name" value={msg.name} onChange={handleChange} />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Email address</label>
  <input class="form-control" id="exampleFormControlTextarea1"  placeholder="name@example.com" name="email" value={msg.email} onChange={handleChange}/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Your Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1"  placeholder="" rows="5" name="message" value={msg.message} onChange={handleChange}></textarea>

</div>

<button type='submit' className='btn btn-outline-primary'>Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
