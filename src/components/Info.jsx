
function Info({info}){

    return (
        <div className="flex flex-row justify-start items-center flex-wrap gap-1 bg-[#f2e9e9] p-2 pt-1 pb-1 rounded-xl text-l">
            <div className="flex flex-row w-[100%]">
                <p className="bg-[#fda5d5] border-2 border-[#fe7cc4] rounded-2xl p-1">Theme : {info.theme}</p> 
                <p className="ml-auto bg-[#E3B2FF] border-2 border-[#cf7dff] rounded-2xl p-1"> Author : {info.author}</p>
            </div>
            <p className="ml-auto bg-[#cbcbcb] border-2 border-[#9f9e9e] rounded-xl text-sm p-0.5"> Grid Size : {info.size}</p>
        </div>
    )
}

export {Info};