import React, { useEffect, useState } from "react";
import api from '../../services/api';

import './styles.css'
import { Card } from 'antd';

export default function Produtos(){
    const [ produtos, setprodutos] = useState([])


    useEffect(() => {
        api.get('/item')
        .them((response) =>{
        setprodutos(response.data)
        })
        .catch((err) => {
            console.log("Aconteceu um erro inesperado" + err)
        })
}, [])

    return(

        <div className="produto__container">
            <h1>Relação de todos os Produtos</h1>

            <div className="produto__card__container">
                {produtos.map(produto => (
                    <Card key={produto.id} title={produto.name} bordered={false} style={{width: 300}}>
                        <p>
                            Descrição: {produto.description}
                        </p>
                        <p>
                            Quantidade: {produto.quantity}
                        </p>
                    </Card>
                ))}

            </div>

        </div>

    )


}