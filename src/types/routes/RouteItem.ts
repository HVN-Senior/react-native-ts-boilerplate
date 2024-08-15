import React from "react";
import {StackNavigationOptions} from "@react-navigation/stack";

export default interface RouteItem {
  name: string;
  component: React.ComponentType;
  options?: StackNavigationOptions;
  headerTitleKey?: string;
}
