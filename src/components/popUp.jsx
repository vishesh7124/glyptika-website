import React, { useState } from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import { IoIosClose } from "react-icons/io";
import ClipLoader from "react-spinners/ClipLoader";


const PopUp = (props) => {
  const vidRef = useRef(null);
  const [isloading, setIsLoading] = useState(true)
  const handlePlayVideo = () => {
    vidRef.current.play();
  };
  return (
            <div className="popUp">
            {
              isloading && (
                <div className="loading"                 >
                    <ClipLoader
                    color={"white"}
                    loading={isloading}
                    height={50}
                    width={50}
                    aria-label="Loading Spinner"
                    data-testid="loader" 
                    />

                </div>
              )
            } 
            {props.videoUrl&& (
              <ReactPlayer
                url={props.videoUrl}
                height="100%"
                width="100%"
                controls={true}
                autoPlay={true} 
                onReady={() => setIsLoading(false)}
                style={!isloading?{opacity:"1"}:{opacity:"0"}}
              />
            )}
            <button onClick={props.onClose} className="close-btn"><IoIosClose/></button>
          </div>



  );
};

export default PopUp;
