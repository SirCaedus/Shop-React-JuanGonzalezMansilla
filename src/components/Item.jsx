import { Link } from 'react-router-dom'
import { Col,Card,Button } from 'react-bootstrap'
import ItemCount from './ItemCount'

const Item = ({item}) => {
    return (
        <Col>
            <Card border='secondary' text='center' className='marginCard' key={item.id}>
                <Card.Img variant='top' src={item.imagen} className='imgSize bgMain' alt={item.nombre}/>
                <Card.Body className='bgMain'>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>${item.precio}</Card.Text>
                    <ItemCount item={item} location='main'/>
                    <Button as={Link} to={'/item/'+item.id} variant='info' className='btnAddMain'>Detalles del producto</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item