import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.viewBody}>
        <Text>Inicio de sesion</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
    marginRight: 40
  }
});
