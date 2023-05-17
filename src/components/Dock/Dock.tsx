import React,{ MouseEvent, useContext, useEffect, useState} from 'react';
import { store } from '../../App';
import './Dock.scss';
import { finder,
        applemusic,
        arcade,
        calculator,
        calendar,
        discord,
        github,
        netflix,
        photos,
        scalable,
        spotify,
        twitter,
        vscode,
        weather
} from '../../resources';



const Dock = () => {
    const [ state, dispatch ] = useContext(store);
    const [ isDock, setIsDock ] = useState(false);


    const openWallpaper = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({type: 'wallpaper/OPEN'});
    
    };
    const openWeather = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({type: 'weather/OPEN'});
    
    };
    const openVSCode = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({type: 'vscode/OPEN'});
    
    };

    // const openFinder = (e: React.MouseEvent<HTMLDivElement>) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     const finderWindow = document.getElementById('finder-window');
    //     if(finderWindow && finderWindow.classList.contains('finder-close') ){
    //         finderWindow.classList.remove('finder-close');
    //     }
    //     console.log(finderWindow);
    // };
    const openFinder = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        
        dispatch({type: 'finder/OPEN'});
    };
    useEffect(() => {
        setIsDock((prev) => !prev)
    }, [state.weatherWindow.weatherStretch]);
  return (
    <>
        <div className={`dock ${isDock ? 'dock-hide' : ''}`}>
            <div
                className={`dock-item ${state.dockItem === 0 ? 'hovered' : ""}
                ${state.dockItem === 1 ? 'distance-1' 
                : state.dockItem === 2 ? 'distance-2'
                : "" 
                }`}
                id='0'
                // onMouseEnter = {() => {}}
                // onMouseLeave = {() => {}}
                onClick={openFinder}
            >
                <div className='tool-tip'>Finder</div>
                <img 
                    src={finder} 
                    alt="Finder"
                    className='dock-icon finder' 
                />
                <div className='point'/>
            </div>
            <div className='divison'/>
            <div
                className={`dock-item ${state.dockItem === 0 ? 'hovered' : ""}
                ${state.dockItem === 1 ? 'distance-1' 
                : state.dockItem === 2 ? 'distance-2'
                : state.dockItem === 3 ? 'distance-3'
                : "" 
                }`}
                id='1'
                // onMouseEnter = {() => {}}
                // onMouseLeave = {() => {}}
            >
                <div className='tool-tip'>Calculator</div>
                <img 
                    src={calculator} 
                    alt="Calculator"
                    className='dock-icon calculator' 
                />
                <div className='point'/>
            </div>
            <div
                className={`dock-item ${state.dockItem === 0 ? 'hovered' : ""}
                ${state.dockItem === 1 ? 'distance-1' 
                : state.dockItem === 2 ? 'distance-2'
                : state.dockItem === 3 ? 'distance-3'
                : "" 
                }`}
                id='2'
                // onMouseEnter = {() => {}}
                // onMouseLeave = {() => {}}
                onClick={openWallpaper}
            >
                <div className='tool-tip'>Photos</div>
                <img 
                    src={photos} 
                    alt="Photos"
                    className='dock-icon calculator' 
                />
            </div>
            <div
                className={`dock-item ${state.dockItem === 0 ? 'hovered' : ""}
                ${state.dockItem === 1 ? 'distance-1' 
                : state.dockItem === 2 ? 'distance-2'
                : state.dockItem === 3 ? 'distance-3'
                : "" 
                }`}
                id='3'
                // onMouseEnter = {() => {}}
                // onMouseLeave = {() => {}}
            >
                <div className='tool-tip'>Calendar</div>
                <img 
                    src={calendar} 
                    alt="Calendar"
                    className='dock-icon calculator' 
                />
            </div>
            <div
                className={`dock-item ${state.dockItem === 0 ? 'hovered' : ""}
                ${state.dockItem === 1 ? 'distance-1' 
                : state.dockItem === 2 ? 'distance-2'
                : state.dockItem === 3 ? 'distance-3'
                : "" 
                }`}
                id='4'
                // onMouseEnter = {() => {}}
                // onMouseLeave = {() => {}}
            >
                <div className='tool-tip'>Discord</div>
                <img 
                    src={discord} 
                    alt="Discord"
                    className='dock-icon calculator' 
                />
            </div>
            <div
                className={`dock-item ${state.dockItem === 0 ? 'hovered' : ""}
                ${state.dockItem === 1 ? 'distance-1' 
                : state.dockItem === 2 ? 'distance-2'
                : state.dockItem === 3 ? 'distance-3'
                : "" 
                }`}
                id='5'
                // onMouseEnter = {() => {}}
                // onMouseLeave = {() => {}}
            >
                <div className='tool-tip'>Github</div>
                <img 
                    src={github} 
                    alt="Github"
                    className='dock-icon calculator' 
                />
            </div>
    
            <div
                className={`dock-item ${state.dockItem === 0 ? 'hovered' : ""}
                ${state.dockItem === 1 ? 'distance-1' 
                : state.dockItem === 2 ? 'distance-2'
                : state.dockItem === 3 ? 'distance-3'
                : "" 
                }`}
                id='8'
                // onMouseEnter = {() => {}}
                // onMouseLeave = {() => {}}
            >
                <div className='tool-tip'>Spotify</div>
                <img 
                    src={spotify} 
                    alt="Spotify"
                    className='dock-icon calculator' 
                />
            </div>
            <div
                className={`dock-item ${state.dockItem === 0 ? 'hovered' : ""}
                ${state.dockItem === 1 ? 'distance-1' 
                : state.dockItem === 2 ? 'distance-2'
                : state.dockItem === 3 ? 'distance-3'
                : "" 
                }`}
                id='9'
                // onMouseEnter = {() => {}}
                // onMouseLeave = {() => {}}
                onClick={openVSCode}
            >
                <div className='tool-tip'>VS Code</div>
                <img 
                    src={vscode} 
                    alt="VS Code"
                    className='dock-icon calculator' 
                />
            </div>
            <div
                className={`dock-item ${state.dockItem === 0 ? 'hovered' : ""}
                ${state.dockItem === 1 ? 'distance-1' 
                : state.dockItem === 2 ? 'distance-2'
                : state.dockItem === 3 ? 'distance-3'
                : "" 
                }`}
                id='10'
                // onMouseEnter = {() => {}}
                // onMouseLeave = {() => {}}
                onClick={openWeather}
            >
                <div className='tool-tip'>Weather</div>
                <img 
                    src={weather} 
                    alt="Weather"
                    className='dock-icon calculator' 
                />
            </div>
        </div>
    </>
  )
}

export default Dock