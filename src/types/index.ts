import { ComponentType } from "react";

export interface IRoute {
  path: string;
  element: ComponentType<unknown>;
  isProtected?: boolean;
}
