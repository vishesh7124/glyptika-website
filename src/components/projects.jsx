import React, { useState } from 'react'
import ProjectItem from './projectItem'
import PopUp from './popUp.jsx'
import Data from './data/data.jsx'

const Projects = () => {
  const [popUp, setPopUp] = useState(false);
  const [videoToPlay, setVideoToPlay] = useState("");

  const handleOpenPopUp = (videoUrl)=>{
    setPopUp(true)
    setVideoToPlay(videoUrl);
    console.log(videoUrl)
  }
  const handleClosePopUp = ()=>{
    setPopUp(false)
    setVideoToPlay("");
    console.log("clicked")
  }

  window.addEventListener("keydown",(e)=>{
    if(e.key=="Escape"){
      handleClosePopUp();
    }
  })

  return (
    <div className='section projects' id="projects">
      <div className="text text-head">
        <h1 className='text-uppercase'>Projects</h1>
      </div>
      <div className="project-items my-10">
        {Data.map((item,index)=>(
            <ProjectItem key={index} projectName={item.projectName} projectDesc={item.projectDesc} handleOpenPopUp={()=>handleOpenPopUp(item.url)}/>
        ))}
      </div>
      {popUp && <PopUp videoUrl={videoToPlay} onClose={handleClosePopUp}/>}
    </div>
  )
}

export default Projects
