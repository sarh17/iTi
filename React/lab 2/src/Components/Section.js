import { useState } from "react"



function Section(){
    
    
    let [flag,setFlag]=useState(false)
    function section(){
      if (flag) {
         setFlag(false)
      } else {
         setFlag(true)
      }
    }
    return(
       <div className="sec">
    <button type="button" class="btn btn-primary btn-lg w-50"onClick={section}>Section 1 </button>
        <p className="w-50 " style={{display: flag? "block": "none"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus rerum ducimus sint beatae similique eaque totam iste? Aliquam assumenda animi inventore ipsam. Ab provident doloribus quidem officiis unde eos et
        , ipsum dolor sit amet consectetur adipisicing elit. Unde soluta dolor debitis dignissimos non iusto aliquam aspernatur, odit quibusdam!</p>


       </div>
    )
}
export default Section;