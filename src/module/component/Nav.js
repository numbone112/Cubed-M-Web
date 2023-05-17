/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";



import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "../../css/main.css";
export const NavSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "hidden" : "block"
        }`}
      />

      

      <div>
        <button
          className="btn-menu"
          onClick={() => {
            setIsSidebarOpen(false)
            console.log(isSidebarOpen)
          }}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            navigate(itemId)
          }}
          items={[
            {
              title: "Home",
              itemId: "/home",
              // Optional
              elemBefore: () => <Icon name="coffee" />
            },
            {
              title: "About",
              itemId: "/about",
              elemBefore: () => <Icon name="user" />,
            //   subNav: [
            //     {
            //       title: "Projects",
            //       itemId: "/about/projects",
            //       // Optional
            //       elemBefore: () => <Icon name="cloud-snow" />
            //     },
            //     {
            //       title: "Members",
            //       itemId: "/about/members",
            //       elemBefore: () => <Icon name="coffee" />
            //     }
            //   ]
            },
           
          ]}
        />

        {/* <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "Settings",
                itemId: "/settings",
                elemBefore: () => <Icon name="activity" />
              }
            ]}
            onSelect={({ itemId }) => {
            //   history.push(itemId);
            }}
          />
        </div> */}
      </div>
    </React.Fragment>
  );
};
