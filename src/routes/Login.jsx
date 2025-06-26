import { useState } from "react";
import AuthForm from "../components/AuthForm";
import Header from "../components/Header";

const Login = () => {
    const [formType,setFormType] = useState('login');
  return (
    <div className="h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg')] bg-cover relative">
      <div className="bg-black h-screen w-full absolute top-0 left-0 opacity-75 z-0"></div>
      <div className="relative z-10">
        <Header />
        {/* Form Container */}
        <AuthForm type={formType} setFormType={setFormType}/>
      </div>
    </div>
  );
};

export default Login;
