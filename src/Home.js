import React from "react";
import { Button, View, Text } from "react-native";
import { Link } from "react-router-native";

function Home(props) {
  return (
    <View>
      <Text props={this.text} />
      <Button>
        <Link to="/profile" />
      </Button>
    </View>
  );
}

export default Home;
