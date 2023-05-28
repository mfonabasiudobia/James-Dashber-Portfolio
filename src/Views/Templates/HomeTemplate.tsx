import React from "react";
import { HomeTemplateModel } from "./Models/HomeTemplateModel";

const HomeTemplate: React.FC<HomeTemplateModel> = ({
  navigation,
  hero,
  children,
  about,
  footer,
}) => {
  return (
    <React.Fragment>
      {navigation}
      {hero}
      {about}
      {children}
      {footer}
    </React.Fragment>
  );
};

export default HomeTemplate;
