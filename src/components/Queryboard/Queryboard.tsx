import React, { useContext, useEffect, useState } from 'react';
import { store } from '../../App';

import './Queryboard.scss';
import QueryBoardLinks from '../QueryBoardLinks/QueryBoardLinks';
import InputFields from '../InputFields/InputFields';
import Draggable from 'react-draggable';

const Queryboard = () => {

  const [state, dispatch] = useContext(store);

  const floatWindow = (e: React.MouseEvent<HTMLElement>) => {

    e.stopPropagation();
    console.log("button clicked!! Wallpaper");
    dispatch({
      type: "weather/Z-SELECT",
    });
  };
  return (
    <div className='queryboard' id='handle' onClick={floatWindow}>
      <QueryBoardLinks />
      <InputFields />
    </div>
  )
}

export default Queryboard