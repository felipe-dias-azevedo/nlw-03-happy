//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useFonts} from 'expo-font'
import {Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito'
import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    nunito6: Nunito_600SemiBold,
    nunito7: Nunito_700Bold,
    nunito8: Nunito_800ExtraBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Routes/>
  );
}
