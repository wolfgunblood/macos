import storeType from "../../types/store";
import img from '../../assets/wallpapers/46.jpg';

const sampleStore : storeType ={
    weather: {
        current: null,
        forecast: null,
    },
    query: null,
    loading: false,
    section: null,
    dockItem: undefined,
    date: ['Mon Apr 23', '11:00 AM'],
    selected: undefined,
    failed: false,
    booting: false,
    onTop: null,
    soundPlayed: false,
    settings: {
        open: false,
        animation: false,
        color: null,
        notch: false,
        airdrop: false,
        wallpaper:{
            open: true,
            src: null,
            preview: null,
            name: img,
            surname: null,
        },
    },
    wallpaperWindow:{
        wallpaperClose: false,
        wallpaperOpen: true,
        wallpaperMinimize: false,
        wallpaperStretch: false,
    },
    vscodeWindow:{
        vscodeClose: false,
        vscodeOpen: true,
        vscodeMinimize: false,
    },
    weatherWindow:{
        
        weatherClose: false,
        weatherOpen: true,
        weatherMinimize: false,
        weatherStretch: false,
    },
    float:{
        weatherBoard: true,
        wallpaperBoard: false,
    },
    finderCloseOpen: false,
    city: "New York",
    
}

export default sampleStore;