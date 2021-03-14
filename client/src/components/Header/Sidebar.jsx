import { React, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Sidebar = () => {
  const [sidebar, setStidebar] = useState(false);

  const showSidebar = () => setStidebar(!sidebar);

  return (
    <div className={sidebar ? 'sidebar--active' : 'sidebar'} onClick={showSidebar}>
      <div className="sidebar__icon-container" onClick={showSidebar}>
        <FaTimes className="sidebar__close-icon" />
      </div>
      <div className="sidebar__container">
        <ul className="sidebar__menu">
          <Link
            className="sidebar__link"
            to="about"
            onClick={showSidebar}
          >
            About
          </Link>
          <Link
            className="sidebar__link"
            to="expiriences"
            onClick={showSidebar}
          >
            Expiriences
          </Link>
          <Link
            className="sidebar__link"
            to="abilities"
            onClick={showSidebar}
          >
            Abilities
          </Link>
          <Link
            className="sidebar__link"
            to="contact"
            onClick={showSidebar}
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
