import React,{ useContext, useState} from 'react';
import './QueryBoardLinks.scss';
import { store } from '../../App';
import { ReactComponent as Close } from "../../resources/images/svg/close.svg";
// import { ReactComponent as MIninmize } from "../../resources/images/svg/close.svg";
import { ReactComponent as Minimize } from "../../resources/images/svg/minimize.svg";
import { ReactComponent as Strecth } from "../../resources/images/svg/stretch.svg";
import { ReactComponent as Arrow } from "../../resources/images/svg/arrow.svg";
import { ReactComponent as Cat } from "../../resources/images/svg/githubcat.svg";
import { ReactComponent as Chat } from "../../resources/images/svg/chat.svg";

const QueryBoardLinks = () => {

  const [ state, dispatch ] = useContext(store);

  const closeWindow = (e : React.MouseEvent<HTMLElement>) => {
        
    e.stopPropagation();
    console.log("button clicked!! Wallpaper");
    dispatch({
        type: "weather/CLOSE",
    });
};

const minimizeWindow = (e : React.MouseEvent<HTMLElement>) => {
    
    e.stopPropagation();
    console.log("button clicked!! Wallpaper");
    dispatch({
        type: "weather/MINI",
    });
};

const stretchWindow = (e : React.MouseEvent<HTMLElement>) => {
    
    e.stopPropagation();
    console.log("button clicked!! Wallpaper");
    dispatch({
        type: "weather/STRETCH",
    });
   
};

  return (
    <div className='links'>
      <div className='dots'>
        <div className='dot red' onClick ={closeWindow}>
          <Close className="close" />
        </div>
        <div className='dot yellow' onClick ={minimizeWindow}>
          <Minimize className="minimize" />
        </div>
        <div className='dot green' onClick ={stretchWindow}>
          <Strecth className="stretch" />
        </div>
      </div>

      <button className='nav github-btn'>
        <Cat className="github svg" id="svg" />
      </button>
    </div>
  )
}

export default QueryBoardLinks