import React from 'react'
import PieceCollapse from './PieceCollapse'

const Tag = (props) => {
    return(
        <li>
            <PieceCollapse tag={props.tag}></PieceCollapse>
        </li>
    )
}

export default Tag;