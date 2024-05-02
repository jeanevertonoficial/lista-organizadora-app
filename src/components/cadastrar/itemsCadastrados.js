import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";
import {Item} from "./item";
import useStorage from "../../hooks/useStorage";
import {useEffect, useState} from "react";
import {useIsFocused} from "@react-navigation/native";

export default function ItemsCadastrados({ tipoLista }) {
    const [items, setItemNew] = useState([])

    const focused = useIsFocused()

    const {getItem, removeItem, editeItem} = useStorage();

    useEffect(() => {
        async function loadItems() {
             const chave = (tipoLista == "item") ? '@pass' : '@estoque'
                const items = await getItem(`${chave}`)
                const sortedItems = items.sort((a, b) => a.nm.localeCompare(b.nm));
                setItemNew(sortedItems)
        }
        loadItems()
    }, [focused]);

    async function removeItemCadastrado(item) {
        const newItem = await removeItem("@pass", item)
        setItemNew(newItem)
    }

    async function editarItemCadastrado(item) {
        const itemEditado = await editeItem("@pass", item)
        setItemNew(itemEditado)
    }

    return (
        <SafeAreaView style={styles.content}>
            <View>
                <FlatList
                    data={items}
                    keyExtractor={(item, index) => index}
                    renderItem={({item, index}) => (
                        <Item
                            data={item}
                            index={index}
                            removeItem={() => removeItemCadastrado(item)}
                            editaItem={() => editarItemCadastrado(item)}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    content: {
        flex: 1,
        marginTop: 14
    }
})