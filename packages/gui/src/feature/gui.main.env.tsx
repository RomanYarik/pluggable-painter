import React from 'react';
import ReactDOM from 'react-dom';
import guiFeature, { mainEnv } from './gui.feature';
import { st, classes } from './main.st.css'

guiFeature.setup(mainEnv, () => {
    const root = document.createElement('div');
    root.style.height = '100vh'
    document.body.appendChild(root);

    ReactDOM.render(<div className={st(classes.root)}>Hello w22orld</div>, root)
})