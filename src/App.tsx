import React, { createContext, useReducer, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import Page from './components/Page/Page';
import Dock from './components/Dock/Dock.tsx';
import VSCode from './components/VSCode/VSCode.tsx';
import WallpaperMenu from './components/WallpaperMenu/WallpaperMenu.tsx';
import Weather from './components/Weather/Weather.tsx';
import Finder from './components/Finder/Finder.tsx';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import reducer from './reducers/reducer';
import sampleStore from './utils/keys/sampleStore.ts';
import ContextMenu from './components/ContextMenu/ContextMenu.tsx';
import Draggable from 'react-draggable';


export const store = createContext<any>(null);

const StoreProvider = ({ children }: any) => (
  <store.Provider value={useReducer(reducer, sampleStore)}>
    {children}
  </store.Provider>
)


const App = () => {
  return (
    <>
      <ChakraProvider>
        <StoreProvider>
          <Page>

            <NavBar />
            <Dock />
              <Weather />
            <WallpaperMenu />
            <VSCode />
            {/* <ContextMenu /> */}
            <Finder />
          </Page>
            
        </StoreProvider>
      </ChakraProvider>
    </>
  )
}

export default App