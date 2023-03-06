import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const AddNotes = ({ onSave}) => {
  const [enteredText, setEnteredText] = useState('')
  const handleChange = (val) =>{
    setEnteredText(val)
  }
  const handleClick= () =>{
   if(enteredText.trim().length > 0){
    onSave(enteredText)
   }
  }
  return (
    <View style ={styles.container}>
      <View style={styles.formcontainer}>
        <Text style={styles.title}>Add Note</Text>
          <View>
            <TextInput onChangeText={handleChange} style={styles.input}/>
          </View>
          <Button onPress={handleClick} color={'green'} title='Add'/>
      </View>
    </View>
  )
}

export default AddNotes

const styles = StyleSheet.create({
container: {
  flex:1,

},
formcontainer:{
  backgroundColor:'#f5f5f5',
  padding:10,
  marginVertical:10,
  marginHorizontal:10
},
title:{
  fontSize:20,
  fontWeight: 'bold'
},
input:{
  marginVertical: 20,
  width: '100%',
  borderBottomWidth:2,
  fontSize:16,
  padding:10
}
})