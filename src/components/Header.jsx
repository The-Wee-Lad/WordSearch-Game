
function Header(){
    return (
        <div className="flex items-center p-3">
            <img src="./src/assets/wordsearch.png" alt="Logo" className="h-20 w-20  flex justify-center items-center"/>
            <h1 className="text-4xl text-[#71797E] font-bold ml-1">
                Wordsearch
            </h1>
            <div className="h-10 ml-auto hover:bg-pink-400 hover:text-amber-200 text-xl text-amber-100 bg-pink-300 rounded-4xl pr-1.5 pl-1.5 font-bold flex justify-center items-center">Donate Me</div>
        </div>
    );
}

export {Header};