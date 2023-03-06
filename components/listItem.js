import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListItem = ({ note }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{note}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    listItem:{
        borderWidth: 1,
        borderColor:'yellow',
        padding: 10,
        borderRadius:5,
        backgroundColor:'green',
        marginTop:20
    },
    text:{
        fontSize:20,
        fontWeight: '400'
    }
})