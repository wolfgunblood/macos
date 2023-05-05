import React, { useContext, useEffect, useState,MouseEvent } from 'react';
import './WindowNav.scss';
import { store } from '../../App';
import { ReactComponent as Close } from '../../resources/images/svg/close.svg';
import { ReactComponent as Minimize } from '../../resources/images/svg/minimize.svg';
import { ReactComponent as Stretch } from '../../resources/images/svg/stretch.svg';
import Draggable from 'react-draggable';

const WindowNav = ({ handleName, name, isClose, setIsClose }) => {
    // console.log(handleName);
    const closeWindow = (e : React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();

        setIsClose((prev) => !prev);
    }
    return (
        <section className='handle1' id={`${handleName}`}>
            <div className='dots-ver2'>
                <div className='dot-ver2 red1' onClick={closeWindow}>
                    <Close className='close1' />
                </div>

                <div className='dot-ver2 yellow1' onClick={() => { }}>
                    <Minimize className='minimize1' />
                </div>

                <div className='dot-ver2 green1' onClick={() => { }}>
                    <Stretch className='stretch1' />
                </div>
            </div>
            <div className='windowNav-header'>
            <h1>
                {name}
            </h1>
            </div>
        </section>
    )
}

export default WindowNav