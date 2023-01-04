import { Globe, Lock } from "phosphor-react";
import { useState } from "react";
import { radio } from "../../../api";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectIsPublic, setIsPublic } from "../../../features/station/stationSlice";
import { selectIsDarkMode } from "../../../features/ui/uiSlice";
import React from 'react'

export const IsPublicSettings = () => {

    const isPublic = useAppSelector(selectIsPublic);
    const [showInfo, setShowInfo] = useState(false);
    const isDarkMode = useAppSelector(selectIsDarkMode);
    const dispatch = useAppDispatch();

    return (
        <div className=" flex flex-col">
            <div className="font-bold flex items-center relative mb-2"
            >DJ commands (Play & Talk)
                <button
                    className={`cursor-pointer rounded p-1 
    `}
                // onClick={() => setShowInfo(prev => !prev)}
                >
                    {/* <Question
                        size={22}
                        weight="bold"
                    /> */}
                    {/* {showInfo &&
                        <div
                            className="absolute shadow bg-white top-6 z-10
                         px-2 py-4 rounded-md flex right-0 font-bold"
                            style={{ fontSize: '16px' }}
                        >
                            Change the acess to DJ commands (Play & Talk).
                        </div>
                    } */}
                </button>
            </div>
            <div
                className={`flex relative items-center h-12 p-2 rounded-md  border   mb-1.5
                ${!isPublic ?
                        (isDarkMode ? 'bg-black-75  border-black-50' : 'bg-black-10  border-black-40')
                        :
                        (isDarkMode ? ' hover:bg-black-85 cursor-pointer  border-black-60' : 'cursor-pointer hover:bg-black-5  border-black-20')}
                `}
                onClick={() => {
                    dispatch(setIsPublic(false))
                    radio.private()
                }}
            >
                <div className={`flex items-center justify-center  rounded-md
                ${(isDarkMode ? 'bg-black-10 text-black-90' : 'bg-black-80 text-black-10 ')}

                `}
                    style={{
                        height: '2.5em',
                        width: '2.5em'
                    }}
                >
                    <Lock size={24} weight="bold" />
                </div>
                <div className=" flex flex-col ml-1.5  justify-center h-full">
                    <span className="font-bold  " >
                        Private
                    </span>
                    <span className={`font-semibold h-3
                         ${isDarkMode ? 'text-black-10' : 'text-black-60'}
                    `} style={{ fontSize: '14px', lineHeight: '14px' }}>
                        Only you can use DJ commands
                    </span>
                </div>
                {/* <input className={`absolute right-2  
                ${isPublic && 'cursor-pointer'}
                `}
                    style={{ top: '13.5px', height: '.85em', width: '.85em', }}
                    type={'radio'}
                    checked={!isPublic}
                    onChange={() => null}
                /> */}
            </div>
            <div className={`flex relative items-center h-12 p-2 rounded-md  border  
                 ${isPublic ?
                    (isDarkMode ? 'bg-black-75  border-black-50' : 'bg-black-10  border-black-40')
                    :
                    (isDarkMode ? ' hover:bg-black-85 cursor-pointer  border-black-60' : 'cursor-pointer hover:bg-black-5  border-black-20')}
             `}
                onClick={() => {
                    dispatch(setIsPublic(true))
                    radio.public()
                }}
            >
                <div className={`flex items-center justify-center  rounded-md
                ${(isDarkMode ? 'bg-black-10 text-black-90' : 'bg-black-80 text-black-10 ')}

                `}
                    style={{
                        height: '2.5em',
                        width: '2.5em'
                    }}
                >
                    <Globe size={24} weight="bold" />
                </div>
                <div className=" flex flex-col ml-1.5  justify-center h-full">
                    <span className="font-bold " >
                        Public
                    </span>
                    <span className={`  font-semibold h-3  
                                        ${isDarkMode ? 'text-black-10' : 'text-black-60'}
                    `} style={{ fontSize: '14px', lineHeight: '14px' }}>
                        Everybody can use DJ commands
                    </span>
                </div>
                {/* <input className={`absolute right-2 cursor-pointer
                ${!isPublic && 'cursor-pointer'}
                ` }
                    style={{ top: '13.5px', height: '.85em', width: '.85em', }}
                    type={'radio'}
                    checked={isPublic}
                    onChange={() => null}
                /> */}
            </div>
        </div >

    )
}