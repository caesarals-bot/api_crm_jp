
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react/cjs/react.development"
import { Formulario } from '../components/Formulario'

export const EditarCliente = () => {
    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
        
        const obtenerClienteApi = async() => {
        try {
            const url = `http://localhost:4000/clientes/${id}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setCliente(resultado)
        } catch (error) {
            console.log(error)
        }
        setCargando(!cargando)
        }
        obtenerClienteApi()
    }, [])
    const {id} = useParams()
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
            <p className="mt-3">Utilice este formulario para editar datos de un cliente</p>
            { cliente?.nombre ? (
                <Formulario 
                    cliente={cliente}
                    cargando={cargando}
                />
            ) : <p>Cliente Id no valido</p> }
        </>
    )
}
