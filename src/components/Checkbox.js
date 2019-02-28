import React from 'react'
import { Label, Input } from 'reactstrap'

export default class Checkbox extends React.Component {
    constructor() {
        super()

        this.state = {
            isChecked: false
        }
    }

    toggleCheckbox = () => {
        const {handleCheckboxChange} = this.props
        this.setState(({ isChecked }) => (
            {
              isChecked: !isChecked,
            }
        ));
        handleCheckboxChange(this.props.tag, this.state.isChecked)
    }

    render() {
        const tag = this.props.tag
        return(
            <Label check className='mr-sm-3' >
                <Input type='checkbox' value={tag.name} checked={this.state.isChecked} onChange={this.toggleCheckbox}  />
                {tag.name}
            </Label>
        )
    }
}