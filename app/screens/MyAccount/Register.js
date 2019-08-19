import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import t from "tcomb-form-native";
import { RegisterStruct, RegisterOptions } from "../../forms/RegisterForm";
import { Button, Text } from "react-native-elements";
const Form = t.form.Form;
import * as firebase from "firebase";
import Toast, { DURATION } from "react-native-easy-toast";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      registerStruc: RegisterStruct,
      registerOptions: RegisterOptions,
      formData: {
        name: "",
        email: "",
        password: ""
      },
      formErrormsg: ""
    };
  }

  register = () => {
    const validate = this.refs.registerForm.getValue();
    if (validate) {
      this.setState({
        formErrormsg: ""
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(validate.email, validate.password)
        .then(resolve => {
          this.refs.toast.show("Registro correcto", 50, () => {
            this.props.navigation.navigate("Profile");
          });
        })
        .catch(err => {
          this.refs.toast.show("El correo esta en uso", 1000);
        });
    } else {
      this.setState({
        formErrormsg: "Compruebe todos los campos"
      });
    }
  };

  onChanged = formValue => {
    this.setState({
      formData: formValue
    });
  };

  render() {
    const { registerStruc, registerOptions, formErrormsg } = this.state;
    return (
      <View style={styles.viewBody}>
        <Form
          ref="registerForm"
          type={registerStruc}
          options={registerOptions}
          value={this.state.formData}
          onChange={formValue => this.onChanged(formValue)}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          title="Registro"
          onPress={() => this.register()}
        />
        <Text style={styles.error}>{formErrormsg}</Text>
        <Toast
          ref="toast"
          position="bottom"
          positionValue={250}
          fadeInDuration={1000}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{ color: "#fff" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40
  },
  buttonStyle: {
    backgroundColor: "#00a680",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 30
  }
});
