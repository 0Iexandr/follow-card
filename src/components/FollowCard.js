import './FollowCard.css';
import { useState, useEffect } from 'react';
import header from '../assets/card-header.png';
import {ReactComponent as Logo} from '../assets/logo.svg';
import AvatarBorder from './AvatarBorder';

export default function FollowCard() {
  const [followText, setFollowText] = useState(
    localStorage.getItem('followBtnText') ? localStorage.getItem('followBtnText') : 'FOLLOW');
  const [followers, setFollowers] = useState(
    localStorage.getItem('followers') ? Number(localStorage.getItem('followers')) : 100500);
    
  const following = (event) => {
    if(followText === 'FOLLOW') {
      setFollowers(followers + 1);
      setFollowText('FOLLOWING');
      event.currentTarget.classList.add('card__following-btn');
    } else {
      setFollowers(followers - 1);
      setFollowText('FOLLOW');
      event.currentTarget.classList.remove('card__following-btn');
    }
  }

  useEffect(() => {
    localStorage.setItem('followers', followers);
    localStorage.setItem('followBtnText', followText);
  }, [followers, followText]);

  return (
    <div className='card'>
      <Logo className='card__logo' />
      <img src={header} className='card__header' alt='card-header' />
      <AvatarBorder />
      <p className='card__tweets-subtitle'>777 TWEETS</p>
      <p className='card__followers-subtitle'>{followers.toLocaleString()} FOLLOWERS</p>
      <button className={followText === 'FOLLOW' ? 'card__follow-btn' : 'card__follow-btn card__following-btn'} onClick={following}>{followText}</button>
    </div>
  )
}