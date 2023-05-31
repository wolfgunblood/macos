import React, { useEffect, useContext } from 'react';
import "./BootingLoader.scss";
import { motion } from 'framer-motion';
import { store } from '../../App';
import AppleLogo from "../../resources/images/apple-dust-apple-apple-dust-dust.gif"

const BootingLoader = () => {
    const [ state, dispatch ] = useContext(store);
    
    useEffect(() => {

        setTimeout(() => {
            const bootUpWindow = document.getElementById("boot");
            bootUpWindow!.classList.remove("booting-loader");
            bootUpWindow!.classList.add("vanished");
        },3350);
        // setTimeout(() => {
        //     dispatch({
        //         type: "booting/FINISH",
        //     })
        // }, 4350);
        
    }, []);

    const animations = {
        inittal : {width : "0px"},
        animate : {width : "100px"},
    }
    
    return (
        <div className='booting-loader boot' id='boot'>
            <img
                className="booting-loader-logo"
                src={AppleLogo}
                alt="Apple Logo" 
            />
            <div className='bar-container'>
                <div className='bar-background'>
                    <motion.div
                        className='bar'
                        variants={animations}
                        initial="inittal"
                        animate="animate"
                        transition={{ ease: "easeInOut",duration: 2.1,delay: 0.4 }}
                    >

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default BootingLoader