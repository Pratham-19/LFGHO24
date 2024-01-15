"use client";
import { ConnectKitButton } from "connectkit";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <ConnectKitButton showAvatar showBalance />
    </nav>
  );
};

export default Navbar;
