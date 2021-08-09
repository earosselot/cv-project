import './../styles/btn.css'
import { Component } from 'react'
import Save from "../icons/Save";
import Edit from "../icons/Edit";

class EditSaveButton extends Component {

    render() {
        return (
            <button
                type="submit"
                className="btn btn-blue" >
                {(this.props.editing)
                    ? <Save width="1.75rem" height="1.75rem" fill="var(--darkblue100)" />
                    : <Edit width="1.75rem" height="1.75rem" fill="var(--darkblue100)" /> }
            </button>
        )
    }
}

export default EditSaveButton
