import logo from './assets/react.svg'
import {Link} from 'react-router-dom'

const Home = () => {

    return (
        <>
            <Link to="./Inicio">
            <img src ={logo} width="100" alt="logo" />
            </Link>
        </>
    )
}

export default Home