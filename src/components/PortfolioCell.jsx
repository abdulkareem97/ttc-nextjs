"use client"
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import HomeDark from "./Views/HomeDark";// Import MetaTags


 const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="border-t-8 border-yellow-500 border-solid rounded-full h-16 w-16 animate-spin"></div>
  </div>
)

 const Empty = () => <div>Empty</div>

 const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const PortfolioCell = ({ id, clientInfo }) => {

  // const pageTitle = clientInfo.details.name;
  // const pageDescription = ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eaque hic quibusdam? Magni at voluptatem maxime? Esse iure odio odit magni reiciendis consequuntur placeat atque, asperiores, qu';
  // const pageImage = clientInfo.details.profileImage; // Change to the new image URL
  // const pageUrl = 'https://www.taptocontact.com/' + 'portfolio/' + clientInfo.client; // Change to the new page URL


  useEffect(() => {
    // console.log(clientInfo.details)
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>


      {/* <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="84, 110, 122"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      /> */}
      <HomeDark userDetail={clientInfo.details} client={id} />
      <ScrollToTop />
    </>
  )
}
