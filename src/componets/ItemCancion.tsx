import { Text, View } from "react-native";
import { Canciones } from "../models/Canciones";
import { ListItem } from "@rneui/base";

export const ItemCancion = (cancion: Canciones) => {

    return (


        <View> 
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{cancion.strTrack}</ListItem.Title>
                    <ListItem.Subtitle>{cancion.strGenre}- {cancion.intDuration}</ListItem.Subtitle>                   
            
                </ListItem.Content>
            </ListItem>

        </View>
    );
};