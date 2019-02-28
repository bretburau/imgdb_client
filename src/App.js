import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import * as actions from './actions/pieceActions';
import { bindActionCreators } from 'redux'
import PieceList from './components/Piecelist';
import TopNav from './components/TopNav'
export class App extends Component {

  componentDidMount() {
    this.props.actions.fetchPieces(); 
  }

  render() {
    return (
      <div>
        <TopNav />
        <PieceList pieces={this.props.pieces.pieces.pieces} /> {/*why is pieces all nested like this?*/}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = state => ({pieces: state})

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
