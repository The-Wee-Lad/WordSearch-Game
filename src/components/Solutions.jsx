

function Solutions({solvedStrings = new Set(),solutions=new Set(["No Solutions Passed"])}) {
    let solutionArray = [];
    for(let i = 0; i < solutions.size; i++){
        solutionArray.push(
            <div key={i} 
            className="border-2 border-green-600 bg-green-400 text-sm font-bold 
            rounded-2xl px-2 py-1 flex items-center">
                {[...solutions][i]}
            </div>
        )
    }

    let solvedArray = [];
    for(let i = 0; i < solvedStrings.size; i++){
        solvedArray.push(
            <div key={i} 
            className={`border-2 border-green-600 rounded-2xl bg-green-400 p-1 mr-1 text-sm line-through text-amber-600`}>
                {[...solvedStrings][i]}
            </div>
        )
    }
    console.log(solvedArray);
    
    return (
        <div className="flex flex-row justify-start items-center flex-wrap gap-0.5 bg-amber-200 rounded-xl p-2">
            {solutionArray}
            {solvedArray}
        </div>
    );
}


export {Solutions};