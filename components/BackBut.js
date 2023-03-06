import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenType } from '../constant/constant'

const BackBut = ({ onButtonClick}) => {
  return (
    <View style={styles.container}>
      <View style ={styles.but}>
        <Button onPress={()=> onButtonClick(ScreenType.home)} color={'grey'} title='< Back'/>
      </View>
    </View>
  )
}

export default BackBut

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    but:{
        margin: 10
    }

})