import { Question } from 'phosphor-react';
import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { chopChats, selectChats } from '../../../features/station/stationSlice';
import { selectIsChatFullScreen, selectIsDarkMode } from '../../../features/ui/uiSlice';
import { isPhone } from '../../../util';
import { Help } from '../Help/Help';
import { ChatMessage } from '../ChatMessage';
import './style.css';

const ChatMessageMemo = React.memo(ChatMessage);

interface IChatBox {
}

export const ChatBox: FC<IChatBox> = (props: IChatBox) => {

  const chats = useAppSelector(selectChats);
  const chatboxId = 'chatbox-radio';

  const dispatch = useAppDispatch();

  const maxChats = 100;

  // const viewers = useAppSelector(selectViewers);
  const viewers = ['~harlys-forbec', '~tasrym-sorrup-fidwed-sipwyn', "~bosdys", '~martyr-martel',]

  const isChatFullScreen = useAppSelector(selectIsChatFullScreen);
  const isDarkMode = useAppSelector(selectIsDarkMode);

  useEffect(() => {
    scrollToBottom();
    if (chats.length > maxChats) {
      dispatch(chopChats(chats));
    }
  }, [chats]);

  useEffect(() => {
    scrollToBottom();
  }, [isChatFullScreen]);

  const scrollToBottom = () => {
    let chatWindow = document.getElementById(chatboxId) as HTMLDivElement;
    if (!chatWindow) return;
    var xH = chatWindow.scrollHeight;
    chatWindow.scrollTo(0, xH);
  }

  const generateUniqueKey = (chat, index) => {
    if (!chat.time || !chat.from) {
      return index;
    }
    else
      return ('' + chat.time) + chat.from;
  }

  return (
    <div
      className={` flex flex-col border-t border-gray-300
                  ${isPhone() ? 'chatbox-container-phone' : 'chatbox-container'}
                    ${isChatFullScreen ? 'chatbox-container-full' : ''}
                `}
    >
      <div
        className={`font-extrabold flex items-center 
                     z-10
                     ${isDarkMode ? 'text-white-dark' : ''}
                     
                     `}
        style={{
          height: '2rem',
        }}
      >
        Chat <Help />
      </div>
      <div
        className={`  w-full flex flex-col  
                  ${isPhone() ? 'chatbox-phone' : 'chatbox'}
                  ${isChatFullScreen ? 'chatbox-full' : ''}
            `}
        style={{
          justifyContent: 'flex-end',
        }}
      >
        {chats && chats.length > 0 ?
          <div
            className={`overflow-y-auto
          `}
            id={chatboxId}
          >
            {
              chats.map((x: any, i: any) =>
                <ChatMessageMemo
                  key={generateUniqueKey(x, i)}
                  from={x.from}
                  message={x.message}
                  time={x.time}
                />)
            }
          </div>
          :
          <div
            className={`flex justify-center items-center h-full w-full k '
            `}
          >
            There are no messages
          </div>
        }
      </div >
    </div >
  );
};