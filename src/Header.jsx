import React from "react"
import logo from "./assets/logo.svg"

export default function Header(){
    return (
        <div className="text-white bg-gradient-to-r from-[#672280] to-[#A626D3] flex justify-between items-center px-8 py-6">
            <div className="flex items-center">
                <img 
                    src={logo} 
                    alt="Troll face logo" 
                    className="w-8 h-6"
                />
                <h1 className="text-xl font-bold ml-2">Meme Generator</h1>
            </div>
            <p className="text-xs font-medium">React Course - Project 3</p>
        </div>
    )
}