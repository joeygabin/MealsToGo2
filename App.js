import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation";


import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";


// video #50
const firebaseConfig = {
  apiKey: "AIzaSyAVUbHlCSwNFSY-7ut_a9bDGXyFv_A6inU",
  authDomain: "mealstogo-fb620.firebaseapp.com",
  projectId: "mealstogo-fb620",
  storageBucket: "mealstogo-fb620.appspot.com",
  messagingSenderId: "170557914939",
  appId: "1:170557914939:web:1deff6020687cdc546811e", 
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }



  return (
    <>
    <ThemeProvider theme={theme}>
    <AuthenticationContextProvider>
   
    <Navigation />
    
    </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
  </>

   );
}

