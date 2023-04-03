import React, { useState } from 'react';
import '../src/styles.css';
import {MdKeyboardArrowDown} from 'react-icons/md'





function Dropdown ({selected, setSelected}) {
   const[isActive,setIsActive]= useState(false);
   const options =['Yes','Probably not']
    return (
        
    <div className="dropdown">
        
        <div className="dropdown-btn" onClick={(e) => 
        setIsActive(!isActive)}>
          {selected} 
          {/* <FontAwesomeIcon icon="fa-light fa-circle-chevron-down" /> */}
          <MdKeyboardArrowDown fontSize="20px" color="white" />
        </div>
        {isActive && (
            <div className="dropdwon-content">
                {options.map(option => (
                    <div 
                     onClick={(e)=> { 
                        setSelected (option);
                         setIsActive(false);
                    }}
                        className="dropdown-item dropdata">
                            {option}
                            </div>
                ))}
             </div>
        )}
        </div>
    );
}

export default Dropdown;