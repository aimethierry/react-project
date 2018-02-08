import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';


const LocalImage = ({source, originalWidth, originalHeight }) => {
    let WindowWidth = Dimensions.get('window').width
    let widthChange = (WindowWidth-1)/originalWidth
    let newWidth = originalWidth * widthChange
    let newheight = originalHeight * widthChange
    return (
        <View >

      <View>
      <Image source={source} style={{width: newWidth, height: newheight}} />
      </View>
      


        </View>
    )
}




export default LocalImage