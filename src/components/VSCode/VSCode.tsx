import React, { useContext, useEffect, useState } from 'react';
import './VSCode.scss';
import { store } from '../../App';
import { ReactComponent as Close } from '../../resources/images/svg/close.svg';
import { ReactComponent as Minimize } from '../../resources/images/svg/minimize.svg';
import { ReactComponent as Stretch } from '../../resources/images/svg/stretch.svg';
import Draggable from 'react-draggable';

const VSCode = () => {

    const [state, dispatch] = useContext(store);

    const closeWindow = (e : React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        dispatch({
            type: "vscode/CLOSE",
        });
    };

    return (
        <Draggable handle="#vscode-handle">
            <div className={`vscode-menu ${state.vscodeWindow.vscodeClose ? 'closed': ""}`} id='vscode-menu'>
                <section className='handle' id='vscode-handle'>
                    <div className='dots'>
                        <div className='dot red' onClick={closeWindow}>
                            <Close className='close' />
                        </div>

                        <div className='dot yellow' onClick={() => { }}>
                            <Minimize className='minimize' />
                        </div>

                        <div className='dot green' onClick={() => { }}>
                            <Stretch className='stretch' />
                        </div>
                    </div>
                    <h1>
                        VS Code
                    </h1>
                </section>
                <section className="vscode-container">
                    <div>
                        <iframe
                            src='https://stackblitz.com/angular/pxxjqeeegeba?devToolsHeight=33&embed=1&file=src/index.html&hideNavigation=1&theme=dark'
                            title="VS Code for macOS Web"
                        />
                    </div>
                </section>
            </div>
        </Draggable>
    )
}

export default VSCode