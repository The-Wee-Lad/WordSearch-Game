import { useRef, useState } from 'react';
import 'tailwindcss';


function check(array, indexArray, solution, setSolvedStrings){
    let string="";
    for(let i = 0; i < indexArray.length; i++)
        string+= array[indexArray[i]];
    if(solution.has(string) || solution.has(string.split('').reverse().join(''))){
        solution.delete(string);
        setSolvedStrings(prev=>new Set([...prev,string]));
        return true;
    }
    return false;
}

function Grid({content, solution, setSolution, setSolvedStrings}){
    
    let [isClick,setIsClick] = useState(false);
    let startX = useRef(null);
    let startY = useRef(null);
    let lastX = useRef(null);
    let lastY = useRef(null);

    let [selectedCell,setSelectedCell] = useState(new Set());
    let [solvedCell,setSolvedCell] = useState(new Set());
    let [hoveredCell,setHoveredCell] = useState(null);

    const endDrag = ()=>{
        setIsClick(false);
        // setHoveredCell(index);
        let tempArray = [...selectedCell]
        if(check(content.letters, tempArray, solution, setSolvedStrings)){
            setSolvedCell(prev => new Set([...prev,...selectedCell]));
            setSolution(new Set([...solution]));
        }
        setSelectedCell(new Set());
    };
    const startDrag = (event,index)=>{
        setIsClick(true);
        setHoveredCell(null);
        setSelectedCell(new Set([index]));
        startX.current = event.target.dataset.x;
        startY.current = event.target.dataset.y;
        lastX.current = null;
        lastY.current = null;
    }
    const dragging = (event,index)=>{
        if(isClick == false){
            setHoveredCell(index);
        }else{
            if (lastX.current == null && lastY.current == null){
                lastX.current = event.target.dataset.x;
                lastY.current = event.target.dataset.y;
                setSelectedCell(prev => new Set([...prev,index]));
            }else{
                if((startX.current - lastX.current == lastX.current - event.target.dataset.x) 
                && (startY.current - lastY.current == lastY.current - event.target.dataset.y)){
                    startX.current = lastX.current;
                    startY.current = lastY.current;
                    lastX.current = event.target.dataset.x;
                    lastY.current = event.target.dataset.y;
                    setSelectedCell(prev => new Set([...prev,index]));
                }   
            }
        }
    }

    let grid = [];
    for(let i = 0; i < content.size; i++){
        for(let j = 0; j < content.size; j++){
            let index = i*content.size+j;
            grid.push(
                <div className={` border-solid border-1 rounded-[0.2rem]  flex justify-center items-center
                    ${hoveredCell==index?"bg-amber-100":selectedCell.has(index)?"bg-amber-300":solvedCell.has(index)?"bg-green-500":"bg-cyan-100"}
                    `}  
                    data-x={j}
                    data-y={i} 
                    key={i*content.size+j}
                    onMouseOver={(event) => {dragging(event,index)}}
                    onMouseOut={()=>{
                            if(isClick == false){
                                setHoveredCell(null);
                            }
                        }
                    }
                    onMouseDown={(event)=>{startDrag(event,index)}}
                    // onTouchStart={(event)=>{startDrag(event,index)}}
                    // onTouchMove={(event) => {event.preventDefault();;dragging(event,index)}}
                    
                >
                {content.letters[index]}
                </div>
            );
        }
    }
    
    let section = 
    <section className={`gridContainer grid w-full h-100 p-4 gap-1 rounded-2xl bg-cyan-100 select-none`}
    style={{
        gridTemplateColumns: `repeat(${content.size}, 1fr)`,
        gridTemplateRows: `repeat(${content.size}, 1fr)`,
    }}        
    onMouseUp={endDrag}
    onMouseLeave={endDrag}
    // onTouchEnd={endDrag}
    >
        {grid}
    </section>

    return (
        <>
            {section}
        </>
    );
    
}

export {Grid};