import { ReactNode, ReactElement } from "react";
import { StyleModel } from "@/Views/Atoms/Hooks/Models";

export interface BoxModel extends StyleModel {
  children?: ReactNode | ReactElement;
  variant?: "div" | "nav" | "header" | "footer" | "section" | "main";
}