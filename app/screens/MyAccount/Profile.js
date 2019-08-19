import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

export default class Profile extends Component {
  goToScreen = nameScreen => {
    this.props.navigation.navigate(nameScreen);
  };

  render() {
    return (
      <View style={styles.viewBody}>
        <Text>Profile Screen</Text>
        <Button title="Registro" onPress={() => this.goToScreen("Register")} />
        <Button
          style={styles.buttonMargin}
          title="Iniciar Sesion"
          onPress={() => this.goToScreen("Login")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonMargin: {
    marginTop: 20
  }
});
