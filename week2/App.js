import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, ProgressViewIOSComponent} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import AppButton from './component/AppButton';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";

export default function App() {

  console.log(useDimensions())
  console.log(useDeviceOrientation());
const {landscape} = useDeviceOrientation()


  return (
    <SafeAreaView style={styles.container}>
      
      <WelcomeScreen />
      {/* <ViewImageScreen /> */}
      <AppButton></AppButton>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:Platform.OS==='android'?StatusBar.currentHeight:StatusBar.currentHeight+3,
 
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:'wrap',
    alignContent:'stretch',
   
  },
});
