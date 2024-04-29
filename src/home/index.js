import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Header } from '../components/header';
import MesAtual from '../components/mesAtual';

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Header navigation={navigation}/>

      <View style={styles.content}>
        <View style={styles.box}>
          <Pressable style={styles.contentCabecalho}>
            <View style={styles.iconesBaseCabecalho}>
              <Fontisto name="shopping-pos-machine" size={24} color="#424242"/>
              <TouchableOpacity onPress={() => navigation.navigate('NewItem')}>
                <AntDesign name="plus" size={24} color="#424242"/>
              </TouchableOpacity>
            </View>
            <Text style={styles.linha}/>
          </Pressable>
        </View>

      </View>
    <MesAtual/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#212121',
  
  },
  content: {
    flex: 5,
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
