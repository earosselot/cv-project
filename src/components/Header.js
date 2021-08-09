import '../styles/Header.css'
import React, { Component } from 'react'
import CvIcon from '../icons/CvIcon'

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <CvIcon width="40px" height="40px"/>
                <h1>CV App</h1>
            </header>
        )
    }
}

export default Header