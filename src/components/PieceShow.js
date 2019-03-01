import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tagActions from '../actions/tagActions';
import * as pieceActions from '../actions/pieceActions';
import TopNav from './TopNav';
import { Container, Row, Col } from 'reactstrap'

class PieceShow extends React.Component {
    componentDidMount() {
        if(Object.keys(this.props.piece).length === 0 ) {
            this.props.actions.fetchPieces()
        }
    }

    render() {
        const piece = this.props.piece
        console.log(piece)
        if(Object.keys(piece).length !== 0 ) {
            const tags = piece.tags.map(tag => {
                return(
                    <li key={tag.id}>{tag.name}</li>
                )
            })
            return(
                <div>
                    <TopNav />
                    <Container className='mt-sm-4'>
                        <Row>
                            <Col className='text-center'>
                                <h3>{piece.name}</h3>
                                <img src={"https://vast-taiga-24562.herokuapp.com" + piece.picture.url} alt={piece.name} width='300'/>
                                <h4>Tags:</h4>
                                <ul className='clean-ul'>{tags}</ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        } else {
            return(<TopNav />)
        }
    }
}
const mapStateToProps = (state, ownProps) => { //TODO state empty if directly routed to page?
        const piece = state.pieces.pieces.find((p) => {
            return p.id === parseInt(ownProps.match.params.pieceId, 10)
        })
        if(piece) {
            return { 
                piece,
                pieces: state.pieces,
                tags: state.tags
            }
        } else {
            return {
                piece: {}, 
                pieces: state.pieces,
                tags: state.tags
        }
    }
}

const mapDispatchToProps = dispatch => (    {
    actions: bindActionCreators(Object.assign({}, tagActions, pieceActions), dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PieceShow)