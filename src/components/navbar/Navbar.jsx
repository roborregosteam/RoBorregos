import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { RoBorregosLogo } from "./RoBorregosLogo.jsx";

const activeclassNametw = "text-white";
const inactiveclassNametw = "text-gray-400";

const links = [
  { name: "Home", href: "/", active: true },
  { name: "Members", href: "/" },
  { name: "About", href: "/" },
  { name: "Projects", href: "/" },
  { name: "Candidates", href: "/" },
  { name: "Gallery", href: "/" },
];

export default function NavbarLayout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const links = [
    { name: "Home", href: "/", className: "text-white", active: true },
    { name: "Members", href: "/test", className: "text-white" },
    { name: "About", href: "/", className: "text-white" },
    { name: "Projects", href: "/", className: "text-white" },
    { name: "Candidates", href: "/", className: "text-white" },
    { name: "Gallery", href: "/", className: "text-white" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-black">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <RoBorregosLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((item, index) => (
          <NavbarItem
            key={`${item.name}-${index}`}
            // {...(item.active ? { isActive: true } : { isActive: false })}
          >
            <Link
              color={item.color}
              className={item.active ? activeclassNametw : inactiveclassNametw}
              href={item.href}
              size="sm"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            className="bg-transparent text-white font-medium border-2 border-blue-500"
            variant="flat"
          >
            Support us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {links.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === links.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
