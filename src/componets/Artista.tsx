import { useNavigation } from "@react-navigation/native";
import { Card } from "@rneui/base";
import React from "react";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native"

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
        <View style={styles.card}>
        <Card.Title>{artista.strArtist}</Card.Title>
        <Card.Divider/>
        <View style={{position:"relative",alignItems:"center"}}>
          <Image
              style={{width:"100%",height:100}}
              resizeMode="contain"
              source={{ uri: artista.strArtistLogo }}
            />
            <Pressable  style={styles.boton}onPress={() => navigation.navigate("listaDisco",{...artista})}>
                <Text style={styles.texto}>Ver Discografía</Text>
            </Pressable>

         </View> 
        
        </View>    
        
         
         
       
        </>
    )
}
const styles = StyleSheet.create({
    card: {
        padding:25
      
    },    
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
        backgroundColor: 'rgba(199, 43, 98, 1)',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10
        
    },

  });