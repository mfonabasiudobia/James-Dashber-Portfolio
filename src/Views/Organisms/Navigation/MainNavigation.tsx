import { Box, Image, IconButton, Text } from "@/Views/Atoms";
import { MainMobileNavigation } from "@/Views/Organisms";
import Logo from "@/images/logo.png";
import React, { useState } from "react";
import { MainNavigationModel } from "./Models/MainNavigationModel";

const MainNavigation: React.FC<MainNavigationModel> = () => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  const handleToggleDrawerNavigation = () => setToggleDrawer((prev) => !prev);

  return (
    <React.Fragment>
      <MainMobileNavigation
        isOpen={toggleDrawer}
        closeDrawer={handleToggleDrawerNavigation}
      />
      <Box className="bg-primary md:bg-[#1F2937] flex items-center justify-between py-5 px-7">
        <Box>
          <Image
            alt="Logo"
            variant={"square"}
            src={Logo}
            fill={false}
            className="hidden md:inline-block"
          />
          <Text
            variant="h1"
            color="success"
            text="james_dasher"
            className="md:hidden"
          />
        </Box>

        <IconButton
          name="AiOutlineMenu"
          type="ai"
          color="success"
          className="md:hidden"
          onClick={handleToggleDrawerNavigation}
        />

        <ul className="hidden md:flex items-center space-x-5 text-white text-lg">
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
    </React.Fragment>
  );
};

export default MainNavigation;
