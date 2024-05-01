import {Pressable, StyleSheet, TextInput, View} from "react-native";
import currentValues from "../../filters/currentValues";

export function Item(data) {
    return(
        <Pressable style={styles.inputs} onLongPress={data.removeItem}>
            <View style={ styles.box } onChange={data.editaItem}>
                <TextInput style={ styles.nomes } value={data.data.nm}/>
                <TextInput style={ styles.nomes } value={currentValues(data.data.valor)}/>
                <TextInput style={ styles.nomes } value={data.data.qtd}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    inputs: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 11
    },
    nomes: {
        color: "#444"
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        backgroundColor: "#A5A5A5",
        borderRadius: 12,
        padding: 15
    },
});