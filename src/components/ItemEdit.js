import './../styles/ItemEdit.css'
import { Component } from 'react'


class ItemEdit extends Component {
    constructor(props) {
        super(props)
        this.handleItemValueChange = this.handleItemValueChange.bind(this)
    }

    handleItemValueChange(e) {
        this.props.onChangeValue(this.props.field.id, e.target.value)
    }

    render() {
        const { field, disabled } = this.props

        return (
            <div className="ItemEdit">
                <label htmlFor={field.id}>{field.title}: </label>
                <input type={field.type}
                       id={field.id}
                       value={field.value}
                       onChange={this.handleItemValueChange}
                       disabled={disabled}
                       readOnly={disabled}/>
            </div>
        )
    }
}

export default ItemEdit
