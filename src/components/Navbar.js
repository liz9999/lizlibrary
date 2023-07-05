import React from 'react'
import LizLogo from '../assets/liz-logo.png'
import Profile from '../assets/profile-logo.png'
import Globe from '../assets/globe.png'

const Navbar = ({ showAll, search, showGroup }) => {
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

    </>
  )
}

export default Navbar