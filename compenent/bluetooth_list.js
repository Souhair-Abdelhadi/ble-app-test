/* eslint-disable comma-dangle */
/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View , Text ,FlatList} from 'react-native';
import Layout from './bluetooth_list_layout';


function BluetoothList(props){

    const list = [

        {
            name: 'souhair',
            key:'1',
        },
        {
            name: 'mouha',
            key: '2'
        },
    ];

    return(
<Layout title='Bluetooth'>
        <FlatList
            data={list}
            renderItem={({item}) => {
                <Text style={{fontSize:20}}> {item.name} </Text>
            }}
        />
</Layout>
    );

}

export default BluetoothList;
