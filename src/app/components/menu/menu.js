import React from 'react';
import { Link } from 'react-router';

class MenuComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav className='title'>
                <h1>
                    <Link to='/'>We</Link>
                    {' build '} 
                    <Link to='/apps'>high quality software</Link>, 
                    {' and '}
                    <Link to='/consulting'>help others do the same</Link>.
                </h1>
            </nav>
        )
    }
}

export default MenuComponent;