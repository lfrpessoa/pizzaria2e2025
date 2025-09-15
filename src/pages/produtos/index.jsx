import axios from 'axios'
import { useEffect, useState } from 'react';


const Produtos = () => {

    axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
    .then((response)=>{
        alert(JSON.stringify(response))
    })

    //consumir os produtos do endpoint (rota)
    useEffect = (() => { 

    }, []);

    //Objetos que possui lista de pizzas
    const pizzas  = [
       "Pizza de Frango", 
        "Pizza de muçarela",
        "Pizza de calabresa",
        "Pizza de Baiana",
        "Pizza de Portuguesa", 
        "Pizza de cicno queijos"
    ];
    //mapeamento das pizzas da lista(iteração)
    const listasPizzas = pizzas.map(pizza => <Li>{pizza}</Li>);
    return(
        <>
         <h3>Listagem de Produtos</h3>
      <ul> 
        {listasPizzas}
      </ul>
        </>
    )
}
export default Produtos