import './styles/App.css'
import { Component } from 'react'
import Section from './components/Section'


class App extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        const sections = this.props.sections.map(section =>
            <Section section={section}
                     key={section.id}/>
        )

        return (
            <div>
                <h1>CV 'App'lication</h1>
                {sections}
            </div>
        )
    }
}

export default App;
