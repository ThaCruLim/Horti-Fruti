import { useHistory } from 'react-router-dom'
import './styles.css'

import Logo from '../assets/logo2.png'

import { Button } from 'antd'

export default function Inicio(){

    const history = useHistory()

    async function ListarProdutos(){
        history.push('/produtos')
    }

    return(

        <div className='inicio__container'>
            <section>
                <img src={Logo} alt='logo' className='center'/>
                <br/>
              <Button className='center' onClick={ListarProdutos}>Ver Produtos</Button>
            </section>
        </div>
    )
}