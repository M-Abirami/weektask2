import React from 'react';
import {  StyleSheet ,Image,View,SafeAreaView} from 'react-native';
import color from '../app/colors/Config';

const ViewImageScreen = () => {
    return (
 <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row-reverse',justifyContent:'space-between',marginTop:'15%',}}>
             <View style={[styles.box,{backgroundColor:color.primary,marginRight:'10%'}]}/>
            <View style={[styles.box,{backgroundColor:color.secondary, marginLeft:'10%'}]}/>
      </View>
            <Image  style={styles.image} source={require('../assets/chair.jpg')}></Image>
</SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor:color.bgcolor,
        width:'100%',
        height:'100%', 
        flexWrap:'wrap',
        alignContent:'stretch'
               },

      image:{
        
          width:'100%',
          height:430,
          marginTop:'20%',
          resizeMode:'contain',
           },

      box: {
         width: 50,
         height: 50,
           } 

})

export default ViewImageScreen;