

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
            let response = await fetch ('https://jsonplaceholder.typicode.com/todos/1');
            let json = await response.json ();

            const dataArray = Array.isArray (json) ? json : [json] ;

           setEntidades(dataArray);

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