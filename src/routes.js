import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConnectedApp } from './App';
import UploadForm from './components/upload_form';
import PieceShow from './components/PieceShow';
import TagIndex from './components/TagIndex'

export default () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={ConnectedApp} />>
                <Route  path='/upload' component={UploadForm} />
                <Route  path='/pieces/:pieceId' component={PieceShow} />
                <Route  path='/tags' component={TagIndex} />
            </Switch>
        </Router>
    )
}
