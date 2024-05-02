import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './home';
import NewItem from './components/cadastrar/newItem';
import Estoque from "./components/cadastrar/estoque";

const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}
                              options={{
                                  headerShown: false,
                              }}
                />
                <Stack.Screen name="NewItem" component={NewItem}
                              options={{
                                  headerShown: false,
                              }}
                />
                <Stack.Screen name="Estoque" component={Estoque}
                              options={{
                                  headerShown: false,
                              }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
