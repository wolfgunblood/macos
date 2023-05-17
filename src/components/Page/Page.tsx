import React, { useContext} from 'react';
import { store } from '../../App';
import "./Page.scss";
import openContextMenu from '../../utils/helpers/openContextMenu';
import checkDropdown from '../../utils/helpers/checkDropdown';
import checkSettings from '../../utils/helpers/checkSettings';


const Page = ({children} : any) => {

  const [ state , dispatch ] = useContext(store);

  const handleLeftClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("button clicked!! Page");

    const contextMenu =  document.getElementById('context-menu');
    contextMenu!.style.opacity = '0';

    const isSettings = checkSettings(e);
    if(!isSettings){
      dispatch({
        type: "settings/CLOSE",
      });
    }

    const isDropdown = checkDropdown(e);

    if(!isDropdown){
      dispatch({
        type: "section/RESET",
      });
    }

  };
  
  // const lake  = "lake";
  document.documentElement.style.setProperty('--bg-image', `url("${state.settings.wallpaper.name}")`);
   
  
  return (
    <div
    className='page'
    id='page'
    onContextMenu={openContextMenu}
    onClick={handleLeftClick}
    
    >
      {/* {console.log(children)} */}
      {/* {console.log(state.settings.wallpaper.name)} */}
      
      {children}
    </div>
  )
}

export default Page