import TabNavigator from "@/app/navigators/TabNavigator";
import Setting from "@/app/screens/Setting";
import colors from "@/styles/colors";

import RouteItem from "../types/routes/RouteItem";

const routes: RouteItem[] = [
  {
    name: "Home",
    component: TabNavigator,
  },
  {
    name: "Search",
    component: TabNavigator,
  },
  {
    name: "Add",
    component: TabNavigator,
  },
  {
    name: "Setting",
    component: Setting,
    options: {
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.black,
      },
      headerTintColor: colors.primary,
    },
    headerTitleKey: "common:setting",
  },
];

export default routes;
