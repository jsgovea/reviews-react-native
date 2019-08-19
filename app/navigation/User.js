import React, { Component } from "react";
import { moduleName } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Home from "../screens/Home";
import TopFive from "../screens/TopFive";
import Profile from "../screens/MyAccount/Profile";
import Search from "../screens/Search";
import Register from "../screens/MyAccount/Register";
import Login from "../screens/MyAccount/Login";
import { Icon } from "react-native-elements";

const homeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Inicio"
    })
  }
});

const topFiveStack = createStackNavigator({
  TopFive: {
    screen: TopFive,
    navigationOptions: ({ navigation }) => ({
      title: "Top 5"
    })
  }
});

const searchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
      title: "Buscar"
    })
  }
});

const profileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: "Perfil"
    })
  },
  Register: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      title: "Registro"
    })
  },
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: "Inicio de sesion"
    })
  }
});

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: homeStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Inicio",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="compass-outline"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    TopFive: {
      screen: topFiveStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Top 5",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="star-outline"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Search: {
      screen: searchStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Buscar",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="magnify"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Profile: {
      screen: profileStack,

      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Perfil",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home-outline"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Profile",
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680"
    }
  }
);

export default createAppContainer(RootStack);
