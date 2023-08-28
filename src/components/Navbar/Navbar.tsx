import { ChangeEvent, useState } from "react";
import Logo from "../../icons/Logo.tsx";
import SCNavbar from "./Navbar.styled.tsx";
import { Link } from "wouter";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handle_change(event: ChangeEvent<HTMLInputElement>) {
    setIsOpen(event.target.checked);
  }

  return (
    <SCNavbar>
      <Logo />
      <div className="links">
        <div className={`sidebar ${isOpen && "open"}`}>
          <Link to="/fem_my_team/">home</Link>
          <Link to="/fem_my_team/about">about</Link>
          <input type="checkbox" checked={isOpen} onChange={handle_change} />
        </div>
        <Link to="/fem_my_team/contact">contact us</Link>
      </div>
    </SCNavbar>
  );
}
