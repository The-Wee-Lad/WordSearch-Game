import { useRef, useState } from 'react';
import 'tailwindcss';

function Grid({content ={"theme":"Random Letters","letters" : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"], "size":4}}){
    
    let [isClick,setIsClick] = useState(false);
    let startX = useRef(null);
    let startY = useRef(null);
    let [selectedCell,setSelectedCell] = useState(new Set());
    let [hoveredCell,setHoveredCell] = useState(null);

    let grid = [];
    for(let i = 0; i < content.size; i++){
        for(let j = 0; j < content.size; j++){
            let a =parseInt(100/content.size);
            // console.log(a);
            let index = i*content.size+j;
            grid.push(
                <div className={` border-solid border-1  flex justify-center items-center 
                    ${selectedCell.has(index)?"bg-amber-300":hoveredCell==index?"bg-amber-100":"bg-cyan-100"}
                    `}  
                    x={j}
                    y={i} 
                    key={i*content.size+j}
                    style={{width:`${a}%`}}
                    onMouseOver={(event)=>{
                            if(isClick == false){
                                setHoveredCell(index);
                            }else{
                                setSelectedCell(prev => new Set([...prev, index]));
                            }
                        }
                    }
                    onMouseOut={(event)=>{
                            if(isClick == false){
                                setHoveredCell(null);
                            }
                        }
                    }
                    onMouseDown={(event)=>{
                        setIsClick(true);
                        setHoveredCell(null);
                        setSelectedCell(new Set([index]));
                        startX.current = event.target.x;
                        startY.current = event.target.y;
                    }}
                    onMouseUp={(event)=>{
                        setIsClick(false);
                        setHoveredCell(index);
                        setSelectedCell(new Set());
                    }}
                >
                {content.letters[index]+`${index}`}
                </div>
            );
        }
    }
    let section = 
    <section 
    className='gridContainer p-2 bg-cyan-100 flex justify-center flex-wrap min-w-screen gap-0 select-none'
    key="theSectionFor"
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