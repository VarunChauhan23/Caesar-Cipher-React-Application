import React, { useState } from 'react';

export default function Body(props) {
    const [inputtext, setinputtext] = useState("");
    const [outputtext, setoutputtext] = useState("");
    const [shift, setshift] = useState(0);

    function handletextchange(event) {
        setinputtext(event.target.value);
    }

    function handlekeychange(event) {
        setshift(event.target.value);
    }

    function encryption() {
        let result = settextshift(inputtext, shift);
        setoutputtext(result);
        console.log(result);
    }

    function decryption() {
        let result = settextshift(inputtext, -shift);
        setoutputtext(result);
        console.log(result);
    }

    function settextshift(inputtext, shift) {
        let result = '';
        for (let i = 0; i < inputtext.length; i++) {
            const charCode = inputtext.charCodeAt(i);
            if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                const isUpperCase = charCode >= 65 && charCode <= 90;
                const shiftedCharCode =
                    ((charCode - (isUpperCase ? 65 : 97) - shift + 26) % 26 + 26) % 26 + (isUpperCase ? 65 : 97);
                result += String.fromCharCode(shiftedCharCode);
            } else {
                result += inputtext.charAt(i);
            }
        }
        return result;
    }

    function handleapplybtn() {
        setinputtext(outputtext);
    }
    
    function handlecopybtn() {
        document.getElementById('output');
        document.execCommand('copy');
    }

    return (
        <div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
            <h1 className='text-center mt-3'>Caesar Cipher🔐</h1>
            <div className="form-group mb-3">
                <textarea className="form-control" value={inputtext} onChange={handletextchange} id="input" rows="5" cols="30" placeholder='Input Text...'></textarea>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="key">Key🔑</label>
                <input className="form-control" type="number" value={shift} onChange={handlekeychange} id="key" name="key" placeholder='Enter Shift Value...' required="" />
            </div>
            <div className="form-group mb-3">
                <label>Mode: </label>
                <button type="button" id='encrypt' onClick={encryption} className="btn btn-danger m-1">Encode🔒</button>
                <button type="button" id='decrypt' onClick={decryption} className="btn btn-success m-1">Decode🔓</button>
            </div>
            <div className="form-group mb-3">
                <textarea className="form-control" id="output" value={outputtext} rows="5" cols="30" readOnly placeholder='Output Text...'></textarea>
            </div>
            <div className="form-group mb-3">
                <button type="button" id='copy-btn' className="btn btn-primary m-1" onClick={handlecopybtn}>Copy📋</button>
                <button type="button" id='apply-btn' class="btn btn-secondary m-1" onClick={handleapplybtn}>Apply</button>
            </div>
        </div>
    );
}
