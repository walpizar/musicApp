import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { MainApp } from "./src/componets/Main";
import { ListaDiscos } from "./src/componets/ListaDiscos";

const Stack = createNativeStackNavigator();
export const App = () => {
  return (

  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" options={{ title: 'Busqueda de Artistas' }} component={MainApp} />
        
        <Stack.Screen name="listaDisco" component={ListaDiscos} />
        
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

