"use client"

import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Index from "../about/index";
import Hero from "../hero/Hero";
import Address from "../Address";
import Portfolio from "../portfolio/Portfolio";
// import Blog from "../../components/blog/Blog";
import Contact from "../Contact";
import Social from "../Social";
import SwitchDark from '../switch/SwitchDark'
import axios from 'axios'





const menuItem = [
  // { icon: "fa-home", menuName: "Home" },
  // { icon: "fa-user", menuName: "About" },
  // { icon: "fa-briefcase", menuName: "Portfolio" },
  // { icon: "fa-photo", menuName: "Gallery" },
  // { icon: "fa-envelope-open", menuName: "Contact" },
  // { icon: "fa-comments", menuName: "Blog" },
];


const HomeDark = ({userDetail,client}) => {
  // const [detail, setDetail] = useState()

  // Find the user details based on the userId
  // useEffect(() => {
  //   const userDetail = details.find(user => user.id === userId);
  //   setDetail(userDetail)
  // }, [])
  // document.querySelector("body").classList.remove("rtl");
  // console.log(userDetail)

  const [hitCount, setHitCount] = useState(0)
   // Set your page name here

  useEffect(() => {
    const fetchHitCount = async () => {
      try {
        const response = await axios.get(`https://www.taptocontact.com/api/pageHit?pageName=${client}`)
        setHitCount(response.data.hitCount)
        // console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchHitCount()
  }, [client])

  const handleDownload = () => {
    const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN:${userDetail.name}
TEL:${userDetail.contact}
END:VCARD`;

    const blob = new Blob([vcfContent], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <>

<div className="relative  text-yellow-500  flex justify-center mt-3">
    <span className="p-1 rounded-lg" style={{background:'black'} }>Views: {hitCount}</span>
</div>

 <div style={{ position: 'fixed', bottom: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4px', background: '#333', color: '#fff',width:'100%', zIndex:'1000'  }}>
      <a href={`https://wa.me/${userDetail.contact}`} style={{ background: '#4CAF50', padding: '8px', textDecoration: 'none', color: 'white', borderRadius: '4px', marginRight: '4px' }}>WhatsApp</a>
      <div id="downloadDiv" style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={handleDownload} style={{ background: '#2196F3', padding: '8px', textDecoration: 'none', color: '#fff', borderRadius: '4px' }}>Save Contact</button>
        <a href="https://www.taptocontact.com/products" style={{ background: '#FFCB08', padding: '8px', textDecoration: 'none', color: 'white', borderRadius: '4px', marginRight: '4px',marginLeft:'4px' }} target="_blank">Buy Now</a>
      </div>
    </div>
    <div className="yellow">
      <SwitchDark />
      {/* End Switcher */}
      <Tabs>
        <div className="header">
          {/* <TabList className=" icon-menu revealator-slideup revealator-once revealator-delay1"> */}
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          {/* </TabList> */}
        </div>
        {/* End Menu Content */}

        {/* <div className="tab-panel_list"> */}
          {/* Hero Content Starts */}
          <div className="home ">
            {/* <div
              className="h-full p-0 container-fluid main-container container-home "
              data-aos="fade-up"
              data-aos-duration="1200"
            > */}
              {/* <div className="color-block d-none d-lg-block"></div> */}
              <Hero userDetail={userDetail} />
            {/* </div> */}
          </div>
          {/* Hero Content Ends */}

          {/* About Content Starts */}
          {/* <TabPanel className="about"> */}
            <div data-aos="fade-up" data-aos-duration="1200">

              {/* End title */}
              <Index userDetail={userDetail} />
            </div>
          {/* </TabPanel> */}
          {/* About Content Ends */}

          {/* Portfolio Content Starts */}
          {/* <TabPanel className="portfolio professional"> */}
            <div
              className="text-left title-section text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>Gallery</span>
              </h1>
              <span className="title-bg">works</span>
            </div>
            {/* End title */}
            <Portfolio userDetail={userDetail} />
          {/* </TabPanel> */}
          {/* Portfolio Content Ends */}

          {/* Contact Content Starts */}
          {/* <TabPanel className="contact"> */}
            <div
              className="text-left title-section text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                get in <span>touch</span>
              </h1>
              <span className="title-bg">contact</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                {/*  Left Side Starts */}
                <div className="col-12 col-lg-4">
                  <h3 className="pb-3 mb-0 text-uppercase custom-title ft-wt-600">
                    Don't be shy !
                  </h3>
                  <p className="mb-4 open-sans-font">
                    Feel free to get in touch with me. I am always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your vision.
                  </p>
                  <Address userDetail={userDetail} />
                  {/* End Address */}

                  <Social userDetail={userDetail}/>
                  {/* End Social */}
                </div>
                {/* Left Side Ends */}

                {/*  Contact Form Starts  */}
                <div className="col-12 col-lg-8">
                  <Contact userDetail={userDetail}/>
                </div>
                {/*  Contact Form Ends */}
              </div>
            </div>
            {/* End .container */}
          {/* </TabPanel> */}
          {/* Contact Content Ends */}

          {/* Blog Content Starts */}
          {/* <TabPanel className="blog">
            <div
              className="text-left title-section text-sm-center "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>blog</span>
              </h1>
              <span className="title-bg">posts</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >

              <div className="row pb-50">
                <Blog use />
              </div>

            </div>
          </TabPanel> */}
          {/* Blog Content Ends */}
        {/* </div> */}
      </Tabs>
    </div>
    </>
  );
};

export default HomeDark;
