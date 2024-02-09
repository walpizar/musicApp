import { useState } from "react";

export const useIdArtista = (idArtista: string) => {
    const [id, setIdArtista] = useState<string>(idArtista);

    const updIdArtista = (updtexto: string) => {
        setIdArtista(updtexto);
    };

    return {
        id,
        updIdArtista,
    };
};
