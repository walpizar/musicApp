import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { FlatList, Image, Pressable, StyleSheet, Text } from "react-native"
import { PropsArtista } from "./Artista";
import { Album } from "../models/Album";
import { useListaAlbums } from "../hooks/useListaAlbums";
import { ItemAlbum } from "./ItemAlbum";
import { useEffect } from "react";


 
export const ListaDiscos = ({ route, navigation }: NativeStackScreenProps<any, any>) => {

    const { idArtist, strArtist, strArtistLogo } = route.params as PropsArtista;

    const { listaAlbums, updLista } = useListaAlbums(
        {
            lista:[]
        }        
    )

    const getAlbums= async()=>{
        try {
                const url = `https://www.theaudiodb.com/api/v1/json/2/album.php?i=${idArtist}`;
                const respuesta = fetch(url);
                if (!(await respuesta).ok) {
                    throw new Error('Error al obtener los datos de los personajes');
        }
            const datos = await (await respuesta).json();
            const discografia:Album[] = datos.album.map((item:any)=>({
                idAlbum:item.idAlbum,
                strAlbum:item.strAlbum,
                intYearReleased:item.intYearReleased,
                strStyle:item.strStyle,
                strGenre:item.strGenre,
                strAlbumThumb:item.strAlbumThumb==null?'https://enciclopedia.net/wp-content/uploads/2014/07/disco-380x380.jpg':item.strAlbumThumb
        
            })
        );
        updLista(discografia);
 
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }}
    
    getAlbums();


    return(       
        <>   


        
            <Image style={styles.imagen}
                source={{ uri: strArtistLogo}} />
    
 
            <FlatList
              data={listaAlbums}
              renderItem={({item}) => <>

            <Pressable  onPress={() => navigation.navigate("detalleAlbum",{...item})}>                
                <ItemAlbum {...item}  />  
            </Pressable>                               
              </>    }
              keyExtractor={item => item.idAlbum}
            />


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