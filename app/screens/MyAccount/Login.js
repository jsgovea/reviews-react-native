import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Image, Button, Text } from "react-native-elements";
import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from "../../forms/LoginForm";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginStruct: LoginStruct,
      loginOptions: LoginOptions,
      loginData: {
        email: "",
        password: ""
      },
      loginErrorMessage: ""
    };
  }

  login = () => {
    const validate = this.refs.loginForm.getValue();
    if (!validate) {
      console.log("Incorrecto");
      this.setState({
        loginErrorMessage: "Opps! Por favor verificar los datos"
      });
    } else {
      console.log("Valido");
      this.setState({
        loginErrorMessage: ""
      });
    }
  };

  onChange = formValue => {
    this.setState({
      loginData: formValue
    });
  };

  render() {
    const { loginStruct, loginOptions, loginErrorMessage } = this.state;
    return (
      <View style={styles.viewBody}>
        <Image
          source={require("../../../assets/5-tenedores-letras-icono-logo.png")}
          containerStyle={styles.logo}
          style={{ width: 300, height: 150 }}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode="contain"
        />
        <View style={styles.viewForm}>
          <Form
            ref="loginForm"
            type={loginStruct}
            options={loginOptions}
            value={this.state.loginData}
            onChange={formValue => this.onChange(formValue)}
          />
          <Button
            title="Login"
            buttonStyle={styles.buttonStyle}
            onPress={() => this.login()}
          />
          <Text style={styles.loginError}>{loginErrorMessage}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40
  },
  buttonStyle: {
    backgroundColor: "#00a680",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  viewForm: {
    marginTop: 50
  },
  logo: {
    alignItems: "center"
  },
  loginError: {
    color: "red",
    textAlign: "center",
    marginTop: 20
  }
});
