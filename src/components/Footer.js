import './../styles/Footer.css'
import { Component } from 'react'
import FooterIcon from "./FooterIcon";

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <p>2021 earosselot</p>
                <a href="https://github.com/earosselot" target="_blank" rel="noreferrer">
                    <FooterIcon />
                </a>
            </footer>
        )
    }
}

export default Footer
