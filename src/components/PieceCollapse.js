import React, { Component } from 'react';
import { Collapse, Button, Row } from 'reactstrap';
import Piece from './Piece';

class PieceCollapse extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
      console.log(this.props)
      const cardsList = this.props.tag.pieces.map(piece => {
          return <Piece piece={piece} key={piece.id} />
      })
    return (
      <div>
        <Button color="success" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.props.tag.name}</Button>
        <Collapse isOpen={this.state.collapse}>
            <Row>{cardsList}</Row>
          {/* <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card> */}
        </Collapse>
      </div>
    );
  }
}

export default PieceCollapse;