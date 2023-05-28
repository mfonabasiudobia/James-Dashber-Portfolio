import { ReactNode } from "react";
import { StyleModel } from "@/Views/Atoms/Hooks/Models";

export interface ContainerModel extends StyleModel {
  variant: "fixed" | "fluid";
  children?: ReactNode;
}