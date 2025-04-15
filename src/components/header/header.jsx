import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { use } from 'react';
import { useSelector } from 'react-redux';
const Header = () => {
    const item=useSelector(state=>state.cart.items)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Products App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Shoppingcard">
                                {item.length!=0 &&<p className='bg-danger rounded-circle text-center' style={{height:'20px',width:'20px',fontSize:"15px",marginBottom:'-5px',marginLeft:'12px'}}>{item.length}</p>}
                                <FontAwesomeIcon icon={faCartShopping} />
                                </Link>
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;