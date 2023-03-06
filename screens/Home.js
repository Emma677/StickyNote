import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScreenType } from '../constant/constant'

const Home = ({ onExit }) => {
  return (
<View style={styles.container}>
    <Pressable onPress={() => onExit(ScreenType.addNote)}>
        <View style={styles.itemBut}>
            <Text style={styles.title}>Add New Notes</Text>
            <Icon style={styles.icon} name='arrow-forward-outline'/>
        </View>
    </Pressable>

    <Pressable onPress={() => onExit(ScreenType.allNotes)}>
        <View style={styles.itemBut}>
        <Text style={styles.title}>Veiw All Notes</Text>
        <Icon style={styles.icon} name='arrow-forward-outline'/>
        </View>
    </Pressable>
</View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop:40
    },
    itemBut:{
        width: Dimensions.get('window').width- 80,
        height: '50%',
        marginVertical: 30,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        elevation:10
    },
    title:{
        fontSize:30,
        fontWeight:'bold'
    },
    icon:{
        fontSize:25,
        paddingTop:20
    }
})