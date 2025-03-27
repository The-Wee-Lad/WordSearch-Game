function Solutions({solvedStrings = new Set(),solutions=new Set(["No Solutions Passed"])}) {
    let solutionArray = [];
    for(let i = 0; i < solutions.size; i++){
        solutionArray.push(
            <div key={i} 
            className="border-2 border-[#82ff82] bg-[#B2FFB2] text-sm font-bold 
            rounded-2xl px-2 py-1 flex items-center">
                {[...solutions][i]}
            </div>
        )
    }

    let solvedArray = [];
    for(let i = 0; i < solvedStrings.size; i++){
        solvedArray.push(
            <div key={i} 
            className={`border-2 border-[#82ff82] bg-[#B2FFB2] rounded-2xl p-1 mr-1 text-sm line-through text-[#636363] font-bold`}>
                {[...solvedStrings][i]}
            </div>
        )
    }
    
    return (
        <div className="flex flex-row justify-start items-center flex-wrap gap-0.5 bg-[#ffeb9a] border-[#fcdb55] border-2 rounded-xl p-2">
            {solutionArray}
            {solvedArray}
        </div>
    );
}


export {Solutions};