import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Home from './screens/Home';
import { ScreenType } from './constant/constant';
import { useState } from 'react';
import AddNotes from './screens/AddNotes';
import AllNotes from './screens/AllNotes';
import BackBut from './components/BackBut';


export default function App() {
  const [screen, setScreen] = useState(ScreenType.home);
  const [notes, setNotes] = useState([])
  let content;

  if(screen === ScreenType.addNote){
    content = <AddNotes onSave={(data)=>setNotes([...notes,{id:Date.now(),note:data}])}/>
  }else if(screen === ScreenType.allNotes){
    content = <AllNotes notes={notes}/>
  }else if(screen=== ScreenType.home){
    content = <Home onExit={(data) => {setScreen(data)}}/>
  }
  console.log(notes)
  return (
    <View style={styles.container}>
      <Header/>
      {screen !== ScreenType.home &&
       (<BackBut onButtonClick={(data) => setScreen(data)}/>)}
      
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
