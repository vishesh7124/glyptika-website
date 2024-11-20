import React from 'react'
import { useState,useRef,useEffect } from 'react';

const ProjectItem = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const descRef = useRef(null);
  
    // Function to truncate text with ellipsis
    const truncateText = (text, maxLength) => {
      if (text.length <= maxLength) return text;
      return text.slice(0, maxLength);
    };
  
    useEffect(() => {
      const checkOverflow = () => {
        const element = descRef.current;
        if (element) {
          setIsOverflowing(element.scrollHeight > element.clientHeight);
        }
      };
  
      // Check on mount and when content changes
      checkOverflow();
      
      // Add resize listener
      window.addEventListener('resize', checkOverflow);
      return () => window.removeEventListener('resize', checkOverflow);
    }, [props.projectDesc]);

  return (
    <div className="project-item">
        <div className="project-img" style={{background:`url(${props.thumbnail})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}} >
        </div>
        <div className="project-text">
            <div className="project-name">
                {props.projectName}
            </div>
            <div
            ref={descRef}
            className={` project-desc ${!isExpanded ? ' overflow-hidden' : ''}`}
          >
            {isExpanded ? props.projectDesc : truncateText(props.projectDesc, 150)}
            {(!isExpanded && isOverflowing )&& (
              <span
                className="cursor-pointer "
                onClick={() => setIsExpanded(true)}
              >
                ...read more
              </span>
            )}
            {isExpanded && (
              <span
                className=" cursor-pointer"
                onClick={() => setIsExpanded(false)}
              >
                show less
              </span>
            )}
          </div>
        </div>
        <button className="project-btn" onClick={props.handleOpenPopUp}>
            Get Demo
        </button>
    </div>
  )
}

export default ProjectItem
