import React from 'react';
import './WindowBody.scss';

const WindowBody = ({ handleIcon }) => {
    return (
        <section className='window-body'>
                <h4>Sorry Nothing Her Yet !!!</h4>
                <img
                    src={handleIcon}
                    alt="Icon"
                    className='body-icon'
                    
                />
        </section>
    )
}

export default WindowBody