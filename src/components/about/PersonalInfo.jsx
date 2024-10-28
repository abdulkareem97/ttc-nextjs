import React from "react";


const personalInfoContent = [
  { meta: "first name", metaInfo: "Steve" },
  { meta: "last name", metaInfo: "Milner" },
  { meta: "Age", metaInfo: "27 Years" },
  { meta: "Nationality", metaInfo: "Tunisian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Tunis" },
  { meta: "phone", metaInfo: "+21621184010" },
  { meta: "Email", metaInfo: "you@mail.com" },
  { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "langages", metaInfo: "French, English" },
];

const PersonalInfo = ({userDetail}) => {
  // const { userId } = useParams(); // Get the userId parameter from the URL

  // // Find the user details based on the userId
  // const userDetail = details.find(user => user.id === userId);

  if (!userDetail) {
    return <div>User not found</div>;
  }
  return (
    <ul className=" list-unstyled open-sans-font modify-div">
    { userDetail.name && <li className='modify '>
      <span className="modify-title font-bold">Full Name: </span>
      <span className="desc">
        {userDetail.name}
      </span><br/>
    </li>}



  { userDetail.contact &&  <li className='modify '>
      <span className="modify-title font-bold ">Contact: </span>
      <span className="desc">
        {userDetail.contact}
      </span><br/>
    </li>}




   { userDetail.companyName && <li className='modify '>
      <span className="modify-title font-bold">Company Name: </span>
      <span className="desc ">
        {userDetail.companyName}
      </span><br/>
    </li>}




   { userDetail.email && <li className='modify '>
      <span className="modify-title font-bold">Email: </span>
      <span className="desc">
        {userDetail.email}
      </span><br/>
    </li>}




   { userDetail.address && <li className='modify '>
      <span className="modify-title font-bold">Address: </span>
      <span className="desc">
        {userDetail.address}
      </span><br/>
    </li>}




  { userDetail.pinCode && <li className='modify'>
      <span className="modify-title font-bold">Pin Code: </span>
      <span className="desc">
        {userDetail.pinCode}
      </span><br/>
    </li>}


  </ul>

  );
};

export default PersonalInfo;
