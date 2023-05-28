import React from "react";
import { HomeTemplateModel } from "./Models/HomeTemplateModel";

const HomeTemplate: React.FC<HomeTemplateModel> = ({
  navigation,
  hero,
  about,
  portfolio,
  footer,
}) => {
  return (
    <React.Fragment>
      {navigation}
      {hero}
      {about}
      {portfolio}
      {footer}
    </React.Fragment>
  );
};

export default HomeTemplate;
