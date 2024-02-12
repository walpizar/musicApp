import { useNavigation } from "@react-navigation/native";
import { Album } from "../models/Album";
import { FlatList, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useListaCanciones } from "../hooks/useListaCanciones";
import { Canciones } from "../models/Canciones";
import { ItemCancion } from "./ItemCancion";

export const DetalleAlbum = ({ route, navigation }: NativeStackScreenProps<any, any>) => {

    const { idAlbum, strAlbum, intYearReleased, strGenre,strStyle } = route.params as Album;

    const { listaSongs, updLista } = useListaCanciones(
        {
            lista:[]
        }        
    )

    const getCanciones= async()=>{
        try {
                const url = `https://theaudiodb.com/api/v1/json/2/track.php?m=${idAlbum}`;
                console.log('');
           
                const respuesta = fetch(url);
                if (!(await respuesta).ok) {
                    throw new Error('Error al obtener los datos de las canciones');
        }

            console.log('aqui  *** * * * * * *');
            const datos = await (await respuesta).json();
            console.log(datos);
            const listaCanc:Canciones[] = datos.track.map((item:any)=>({
                idTrack:item.idTrack,
                strTrack:item.strTrack,
                intDuration:item.intDuration,
                strGenre:item.strGenre           
        
            })
        );
        updLista(listaCanc);
 
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }}
    
    getCanciones();



    return (   
     <>  
      <View >

      <FlatList
              data={listaSongs}
              renderItem={({item}) => <>

                    
                <ItemCancion {...item}  />  
                                     
              </>    }
              keyExtractor={item => item.idTrack}
            />


         
        </View>
     </>
      );
  };