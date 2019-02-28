import React from 'react';
import Piece from './Piece'
import { Row } from 'reactstrap'

const PieceList = (props) => {
    const createList = () => {
        if(props.pieces){
            return props.pieces.map(piece => {
                return(
                    <Piece key={piece.id} piece={piece} />
                )
            })
        } 
    }
    return(
        <Row>{createList()}</Row>
    )
}

export default PieceList;
