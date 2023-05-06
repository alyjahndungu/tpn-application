import React from "react";

const menuItems = [
  { title: "Dashboard", link: "/" },
  { title: "Invoices", link: "/" },
  { title: "Taxation", link: "/" },
  {
    title: "Users",
    subItems: ["Admins", "Moderators", "Users", "System", "Cloud", "Database"],
  },
  { title: "Pathologists", link: "" },
  { title: "Reports", link: "" },
  { title: "Analysis", link: "" },
  { title: "Partnerships", link: "" },
  { title: "Metrics", link: "" },

  {
    title: "Profile",
    subItems: [
      "Edit profile",
      "Change Password",
      "Delete account",
      "Deactivate",
    ],
  },
  { title: "About Us", link: "/about-us" },
  { title: "Notifications", link: "/notifications" },
];

type MenuItem = {
  title: string;
  link?: string;
  icon?: any;
  subItems?: string[];
};

function MenuItemComponent({ menu }: { menu: MenuItem }) {
  const [expanded, setExpanded] = React.useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <li>
        <a
          className="active flex rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
          href={menu.link}
        >
          <span className="select-none flex ">
            <span className="mt-1 hover:bg-gray-600">{menu.icon}</span>{" "}
            <span className="ml-2">{menu.title}</span>
            {menu.subItems && (
              <span className="absolute mb-4 flex right-2">
                <button
                  className="group rounded-2xl h-8 w-6 font-bold text-lg text-white-300 relative overflow-hidden"
                  onClick={toggleExpanded}
                >
                  {expanded ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 current-fill"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-white-800"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </span>
            )}
          </span>
        </a>

        {menu.subItems && expanded && (
          <ul className="mb-8  text-sm font-medium">
            {menu.subItems.map((subItem: any, index: React.Key) => (
              <li key={index}>
                <a
                  className="active flex rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href=""
                >
                  <span className="select-none ml-4">{subItem}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    </div>
  );
}

function AdminSidebar() {
  return (
    <aside
      id="containerSidebar"
      className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-gray-800 p-2"
    >
      <div className="navbar-menu flex rounded-md relative z-40">
        <nav>
          <ul className="mb-8 text-sm font-bold">
            {menuItems.map((item, index) => (
              <MenuItemComponent key={index} menu={item} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default AdminSidebar;
