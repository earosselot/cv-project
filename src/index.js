import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import uniqid from 'uniqid'

const sections = [
    {
        title: 'General Information',
        id: uniqid(),
        fields: [
            {title: 'Name', type: 'text'},
            {title: 'Last name', type: 'text'},
            {title: 'email', type: 'email'},
            {title: 'Phone number', type: 'number'},
        ],
    },
    {
        title: 'Educational Experience',
        id: uniqid(),
        fields: [
            {title: 'School name', type: 'text'},
            {title: 'Study title', type: 'text'},
            {title: 'From', type: 'date'},
            {title: 'To', type: 'date'},
        ],
    },
    {
        title: 'Work Experience',
        id: uniqid(),
        fields: [
            {title: 'Company name', type: 'text'},
            {title: 'Position', type: 'text'},
            {title: 'Main tasks', type: 'text'},
            {title: 'From', type: 'date'},
            {title: 'To', type: 'date'},
        ],
    }
]

ReactDOM.render(
  <React.StrictMode>
    <App sections={sections} />
  </React.StrictMode>,
  document.getElementById('root')
);
