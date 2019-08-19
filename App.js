import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UserNavigation from "./app/navigation/User";
import firebaseConfig from "./app/utils/firebaseConfig";
import * as firebase from "firebase";
firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello world!</Text> */}
      <UserNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
