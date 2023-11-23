import { useRoutes, BrowserRouter } from 'react-router-dom'
import Album from '../Modell'

import Genre from '../Year'
import './App.css'
import Navbar from '../../Components/Navbar'
import Price from "../Price"



const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <Album />},
        {
            path: '/year', element: <Genre/>
    },
        {path: '/artist', element: <Price/>},
    ])
    return routes
}
const App = ()=>{
    return (
    <BrowserRouter>
            <Navbar />
        <AppRoutes/>
    </BrowserRouter>
    )
}
export default App


/* este código establece un sistema de enrutamiento básico para una aplicación de React
utilizando react-router-dom. Define tres rutas principales ('/', '/year', '/artist') y 
sus respectivos componentes asociados 
(Album, Genre, Price). La barra de navegación (Navbar) se encuentra fuera del área de 
enrutamiento y se renderiza en todas las páginas.*/