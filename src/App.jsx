import {useState, useEffect} from "react";

function App() {
  const [scrollProgress,setScrollProgress]=useState(0);



function handleScroll () {
  const scrollTop=window.scrollY;
  const scrollHeight=document.documentElement.scrollHeight-window.innerHeight;
  const progress=(scrollTop/scrollHeight) * 100;
  setScrollProgress(progress);
}

const showScrollProgress={
  height: scrollProgress+"%"
};

useEffect (() => {
window.addEventListener("scroll", handleScroll);

return() => window.removeEventListener("scroll", handleScroll);
},[]);



  return(
    <>
        <div className="relative">
          <div className="fixed top-0 right-0 w-4 h-full bg-gray-800">
            <div className=" h-full absolute bottom-0 left-0 w-full  bg-gradient-to-b from-violet-500 to-indigo-600 duration-200"
            style={showScrollProgress}></div>
          </div>
        </div>

    <div className="h-[200vh] bg-gray-700 flex flex-col items-center justify-center p-10">
          <h1 className="text-white text-3xl font-bold">Awesome Sauce</h1>
          <p className="text-gray-300 mt-4">Proud of You</p>

      </div>
</>
  )
}

export default App;
