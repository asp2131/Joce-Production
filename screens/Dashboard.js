import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ApplicationProvider } from "react-native-ui-kitten";
import * as eva from "@eva-design/eva";
import {createClient, Provider} from 'urql'
import MainStack from './Stacks'


const client = createClient({ url: "http://192.168.0.97:3000/graphql" });

export default function Dashboard() {
  const [theme, setTheme] = useState(eva.light);
  const [mainUser, setMainUser] = useState(null);
  //saves the state of user => will eventually be the intiall value of user context
  const [googleUser, setGoogleUser] = useState({});
  
  // const [googleAvatar, setGoogleAvatar] = useState(null);

  return (
    <Provider value={client}>
      <ApplicationProvider mapping={eva.mapping} {...eva} theme={theme}>
        <MainStack
          setMainUser={setMainUser}
          setGoogleUser={setGoogleUser}
          googleUser={googleUser}
        />
      </ApplicationProvider>
    </Provider>
  );
}

