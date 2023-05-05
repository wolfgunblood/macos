import { AnyAction } from "@reduxjs/toolkit";
import sampleStore from '../utils/keys/sampleStore';
import getDate from "../utils/helpers/getDate";


const reducer = (state = sampleStore, action: AnyAction) => {

    switch (action.type) {
        case "section/SELECT":
            // eslint-disable-next-line no-case-declarations
            console.log(action.payload);
            // eslint-disable-next-line no-case-declarations
            const updatedSection = {
                ...state,
                section: action.payload,
            };
            return updatedSection;

        case "section/RESET":
            // eslint-disable-next-line no-case-declarations
            // console.log(action.payload);
            // eslint-disable-next-line no-case-declarations
            const resetSection = {
                ...state,
                section: "none",
            };
            return resetSection;

        case "settings/CLOSE":
            // eslint-disable-next-line no-case-declarations
            const closedSettings = {
                ...state,
                settings: {
                    ...state.settings,
                    open: false,
                },
            };
            return closedSettings;
        case "settings/OPEN":
            // eslint-disable-next-line no-case-declarations
            const openedSettings = {
                ...state,
                settings: {
                    ...state.settings,
                    open: true,
                },
            };
            return openedSettings;

        case "date/SET":
            // eslint-disable-next-line no-case-declarations
            const date = getDate();
            // eslint-disable-next-line no-case-declarations
            const updateDate = {
                ...state,
                date: date,
            };
            return updateDate;

        case "wallpaper/CHANGE":

            // eslint-disable-next-line no-case-declarations
            const updateWallpaper = {
                ...state,
                settings: {
                    ...state.settings,
                    wallpaper: {
                        ...state.settings.wallpaper,
                        name: action.payload,
                    },
                },
            };
            return updateWallpaper;

        // case "vscode/OPEN":
        //     // eslint-disable-next-line no-case-declarations
        //     const openVSCode = {
        //         ...state,
        //         weatherWindow: {
        //             ...state.
        //         },
        //     };

        //     return openVSCode;

        case "vscode/CLOSE":
            // eslint-disable-next-line no-case-declarations
            const closeVSCode = {
                ...state,
                vscodeWindow: {
                    vscodeClose: true,
                    vscodeOpen: false,
                    vscodeMinimize: false,
                },
            };
            return closeVSCode;

        case "weather/CLOSE":
            // eslint-disable-next-line no-case-declarations
            const closeWeather = {
                ...state,
                weatherWindow: {
                    weatherClose: true,
                    weatherOpen: false,
                    weatherMinimize: false,
                    weatherStretch: false,

                },
            };
            return closeWeather;

        case "weather/OPEN":
            // eslint-disable-next-line no-case-declarations
            const openWeather = {
                ...state,
                weatherWindow: {
                    weatherClose: false,
                    weatherOpen: true,
                    weatherMinimize: false,
                    weatherStretch: false,

                },
            };
            return openWeather;

        case "weather/MINI":
            // eslint-disable-next-line no-case-declarations
            const minimizeWeather = {
                ...state,
                weatherWindow: {
                    weatherClose: false,
                    weatherOpen: false,
                    weatherMinimize: true,
                    weatherStretch: false,

                },
            };
            return minimizeWeather;

        case "weather/STRETCH":
            // eslint-disable-next-line no-case-declarations
            const stretchWeather = {
                ...state,
                weatherWindow: {
                    weatherClose: false,
                    weatherOpen: false,
                    weatherMinimize: false,
                    weatherStretch: true,
                },
            };
            return stretchWeather;

        case "wallpaper/CLOSE":
            // eslint-disable-next-line no-case-declarations
            const closeWallpaper = {
                ...state,
                wallpaperWindow: {
                    wallpaperClose: true,
                    wallpaperOpen: false,
                    wallpaperMinimize: false,
                    wallpaperStretch: false,
                },
            };
            return closeWallpaper;

        case "wallpaper/OPEN":
            // eslint-disable-next-line no-case-declarations
            const openWallpaper = {
                ...state,
                wallpaperWindow: {
                    wallpaperClose: false,
                    wallpaperOpen: true,
                    wallpaperMinimize: false,
                    wallpaperStrecth: false,
                },
            };
            return openWallpaper;

        case "wallpaper/MINI":
            // eslint-disable-next-line no-case-declarations
            const minimizeWallpaper = {
                ...state,
                wallpaperWindow: {
                    wallpaperClose: false,
                    wallpaperOpen: false,
                    wallpaperMinimize: true,
                    wallpaperStretch: false,
                },
            };
            return minimizeWallpaper;

        case "wallpaper/STRETCH":
            // eslint-disable-next-line no-case-declarations
            const strecthWallpaper = {
                ...state,
                wallpaperWindow: {
                    wallpaperClose: false,
                    wallpaperOpen: false,
                    wallpaperMinimize: false,
                    wallpaperStretch: true,
                },
            };
            return strecthWallpaper;

        case "wallpaper/Z-SELECT":
            // eslint-disable-next-line no-case-declarations

            // eslint-disable-next-line no-case-declarations
            const wallpaperZSelect = {
                ...state,
                float: {
                    weatherBoard: false,
                    wallpaperBoard: true,
                },
            };
            return wallpaperZSelect;

        case "weather/Z-SELECT":
            // eslint-disable-next-line no-case-declarations

            // eslint-disable-next-line no-case-declarations
            const weatherZSelect = {
                ...state,
                float: {
                    weatherBoard: true,
                    wallpaperBoard: false,
                },
            };
            return weatherZSelect;
        
        case "finder/OPEN":
            
            // eslint-disable-next-line no-case-declarations
            const openFinder = {
                ...state,
                finderCloseOpen: !state.finderCloseOpen,
            };
            return openFinder;

       
    }
}

export default reducer;