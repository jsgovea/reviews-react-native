import React from "react";
import t from "tcomb-form-native";
import formValidation from "../utils/Validation";
import inputTemplate from "../forms/templates/Input";

export const LoginStruct = t.struct({
  email: formValidation.email,
  password: formValidation.password
});

export const LoginOptions = {
  fields: {
    email: {
      template: inputTemplate,
      config: {
        placeholder: "Correo",
        iconType: "ionicon",
        iconName: "md-mail"
      }
    },
    password: {
      template: inputTemplate,
      config: {
        placeholder: "Contrasena",
        iconType: "ionicon",
        iconName: "md-lock",
        password: true,
        secureTextEntry: true
      }
    }
  }
};
