import react, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import VideoLibrary from './components/VideoLibrary'

function App() {
  
  const [ Group, setGroup ] = useState(null);

  return (
    <div className="App">
        <Navbar />
        {/* <VideoLibrary ListOfVideos={VideoList} /> */}
        {/* <Footer /> */}
    </div>
  );
}

export default App;
