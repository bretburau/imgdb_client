import React from 'react'
import { bindActionCreators } from 'redux';
import * as tagActions from '../actions/tagActions';
import * as pieceActions from '../actions/pieceActions';
import { connect } from 'react-redux'
import TopNav from './TopNav';
import TagList from './Taglist';

class TagIndex extends React.Component {
    componentDidMount() {
        if(this.props.tags.tags.length === 0) {
            this.props.actions.fetchTags()
        }
    }

    render() {
        console.log(this.props.tags.tags)
        if(this.props.tags.tags.length > 0) {
            return(
                <div>
                    <TopNav />
                    <h3 className='text-center mt-sm-5 mb-sm-3'>All Tags:</h3>
                    <TagList tags={this.props.tags.tags}/>
                </div>
            )
        } else {return <div><TopNav /></div>}
    }
}

const mapStateToProps = (state) =>({
    pieces: state.pieces,
    tags: state.tags
})

const mapDispatchToProps = dispatch => (    {
    actions: bindActionCreators(Object.assign({}, tagActions, pieceActions), dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(TagIndex)