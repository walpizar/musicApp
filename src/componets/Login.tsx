import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, TextInput } from "react-native"
 
 
export interface PropsLoggin {
    strEmail: string,
    strPassword: string    
}
 
export const Login = () => {
    const  navigation= useNavigation();
    return(
 
        <>  

        </>
    )
}
const styles = StyleSheet.create({
    imagen: {
        borderRadius: 25,
        width: 300,
        height: 100,
    },
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        margin: 5,
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight:"bold"
    },
    boton: {
        backgroundColor: 'lightblue',
        color: 'white',
    },
  });