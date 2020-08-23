import React from 'react';
import './Layouts.css';

const layout = (props) =>(
    <React.Fragment>
        <div>
            Toolbar, Side Drawer, Backdrop
        </div>
        <main className='layout-container'>
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;