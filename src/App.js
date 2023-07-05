import './App.css';
import React, { useState, useEffect, useWindowDimensions, useRef } from 'react'
import Navbar from './components/Navbar'
import { VideoList } from "./helpers/VideoList"
import VideoLibrary from "./components/VideoLibrary"
import Pagination from './components/Pagination'

function App() {
  const [videoList, setVideoList] = useState(VideoList)
  const [currentPage, setCurrentPage] = useState(1);

  const [width, setWidth] = useState(window.innerWidth);
  const videosPerRow = Math.floor(width/340);
  const videosPerPage = videosPerRow * 5;
  const lastIndex = currentPage * videosPerPage;
  const firstIndex = lastIndex - videosPerPage;
  const currentVideos = videoList.slice(firstIndex, lastIndex);
  const amountOfPages = Math.ceil(videoList.length / videosPerPage);
  const pages = [...Array(amountOfPages + 1).keys()].slice(1);

  const [pagesIndex, setPagesIndex] = useState({
    pfIndex: 0,
    plIndex: 5
  })
  const pagesSlice = pages.slice(pagesIndex.pfIndex, pagesIndex.plIndex);
  const pageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // useEffect(() => {
  //   setCurrentPage(Math.floor(pageRef.current/videosPerPage))
  // }, [width])

  useEffect(() => {
    if (currentPage > amountOfPages - 5) {
      pageRef.current = lastIndex;
      setPagesIndex({
        pfIndex: currentPage - 5 + (amountOfPages - currentPage),
        plIndex: currentPage + (amountOfPages - currentPage)
      })
    } else if (currentPage < 4) {
      pageRef.current = lastIndex;
      setPagesIndex({
        pfIndex: 0,
        plIndex: 5
      })
    } else if (currentPage >= 5) {
      pageRef.current = lastIndex;
        setPagesIndex({
          pfIndex: currentPage - 3,
          plIndex: currentPage + 2
        })
      }
  },[currentPage])

  const firstPage = () => {
    setCurrentPage(1)
    setPagesIndex({
      pfIndex: 0,
      plIndex: 5
    })
  }

  const prevPage = () => {
    if (currentPage !== 1) {
        setCurrentPage(currentPage - 1)
    }
  }

  const changePage = (id) => {
    setCurrentPage(id)
  }

  const nextPage = () => {
    if (currentPage !== amountOfPages) {
        setCurrentPage(currentPage + 1)
    }
  }

  const lastPage = () => {
    setCurrentPage(amountOfPages)
  }

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
    setCurrentPage(1)
  }

  const showAll = () => {
    setVideoList(VideoList)
    setCurrentPage(1)
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
    setCurrentPage(1)
    setPagesIndex({
      pfIndex: 0,
      plIndex: 5
    })
  }

  return (
    <div className="App">
        <Navbar showAll={showAll} search={search} showGroup={showGroup} />
        <VideoLibrary width={width} ListOfVideos={currentVideos} FullList={videoList} />
        <Pagination pages={pagesSlice} amountOfPages={amountOfPages} currentPage={currentPage}
        firstPage={firstPage} prevPage={prevPage} changePage={changePage} nextPage={nextPage} lastPage={lastPage}/>
    </div>
  );
}

export default App;
