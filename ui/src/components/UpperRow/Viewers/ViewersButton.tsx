import { Users } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import { useMobileOrientation } from 'react-device-detect';
import { useAppSelector } from '../../../app/hooks';
import { selectTunePatP, selectViewers } from '../../../features/station/stationSlice';
import { selectIsDarkMode } from '../../../features/ui/uiSlice';
import { isPhone } from '../../../util';
import { ViewersMenu } from './ViewersMenu/ViewersMenu';

export type ViewersTabOption = 'Viewers' | 'Banned';


export const ViewersButton = () => {
    // const viewers = useAppSelector(selectViewers);
    const viewers = ['~harlys-forbec', '~tasrym-sorrup-fidwed-sipwyn', "~bosdys", '~martyr-martel', '~zod']
    const [viewersMenuOpen, setViewersMenuOpen] = useState(false);
    const tunePatP = useAppSelector(selectTunePatP);
    const isDarkMode = useAppSelector(selectIsDarkMode);

    const viewersMenuId = 'viewers-menu';

    useEffect(() => {
        document.addEventListener(
            "click",
            handleOutsideIsPublicDropdownClick
        )

        return () => document.removeEventListener('click', handleOutsideIsPublicDropdownClick)
    }, []);

    const handleOutsideIsPublicDropdownClick = (event: any) => {
        var clicked = event.target as Element;
        var viewersMenu = document.getElementById(viewersMenuId);

        if (
            clicked != viewersMenu && !viewersMenu?.contains(clicked)
        ) {
            setViewersMenuOpen(false);
        }
    }

    return (
        <div id='viewers-menu' className='w-max	ml-0.5'>
            <div

                className={`px-0.5 flex cursor-pointer items-center tracking-wide 	z-0 rounded  font-bold 	
            ${tunePatP && tunePatP.length > 14 && 'justify-center'}   
            ${isDarkMode ? 'hover:bg-hover-gray-dark text-gray-dark' : 'hover:bg-hover-gray-light text-gray-light'}
          `}

                onClick={() => setViewersMenuOpen((previous) => !previous)}
                style={{
                    fontSize: '.6rem',
                    lineHeight: '.3rem',
                }}
            >
                <Users
                    size={20}
                    weight="bold"
                    className='mr-0.5'
                    style={{ marginTop: '0.06em' }}
                />
                {viewers.length == 0 ? 0 : viewers.length - 1 + (viewers.length && viewers.length > 1 ? ' viewers' : ' viewer')}
            </div>
            {
                viewersMenuOpen && viewers.length > 1 &&
                <ViewersMenu />
            }
        </div>
    )
}