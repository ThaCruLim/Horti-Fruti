import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { useParams } from "react-router-dom";
import './styles.css'

import { Card, message } from "antd";

export default function DetalhesProduto(){

    const [produto, setProduto] = useState()

    let {id} = useParams();

    useEffect(() =>{
        api.get(`/item/${id}`)
        .then((response) =>{
            setProduto(response.data)
        })
        .catch((err) =>
            message.error("Aconteceu um erro inesperado")
        )
    }, [])


    
}