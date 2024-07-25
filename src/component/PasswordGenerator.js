import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState("12");
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState();

  const passwordRef = useRef(null);

  const GeneratePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*()<>,.?/[]{}-=_+|/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
      console.log(pass);
      // console.log(`char: ${str[char]}`)
      // console.log(char);
    }

    setPassword(pass);
  }, [length, number, character, setPassword]);

  useEffect(() => {
    // setPassword(pass);
    GeneratePassword();
  }, [length, number, character, GeneratePassword]);

  const CopyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    //passwordRef.current?.select();
    //  passwordRef.current?.setSelectionRange(0, 12)
  }, [password]);

  return (
    <>
      <div className="">
      <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
      Random Password Generator
          </h1>
        <div className="mt-6 flex max-w-md gap-x-4">
          <input
            placeholder="Password"
            value={password}
            readOnly
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          />
          <button
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            ref={passwordRef}
            onClick={CopyPassword}
          >
            Copy
          </button>
        </div> 
            <div className="mt-6 flex h-6 items-center justify-items-center">
              <div>
                <input
                  type="range"
                  min={6}
                  max={20}
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                />
                <label htmlFor="">Length: {length}</label>
              </div>
              <div className="ml-3">
                <input
                  defaultChecked={number}
                  onChange={() => setNumber((prev) => !prev)}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label className="ml-3 font-semibold leading-6">Number</label>
              </div>
              <div className="ml-3">
                <input
                  defaultChecked={character}
                  onChange={() => setCharacter((prev) => !prev)}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label className="ml-3 font-semibold leading-6">
                  Character
                </label>
              </div>
            </div>  
      </div>
    </>
  );
};

export default PasswordGenerator;
