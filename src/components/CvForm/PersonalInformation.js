import '../../styles/Subsection.css'
import { useState } from 'react'
import useInput from '../hooks/useInput'
import Input from '../utils/Input'
import ItemEdit from '../utils/ItemEdit'
import EditSaveButton from '../utils/EditSaveButton'
import DeleteButton from '../utils/DeleteButton'
import uniqid from 'uniqid'
import Section from "./Section";


const PersonalInformation = (props) => {

    const [name, setName] = useInput('')
    const [lastName, setLastName] = useInput('')
    const [email, setEmail] = useInput('')
    const [phone, setPhone] = useInput('')
    const [editing, setEditing] = useState(true)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setEditing(!editing)
    }

    return (
        <Section title="Personal Information">
            <div className="Subsection">
                <form className="subsection-form" onSubmit={handleFormSubmit}>
                    <div className="form-body">
                        <Input
                            id={uniqid()}
                            type="text"
                            label="Name:"
                            value={name}
                            onChange={setName}
                            editing={editing}
                        />
                        <Input
                            id={uniqid()}
                            type="text"
                            label="Last Name:"
                            value={lastName}
                            onChange={setLastName}
                            editing={editing}
                        />
                        <Input
                            id={uniqid()}
                            type="email"
                            label="email:"
                            value={email}
                            onChange={setEmail}
                            editing={editing}
                        />
                        <Input
                            id={uniqid()}
                            type="number"
                            label="Phone number:"
                            value={phone}
                            onChange={setPhone}
                            editing={editing}
                        />
                    </div>
                    <div className="btn-container">
                        <EditSaveButton editing={editing} />
                    </div>
                </form>
            </div>
        </Section>

    )
}

export default PersonalInformation