import { useState, useEffect } from "react";

function Mainpage(){
  const [allMemeImages, setAllMemes] = useState([]);
  const memes = allMemeImages;
  const [meme, setMeme] = useState({
    topText : "",
    bottomText : "",
    url : "http://i.imgflip.com/1bij.jpg"
  });

  const getRandomMeme = () => memes[Math.floor(Math.random() * memes.length)];

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then((response)=> response.json())
    .then((data)=> {
      const initMeme = data.data.memes;
      setAllMemes(initMeme)
      const randomUrl = () => initMeme[Math.floor(Math.random() * initMeme.length)].url;
      console.log(randomUrl);
      setMeme((prevImage)=>({
      ...prevImage,
      url : randomUrl()
    }))
    })
  },[])

  console.log(allMemeImages)

  function newRandomImage() {
    setMeme((prevImage)=>({
      ...prevImage,
      url : getRandomMeme().url
    }));
  }

  function getInput(e){
    const {name,value} = e.target;
    setMeme((prevMeme)=>({
      ...prevMeme,
      [name] : value
    }))
  }

  return (
    <main className="px-5 py-2 w-full flex flex-col items-center gap-3">
      <section className="w-2/3 flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <article className="flex md:flex-row flex-col gap-4 w-full">
            <div className="flex flex-col flex-1">
              <label htmlFor="first" className="text-xl font-bold text-gray-500">Top Text</label>
              <input type="text" id="first" name="topText" placeholder="Shut up" className="flex-1 p-2 outline-none rounded-lg box-border border-2 border-gray-300 border-solid text-xl" value={meme.topText} onChange={getInput}/>
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="last" className="text-xl font-bold text-gray-500">Bottom Text</label>
              <input type="text" id="last" name="bottomText" placeholder="And take my money" className="flex-1 p-2 outline-none rounded-lg box-border border-2 border-gray-300 border-solid text-xl" value={meme.bottomText} onChange={getInput}/>
            </div>
          </article>
          <button className="px-2 w-full bg-gradient-to-r from-violet-700 to-violet-600 text-white border-none text-center py-2 rounded-lg text-xl font-bold hover:bg-gradient-to-l active:scale-95" onClick={newRandomImage}>Get a new meme</button>
        </div>
      </section>
      <section className="w-2/3 my-2 relative">
        <p className="text-5xl absolute top-2 grid place-content-center w-full text-white [text-shadow:_5px_5px_5px_rgba(0,0,0,1)] font-bold uppercase">{meme.topText}</p>
        <img src={meme.url} className="w-full h-96"/>
        <p className="text-5xl absolute bottom-2 grid place-content-center w-full text-white font-bold [text-shadow:_5px_5px_5px_rgba(0,0,0,0.8)] uppercase">{meme.bottomText}</p>
      </section>
    </main>
  );
}

export default Mainpage