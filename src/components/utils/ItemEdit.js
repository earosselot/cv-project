import '../../styles/ItemEdit.css'
import { useState } from 'react'

const ItemEdit = (props) => {
    const { field, disabled } = props
    const [ value, setValue ] = useState('')

    const handleItemValueChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="ItemEdit">
            <label htmlFor={field.id}>{field.title}: </label>
            <input type={field.type}
                   id={field.id}
                   value={value}
                   onChange={handleItemValueChange}
                   required={true}
                   disabled={disabled}
                   readOnly={disabled}/>
        </div>
    )
}

// class ItemEdit extends Component {
//     constructor(props) {
//         super(props)
//         this.handleItemValueChange = this.handleItemValueChange.bind(this)
//     }
//
//     handleItemValueChange(e) {
//         console.log(this.props.field.id, e.target.value)
//         this.props.onChangeValue(this.props.field.id, e.target.value)
//     }
//
//     render() {
//         const { field, disabled } = this.props
//
//         return (
//             <div className="ItemEdit">
//                 <label htmlFor={field.id}>{field.title}: </label>
//                 <input type={field.type}
//                        id={field.id}
//                        value={field.value}
//                        onChange={this.handleItemValueChange}
//                        required={true}
//                        disabled={disabled}
//                        readOnly={disabled}/>
//             </div>
//         )
//     }
// }

export default ItemEdit
