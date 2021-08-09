import './../styles/btn.css'
import { Component } from 'react'


class DeleteButton extends Component {
    constructor(props) {
        super(props)
        this.handleRemoveSubsection = this.handleRemoveSubsection.bind(this)
    }

    handleRemoveSubsection() {
        this.props.onRemoveSubsectionClick(this.props.subsectionId)
    }

    render() {
        return (
            <button
                onClick={this.handleRemoveSubsection}
                className="btn btn-orange-outline flex-end">
                x
            </button>
        )
    }
}

export default DeleteButton
