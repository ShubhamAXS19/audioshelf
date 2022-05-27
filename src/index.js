import { AppRegistry } from "react-native";
import App from "./App";
// import { NativeRouter, Route, Link } from "react-router-native";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
