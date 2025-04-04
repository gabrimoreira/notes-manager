import React from "react";

import Navbar from "@/components/my-components/Navbar";
import FormLogin from "@/components/my-components/FormLogin";

function Login() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen w-screen  items-center justify-center bg-gray-900">
        <FormLogin />
      </div>
    </>
  );
}

export default Login;
