import { Component } from 'react'
import Plus from '../../icons/Plus'

class AddSubsectionButton extends Component {
    constructor(props) {
        super(props)
        this.handleAddSubsection = this.handleAddSubsection.bind(this)
    }

    handleAddSubsection() {
        this.props.onAddSubsectionClick()
    }

    render() {
        return (
            <button
                onClick={this.handleAddSubsection}
                className="btn btn-white flex-center" >
                <Plus width="1.75rem" height="1.75rem" fill="var(--darkblue100)" />
            </button>
        )
    }
}

export default AddSubsectionButton
