import React, { useState } from "react";

function VerificationForm() {
  const [otp, setOtp] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    //  (API call)
    console.log("Verifying OTP:", otp);
    
    setEmailVerified(true);
    setPhoneVerified(true);
  };

  return (
    <div className="flex h-screen">

    
    <div
      className="w-[600px] h-[430px] gap-0 opacity-100 absolute"
      style={{ top: '190px', left: '1200px' }}  
    >
      <div className="p-10 rounded-lg shadow-md w-full h-full border border-gray-300 bg-white">
        <h2 className="text-3xl font-bold text-center mb-2">Sign Up</h2>
        <p className="  text-center mb-6">Lorem ipsum is simply a dummy text</p>


    <form onSubmit={handleVerify}>

    <div className="mb-5">
              <div className="flex items-center border border-gray-300 rounded">
                <input
                  className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  bg-gray-200 text-2xl"
                  type="text"
                    placeholder="✉️  Email OTP"
                  value={otp}
                   onChange={handleOtpChange}
                />
              </div>
            </div>
        
            <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 mb-6"
      >
        Verify
      </button>


      {/* Phone Verification */}
      <div className="mb-5">
              <div className="flex items-center border border-gray-300 rounded">
                <input
                  className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  bg-gray-200 text-2xl"
                  type="text"
                    placeholder="📞  Mobile OTP"
                  value={otp}
                   onChange={handleOtpChange}
                />
              </div>
            </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
      >
        Verify
      </button>
    </form>

    </div>
      </div>
    </div>
  );
}

export default VerificationForm;
