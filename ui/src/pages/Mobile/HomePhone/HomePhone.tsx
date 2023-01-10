import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { radio } from '../../../api';
import { useAppDispatch } from '../../../app/hooks';
import { ThemeButton } from '../../../components/UpperRow/ThemeButton';
import { tuneTo } from '../../../util';
import './style.css';

export const HomePhone = () => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    useEffect(() => {
        tuneTo(null, radio, dispatch);
    }, []);

    return (
        <div className={`absolute top-0 left-0 flex flex-col h-full w-full justify-between
         bg-background-darker text-text-default
        `}
        >
            <div className=' flex px-4 top-0 left-0 justify-end items-center w-full'
                style={{ height: '64px' }}
            >
                <ThemeButton />
            </div>
            <div className='px-4  left-0'>
                <div className='flex  gap-1  mb-3  items-center rounded-md '
                >
                    <img
                        src='/apps/radio/assets/favicon.ico'
                        className={`h-auto  mr-1 w-12
                    `}
                    />
                    <span
                        className="font-black whitespace-nowrap 
                  flex 	 flex items-end "
                        style={{ fontSize: '56px' }}
                    >
                        radio
                    </span>
                </div>
                <span className={`sub-heading
                `}
                >Watch videos and listen to music with your friends</span>
            </div>
            <div className=' bottom-0 left-0 w-full '
                style={{ padding: '0 24px' }}>

                <div className=' w-full flex flex-col gap-3'
                    style={{ marginBottom: '5vh', marginTop: '10vh', fontSize: '18px' }}
                >
                    <button
                        className='w-full bg-black-70 rounded-md text-white font-extrabold shadow'
                        style={{ height: '56px', }}
                        onClick={() => {
                            radio.start()
                            navigate('/station/' + radio.our)
                        }}
                    >Broadcast</button>
                    <button
                        className='w-full bg-black-70 rounded-md text-white font-extrabold shadow'
                        style={{ height: '56px', }}
                        onClick={() => navigate('/join/')}
                    >Join Station</button>
                </div>
            </div>

        </div >
    )
}