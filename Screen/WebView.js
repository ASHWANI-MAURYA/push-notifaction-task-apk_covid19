import { View, Text } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'
const Visit = () => {
  return (
    <View style = {{flex:1,marginTop:40}}>  
    <WebView  
        source={{ uri: 'https://www.irctc.co.in/nget/train-search' }}
    />  
</View>
  )
}

export default Visit