import { ChatBoxStyles } from './styles';
import message from '../../Assets/message.svg';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../Store/userSlice';
import UserList from '../UserList';
const ChatBox = () => {
  const [seeChat, setSeeChat] = useState(false);
  const users = useSelector(selectUsers);

  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setSeeChat(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <ChatBoxStyles>
      <div
        className='chatboxContainer d-flex justify-content-between '
        onClick={() => setSeeChat(!seeChat)}
        ref={ref}
      >
        <div className='chatHeadDiv'>
          <img className='msgIcon me-3' src={message} alt='msg' />
          Chats
        </div>
        <div className='arrowIconDiv'>
          <i
            className={`fa-solid fa-angle-up ${seeChat && 'chatArrowActive'}`}
            style={{ color: '#ffffff' }}
          ></i>
        </div>
      </div>
      {seeChat && (
        <div className='usersList'>
          {users.users.map((item) => (
            <UserList data={item} from={'chatbox'} />
          ))}
        </div>
      )}
    </ChatBoxStyles>
  );
};

export default ChatBox;
