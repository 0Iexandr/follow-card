import './AvatarBorder.css';
import avatar from '../assets/avatar.png';
import separator from '../assets/card-separator.png';

export default function AvatarBorder() {
  return (
    <div>
        <img src={separator} className='avatar__separator' alt='avatar-separator' />
        <img src={avatar} className='avatar' alt='avatar' />
    </div>
  )
}