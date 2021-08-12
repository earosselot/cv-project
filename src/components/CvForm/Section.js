import '../../styles/Section.css'
import { useState } from 'react'
import Subsection from './Subsection'
import PersonalInformation from './PersonalInformation'
import AddSubsectionButton from '../utils/AddSubsectionButton'
import uniqid from 'uniqid'

const Section = (props) => {
    const { title, children } = props
    const [subsections, setSubsections] = useState([{id: uniqid()}])

    const handleAddSubsection = () => {
        setSubsections(subsections.concat({id: uniqid()}))
    }

    // const handleRemoveSubsection = (subsectionId) => {
    //     const subsectionsWithoutRemovedSubsection = subsections.filter(subsection => subsection.id !== subsectionId)
    //     setSubsections(subsectionsWithoutRemovedSubsection)
    // }

    // const subsectionsJSX = subsections.map(subsection =>
    //     <Subsection fields={section.fields}
    //                 section={section.title}
    //                 key={subsection.id}
    //                 id={subsection.id}
    //                 onRemoveSubsectionClick={handleRemoveSubsection}
    //     /> )

    return (
        <div className="Section">
            <h3>{title}</h3>
            <div>{children}</div>
            {/*{(section.title !== 'General Information') ?*/}
            {/*    <AddSubsectionButton*/}
            {/*        onAddSubsectionClick={handleAddSubsection}/>*/}
            {/*    : null }*/}
        </div>
    )
}

// class Section extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             subsections: [
//                 {id: uniqid()},
//             ]
//         }
//         this.handleAddSubsection = this.handleAddSubsection.bind(this)
//         this.handleRemoveSubsection = this.handleRemoveSubsection.bind(this)
//     }
//
//     handleAddSubsection() {
//         this.setState(() => {
//             return {
//                 subsections: this.state.subsections.concat({id: uniqid()})
//             }
//         })
//     }
//
//     handleRemoveSubsection(subsectionId) {
//         const newSubsections = this.state.subsections.filter(subsection =>
//             subsection.id !== subsectionId)
//         this.setState(() => {
//             return {
//                 subsections: newSubsections,
//             }
//         })
//     }
//
//     render() {
//         const { section } = this.props
//
//         const subsections = this.state.subsections.map(subsection =>
//             <Subsection fields={section.fields}
//                         section={section.title}
//                         key={subsection.id}
//                         id={subsection.id}
//                         onRemoveSubsectionClick={this.handleRemoveSubsection} /> )
//
//         return (
//             <div className="Section">
//                 <h3>{section.title}</h3>
//                 {subsections}
//                 {(section.title !== 'General Information') ?
//                     <AddSubsectionButton
//                         onAddSubsectionClick={this.handleAddSubsection}/>
//                     : null }
//             </div>
//         )
//     }
// }

export default Section
