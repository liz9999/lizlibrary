import React, { useState } from 'react'
import LizLogo from '../assets/liz-logo.png'
import Profile from '../assets/profile-logo.png'
import Globe from '../assets/globe.png'
import { VideoList } from "../helpers/VideoList"
import VideoLibrary from "../components/VideoLibrary"

const Navbar = () => {
  const [videoList, setVideoList] = useState(VideoList)

  VideoList.sort((a,b) => {
    let aparts = a.date.split('. ')
    let atime = aparts[3].split(':')
    let bparts = b.date.split('. ')
    let btime = bparts[3].split(':')
    let aDate = new Date(aparts[0], aparts[1]-1, aparts[2], atime[0], atime[1])
    let bDate = new Date(bparts[0], bparts[1]-1, bparts[2], btime[0], btime[1])
    return bDate - aDate;
  });


  const showGroup = (e) => {
    let videos = VideoList.filter((v) => 
      v.group === (e.target.name)
    )
    setVideoList(videos)
  }

  const showAll = () => {
    setVideoList(VideoList)
  }

  const search = (query) => {
    let searchTerm = query.target.value.toLowerCase()
    let videos = VideoList.filter((v) => {
      if (searchTerm === "") {
        return v;
      } else if (v.videoTitle.toLowerCase().includes(searchTerm)){
        return v;
      }
    })
    setVideoList(videos)
  }

  return (
    <>
      <div className="navbar">
          <div className="upper">
                  <div className="left">
                      <button onClick={showAll}><img src={LizLogo} /></button>
                  </div>
                  <div className="search">
                    <input onChange={search} />
                  </div>
                  <div className='right'>
                      <img src={Profile} />
                      <img src={Globe} />
                  </div>
          </div>
          <div className="lower">
              <button name="(G)I-DLE" onClick={showGroup}>(G)I-DLE</button>
              <button name="Dreamcatcher" onClick={showGroup}>Dreamcatcher</button>
              <button name="ENHYPEN" onClick={showGroup}>ENHYPEN</button>
              <button name="LE SSERAFIM" onClick={showGroup}>LE SSERAFIM</button>
              <button name="Weeekly" onClick={showGroup}>Weeekly</button>
          </div>
      </div>
      <VideoLibrary ListOfVideos={videoList} />
    </>
  )
}

export default Navbar