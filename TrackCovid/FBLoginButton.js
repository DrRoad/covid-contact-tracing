import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
} = FBSDK;

export default class FBLoginButton extends Component {
  render() {
    return (
      <View>
        <LoginButton
          
          publishPermissions={["email"]}
          onLoginFinished={
            
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
              // else {
              //   AccessToken.getCurrentAccessToken().then(
              //     (data) => {
              //       console.log(data.accessToken.toString())
              //     }
              //   )
              // }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
      </View>
    );
  }
};

LoginManager.logInWithPermissions(["email"]).then(
  function(result) {
    if (result.isCancelled) {
      console.log("Login cancelled");
    } else {
      console.log(
        "Login success with permissions: " +
          result.grantedPermissions.toString()
      );
    }
  },
  function(error) {
    console.log("Login fail with error: " + error);
  }
);



module.exports = FBLoginButton;