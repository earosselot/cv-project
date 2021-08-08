import { Component } from 'react'

// this.props = {
//     field = {
//         id: "ks36mnzk"
//         title: "Name"
//         type: "text"
//     }
// }

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { field } = this.props

        return (
            <div>
                <b>{`${field.title}: `}</b>{field.value}
            </div>
        )
    }
}

export default Item