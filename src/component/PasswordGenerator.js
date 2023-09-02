import React, { useCallback, useEffect, useRef, useState } from 'react';

const PasswordGenerator = () => {

    const [length, setLength] = useState('8');
    const [number, setNumber] = useState(false);
    const [character, setCharacter] = useState(false);
    const [password, setPassword] = useState();

    const passwordRef = useRef()

    const GeneratePassword = useCallback(()  =>{
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        if(number) str+='0123456789';
        if(character) str+='!@#$%^&*()<>,.?/[]{}-=_+|/';

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length +1);

            pass += str.charAt(char);
            console.log(pass);
            // console.log(`char: ${str[char]}`)
            // console.log(char);   
        }

        setPassword(pass);

    },[length, number, character, setPassword]);

    useEffect(()=>{
        // setPassword(pass);
        GeneratePassword();
    },[length, number, character, GeneratePassword])

    const CopyPassword = useCallback(() =>{ 
        window.navigator.clipboard.writeText(password);
        // passwordRef.current?.setSelectionRange(0, 12)
    },[password])

  return (
    <>
    
       <div className="container">
            <h3>Password Generator</h3>
            <div className="w-75 mx-auto py-4">
             <div>
             <input type="text" className='w-50 mx-auto' placeholder='Password' value={password} readOnly />
             <button className="btn btn-primary" ref={passwordRef} onClick={CopyPassword}>Copy</button>
             </div>
             <div className="d-flex gap-5 justify-content-center pt-4">
             <span> <input type="range" min={6} max={12} value={length} onChange={(e) => setLength(e.target.value)}/>
              <label htmlFor="">Length: {length}</label></span>
             <span><input type="checkbox" defaultChecked={number} onChange={()=>setNumber((prev)=> !prev )} />
              <label htmlFor="">Number</label></span>
             <span><input type="checkbox" defaultChecked={character} onChange={()=>setCharacter((prev)=> !prev )}/>
              <label htmlFor="">Character</label></span>
             </div>
            </div>
         </div>
    </>
  );
}

export default PasswordGenerator;
