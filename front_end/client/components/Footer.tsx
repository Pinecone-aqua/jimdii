import React from "react";

export default function Footer(): JSX.Element{
    return (
        <footer className="h-[320px] bg-black">
            <div className="w-[70%] mx-auto py-5 h-full">
                <div className="bg-slate-400">Footer top</div>
                <div className="bg-slate-500">Footer bottom</div>
            </div>
        </footer>
    )
}