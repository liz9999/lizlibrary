import React from 'react'
import Plays from '../assets/plays.png'
import Hearts from '../assets/hearts.png'
import Comments from '../assets/comments.png'

const VideoItem = ({ videoTitle, videoID, thumbnail, length, group, date }) => {

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let play = randomNumber(1000,25000);
  let likes = play * randomNumber(3,10)
  let comment = Math.floor(likes / randomNumber(5,10))

  return (
    <div className='videoItem' name={videoID}>
        <div className='thumbnail'>
            <img src={thumbnail} />
            <em className='playtime'>
                {length}
            </em>
        </div>
        <div className='videoInfo'>
          <h2>{videoTitle}</h2>
          <div className='vidStats'>
              <div className='vidStatsSegment'><img src={Plays} /> <p>{play}</p></div>
              <div className='vidStatsSegment'><img src={Hearts} /> <p>{likes}</p></div>
              <div className='vidStatsSegment'><img src={Comments} /> <p>{comment}</p></div>
          </div>
          <div className='basicInfo'>
              <p>{group}</p>
              <p>•</p>
              <p>{date}</p>
          </div>
        </div>
    </div>
  )
}

export default VideoItem