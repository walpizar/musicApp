import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();
export const App = () => {
  return (

    <Text>HOLA MUNDO</Text>  

  // <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen name="home" options={{ title: 'Rick and Morty - Personajes' }} component={ListaApp} />
  //       <Stack.Screen name="personajeDetalle" options={{ title: 'Personaje' }} component={PersonajeDetails} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  );
};

export default App;

