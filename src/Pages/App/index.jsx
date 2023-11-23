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