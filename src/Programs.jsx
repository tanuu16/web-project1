import React from 'react'
import './Programs.css'
import program_1 from '/src/assets/program-1.png';
import program_2 from '/src/assets/program-2.png';
import program_3 from '/src/assets/program-3.png';
import program_icon_1 from '/src/assets/program-icon-1.png';
import program_icon_2 from '/src/assets/program-icon-2.png';
import program_icon_3 from '/src/assets/program-icon-3.png';


const Programs = () => {
  return (
      <div className ="programs "  >
      <div className="program">
      <img src={program_1} alt="" />
      <div className="caption">
      <img src={program_icon_1} alt="" />
     <p>Graduation Degree</p>
      </div>
      
      </div>
      <div className="program">
      <img src={program_2} alt="" />
     
      <div className="caption">
      <img src={program_icon_2} alt="" />
     <p>Master Degree</p>
      </div> </div>
      <div className="program">
      <img src={program_3} alt="" />
      <div className="caption">
      <img src={program_icon_3} alt="" />
     <p>Postgraduation Degree</p>
      </div>
      </div>
      
      </div>
    
   
  )
}

export default Programs
