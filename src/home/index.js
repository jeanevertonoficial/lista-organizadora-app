import {FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, Fontisto} from '@expo/vector-icons';
import {Header} from '../components/header';
import MesAtual from '../components/mesAtual';
import {useEffect, useState} from "react";
import useStorage from "../hooks/useStorage";
import {useIsFocused} from "@react-navigation/native";
import PagerView from 'react-native-pager-view';
import {ItemsList} from "./item";
import currentValues from "../filters/currentValues";

export function Home({navigation}) {
    const [items, setItems] = useState([]);
    const [totalValue, setTotalValue] = useState(0);
    const { getItem } = useStorage();
    const focused = useIsFocused();
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        async function loadItems(tipoLista) {
            const chave = tipoLista !== 'item' ? '@estoque' : '@pass';
            const items = await getItem(chave);
            const sortedItems = items.sort((a, b) => a.nm.localeCompare(b.nm));
            setItems(sortedItems);

            // Calcular o valor total
            const total = items.reduce((accumulator, currentItem) => {
                const itemValue = typeof currentItem.valor === 'string' ?
                    parseFloat(currentItem.valor.replace(',', '.')) :
                    currentItem.valor;
                return accumulator + itemValue * currentItem.qtd;
            }, 0);

            setTotalValue(total);
        }

        loadItems(currentPage === 0 ? 'item' : 'estoque');
    }, [focused, currentPage]);

    return (
        <View style={styles.container}>

            <Header navigation={navigation}/>

            <PagerView style={styles.containerScroll} initialPage={0}>
                <View style={styles.content} key={1}>
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
                            onTouchEnd={() => setCurrentPage(1)}
                            data={items}
                            keyExtractor={(item, index) => index}
                            renderItem={({item, index}) => (
                                <ItemsList
                                    data={item}
                                    index={index}
                                />
                            )}
                        />

                        <View style={styles.baseTot}>
                            <Text style={styles.titletotal}>Valor Total</Text>
                            <Text style={styles.vltotal}>{currentValues(totalValue)}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.content} key={2}>
                    <View style={styles.box}>
                        <Pressable style={styles.contentCabecalho}>
                            <View style={styles.iconesBaseCabecalho}>
                                <Text style={styles.titleEstoque}>Meu Estoque</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Estoque')}>
                                    <AntDesign name="plus" size={24} color="#424242"/>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.linha}/>
                        </Pressable>

                        <FlatList
                            onTouchEnd={() => setCurrentPage(0)}
                            data={items}
                            keyExtractor={(item, index) => index}
                            renderItem={({item, index}) => (
                                <ItemsList
                                    data={item}
                                    index={index}
                                />
                            )}
                        />
                    </View>
                </View>

            </PagerView>
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
    containerScroll: {
        flex: 5
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
    },
    titleEstoque: {
        color: "#444",

    }

});
