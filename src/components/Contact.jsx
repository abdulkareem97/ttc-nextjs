"use client"
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";





const Contact = ({userDetail}) => {
  const form = useRef();
  const [subject,setSubject] = useState('')
  const [message,setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n4mkhz9",
        "template_ugoztxr",
        form.current,
        "user_vYmDSd9PwIuRXUQEDjYwN"
      )
      .then(
        (result) => {
          // toast.success("Message Sent Successfully!", {
          //   position: "top-right",
          //   autoClose: 2000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
          document.getElementById("myForm").reset();
        },
        (error) => {
          // toast.error("Ops Message Not Sent!", {
          //   position: "top-right",
          //   autoClose: 2000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
        }
      );
  };



  // const { userId } = useParams(); // Get the userId parameter from the URL

  // // Find the user details based on the userId
  // const userDetail = details.find(user => user.id === userId);

  if (!userDetail) {
    return <div>User not found</div>;
  }






  return (
    <>
      <form id="myForm" className="contactform" action={`"mailto:${userDetail.email}"`}>
        <div className="row">
          {/* <div className="col-12 col-md-6">
            <div className="form-group">
              <input type="text" name="name" placeholder="YOUR NAME" required />
            </div>
          </div> */}
          {/* End .col */}

          {/* <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="YOUR EMAIL"
                required
              />
            </div>
          </div> */}
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
                required
                className="w-full rounded-lg border-black border-1 h-14"
                value={subject}
                onChange={(e)=>setSubject(e.target.value)}
              /><br/><br/>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                required
                value={message}
                className="w-full h-72 rounded-lg border-black border-1"
                onChange={(e)=>setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <a type="submit" className="button" href={`mailto:${userDetail.email}?subject=${subject}&body=${message}`}
            // onClick={
            //   ()=>{
            //     setSubject('')
            //     setMessage('')
            //   }
            // }
            >
              <span className="button-text">Send Message</span>
              {/* <span className="button-icon fa fa-send"></span> */}
            </a>
          </div>

          <div style={{height:'2cm'}}>

          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default Contact;
