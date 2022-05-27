import React from "react";
import { View, TextInput, Button } from "react-native";
import Profile from "./Profile";
import { Route, Link, NativeRouter } from "react-router-native";

function Explore() {
  const [text, onChangeText] = React.useState("");
  return (
    <View>
      <TextInput onChangeText={onChangeText} value={text} />
      <Button>
        <Link to="/hometab" />
      </Button>
      <NativeRouter>
        <Route to="/profile" component={Profile} />
      </NativeRouter>
    </View>
  );
}

export default Explore;
