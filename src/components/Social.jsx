"use client"
import React from "react";




// const SocialShare = [
//   {
//     iconName: "fa fa-facebook",
//     link: "https://www.facebook.com/",
//   },
//   { iconName: "fa fa-twitter", link: "https://twitter.com/" },
//   {
//     iconName: "fa fa-youtube",
//     link: "https://www.youtube.com/",
//   },
//   { iconName: "fa fa-dribbble", link: "https://dribbble.com/" },
// ];

const Social = ({userDetail}) => {

  // const { userId } = useParams(); // Get the userId parameter from the URL

  // // Find the user details based on the userId
  // const userDetail = details.find(user => user.id === userId);

  if (!userDetail) {
    return <div>User not found</div>;
  }

  return (
    <></>
    // <ul className="pt-1 mb-5 social list-unstyled">

    //    { userDetail.facebook && <li>
    //       <a href={userDetail.facebook} target="_blank" rel="noreferrer">
    //         <i className="fa fa-facebook"></i>
    //       </a>
    //     </li>}



    // { userDetail.instagram &&    <li>
    //       <a href={userDetail.instagram} target="_blank" rel="noreferrer">
    //         <i className="fa fa-instagram"></i>
    //       </a>
    //     </li>}




    //   { userDetail.linkedin &&  <li>
    //       <a href={userDetail.linkedin} target="_blank" rel="noreferrer">
    //         <i className="fa fa-linkedin"></i>
    //       </a>
    //     </li>}



    //    {userDetail.twitter && <li>
    //       <a href={userDetail.twitter} target="_blank" rel="noreferrer">
    //         <i className="fa fa-twitter"></i>
    //       </a>
    //     </li>}<br/><br/>




    //   { userDetail.telegram && <li>
    //       <a href={userDetail.telegram} target="_blank" rel="noreferrer">
    //         <i className="fa fa-telegram"></i>
    //       </a>
    //     </li>}



    //   { userDetail.youtube &&  <li>
    //       <a href={userDetail.youtube} target="_blank" rel="noreferrer">
    //         <i className="fa fa-youtube"></i>
    //       </a>
    //     </li>}
    //   { userDetail.contact &&  <li>
    //       <a href={`tel:${userDetail.contact}`} target="_blank" rel="noreferrer">
    //         <i className="fa fa-phone"></i>
    //       </a>
    //     </li>}
    //   { userDetail.contact &&  <li>
    //       <a href={`https://wa.me/${userDetail.contact}`} target="_blank" rel="noreferrer">
    //         <i className="fa fa-whatsapp"></i>
    //       </a>
    //     </li>}<br/><br/>
    //   { userDetail.mapLink &&  <li>
    //       <a href={userDetail.mapLink} target="_blank" rel="noreferrer">
    //         <i className="fa fa-map-marker"></i>
    //       </a>
    //     </li>}
    //   { userDetail.grl &&  <li>
    //       <a href={userDetail.grl} target="_blank" rel="noreferrer">
    //         <i className="fa fa-google"></i>
    //       </a>
    //     </li>}
    //   {/* { userDetail.updId &&  <li>
    //       <a href={`upi://pay?pa=${userDetail.updId}`} target="_blank" rel="noreferrer">
    //         <i className="fa fa-money"></i>
    //       </a>
    //     </li>} */}

    // </ul>
  );
};

export default Social;
