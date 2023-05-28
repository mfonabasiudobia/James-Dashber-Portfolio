import { ReactNode } from "react";

export interface HomeTemplateModel {
  children?: ReactNode;
  hero: ReactNode;
  navigation : ReactNode;
  about: ReactNode;
  portfolio : ReactNode;
  footer: ReactNode;
};