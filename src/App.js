import './styles/App.css'
import { Component } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'


class App extends Component {

    render() {
        const sections = this.props.sections.map(section =>
            <Section section={section}
                     key={section.id} />
        )
        return (
            <div className="App">
                {/*<header><h1>CV App</h1></header>*/}
                <Header />
                <div className="sections-container">
                    {sections}
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;
