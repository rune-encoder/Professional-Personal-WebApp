import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import NavLinks from "./UI/NavLinks";

export default function Header(props) {
  const location = useLocation();

  const [isSlidingMenuOpen, setIsSlidingMenuOpen] = useState(false);

  const toggleSlidingMenu = () => {
    setIsSlidingMenuOpen(!isSlidingMenuOpen);
  };

  const isLinkDisabled = (link) => {
    if (location.pathname === "/" && link.path === "/Home") {
      return true;
    }
    return link.path === location.pathname;
  };

  const links = [
    { id: 1, path: "/About", text: "About" },
    { id: 2, path: "/Portfolio", text: "Portfolio" },
    { id: 3, path: "/Contact", text: "Contact" },
    { id: 4, path: "/Resume", text: "Resume" },
  ];

  return (
    <>
      <header>
        <Link to="/" className="logo">
          <h1>Karla Garza</h1>
        </Link>
        <Navbar
          links={links}
          isLinkDisabled={isLinkDisabled}
          toggleSlidingMenu={toggleSlidingMenu}
        />
      </header>
      <aside
        className={`sliding-menu-content ${
          isSlidingMenuOpen ? "sliding-menu-open" : ""
        }`}
      >
        <NavLinks links={links} isLinkDisabled={isLinkDisabled} />
      </aside>
    </>
  );
}
