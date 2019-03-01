import React from 'react'
import {Link} from 'react-router-dom'
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Col } from 'reactstrap';

const Piece = (props) => {
    console.log(props)
    return(
        <Col md="3">
            <Card className='text-center'>
                <img width='100%' src={"https://vast-taiga-24562.herokuapp.com" + props.piece.picture.url} />
                <CardBody>
                    <CardTitle>{props.piece.name}</CardTitle>
                    <Link to={`/pieces/${props.piece.id}`}>View</Link>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Piece;