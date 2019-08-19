import React, { Component } from "react";
import t from "tcomb-form-native";
import formValidation from "../utils/Validation";
import inputTemplate from "../forms/templates/Input";

export const RegisterStruct = t.struct({
  name: t.String,
  email: formValidation.email,
  password: formValidation.password
});

export const RegisterOptions = {
  fields: {
    name: {
      template: inputTemplate,
      config: {
        placeholder: "Nombre completo",
        iconType: "ionicon",
        iconName: "md-person"
      }
    },
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
