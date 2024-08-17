import React, { useState } from 'react'

export default function About(props) {
  const [myStyle,setMystyle]=useState({
  backgroundColor:'white',
  color:'black'  
})

const [btnText,setBtnText] = useState("Enable dark mode")
//  const toggleStyle=()=>{
//   if(myStyle.color==='black'){
//     setMystyle({
//       backgroundColor:'black',
//   color:'white'  ,
//   border:'1px solid white'

//     })
//      setBtnText("Enable light mode")
//     }
//     else {
//       setMystyle({
//       backgroundColor:'white',
//   color:'white'  
//   })
//   setBtnText("Enable light mode")
// }
// }
  return (
    <div className="aboutUS">
    <div className="container" style={{
       backgroundColor: props.mode === "dark" ? "#0b234e" : "white",

      }} >
        <h1 className='my-3'>About US</h1>
      <div className="accordion" id="accordionExample" style={{
       backgroundColor: props.mode === "dark" ? "#0b234e" : "white",
      }} >
  <div className="accordion-item" style={{
       backgroundColor: props.mode === "dark" ? "#0b234e" : "white",
      }} >
    <h2 className="accordion-header">
      <button className="accordion-button" style={{
       backgroundColor: props.mode === "dark" ? "#0b234e" : "white",color:props.mode==="dark"?"white":"#0b234e"
      }}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
       Developer
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={{
       backgroundColor: props.mode === "dark" ? "#0b234e" : "white",color:props.mode==="dark"?"white":"#0b234e"
      }} >
        <strong>CSIt student of BMC campus.</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequuntur tempore aliquam dolore at dolorum ipsam, atque deleniti exercitationem distinctio assumenda quo nisi deserunt pariatur?<code>.Branches</code> 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{
       backgroundColor: props.mode === "dark" ? "#0b234e" : "white",
      }} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{
       backgroundColor: props.mode === "dark" ? "#0b234e" : "white",color:props.mode==="dark"?"white":"#0b234e"
      }}  type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
       5000+ downloads
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={{
       backgroundColor: props.mode === "dark" ? "#0b234e" : "white",color:props.mode==="dark"?"white":"#0b234e"
      }} >
        <strong>This is the text converter downloaded by more than 5 thousands people.</strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam accusamus nostrum vitae modi asperiores rem molestiae eveniet illum animi ad cum sequi tempora accusantium id ipsum suscipit facere, esse inventore? <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{
       backgroundColor: props.mode === "dark" ? "#0b234e" : "white",
      }} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{
       backgroundColor: props.mode === "dark" ? "#0b234e" : "white",color:props.mode==="dark"?"white":"#0b234e"
      }}  type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Fast Converter
      </button>
    </h2> 
    <div id="collapseThree" className="accordion-collapse collapse" style={{
       backgroundColor: props.mode === "dark" ? "#0b234e" : "white",color:props.mode==="dark"?"white":"#0b234e"
      }} data-bs-parent="#accordionExample">
      <div className="accordion-body"  
       >
        <strong>This is the fast converter.</strong>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, impedit, consequatur expedita soluta architecto eum ea quidem doloribus eligendi facilis cupiditate quas nostrum a accusamus omnis obcaecati quisquam incidunt dolore iusto nihil dolores. Repellat laborum quam itaque dolore minima quia? <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <div className="container" >
<button onClick={toggleStyle} type="button" className="btn btn-primary my-2">{btnText}</button>
</div> */}
    </div></div>
  )
}
