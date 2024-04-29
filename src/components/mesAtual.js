import {View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import {FontAwesome5} from '@expo/vector-icons';

export default function MesAtual() {
    const mes = () => {
        const dataAtual = new Date();
        const mesAtual = dataAtual.getMonth();
        const meses = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        return meses[mesAtual]
    }

    return (
        <View style={styles.container}>
            <FontAwesome5 style={styles.calendario} name="calendar-alt" size={18} color="#A5A5A5"/>
            <Text style={styles.mes}>
                {mes()}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    mes: {
        textAlign: 'center',
        color: '#A5A5A5',
        textTransform: 'uppercase',
        padding: 14
    },
    calendario: {
        marginLeft: 5
    }
})