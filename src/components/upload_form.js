    import React from 'react'
    import Dropzone from 'react-dropzone'
    // import { ConnectedApp } from '../App';
    import { connect } from 'react-redux'
    import { bindActionCreators } from 'redux';
    import * as tagActions from '../actions/tagActions';
    import * as pieceActions from '../actions/pieceActions';
    import Checkbox from '../components/Checkbox'
    import TopNav from './TopNav';
    import { Container, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'


    class UploadForm extends React.Component {
        constructor() {
            super()

            this.state = {
                file: [],
                title: '',
                tags: [],
                upload: ''
            }
        }

        componentWillMount = () => {
            this.selectedCheckboxes = new Set();
        }

        
        componentDidMount() {
            this.props.actions.fetchTags()
            if (this.props.pieces.pieces.length === 0) {
                this.props.actions.fetchPieces() ///protecting against empty redux state
            }
        }

        handleTextChange = (event) => {
            this.setState({
                title: event.target.value
            })
        }

        handleDrop = (files) => {
            this.setState({
                file: files[0]
            })
        }

        readFile = (e) => {
            e.preventDefault();
            let tagIds = [];
            for (const checkbox of this.selectedCheckboxes) {
                tagIds.push(checkbox.id)
            }
            if(this.state.file) {
                let formPayload = new FormData();
                formPayload.append('uploaded_image', this.state.file);
                formPayload.append('name', this.state.title) //TODO best way to do this?
                formPayload.append('tagIds', tagIds)
                // this.sendImageToController(formPayload);
                this.saveImageToState(formPayload)
            }
        }
        
        saveImageToState = (formPayload) => {
            this.props.actions.addPiece(formPayload)
                .then(this.props.history.push(`/`))
        }

        sendImageToController = (formPayload) => {
            fetch(`/pieces/create`, {
                credentials: 'same-origin',
                headers: {},
                method: 'POST',
                body: formPayload
            })
            //todo error handling?
            .then(response => response.json())
            .then(imageFromController => {
                //   this.setState({uploads: this.state.uploads.concat(imageFromController)}) // <---NOT NECESSARY?  
                // this.setState({uploads: imageFromController}) 
            })
            // console.log(this.state)
            // this.props.history.push('/') // re-routes to home page, TODO send to piece show page
        }

        toggleCheckbox = label => {
            if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
            } else {
            this.selectedCheckboxes.add(label);
            }
        } 

        render() {
            const tagCheckboxList = this.props.tags.tags.map((tag, i) => { //TODO more weird nesting?!
                return <Checkbox name='checkboxes'
                tag={tag} 
                key={i}
                handleCheckboxChange={this.toggleCheckbox}
                className='mr-sm-5'
                />
            })
            return(
                <div>
                    <TopNav />
                    <Container>
                        <br />  
                        <h3 className='mb-sm-4' style={{textAlign: 'center'}}>Upload a new image</h3>
                        <Row>
                            <Col className='col-sm-3'>
                                <Dropzone onDrop={this.handleDrop.bind(this)}>
                                    <p>Click or drag to add an image!</p>
                                </Dropzone>
                            </Col>
                            <Col className='col-sm-9'>
                                <Form inline className='ml-sm-1 p-sm-5 text-center fill-height form-border'  onSubmit={this.readFile.bind(this)}>
                                    <Container>
                                        <Row>
                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                                <Input type='text' placeholder='Title' name='title' id='title' value={this.state.title} onChange={this.handleTextChange} />
                                            </FormGroup>
                                        </Row>
                                        <Row className='mt-sm-3'>
                                            <FormGroup check inline className="mb-2 mr-sm-2 mb-sm-0">
                                                <Label for="checkboxes" className="mr-sm-2">Tags:</Label>
                                                {tagCheckboxList}
                                            </FormGroup>
                                        </Row>
                                        {/* <Row className='mt-sm-3'>
                                            <FormGroup inline>
                                                <Input type='text' placeholder='Add a new Tag' name='newTag' />
                                                <Button>Add</Button>
                                            </FormGroup>
                                        </Row> */}
                                    </Container>
                                    <Button className='zero-auto mt-sm-5'>Submit</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                    
                </div>
            )
        }
    }

    const mapStateToProps = (state) =>({
        pieces: state.pieces,
        tags: state.tags
    })

    const mapDispatchToProps = dispatch => ({
        actions: bindActionCreators({...tagActions, ...pieceActions}, dispatch)
    })


    export default connect(mapStateToProps, mapDispatchToProps)(UploadForm)