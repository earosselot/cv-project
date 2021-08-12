import '../../styles/ItemEdit.css'

const Input = ({ id, label, value, editing, onChange, type }) => {

    const handleItemValueChange = (e) => {
         onChange(e)
    }

    return (
        <div className="ItemEdit">
            <label htmlFor={id}>{label}</label>
            <input type={type}
                   value={value}
                   onChange={handleItemValueChange}
                   required={true}
                   disabled={!editing}
                   readOnly={!editing}/>
        </div>
    )
}

export default Input
