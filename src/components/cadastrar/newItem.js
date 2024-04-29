import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Header } from '../header'
import MesAtual from '../mesAtual';

export default function NewItem({ navigation }) {
  return (
    <View style={styles.container}>
        <Header  navigation={navigation}/>
      
    <View style={styles.content}>
      <View style={styles.box}>
      </View>
   </View>
  
      <MesAtual/>
  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#212121',
  
  },
  content: {
    flex:5,
    paddingLeft: 14,
    paddingRight: 14,
    width: "100%"
  },
  box: {
    width: "100%",
    backgroundColor: "#A5A5A5",
    borderRadius: 12,
    padding: 15
  },
  contentCabecalho: {
    flexDirection: "column",
    justifyContent: 'space-between',
    borderBottomColor: 1
  },
  iconesBaseCabecalho: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom:10
  },
  linha: {
    height:1, 
    backgroundColor: "#424242", 
    width: "100%"
  }
  
});