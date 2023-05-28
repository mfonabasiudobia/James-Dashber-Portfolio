import { Box, Image } from "@/Views/Atoms";
// import { MainMobileNavigation, MainSearch } from "@/Views/Organisms";
import Logo from "@/images/logo.png";
import React, { useState } from "react";
import { MainNavigationModel } from "./Models/MainNavigationModel";

const MainNavigation: React.FC<MainNavigationModel> = () => {
  // const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  // const handleToggleDrawerNavigation = () => setToggleDrawer((prev) => !prev);

  return (
    <Box className="bg-[#1F2937] flex items-center justify-between py-5 px-7">
      <Image alt="Logo" variant={"square"} src={Logo} fill={false} />
      <ul className="flex items-center space-x-5 text-white text-lg">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">CV</a>
        </li>
      </ul>
    </Box>
  );
};

export default MainNavigation;
