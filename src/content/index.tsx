import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const root = document.createElement('div');
root.id = 'easy-npm-app-root';
document.getElementById('search')?.prepend(root);

ReactDOM.render(<App />, document.getElementById('easy-npm-app-root'));
