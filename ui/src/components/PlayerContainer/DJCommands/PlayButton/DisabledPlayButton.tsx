import { PlayCircle } from "phosphor-react";
import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import { selectIsDarkMode } from "../../../../features/ui/uiSlice";
import { isPhone } from "../../../../util";

export const DisabledPlayButton = () => {

    const isDarkMode = useAppSelector(selectIsDarkMode);

    return (
        isPhone() ?
            <button
                className={`  opacity-70 
                 play-button-phone
                 `}
            >
                <PlayCircle weight="bold" size={24} style={{ marginBottom: '-4px' }} />
                Play
            </button >
            :
            <button
                className={`  play-button   cursor-not-allowed opacity-70
                ${isDarkMode ? ' border-black-85 bg-black-90' : 'border-black-20 bg-white'}
        `}
            >
                <PlayCircle weight="bold" className="megaphone" />
                Play
            </button >
    )
}
