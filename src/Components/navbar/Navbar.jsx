import React, { useState } from "react";
import { AiOutlineBook, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import "./navbar.css";
import { VscTools } from "react-icons/vsc";

const Navbar = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a href="#" className={active ? "#" : ""}>
        {/* Home */}
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={active ? "#about" : ""}
        onClick={() => setActive("#about")}
      >
        {/* About */}
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        className={active ? "#projects" : ""}
        onClick={() => setActive("#projects")}
      >
        {/* Skills */}
        <VscTools />
      </a>
      <a
        href="#projects"
        className={active ? "#projects" : ""}
        onClick={() => setActive("#projects")}
      >
        {/* Project */}
        <BiBook />
      </a>

      <a
        href="#contact "
        className={active ? "#contact" : ""}
        onClick={() => setActive("#contact")}
      >
        {/* Contact */}
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;
