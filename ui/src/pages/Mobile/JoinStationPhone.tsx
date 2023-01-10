import { ArrowLeft } from 'phosphor-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { DiscoveryList } from '../../components/Navigation/DiscoveryList/DiscoveryList';
import { SearchStationRow } from '../../components/Navigation/SearchStationsRow/SearchStationRow';
import { ThemeButton } from '../../components/UpperRow/ThemeButton';
import { isPhone } from '../../util';

export const JoinStationPhone = () => {

    const navigate = useNavigate();

    return (
        <div className='text-text-default bg-background-darker text-base px-4'
        >
            <div className='fixed top-0 left-0  w-full flex justify-between items-center  border-b
            bg-background-default border-border-default px-4'
                style={{ height: '64px', }}
            >
                <div className='flex items-center font-bold text-xl'
                >
                    Join Station
                </div>
                <ThemeButton />
            </div>
            <DiscoveryList />
            <div className={`fixed px-4 bottom-0 left-0  flex items-center w-full bg-background-default
                   `}
                style={{ height: '65px', }}
            >
                {isPhone() &&
                    <ArrowLeft className="mr-2" size={28} weight="bold"
                        onClick={() => navigate('/')}
                    />}
                <SearchStationRow />
            </div>
        </div>
    )
}