import { NavLink } from 'react-router-dom'
import { Col,Nav } from 'react-bootstrap'
import { useContexto } from '../CustomProvider'
import Cart from '../../assets/images/carrito.png'

const CartWidget = () => {

    const {totalProductos} = useContexto()
    
    return(
        <Col className='justify-content-end d-flex'>
            <Nav.Link as={NavLink} to='/cart'>
                <span>{totalProductos}</span>
                <img src={Cart} alt='imagen Carrito'/>
            </Nav.Link>
        </Col>
    )
}

export default CartWidget