import React, { useState } from "react";
export default function TextForm(props) {
 
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  // const getWordCount = (text) => {
  //   // To remove leading and trailing whitespace
  //   const trimmedText = text.trim();
  //   // Return 0 if text is empty or contains only whitespace, else return the count of words
  //   return trimmedText === "" ? 0 : trimmedText.split(/\s+/).length;
  // };
  const getCharactersCountWithoutSpace = (text) => {
    return text.replace(/\s+/g, "").length;
  };
  const handleinverseclick = () => {
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    props.showAlert("Text is inversed","success");
  };
  const handleCopyClick = () => {
    var text=document.getElementById("myBox");
    text.select();
    // .then(() => setCopied(true))
    // .catch((err) => console.error("failed to copy the text: " + err));
    navigator.clipboard.writeText(text.value)
      document.getSelection().removeAllRanges();
      props.showAlert(" Copied to clipboard ","success");
  };

  const [text, setText] = useState("");
  // const [copied, setCopied] = useState(false);
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#0b234e" : "white",color:props.mode==="dark"?"white":"#0b234e"
             }} 
            // style={{
            //   backgroundColor: props.mode === "dark" ? "gray" : "white",
            // }}
            id="myBox"
            rows="8"
          >
            {" "}
          </textarea>
        </div>
        <button  disabled={text.length===0}  className=" btn btn-primary " onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button  disabled={text.length===0} className=" btn btn-primary " onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0}  className=" btn btn-primary " onClick={handleinverseclick}>
          Inverse The Text
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy to clipboard
          {/* {copied ? "Copied to Clipboard" : "Copy to Clipboard"} */}
        </button>
      </div>
      <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p className="para my-3">
          {text.split(" ").filter((element)=>{return element.length!==0}).length}words
          <br /> {text.length} characters <br />
          {getCharactersCountWithoutSpace(text)} CharactersWithoutSpace
          <br />
          {0.008 * text.split("").length}Minutes read
        </p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview it here"}</p>
      </div>
    </>
  );
}

