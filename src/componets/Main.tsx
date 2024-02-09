import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import { useBusquedaArtista } from "../hooks/useBusquedaArtista";
import { useResponseArtista } from "../hooks/useReponseArtista";
import { Artista, PropsArtista } from "./Artista";



export const MainApp = () => {
   
const { txtBusqueda, updTxtBusqueda } = useBusquedaArtista('');
const { artista, updArtista } = useResponseArtista({
    idArtist: '',
    strArtist: '',
    strStyle: '',
    strGenre: '',
    strBiographyEN: '',
    strArtistLogo:'',
    strMusicBrainzID:''     
});


const handlerConsultar = async () => {
     
    try {

        console.log(txtBusqueda);
        const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${txtBusqueda}`;
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error('Error al obtener los datos de los personajes');
        }
        const datos = await respuesta.json();
        const artistaDatos:PropsArtista = {
                                             idArtist: datos.artists[0].idArtist,
                                                strArtist: datos.artists[0].strArtist,
                                                strStyle: datos.artists[0].strStyle,
                                                strGenre: datos.artists[0].strGenre,
                                                strBiographyEN: datos.artists[0].strBiographyEN,
                                                strArtistLogo: datos.artists[0].strArtistLogo,
                                                strMusicBrainzID: datos.artists[0].strMusicBrainzID
                                    };
           

          
           updArtista(artistaDatos);
           
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }

};  

    return (
        <View style={styles.container}>
     
                <View style={styles.overlay}>
                    <View style={styles.row}>
                        <Text style={styles.mainText}>
                            Consulta de Artista
                        </Text>
                    </View>
                    <TextInput
                        onChangeText={(texto) => updTxtBusqueda(texto)}
                        
                        style={[styles.zipCode, styles.mainText]}
                    />
                    <Button onPress={handlerConsultar} title="Consultar" />
                    
            
                </View>
                <View>
                <Artista {...artista} >
                            </Artista>
                </View>
        </View>
    )
}

const baseFontSize = 20;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: '100%',
    },
    backdrop: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',

    },
    overlay: {
        flex: 0.7,
        alignItems: 'center',
        paddingTop: 5,
        backgroundColor: '#000000',
        opacity: 0.5,

    },
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        padding: 30,
    },
    zipContainer: {
        height: baseFontSize + 20,
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: 3,
    },
    zipCode: {
        flex: 1,
        flexBasis: 1,
        width: 200,
        height: 200,
        color: 'green',
        textAlign: 'center',
    },
    mainText: { fontSize: baseFontSize, color: '#FFFFFF' },
});

