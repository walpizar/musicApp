import { useState } from "react";

import { Album } from "../models/Album";
import { PropsAlbums } from "../Props/PropsAlbums";

export const useListaAlbums = (listaAlbunes: PropsAlbums) => {
    
    const [listaAlbums, setLista] = useState<Album[]>(listaAlbunes.lista);

    const updLista = (listAct: Album[]) => {
        setLista(listAct);
    };
    return {
        listaAlbums,
        updLista,
    };

};