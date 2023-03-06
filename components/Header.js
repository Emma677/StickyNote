import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style ={styles.title}>Your Sticky Notes</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'13%',
        backgroundColor: Platform.OS == 'android' ? 'green' : '#fff',
        paddingTop: 30
    },
    title:{
        color:Platform.OS=='android'? 'white' : 'purple',
        fontSize:30,
        fontWeight:'bold',
        marginTop:10
    }
})