import { Component } from 'react'

// this.props = {
//     field = {
//         id: "ks36mnzk"
//         title: "Name"
//         type: "text"
//         value: ''
//     }
// }


class ItemEdit extends Component {
    constructor(props) {
        super(props)
        this.handleItemValueChange = this.handleItemValueChange.bind(this)
    }

    handleItemValueChange(e) {
        this.props.onChangeValue(this.props.field.id, e.target.value)
    }

    render() {
        const { field } = this.props

        return (
            <div>
                <label htmlFor={field.id}>{field.title}: </label>
                <input type={field.type}
                       id={field.id}
                       value={field.value}
                       onChange={this.handleItemValueChange} />
            </div>
        )
    }
}

export default ItemEdit
