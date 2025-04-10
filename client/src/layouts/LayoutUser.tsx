import { Outlet } from "react-router-dom";
import NavbarUser from "@/components/my-components/NavbarUser";
 function LayoutUser() {
  return (
    <div>
      <NavbarUser />
      <main className="bg-gray-900 h-screen w-screen"> 
        <Outlet />
      </main>
    </div>
  );
}


export default LayoutUser;