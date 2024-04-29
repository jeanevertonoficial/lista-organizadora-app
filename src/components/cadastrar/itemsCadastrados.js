import {SafeAreaView, StyleSheet, VirtualizedList} from "react-native";
import Item from "./item";
import useStorage from "../../hooks/useStorage";

export default function ItemsCadastrados() {
    const { getItem } = useStorage();

    // Certifique-se de getItem retorna um array de itens
    const items = getItem() || [];

    // getItemCount deve retornar o número de itens na lista
    const getItemCount = () => items.length;
    console.log(getItemCount())
    return (
        <SafeAreaView style={styles.box}>
            <VirtualizedList
                data={items}
                initialNumToRender={4}
                renderItem={({ item }) => (
                    <Item nm={item.nm} valor={item.valor} qtd={item.qtd} />
                )}
                keyExtractor={item => item.nm}
                getItemCount={getItemCount}
                getItem={(data, index) => data[index]} // getItem agora recebe data e index
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    box: {
        width: "100%",
        backgroundColor: "#A5A5A5",
        borderRadius: 24,
        padding: 15
    },
})