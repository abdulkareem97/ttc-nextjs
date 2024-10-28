"use client"
import React from "react";


const Address = ({userDetail}) => {

  // const { userId } = useParams(); // Get the userId parameter from the URL

  // // Find the user details based on the userId
  // const userDetail = details.find(user => user.id === userId);

  // if (!userDetail) {
  //   return <div>User not found</div>;
  // }
// console.log(userDetail)

  return (
    <>
      { userDetail.address && <p className="open-sans-font custom-span-contact position-relative">
        {/* <i className="fa fa-map position-absolute"></i> */}
        <span className="d-block text-black">Address Point</span>
        <a href={userDetail.mapLink} className="text-black no-underline">{userDetail.address}</a>
      </p>}
      {/* End .custom-span-contact */}

      { userDetail.email && <p className="open-sans-font custom-span-contact position-relative">
        {/* <i className="fa fa-envelope-open position-absolute"></i> */}
        <span className="d-block">mail me</span>{" "}
        <a href={`mailto:${userDetail.email}`} className="text-black">{userDetail.email}</a><br/>
        <a href={`mailto:${userDetail.alternativeEmail}`} className="text-black">{userDetail.alternativeEmail}</a>
      </p>}

      {/* End .custom-span-contact */}

      { userDetail.contact && <p className="open-sans-font custom-span-contact position-relative">

        {/* <i className="fa fa-phone-square position-absolute"></i> */}
        <span className="d-block">call me</span>{" "}
        <a href={`Tel:${userDetail.contact}`} className="text-black">{userDetail.contact}</a><br/>
        <a href={`Tel:${userDetail.alternateContact}`} className="text-black">{userDetail.alternateContact}</a>
      </p>}
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
