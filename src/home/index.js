import {StyleSheet, Text, View, Pressable, TouchableOpacity, FlatList} from 'react-native';
import {Fontisto} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {Header} from '../components/header';
import MesAtual from '../components/mesAtual';
import {useEffect, useState} from "react";
import useStorage from "../hooks/useStorage";
import {useIsFocused} from "@react-navigation/native";
import {ItemsList} from "./item";
import currentValues from "../filters/currentValues";

export function Home({navigation}) {
    const [items, setItemNew] = useState()
    const [totalValue, setTotalValue] = useState(0);
    const {getItem} = useStorage()
    const focused = useIsFocused()

    useEffect(() => {
        async function loadItems() {
            const items = await getItem("@pass")
            const sortedItems = items.sort((a, b) => a.nm.localeCompare(b.nm));
            setItemNew(sortedItems)

            // Calcular o valor total
            const total = items.reduce((accumulator, currentItem) => {
                // Extrair o valor do item, convertendo para número se necessário
                const itemValue = typeof currentItem.valor === 'string' ?
                    parseFloat(currentItem.valor.replace(',', '.')) :
                    currentItem.valor;

                // Somar ao valor total
                return accumulator + itemValue * currentItem.qtd;
            }, 0);

            // Definir o valor total no estado
            setTotalValue(total);
        }
        loadItems()
    }, [focused]);

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

                    <FlatList
                        data={items}
                        keyExtractor={(item, index) => index }
                        renderItem={({item, index}) => (
                            <ItemsList
                                data={item}
                                index={index}
                            />
                        )}
                    />

                    <View style={ styles.baseTot }>
                        <Text style={ styles.titletotal }>Valor Total</Text>
                        <Text style={ styles.vltotal }>{currentValues(totalValue)}</Text>
                    </View>
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
        borderRadius: 24,
        padding: 15,
        height: '95%'
    },
    contentCabecalho: {
        flexDirection: "column",
        justifyContent: 'space-between',
        borderBottomColor: 1
    },
    iconesBaseCabecalho: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 10
    },
    linha: {
        height: 1,
        backgroundColor: "#424242",
        width: "100%"
    },
    baseTot: {
        alignItems: 'center'
    },
    vltotal: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "#444"
    },
    titletotal: {
        fontSize: 12,
        color: "#444"
    }

});
