import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {Header} from '../header'
import MesAtual from '../mesAtual';
import {FontAwesome5, Fontisto} from "@expo/vector-icons";
import useStorage from "../../hooks/useStorage";
import ItemsCadastrados from "./itemsCadastrados";

export default function Estoque({navigation}) {
    const [qtd, setQtd] = useState(0);
    const [nm, setNmItem] = useState('');
    const {saveItem} = useStorage();

    async function cadastrarItem() {
        if (!nm || isNaN(qtd)) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        await saveItem("@estoque", {nm, qtd})

        setNmItem('');
        setQtd(0);
    }

    return (
        <View style={styles.container}>

            <Header navigation={navigation}/>

            <View style={styles.content}>
                <View style={styles.box}>
                    <View style={styles.baseTitulo}>
                        <Fontisto name="shopping-pos-machine" size={24} color="#424242"/>
                        <Text style={styles.titulo}>Cadastrar novo produto</Text>
                    </View>
                    <SafeAreaView style={styles.inputs}>
                        <View>
                            <Text style={styles.nomeCampo}>Nome</Text>
                            <TextInput
                                value={nm}
                                onChangeText={setNmItem}
                                placeholder="ARROZ"/>
                        </View>
                        <View>
                            <Text style={styles.nomeCampo}>Qtd</Text>
                            <TextInput
                                value={String(qtd)}
                                onChangeText={setQtd}
                                placeholder="0"
                                />
                        </View>
                    </SafeAreaView>

                    <TouchableOpacity style={styles.buttonAdd} onPress={cadastrarItem}>
                        <FontAwesome5 style={styles.btnIconAdd} name="plus" size={24} color="black"/>
                    </TouchableOpacity>

                </View>

                <ItemsCadastrados tipoLista="estoque"/>

            </View>

            <MesAtual/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#212121',

    },
    content: {
        flex: 4,
        paddingLeft: 14,
        paddingRight: 14,
        width: "100%"
    },
    box: {
        width: "100%",
        backgroundColor: "#A5A5A5",
        borderRadius: 24,
        padding: 15
    },
    contentCabecalho: {
        flexDirection: "column",
        justifyContent: 'space-between',
        borderBottomColor: 1,
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
    baseTitulo: {
        width: '100%',
        marginBottom: 24,
        alignItems: 'center',
    },
    titulo: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#222'
    },
    inputs: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nomeCampo: {
        color: '#222',
        fontWeight: 'bold',
    },
    buttonAdd: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
    },
    btnIconAdd: {
        color: '#444'
    }

});