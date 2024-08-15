import React from "react";
import {QueryClientProvider} from "@tanstack/react-query";
import {SafeAreaView} from "react-native";

import "./translations";

import ApplicationNavigator from "./app/navigators/Application";
import queryClient from "./queries";

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <ApplicationNavigator />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
