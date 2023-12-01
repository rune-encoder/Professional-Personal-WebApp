import NavLinks from "./UI/NavLinks";

import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar({ links, isLinkDisabled, toggleSlidingMenu }) {
  return (
    <>
      <div className="nav-group">
        <nav>
          <NavLinks links={links} isLinkDisabled={isLinkDisabled} />
        </nav>
        <div className="nav-utils">
          <RxHamburgerMenu className="sliding-menu-icon" onClick={() => toggleSlidingMenu()}/>
        </div>
      </div>
    </>
  );
}
