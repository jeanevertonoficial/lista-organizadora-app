import {Pressable, StyleSheet, Text, View} from "react-native";
import currentValues from "../filters/currentValues";

export function ItemsList(data) {
    return (
        <Pressable style={styles.inputs} onLongPress={data.removeItem}>
            <View style={styles.box} onChange={data.editaItem}>
                <Text style={[styles.nomes, styles.nm]}>{data.data.nm}</Text>
                <Text style={styles.linha}></Text>
                    <Text style={[styles.nomes, styles.valor]}>{currentValues(data.data.valor)}</Text>
                    <Text style={[styles.nomes, styles.qtd]}>{data.data.qtd} Qtd</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    nomes: {
        color: "#444",
        width: 110,
        maxWidth: 110,
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        backgroundColor: "#A5A5A5",
        borderRadius: 12,
        padding: 15
    },
    linha: {
        height: 2,
        backgroundColor: "#444",
        width: 60,
    },
    nm: {
        textAlign: 'left'
    },
    valor: {
        textAlign: 'right',
        fontWeight: 'bold',
        paddingRight: 15
    },
    qtd: {
        fontSize: 12,
        color: '#222'
    }
});