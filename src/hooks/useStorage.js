import AsyncStorage from '@react-native-async-storage/async-storage'

const useStorage = () => {
    //stages
    //Buscar os itens salvos
    const getItem = async (key) => {
        try {
            const items = await AsyncStorage.getItem(key);
            return JSON.parse(items) ?? [];

        } catch(error) {
            console.log("Erro ao buscar", error)
            return [];
        }
    }

    //Salvar um item no storage
    const saveItem = async (key, value) => {
        try {
            let items = await getItem(key);
            items.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(items))

        } catch(error) {
            console.log("Erro ao salvar", error);
        }
    }

    // Remover algo do storage
    const removeItem = async (key, itemToRemove) => {
        try {
            let items = await getItem(key);

            let updatedItems = items.filter(item => item.nm !== itemToRemove.nm);

            await AsyncStorage.setItem(key, JSON.stringify(updatedItems));

            return updatedItems;
        } catch (error) {
            console.log("Erro ao remover", error);
        }
    };

    const editeItem = async (key, editedItem) => {
        try {
            let items = await getItem(key);

            // Encontra o índice do item a ser editado
            const index = items.findIndex(item => item.nm === editedItem.nm);

            // Se o item não existir, retorne
            if (index === -1) {
                console.log("Item não encontrado");
                return items;
            }

            // Substitui o item antigo pelo item editado
            items[index] = editedItem;

            // Atualiza a lista de itens no AsyncStorage
            await AsyncStorage.setItem(key, JSON.stringify(items));

            return items;
        } catch (error) {
            console.log("Erro ao editar", error);
        }
    };


    return {
        getItem,
        saveItem,
        removeItem,
        editeItem
    }
}

export default useStorage;