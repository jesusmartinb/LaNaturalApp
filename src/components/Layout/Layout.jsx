import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <div>
            <h1>Layout</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/search" >Buscar</Link></li>
                    <li><Link to="/carrito" >Carrito</Link></li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    )
}

export default Layout;