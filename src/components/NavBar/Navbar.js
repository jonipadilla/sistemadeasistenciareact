// import logo from './img/logoprincipal.png'
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <nav>
            <div className="conteiner">
                sistema de asistencia
                {/* <img className="logo" src={logo} alt="src" /> */}
                <div>
                    <button>Empleado</button>
                    <button>Elementos De Tabajo</button>
                    <button>Consultas</button>
                    
                </div>
                <div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;