import '../../styles/Subsection.css'
import { useState } from 'react'
import ItemEdit from '../utils/ItemEdit'
import EditSaveButton from '../utils/EditSaveButton'
import DeleteButton from '../utils/DeleteButton'
import uniqid from 'uniqid'

const Subsection = (props) => {

    // const stateFields = props.fields.map(field =>
    //     Object.assign(field, {id: uniqid(), value: ''}))
    //
    // const [fields, setFields] = useState(stateFields)
    const [editing, setEditing] = useState(true)

    // const handleItemValueChange = (fieldId, fieldValue) => {
    //     const updatedFields = fields.map(field => {
    //         if (field.id === fieldId) {
    //             field.value = fieldValue
    //         }
    //         return field
    //     })
    //     setFields(updatedFields)
    // }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setEditing(!editing)
    }

    let fieldsArray = props.fields.map(field =>
            <ItemEdit field={field}
                      key={uniqid()}
                      // onChangeValue={handleItemValueChange}
                      disabled={!editing}/>
    )

    return (
        <div className="Subsection">
            <form className="subsection-form" onSubmit={handleFormSubmit}>

                {/* TODO: cuando submito se actualiza el div form body, entonces se desmontan y montan los ItemEdit y se les resetea el estado*/}
                <div className="form-body">
                    {fieldsArray}
                </div>
                <div className="btn-container">
                    <EditSaveButton
                        editing={editing}
                        />
                    {(props.section !== 'General Information')
                        ? <DeleteButton
                            subsectionId={props.id}
                            onRemoveSubsectionClick={props.onRemoveSubsectionClick} />
                        : null }
                </div>
            </form>
        </div>
    )

}

// class Subsection extends Component {
//     constructor(props) {
//         super(props)
//         let stateFields = this.props.fields.map(field =>
//             Object.assign(field, {id: uniqid(), value: ''}))
//         this.state = {
//             fields: stateFields,
//             editing: true,
//         }
//         this.handleItemValueChange = this.handleItemValueChange.bind(this)
//         this.handleFormSubmit = this.handleFormSubmit.bind(this)
//     }
//
//     handleItemValueChange(fieldId, fieldValue) {
//         const updatedFields = this.state.fields.map(field => {
//             if (field.id === fieldId) {
//                 field.value = fieldValue
//             }
//             return field
//         })
//         this.setState(() => {
//             return {
//                 fields: updatedFields
//             }
//         })
//     }
//
//     handleFormSubmit(e) {
//         e.preventDefault()
//         this.setState(() => {
//             return {
//                 editing: !this.state.editing,
//             }
//         })
//     }
//
//     render() {
//         const { fields } = this.state
//
//         let fieldsArray
//         fieldsArray = fields.map(field =>
//             <ItemEdit field={field}
//                       key={field.id}
//                       onChangeValue={this.handleItemValueChange}
//                       disabled={!this.state.editing}/>
//         )
//
//         return (
//             <div className="Subsection">
//                 <form className="subsection-form" onSubmit={this.handleFormSubmit}>
//                     <div className="form-body">
//                         {fieldsArray}
//                     </div>
//                     <div className="btn-container">
//                         <EditSaveButton
//                             editing={this.state.editing}
//                             onStartEditing={this.handleStartEditingClick} />
//                         {(this.props.section !== 'General Information')
//                             ? <DeleteButton
//                                 subsectionId={this.props.id}
//                                 onRemoveSubsectionClick={this.props.onRemoveSubsectionClick} />
//                             : null }
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

export default Subsection