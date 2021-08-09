import './styles/App.css'
import { Component } from 'react'
import Section from './components/Section'
import Footer from './components/Footer'


class App extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        const sections = this.props.sections.map(section =>
            <Section section={section}
                     key={section.id} />
        )

        return (
            <div className="App">
                <header><h1>CV App</h1></header>
                <div className="sections-container">
                    {sections}
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;
