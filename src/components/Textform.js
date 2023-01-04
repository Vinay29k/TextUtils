import React, { useState } from 'react'
import copy from "copy-to-clipboard";


export default function Textform(props) {
    
    const msg = new SpeechSynthesisUtterance();
    const speechHandler = (msg) => {
        msg.text = text
        window.speechSynthesis.speak(msg)
        props.showAlert("Speak Mode is Enabled", "Success");
    }
    const toUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("To UpperCase Mode is Enabled", "Success");
    }
    const toLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("To LowerCase Mode is Enabled", "Success");
    }
    const handleOnchange = (event) => {
        setText(event.target.value)

    }
    const toClearcase = () => {
        let newText = " ";
        setText(newText);
        props.showAlert("Clear Mode is Enabled", "Success");
    }
    const toCopycase = (event) => {
        setText(event.target.value);

    }
    const copyToClipboard = () => {
        copy(text);
        alert(`You have copied "${text}"`);
        props.showAlert("Copied to Clipboard ", "Success");
    }

    
    const [text, setText] = useState("Enter your text");
    return (
        <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" style={{ backgroundColor: props.mode === "dark" ? "#343a40" : "white", color: props.mode === "dark" ? "white" : "black" }} value={text} onCopy={toCopycase} onChange={handleOnchange} id="myBox" rows="10"></textarea>
            </div>
           
            <button type="button" disabled = {text.length===0} className="btn btn-secondary mx-2 my-2" style={{ backgroundColor: props.Greenmode === "dark" ? "green" : "" }} onClick={toLowercase}>{props.button2}</button>
            <button type="button" disabled = {text.length===0} className="btn btn-secondary mx-2 my-2" style={{ backgroundColor: props.Greenmode === "dark" ? "green" : "" }} onClick={toUppercase}>{props.button1}</button>
            <button type="button" disabled = {text.length===0} className="btn btn-secondary mx-2 my-2" style={{ backgroundColor: props.Greenmode === "dark" ? "green" : "" }} onClick={toClearcase}>{props.button3}</button>
            <button type="button" disabled = {text.length===0} className="btn btn-secondary mx-2 my-2" style={{ backgroundColor: props.Greenmode === "dark" ? "green" : "" }} onClick={copyToClipboard}>{props.button4}</button>
            <button type="button" disabled = {text.length===0} className="btn btn-secondary mx-2 my-2" style={{ backgroundColor: props.Greenmode === "dark" ? "green" : "" }} onClick={() => speechHandler(msg)}>{props.button5}</button>


            <div className='container my-5' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </div>
    )
}
