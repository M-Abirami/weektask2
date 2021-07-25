import React from 'react';
import { Button, StyleSheet, View, TouchableOpacity, Text, TouchableHighlight } from 'react-native';

import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks"
const AppButton = (props) => {
   console.log(useDimensions())
   console.log(useDeviceOrientation());
   const { landscape } = useDeviceOrientation()

   return (
      <View>
         <View>
            <TouchableOpacity style={[styles.button, { backgroundColor: props.color }]}>
               <Text style={styles.text}>{props.str}</Text>
               {/* <Text style={styles.text}>Login</Text> */}
            </TouchableOpacity>

         </View>
         {/* <View>
     <TouchableOpacity style={[styles.button2,{marginTop:landscape?"1%":"5%"}]}>
        <Text style={styles.text}>Signup</Text>
     </TouchableOpacity>
     </View> */}

      </View>
   );
}

export default AppButton;

const styles = StyleSheet.create({

   button: {
      borderRadius: 25, width: "90%", padding: "4%",
      alignSelf: 'center',
      marginTop: 3
   },

   text: {
      color: 'white',
      marginLeft: '45%'

   }
})