import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export function Header() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex:1 }}>
        <View style={styles.header}> 
            <Text style={styles.title}>LISTA ORGANIZADORA</Text>
            <TouchableOpacity onPress={() => navigation.navigate('newItem')}>
                <Image
                style={styles.logo}
                source={require("./../../assests/logo.png")}
                />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    constainer: {

    },
    header: {
        flex: 1,
        width: '100%',
        padding: 14,
        marginTop: 14,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    title: {
        color: "#A5A5A5",
        fontWeight: 'bold'
    },
    logo: {
        width: 20,
        height: 24
    }
})
