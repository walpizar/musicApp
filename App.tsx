import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { MainApp } from "./src/componets/Main";
import { ListaDiscos } from "./src/componets/ListaDiscos";
import { DetalleAlbum } from "./src/componets/DetalleAlbum";
import { Login } from "./src/componets/Login";

const Stack = createNativeStackNavigator();
export const App = () => {
  return (

  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" options={{ title: 'Busqueda de Artistas' }} component={MainApp} />        
        <Stack.Screen name="listaDisco" options={{ title: 'Discografía' }}  component={ListaDiscos} />
        <Stack.Screen name="detalleAlbum" options={{ title: 'Canciones' }}  component={DetalleAlbum} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

