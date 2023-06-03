import sortedIntervalType from "./sortedInterval";

interface Weather {
    current: null | any;
    forecast: null | any;
  }
  
  interface Wallpaper {
    open: boolean;
    src: null | any;
    preview: null | any;
    name: string;
    surname: null | any;
  }
  
  interface Settings {
    open: boolean;
    animation: boolean;
    color: null | any;
    notch: boolean;
    airdrop: boolean;
    wallpaper: Wallpaper;
  }
  
  interface WallpaperWindow {
    wallpaperClose: boolean;
    wallpaperOpen: boolean;
    wallpaperMinimize: boolean;
    wallpaperStretch: boolean;
  }
  
  interface VSCodeWindow {
    vscodeClose: boolean;
    vscodeOpen: boolean;
    vscodeMinimize: boolean;
  }
  
  interface Float {
    weatherBoard: boolean;
    wallpaperBoard: boolean;
  }
  
  interface storeType {
    weather: Weather;
    query: null | any;
    loading: boolean;
    section: null | any;
    dockItem: undefined;
    date: string[];
    selected: undefined | sortedIntervalType;
    failed: boolean;
    booting: boolean;
    onTop: null | any;
    soundPlayed: boolean;
    settings: Settings;
    wallpaperWindow: WallpaperWindow;
    vscodeWindow: VSCodeWindow;
    weatherWindow: any; // Update this with the actual type
    float: Float;
    finderCloseOpen: boolean;
    city: string;
    currentColor: string,
  }

export default storeType;