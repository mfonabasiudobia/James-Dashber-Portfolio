import { ReactNode } from "react";
import { StyleModel } from "@/Views/Atoms/Hooks/Models";

export interface ListItemModel extends StyleModel {
  LeftItem?: ReactNode;
  RightItem?: ReactNode;
  Item?: ReactNode;
};