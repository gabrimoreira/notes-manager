import React from "react";
import { Link } from "react-router-dom";
import { NotebookPen } from "lucide-react";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50 p-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <NotebookPen size={24} fill="#ff8904" className="text-white" />

          <Link to="/">
            {" "}
            <span className="text-2xl text-gray-200">NotesManager</span>
          </Link>
        </div>

        <div className="flex gap-3">
          <Button asChild variant="ghost">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
