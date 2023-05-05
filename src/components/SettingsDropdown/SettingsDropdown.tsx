import React, { useContext } from 'react';
import './SettingsDropdown.scss';
import { store } from '../../App';
import { ReactComponent as Animations } from "../../resources/images/svg/animations.svg";
import { ReactComponent as Airdrop } from "../../resources/images/svg/airdrop.svg";
import { ReactComponent as Tick } from "../../resources/images/svg/tick.svg";
import { ReactComponent as Notch } from "../../resources/images/svg/notch.svg";

const SettingsDropdown = () => {
  const [state, dispatch] = useContext(store);

  const openWallpaper = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({type: 'wallpaper/OPEN'});

};

  return (
    <div
      className="settings-dropdown set"
    >
      <section className='functions set'>
        <div className='func set'>
          <button
            className='airdrop-btn set'
            type='button'
          >
            <Airdrop
              fill="white"
              style={{ transition: "0.25 all" }}
            />
          </button>
          Airdrop
        </div>

        <div className='func set'>
          <button
            className='set'
            type='button'
          >
            <Animations
              fill="white"
              style={{ transition: "0.25 all" }}
            />
          </button>
          Animations
        </div>
      </section>

      <section className='sys-colors set'>
        System Color
        <div className='colors set'>
          <div
            className='color orangey set'
            id='orange'
          >
            { }
          </div>
          <div
            className='color greeny set'
            id='green'
          >
            { }
          </div>
          <div
            className='color bluey set'
            id='blue'
          >
            { }
          </div>
          <div
            className='color pinky set'
            id='pink'
          >
            { }
          </div>
          <div
            className='color blacky set'
            id='black'
          >
            { }
          </div>
          <div
            className='color whitey set'
            id='white'
          >
            { }
          </div>
          <div
            className='color greyy set'
            id='grey'
          >
            { }
          </div>
          <div
            className='color yellowy set'
            id='yellow'
          >
            { }
          </div>
        </div>
      </section>

      <section
        className='wallpaper-container'
        id='opener'
        onClick={openWallpaper}
      >
        <img className='preview' src={`${state.settings.wallpaper.name}`} alt="wallpaper" />
        <div className='desc-container'>
        <h2 className='title'>
          Wallpaper
        </h2>
        <h3 className='type'>Dynamic Wallpaper</h3>
        </div>
      </section>
    </div>
  )
}

export default SettingsDropdown