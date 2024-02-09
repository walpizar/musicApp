import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text } from "react-native"

export interface PropsArtista {
    idArtist: string,
    strArtist: string,
    strStyle: string,
    strGenre: string,
    strBiographyEN: string,
    strArtistLogo:string,
    strMusicBrainzID:string
    
}

export const Artista = (artista: PropsArtista) => {
    const  navigation= useNavigation();
    return(

        <>   
         {/* <Image style={styles.imagen}
                source={{ uri: artista.strArtistLogo}} /> */}
            <Text>Nombre: {artista.strArtist}</Text>
            <Text>Genero: {artista.strGenre}</Text>
            <Text>Estilo:{artista.strStyle}</Text>
            <Pressable  style={styles.boton }onPress={() => navigation.navigate("listaDisco",{...artista})}>
                <Text>Ver Discografía</Text>
            </Pressable>
            {/* <Text>Bibliografía:{artista.strBiographyEN}</Text> */}


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