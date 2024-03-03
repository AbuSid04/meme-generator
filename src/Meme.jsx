import React from "react"
import "./stroke.css"

export default function Meme(){
    const[meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(()=>{
        async function getMeme(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMeme()
    },[])

    function getMemeImage(){
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const memeImg = allMemes[randomIndex].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: memeImg
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return (
        <div className="px-11 py-11">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <label htmlFor="top-text" className="text-sm font-medium text-[#374151]">Top Text</label>
                    <input
                        className="py-2 px-4 mt-1 placeholder:text-[#6B7280] border border-[#D1D5DB] rounded-md w-60 focus:outline-none"
                        id="top-text" 
                        type="text" 
                        placeholder="Top Text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="bottom-text" className="text-sm font-medium text-[#374151]">Bottom Text</label>
                    <input
                        className="py-2 px-4 mt-1 placeholder:text-[#6B7280] border border-[#D1D5DB] rounded-md w-60 focus:outline-none" 
                        id="bottom-text" 
                        type="text" 
                        placeholder="Bottom Text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button 
                className="bg-gradient-to-r from-[#711F8D] to-[#A818DA] px-3 py-3 w-full text-white font-bold rounded-md mt-6" 
                type="submit"
                onClick={getMemeImage}
            >Get a new meme image 🖼️</button>
            <div className="mt-8 h-full w-full font-Impact font-extrabold text-5xl relative">
                <img className="h-full w-full" src={meme.randomImg} alt="Random Meme Image" />
                <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8 text-white text-stroke">{meme.topText}</h1>
                <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 text-white text-stroke">{meme.bottomText}</h1>
            </div>
        </div>
    )
}