import React, { useState } from 'react';

const CompanyRegistration = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    companyName: '',
    companyEmail: '',
    employeeSize: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic with email and mobile verification
    console.log(form);
  };

  return (
    <div className="flex h-screen">

      {/* Right Side Registration Form */}
      <div
        className="w-[600px] h-[630px] gap-0 opacity-100 absolute"
        style={{ top: '190px', left: '1200px' }}  
      >
        <div className="p-10 rounded-lg shadow-md w-full h-full border border-gray-300 bg-white">
          <h2 className="text-3xl font-bold text-center mb-2">Sign Up</h2>
          <p className="  text-center mb-6">Lorem ipsum is simply a dummy text</p>

          <form onSubmit={handleSubmit}>
            
            <div className="mb-6"> 
              <div className="flex items-center border border-gray-300 rounded">
                <input
                  className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  bg-gray-200 text-2xl"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="👤  Name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center border border-gray-300 rounded">
                <input
                  className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  bg-gray-200 text-2xl"
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="📞  Phone no."
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center border border-gray-300 rounded">
                <input
                  className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  bg-gray-200 text-2xl"
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder=" 👤 Company Name"
                  value={form.companyName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center border border-gray-300 rounded">
                <input
                  className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  bg-gray-200 text-2xl"
                  id="companyEmail"
                  name="companyEmail"
                  type="email"
                  placeholder="✉️  Company Email"
                  value={form.companyEmail}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center border border-gray-300 rounded">
                <input
                  className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 text-2xl"
                  id="employeeSize"
                  name="employeeSize"
                  type="text"
                  placeholder="👥  Employee size"
                  value={form.employeeSize}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-center mb-4 ">
                    <p>By clicking on proceed you will acceppt our <br /> <a href=""><span className="text-blue-500">Terms</span> & <span className="text-blue-500">Condition</span></a></p>
            </div>
            <div className="flex items-center justify-between mb-10">
              
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  "
                type="submit"
              >
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistration;
