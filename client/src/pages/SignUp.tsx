import React from "react";

import Navbar from "@/components/my-components/Navbar";
import FormSignUp from "@/components/my-components/FormSignUp";

function SignUp() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen w-screen  items-center justify-center bg-gray-900">
        <FormSignUp />
      </div>
    </>
  );
}

export default SignUp;
