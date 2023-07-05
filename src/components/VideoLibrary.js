import React from "react";
import VideoItem from "../components/VideoItem"
import { VideoList } from '../helpers/VideoList'

const VideoLibrary = ({ListOfVideos, FullList, width}) => {
  const myStyle = {
    paddingLeft: (width % 340)/2
  }

    return (
      <div className="video">
        <h1 className="videoTitle" style={myStyle}>{VideoList.length === FullList.length ? "Latest LIVEs" : FullList.length + " LIVEs"}</h1>
        <div className="videoList">
          {ListOfVideos.map((videoItem, key) => {
            return (
              <VideoItem
                key={key}
                videoTitle={videoItem.videoTitle}
                videoID={videoItem.videoID}
                thumbnail={videoItem.thumbnail}
                length={videoItem.length}
                group={videoItem.group}
                date={videoItem.date}
              />
            );
          })}
        </div>
      </div>
    );
  }

export default VideoLibrary;