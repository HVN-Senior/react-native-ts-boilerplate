import React from "react";
import useAppState from "@/hooks/useAppState";
import routes from "@/routes";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {useTranslation} from "react-i18next";

const Stack = createStackNavigator();

function ApplicationNavigator() {
  useAppState();

  const {t} = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{
              headerTitle: t(route.headerTitleKey!),
              ...route.options,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
