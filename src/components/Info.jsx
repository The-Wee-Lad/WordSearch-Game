
function Info({info}){

    return (
        <div className="flex flex-row justify-start items-center flex-wrap gap-1 bg-[#f2e9e9] p-2 pt-1 pb-1 rounded-xl text-l">
            <div className="flex flex-row w-[100%]">
                <p className="bg-pink-300 border-2 border-pink-600 rounded-2xl p-1">Theme : {info.theme}</p> 
                <p className="ml-auto bg-purple-400 border-2 border-purple-600 rounded-2xl p-1"> Author : {info.author}</p>
            </div>
            <p className="ml-auto bg-[#888888] border-2 rounded-xl text-sm p-0.5"> Grid Size : {info.size}</p>
        </div>
    )
}

export {Info};