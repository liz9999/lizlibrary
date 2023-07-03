import React from "react";
// import { VideoList } from "../helpers/VideoList";
import VideoItem from "../components/VideoItem"

const VideoLibrary = ({ListOfVideos}) => {
    return (
      <div className="video">
        <h1 className="videoTitle">Latest LIVEs</h1>
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