import { useState } from "react";
import { PropsArtista } from "../componets/Artista";

export const useResponseArtista = (elArtista: PropsArtista) => {
    const [artista, setArtista] = useState<PropsArtista>(elArtista);

    const updArtista = (datosResponse: PropsArtista) => {
        setArtista(datosResponse);
    };
    return {
        artista,
        updArtista,
    };

};
