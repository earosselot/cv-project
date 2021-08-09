import './../styles/Footer.css'
import { Component } from 'react'
import Github from '../icons/Github'

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <p>2021 earosselot</p>
                <a className="footer-link" href="https://github.com/earosselot" target="_blank" rel="noreferrer">
                    <Github height="2rem" width="2rem" fill="var(--darkblue100)" />
                </a>
            </footer>
        )
    }
}

export default Footer
