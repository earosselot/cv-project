import { Component } from 'react'
import Item from './Item'
import ItemEdit from './ItemEdit'
import EditSaveButton from './EditSaveButton'
import DeleteButton from './DeleteButton'
import uniqid from 'uniqid'


class Subsection extends Component {
    constructor(props) {
        super(props)
        let stateFields = this.props.fields.map(field =>
            Object.assign(field, {id: uniqid(), value: ''}))
        this.state = {
            fields: stateFields,
            editing: true,
        }
        this.handleStartEditingClick = this.handleStartEditingClick.bind(this)
        this.handleItemValueChange = this.handleItemValueChange.bind(this)
    }

    handleStartEditingClick() {
        this.setState(() => {
            return {
                editing: !this.state.editing,
            }
        })
    }

    handleItemValueChange(fieldId, fieldValue) {
        const updatedFields = this.state.fields.map(field => {
            if (field.id === fieldId) {
                field.value = fieldValue
            }
            return field
        })
        this.setState(() => {
            return {
                fields: updatedFields
            }
        })
    }

    render() {
        const { fields } = this.state

        let fieldsArray
        if (this.state.editing) {
            fieldsArray = fields.map(field =>
                <ItemEdit field={field}
                          key={field.id}
                          onChangeValue={this.handleItemValueChange} />
            )
        } else {
            fieldsArray = fields.map(field =>
                <Item field={field}
                      key={field.id} />
            )
        }

        return (
            <div>
                <form>
                    {fieldsArray}
                </form>
                <EditSaveButton
                    editing={this.state.editing}
                    onStartEditing={this.handleStartEditingClick} />
                {(this.props.section !== 'General Information') ?
                    <DeleteButton
                        subsectionId={this.props.id}
                        onRemoveSubsectionClick={this.props.onRemoveSubsectionClick} />
                    : null }
            </div>
        )
    }
}

export default Subsection