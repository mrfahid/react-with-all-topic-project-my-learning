import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [lenght, setLenght] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let passwrd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+";
    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length);
      passwrd += str.charAt(char);
    }
    setPassword(passwrd);
  }, [lenght, numberAllow, charAllow, setPassword]);

  const copyPasswordClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [lenght, numberAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md  shadow-md rounded-lg px-4 py-3 mt-14 bg-gradient-to-r from-amber-500 to-pink-500 text-orange-100 ">
          <h1 className="text-white text-center my-3">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="flex h-10 w-full rounded-md border border-gray-300/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-300/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50  mr-4"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordClipboard}
              className="rounded-md  bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={20}
                value={lenght}
                className=" cursor-pointer"
                onChange={(e) => {
                  setLenght(e.target.value);
                }}
              />
              <label htmlFor="lenghtInput">Length: {lenght}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllow}
                id="numberInput"
                className=" cursor-pointer"
                onChange={() => {
                  setNumberAllow((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllow}
                id="charInput"
                className=" cursor-pointer"
                onChange={() => {
                  setCharAllow((prev) => !prev);
                }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
