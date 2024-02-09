import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Image, StyleSheet, Text } from "react-native"
import { PropsArtista } from "./Artista";
import { useBusquedaArtista } from "../hooks/useBusquedaArtista";





const { txtBusqueda, updTxtBusqueda } = useBusquedaArtista('');

 const cargarDatos = async (id:string) => {

    try {
      
        const url = `www.theaudiodb.com/api/v1/json/discography-mb.php?s=${id}`;

        console.log(url);
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error('Error al obtener los datos de discografia');
        }
        const datos = await respuesta.json();
        console.log(datos);
        // const artistaDatos:PropsArtista = {
        //                                      idArtist: datos.artists[0].idArtist,
        //                                         strArtist: datos.artists[0].strArtist,
        //                                         strStyle: datos.artists[0].strStyle,
        //                                         strGenre: datos.artists[0].strGenre,
        //                                         strBiographyEN: datos.artists[0].strBiographyEN,
        //                                         strArtistLogo: datos.artists[0].strArtistLogo,
        //                                         strMusicBrainzID: datos.artists[0].strMusicBrainzID
        //                             };
           

          
          // updArtista(artistaDatos);
           
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }

 }

export const ListaDiscos = ({ route, navigation }: NativeStackScreenProps<any, any>) => {

    const { idArtist, strArtist, strArtistLogo, strMusicBrainzID } = route.params as PropsArtista;

 

        cargarDatos(strMusicBrainzID);

    return(

        <>   

             <Image style={styles.imagen}
                source={{ uri: strArtistLogo}} />
            <Text>DISCOGRAFIA- {strArtist}</Text>
         

        </>
    )
}
const styles = StyleSheet.create({
    imagen: {
        borderRadius: 30,
        width: 300,
        height: 100,
    },
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    
    },
    titulo: {
        marginBottom: 50,
        color: 'purple',
        fontSize: 40,
        textAlign: 'center',
    },
    boton: {
        backgroundColor: 'purple',
        color: 'white',
    },
  });