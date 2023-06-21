

import {  useEffect, useState } from "react";
import { Entidade } from "../../types/entidade";
import DadosEntidade from "../dadosentidade";

function ContainerEntidade () {

    const [entidades, setEntidades] = useState<Entidade[]>([]);

    const[loading, setLoading] = useState(false);

    useEffect (() => {
        carregarEntidades();
    }, []);

    const carregarEntidades = async () => {
        setLoading(true);
        try{
            let response = await fetch ('https://jsonplac5eholder.typicode.com/todos/');
            let json = await response.json ();

           setEntidades(json);
        } catch (e) {
            alert ('Falha no carregamento das informações');
            setLoading(false);
            console.error(e);
        }
    }

    return (
        <div>
           {entidades.map ((item, index) => (
            <DadosEntidade key={index} dados={item}/>
           ))}

        </div>
    )
    }

export default ContainerEntidade;