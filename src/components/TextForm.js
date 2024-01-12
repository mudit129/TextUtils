import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function TextForm(props){
    const [text, setText] = useState("Enter Text Here");
    const toUpCase = ()=>{
        // console.log("clicked");
        let newText = text.toUpperCase();
        setText(newText);
        document.title = 'TextUtils - UpperCase';
    }

    const toLoCase = ()=>{
        // console.log("clicked");
        let newText = text.toLowerCase();
        setText(newText);
        document.title = 'TextUtils - LowerCase';
    }

    const toSpeak = ()=>{
        let msg = new SpeechSynthesisUtterance(text);
        //  msg.text = text;
        window.speechSynthesis.speak(msg);
        document.title = 'TextUtils - Speaking';
    }

    const handleOnChange = (event)=>{
        // console.log("changed");
        setText(event.target.value);
    }

    return (
        <>
            <h1>Enter your text here</h1>
            <div className='mb-3 template d-flex justify-content-center align-items-center'>
                {/* <label htmlFor="my-box" className="form-label">Example textarea</label> */}
                <textarea className="form-control" style={{background: (props.mode === 'light')?('grey'):('white'), color: (props.mode === 'light')?('black'):('grey')}} value = {text} onChange={handleOnChange} id="my-box" rows="8" cols = "50"></textarea>
            </div>
            <button className='btn btn-primary mx-2 my-2' onClick={toUpCase} >Convert to UpperCase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={toLoCase} >Convert to LowerCase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={toSpeak} >Lets Speak</button>
            <div className='container my-2'>
                <h2>Your Text Summary</h2>
                <p>
                    {text.split(' ').length} words and {text.length} characters
                </p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}