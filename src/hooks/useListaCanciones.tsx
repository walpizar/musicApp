import { useState } from "react";
import { Album } from "../models/Album";
import { PropsCanciones } from "../Props/PropsCanciones";
import { Canciones } from "../models/Canciones";

export const useListaCanciones = (listaCanciones: PropsCanciones) => {
    
    const [listaSongs, setLista] = useState<Canciones[]>(listaCanciones.lista);

    const updLista = (listAct: Canciones[]) => {   
        setLista(listAct);
    };
    return {
        listaSongs,
        updLista,
    };

};