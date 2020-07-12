/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

function BluetoothListLayout(props) {

    return(

        <View style={styles.container}>
            <Text style={styles.title}> {props.title} </Text>
            {props.children}
        </View>
    )

   

}

const styles = StyleSheet({
    container: {
      fontSize: 18,
      paddingHorizantal:20,
      paddingVertical:25,
      

    },
    title:{
        fontSize: 20,
        color :'black',
        fontWeight:'bold',
    }

})

export default BluetoothListLayout;