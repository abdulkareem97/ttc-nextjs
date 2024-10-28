// Achievements.js
import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";

const Achievements = ({userDetail}) => {
// console.log(userDetail)

  const [generatedQRCode, setGeneratedQRCode] = useState(null);

  useEffect(() => {
    // Hardcoded values for vCard
    const name = "John Doe";
    const phoneNumber = "1234567890";

    // Create vCard data
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${userDetail.name}
TEL:${userDetail.contact}
EMAIL:${userDetail.email}
END:VCARD`;

    // Set the generated vCard data for QR code
    setGeneratedQRCode(vCardData);
  }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

  return (
  //   <div className="col-6">
  //   <div className="w-10 border-2 ">
  //     <h2>Contact QR Code:</h2>

  //     <QRCode value={generatedQRCode} size={200} />
  //   </div>
  // </div>
  <>
  <div>
      <h1 className="text-center">Scan to Save contact</h1>
    <div className="flex items-center justify-center bg-white border-2 h-96">
     <QRCode value={generatedQRCode} size={200} />

    </div>
  </div>
  </>
  );
};

export default Achievements;
