"use client"
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Modal from "./modal/Modal";
// import { details } from "../Data";
// import { useParams } from "react-router-dom";



const Portfolio = ({userDetail}) => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };




  // const { userId } = useParams(); // Get the userId parameter from the URL

  // // Find the user details based on the userId
  // const userDetail = details.find(user => user.id === userId);

  if (!userDetail) {
    return <div>User not found</div>;
  }

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>ALL</Tab>

          </TabList>

          <div className="container">
            <TabPanel>
              <div className="tab-container">
                {userDetail.gallery.map((item) => {
                  // const { id, type, delayAnimation } = item;

                  return (
                    <div
                      key={item}
                      data-aos="fade-right"
                      data-aos-delay={200}
                    >
                      <div
                        className="tab-content"
                        // onClick={() => handleModal(id)}
                      >
                        <img src={item} alt="portfolio project demo" className="w-auto"/>
                        {/* <h1>{details.fullname}</h1> */}
                        <h3>
                          <span className="conent-title">{'View Photo'}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>


          </div>
        </Tabs>
      </div>
      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}{" "}
    </>
  );
};

export default Portfolio;
