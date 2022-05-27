import React from "react";
import { View } from "react-native";
import { Route, NativeRouter } from "react-router-native";
import Home from "./Home";

function App() {
  return (
    <View>
      <NativeRouter>
        <Route exact path="/hometab" component={Home} />
      </NativeRouter>
    </View>
  );
}

export default App;
