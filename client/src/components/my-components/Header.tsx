import React from "react";
import MyCarousel from "./MyCarousel";

function Header() {
  return (
    <main className="flex bg-gray-900 min-h-screen w-screen text-4xl items-center justify-center ">
      <header className="text-gray-200 w-1/2">
        <h1>
          Gerencie suas Notas da melhor Forma <span className="text-9xl text-orange-400"> .</span>
        </h1>
      </header>
        <MyCarousel/>

    </main>
  );
}

export default Header;
