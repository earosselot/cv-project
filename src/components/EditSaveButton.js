import './../styles/btn.css'
import { Component } from 'react'

class EditSaveButton extends Component {
    constructor(props) {
        super(props)
        this.handleStartEditingClick = this.handleStartEditingClick.bind(this)
    }

    handleStartEditingClick() {
        this.props.onStartEditing()
    }

    render() {
        return (
            <button
                onClick={this.handleStartEditingClick}
                className="btn btn-blue" >
                {(this.props.editing) ? 'Save' : 'Edit'}
            </button>
        )
    }
}

export default EditSaveButton
