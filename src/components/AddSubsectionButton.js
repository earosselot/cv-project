import { Component } from 'react'


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
            <button onClick={this.handleAddSubsection}>Add Subsection</button>
        )
    }
}

export default AddSubsectionButton
