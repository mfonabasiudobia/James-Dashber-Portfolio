import React from "react";
import { HomeTemplateModel } from "./Models/HomeTemplateModel";

const HomeTemplate: React.FC<HomeTemplateModel> = ({
  navigation,
  hero,
  about,
  footer,
}) => {
  return (
    <React.Fragment>
      {navigation}
      {hero}
      {about}
      {footer}
    </React.Fragment>
  );
};

export default HomeTemplate;
