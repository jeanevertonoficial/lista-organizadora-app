import {SafeAreaView, StyleSheet, TextInput, View} from "react-native";

export default function Item(nm, valor,qtd) {
    return(
        <SafeAreaView style={styles.inputs}>
            <View>
                <TextInput
                    value={nm}
                    placeholder="ARROZ"/>
            </View>
            <View>
                <TextInput
                    value={valor}
                    keyboardType="numeric"/>
            </View>
            <View>
                <TextInput
                    value={qtd}
                    keyboardType="numeric"/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    inputs: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});