import React, { useState } from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import { IoIosClose } from "react-icons/io";
import RingLoader from "react-spinners/RingLoader";


const PopUp = (props) => {
  const vidRef = useRef(null);
  const [isloading, setIsLoading] = useState(null)
  const handlePlayVideo = () => {
    vidRef.current.play();
  };
  return (
    <>
      {!isloading? 
            <div className="popUp">
            {/* <video ref={vidRef} onClick={handlePlayVideo} autoPlay={true} controls>
              <source src={burgerVid} type="video/mp4" />
            </video> */}
            {props.videoUrl&& (
              <ReactPlayer
                url={props.videoUrl}
                height="100%"
                width="100%"
                controls={true}
                autoPlay={true}
                onReady={() => setIsLoading(false)}
                onBuffer={() => setIsLoading(true)}
                onBufferEnd={() => setIsLoading(false)}
              />
            )}
            <button onClick={props.onClose} className="close-btn"><IoIosClose/></button>
          </div>
      :
      <RingLoader
      color={"white"}
      loading={isLoading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />}
    </>

  );
};

export default PopUp;
