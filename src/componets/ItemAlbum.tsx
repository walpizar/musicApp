import { Image, StyleSheet, Text, View } from "react-native";
import { Album } from "../models/Album";
import { Avatar, ListItem } from "@rneui/base";


export const ItemAlbum = (album: Album) => {






    return (
        <View>

        <ListItem bottomDivider>
            <Avatar
            rounded
            source={{ uri: album.strAlbumThumb }}
            />
            <ListItem.Content>
            <ListItem.Title>{album.strAlbum}</ListItem.Title>
            <ListItem.Subtitle>{album.intYearReleased}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
       

        </View>
    );
};

const styles = StyleSheet.create({
    imagen: {
        borderRadius: 100,
        width: 100,
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