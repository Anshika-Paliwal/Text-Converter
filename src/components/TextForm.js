import React, {useState} from 'react' // useText is a hook 

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("upper case was clicked." + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        // console.log("upper case was clicked." + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleClearClick = (event) =>{
        // console.log("On change");
        let newText = '';
        setText(newText);
    }

    const [text, setText] = useState(''); // 'text' here is a state variable that uses 'useState' hook
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className= "btn btn-primary" onClick={handleUpClick}>Change to Uppercase</button>
            <button className= "btn btn-success mx-2" onClick={handleLoClick}>Change to Lowercase</button>
            <button className= "btn btn-primary" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-5">
            <h2>Your text Summary:)</h2>
            <p>Word Count: {text.split(" ").length} <b>|</b> Character Count: {text.length}</p> {/* "text.split(" ")"" will give you an array and its length will give number of words.*/} 
            <p><b>{0.008 * text.split(" ").length} Minutes read.</b></p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
