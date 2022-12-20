import { Question } from "phosphor-react";
import React, { useEffect, useState } from "react"
import { useAppSelector } from "../../app/hooks";
import { selectIsDarkMode } from "../../features/ui/uiSlice";

export const DiscoveryInfo = () => {

    const [showDiscoveryInfo, setShowDiscoveryInfo] = useState(false);
    const isDarkMode = useAppSelector(selectIsDarkMode);

    useEffect(() => {
        document.addEventListener(
            "click",
            handleOutsideDiscoveryInfoMenuClick
        )

        return () => document.removeEventListener('click', handleOutsideDiscoveryInfoMenuClick)
    }, []);

    const handleOutsideDiscoveryInfoMenuClick = (event: any) => {
        var clicked = event.target as Element;
        var discoveryInfo = document.getElementById('discovery-info');

        if (
            clicked != discoveryInfo && !discoveryInfo?.contains(clicked)
        ) {
            setShowDiscoveryInfo(false);
        }
    }

    return (
        <div
            id="discovery-info"
        >
            <button
                className={`cursor-pointer rounded p-1  mt-0.5  
                    ${showDiscoveryInfo ? (isDarkMode ? 'bg-black-80' : ' bg-black-5') : ''}
                    ${isDarkMode ? ' hover:bg-black-80' : ' hover:bg-black-10'}
                    `}
                onClick={() => setShowDiscoveryInfo(prev => !prev)}
            >
                <Question
                    size={22}
                    weight="bold"
                />
            </button>
            {
                showDiscoveryInfo && <div
                    className={`border z-10 px-2 py-4   ml-2 sm:ml-4 mt-8 
                            rounded shadow absolute  leading-4 font-bold    
                            ${isDarkMode ? ' bg-black-90 border-black-85' : ' bg-white '}
                            `}
                    style={{
                        left: 0,
                        top: 0,
                        width: '20em',
                        fontSize: '18px'
                    }}
                >
                    Published stations with the most viewers will appear here.
                </div>
            }
        </div >

    )

}