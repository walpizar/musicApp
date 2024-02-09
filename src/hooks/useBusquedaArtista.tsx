import { useState } from "react";

export const useBusquedaArtista = (texto: string) => {
    const [txtBusqueda, setTxtBusqueda] = useState<string>(texto);

    const updTxtBusqueda = (updtexto: string) => {
        setTxtBusqueda(updtexto);
    };

    return {
        txtBusqueda,
        updTxtBusqueda,
    };
};
