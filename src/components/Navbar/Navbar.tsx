import { ChangeEvent, useEffect, useState } from "react";
import Logo from "../../icons/Logo.tsx";
import SCNavbar from "./Navbar.styled.tsx";
import { Link, useLocation } from "wouter";
import SoySeven from "../../soyjaks/SoySeven.tsx";
import IconCross from "../../icons/IconCross.tsx";
import IconHamburger from "../../icons/IconHamburger.tsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();

  function handle_change(event: ChangeEvent<HTMLInputElement>) {
    setIsOpen(event.target.checked);
    setIsMounted(true);
  }

  useEffect(() => {
    setIsOpen(false);
  }, [location[0]]);

  useEffect(() => {
    if (isOpen) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "";

    return () => {
      document.body.style.overflowY = "";
    };
  }, [isOpen]);

  return (
    <SCNavbar>
      <Logo />
      <div
        className={`backdrop ${isOpen && "active"}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className={`links ${isMounted ? isOpen && "open" : "not-mounted"}`}>
        <SoySeven />
        <div className="base-links">
          <Link to="/fem_my_team/" className="fs-body-1 link-primary">
            home
          </Link>
          <Link to="/fem_my_team/about" className="fs-body-1 link-primary">
            about
          </Link>
        </div>
        <Link
          to="/fem_my_team/contact"
          className="button-primary light fs-body-1"
        >
          contact us
        </Link>
      </div>
      <label className="toggle-container">
        <input type="checkbox" checked={isOpen} onChange={handle_change} />
        {isOpen ? <IconCross /> : <IconHamburger />}
      </label>
    </SCNavbar>
  );
}
