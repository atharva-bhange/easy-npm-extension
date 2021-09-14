import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'

const root = document.createElement('div')
root.id = 'app-root'
document.getElementById('search')?.prepend(root)

ReactDOM.render(<App />, document.getElementById('app-root'))
