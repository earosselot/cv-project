import './styles/App.css'
// import { Component } from 'react'
import Header from './components/Header'
import Section from './components/CvForm/Section'
import Footer from './components/Footer'
import Main from "./components/Main";

const App = (props) => {

    const sections = props.sections.map(section =>
        <Section section={section}
                 key={section.id} />
    )

    return (
        <div className="App">
            <Header />
            <Main />
            {/*<div className="sections-container">*/}
            {/*    {sections}*/}
            {/*</div>*/}
            <Footer />
        </div>
    )
}

export default App
