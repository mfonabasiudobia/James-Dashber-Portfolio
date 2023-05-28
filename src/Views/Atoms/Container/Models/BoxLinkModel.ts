import { ReactNode, ReactElement } from "react";
import { StyleModel } from "@/Views/Atoms/Hooks/Models";

export interface BoxLinkModel extends StyleModel {
  children?: ReactNode | ReactElement;
  href: string;
}