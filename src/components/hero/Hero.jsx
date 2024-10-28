"use client"

import React, { useState } from 'react'
// import { useParams } from 'react-router-dom';
import Modal from 'react-modal'
// import heroImg from "../../assets/img/hero/dark.jpg";
import { TbWorldWww } from "react-icons/tb";

// import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import cancelImg from '../assets/img/cancel.svg'
import Index from '../about/index'
import logo from './Logo-2 PNG (1).png'
import { FaMapMarkerAlt } from 'react-icons/fa'

const heroContent = {
  // heroImage: heroImg,
  // heroMobileImage: heroImgMobile,
  heroTitleName: 'steve milner',
  heroDesignation: 'web designer',
  heroDescriptions: `I'm a Tunisian based web designer & front‑end developer focused on
  crafting clean & user‑friendly experiences, I am passionate about
  building excellent software that improves the lives of those
  around me.`,
  heroBtn: 'more about me',
}

const Hero = ({ userDetail }) => {
  const [isOpen, setIsOpen] = useState(false)
  function toggleModalOne() {
    setIsOpen(!isOpen)
  }

  //   const animationStyles = `
  //   @keyframes socialIconAnimation {
  //     0% {
  //       transform: translateY(0);
  //       opacity: 0.5;
  //     }
  //     50% {
  //       transform: translateY(-10px);
  //       opacity: 1;
  //     }
  //     100% {
  //       transform: translateY(0);
  //       opacity: 0.5;
  //     }
  //   }

  //   .social.list-unstyled li a {
  //     animation: socialIconAnimation 1s infinite;
  //     }
  //   `;
  // const { userId } = useParams(); // Get the userId parameter from the URL

  // // Find the user details based on the userId
  // const userDetail = details.find(user => user.id === userId);

  ;<style>
    {`
        .fa-facebook:hover {
          background-color: red;
        }
      `}
  </style>
  return (
    <>
      <div className="ml-2 mt-3 flex justify-center">
        <div
          className="col-lg-4 bg  d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              userDetail.profileImage ? userDetail.profileImage : logo
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 home-details text-lg-start text-center">
          <div>
            <img
              src={userDetail.profileImage ? userDetail.profileImage : logo}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              // alt={logo}
            />
            <h1 className="poppins-font text-2xl">
              {userDetail.name}
              <span className="text-2xl">{userDetail.companyName}</span>
              <span className="text-2xl">{userDetail.designation}</span>
            </h1>
            <ul className="social list-unstyled ">
              <li>
                {userDetail.facebook && (
                  <a
                    href={userDetail.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa fa-facebook"
                      style={{
                        margin: '12px',
                        border: '3px solid #3b5998',
                        borderRadius: '10px',
                        padding: '15px',
                        color: '#3b5998',
                        fontSize: '30px',
                        height: '60px',
                        width: '60px',
                      }}
                    ></i>
                    <style>
                      {`
            .fa-facebook:hover {
              background-color: white;
              transition:0.5s;
            }
          `}
                    </style>
                  </a>
                )}

                {userDetail.instagram && (
                  <a
                    href={userDetail.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa fa-instagram"
                      style={{
                        margin: '12px',
                        color: '#bc2a8d',
                        border: '3px solid #bc2a8d',
                        borderRadius: '10px',
                        padding: '15px',
                        fontSize: '30px',
                        height: '60px',
                        width: '60px',
                      }}
                    ></i>
                    <style>
                      {`
            .fa-instagram:hover {
              background-color: white;
              transition:0.5s;
            }
          `}
                    </style>
                  </a>
                )}

                {userDetail.linkedin && (
                  <a
                    href={userDetail.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa fa-linkedin"
                      style={{
                        margin: '12px',
                        color: '#0077b5',
                        border: '3px solid #0077b5',
                        borderRadius: '10px',
                        padding: '15px',
                        fontSize: '30px',
                        height: '60px',
                        width: '60px',
                      }}
                    ></i>
                    <style>
                      {`
            .fa-linkedin:hover {
              background-color: white;
              transition:0.5s;
            }
          `}
                    </style>
                  </a>
                )}

                {userDetail.twitter && (
                  <a href={userDetail.twitter} target="_blank" rel="noreferrer">
                    <i
                      className="fa fa-twitter"
                      style={{
                        margin: '12px',
                        color: '#1da1f2',
                        border: '3px solid #1da1f2',
                        borderRadius: '10px',
                        padding: '15px',
                        fontSize: '30px',
                        height: '60px',
                        width: '60px',
                      }}
                    ></i>
                    <style>
                      {`
            .fa-twitter:hover {
              background-color: white;
              transition:0.5s;
            }
          `}
                    </style>
                  </a>
                )}
                <br />

                {userDetail.telegram && (
                  <a
                    href={userDetail.telegram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa fa-telegram"
                      style={{
                        margin: '12px',
                        color: '#0088cc',
                        border: '3px solid #0088cc',
                        borderRadius: '10px',
                        padding: '15px',
                        fontSize: '30px',
                        height: '60px',
                        width: '60px',
                      }}
                    ></i>
                    <style>
                      {`
            .fa-telegram:hover {
              background-color: white;
              transition:0.5s;
            }
          `}
                    </style>
                  </a>
                )}

                {userDetail.youtube && (
                  <a href={userDetail.youtube} target="_blank" rel="noreferrer">
                    <i
                      className="fa fa-youtube"
                      style={{
                        margin: '12px',
                        color: '#c4302b',
                        border: '3px solid #c4302b',
                        borderRadius: '10px',
                        padding: '15px',
                        fontSize: '30px',
                        height: '60px',
                        width: '60px',
                      }}
                    ></i>
                    <style>
                      {`
            .fa-youtube:hover {
              background-color: white;
              transition:0.5s;
            }
          `}
                    </style>
                  </a>
                )}

                {userDetail.contact && (
                  <a href={`tel:${userDetail.contact}`}>
                    <i
                      className="fa fa-phone"
                      style={{
                        margin: '12px',
                        color: '#25d366',
                        border: '3px solid #25d366',
                        borderRadius: '10px',
                        padding: '15px',
                        fontSize: '30px',
                        height: '60px',
                        width: '60px',
                      }}
                    ></i>
                    <style>
                      {`
            .fa-phone:hover {
              background-color: white;
              transition:0.5s;
            }
          `}
                    </style>
                  </a>
                )}

                {userDetail.contact && (
                  <a
                    href={`https://wa.me/${userDetail.contact}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa fa-whatsapp"
                      style={{
                        margin: '12px',
                        color: '#25d366',
                        border: '3px solid #25d366',
                        borderRadius: '10px',
                        padding: '15px',
                        fontSize: '30px',
                        height: '60px',
                        width: '60px',
                      }}
                    ></i>
                    <style>
                      {`
            .fa-whatsapp:hover {
              background-color: white;
              transition:0.5s;
            }
          `}
                    </style>
                  </a>
                )}
                <br />
                {userDetail.mapLink && (
                  <a href={userDetail.mapLink} target="_blank" rel="noreferrer">
                    <i
                      className="fa fa-map-marker"
                      style={{
                        margin: '12px',
                        color: '#c4302b',
                        border: '3px solid #c4302b',
                        borderRadius: '10px',
                        padding: '15px',
                        fontSize: '30px',
                        height: '60px',
                        width: '60px',
                      }}
                    ></i>
                    <style>
                      {`
            .fa-map-marker:hover {
              background-color: white;
              transition:0.5s;
            }
          `}
                    </style>
                  </a>
                )}
                {userDetail.grl && (
                  <a href={userDetail.grl} target="_blank" rel="noreferrer">
                    <i
                      className="fa fa-google"
                      style={{
                        margin: '12px',
                        color: '#c4302b',
                        border: '3px solid #c4302b',
                        borderRadius: '10px',
                        padding: '15px',
                        fontSize: '30px',
                        height: '60px',
                        width: '60px',
                      }}
                    ></i>
                    <style>
                      {`
            .fa-google:hover {
              background-color: white;
              transition:0.5s;
            }
          `}
                    </style>
                  </a>
                )}
                {userDetail.websiteLink && (
                  <a href={userDetail.websiteLink} target="_blank" rel="noreferrer">
                    <i
                      className="fa fa-globe"
                      style={{
                        margin: '12px',
                        color: '#c4302b',
                        border: '3px solid #c4302b',
                        borderRadius: '10px',
                        padding: '15px',
                        fontSize: '30px',
                        height: '60px',
                        width: '60px',
                      }}
                    ></i>
                    <style>
                      {`
            .fa-globe:hover {
              background-color: white;
              transition:0.5s;
            }
          `}
                    </style>
                  </a>
                )}

                {/* Add other social icons or elements here */}
              </li>
            </ul>

            {/* <button className="button" onClick={toggleModalOne}>
            {/* <button className="button" > */}
            {/* <span className="button-text">{heroContent.heroBtn}</span> */}
            {/* More about me */}
            {/* <span className="button-icon fa fa-arrow-right"></span>
            </button> */}
            <div className="margin"></div>
          </div>
        </div>
      </div>
      <div className="title-section text-sm-center text-left p-3">
        <h1>
          ABOUT <span>ME</span>
        </h1>
        {/* <span className="title-bg">Resume</span> */}
      </div>
      {/* <p className="open-sans-font m-4 mt-0 indent-32">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userDetail.about}</p> */}
       <div className="open-sans-font m-4 mt-0 indent-32">
        <div dangerouslySetInnerHTML={{ __html: userDetail.about }} ></div>
      </div>
      <br />
      <br />
      <br />
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal hero dark"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-sm-center text-left">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                {/* <span className="title-bg">Resume</span> */}
              </div>
              {/* End title */}
              <Index userDetail={userDetail} />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  )
}

export default Hero
