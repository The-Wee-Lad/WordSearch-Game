import { useState, useRef } from 'react';
import 'tailwindcss';

const highlightColors = ["#00FF00", "#008CFF", "#FF1493", "#A200FF", "#00FF7F", "#1E90FF", "#FF4500", "#8A2BE2", "#FFD700", "#FF1493", "#00CED1"];
let choosenColor = highlightColors[Math.floor(Math.random() * highlightColors.length)];

function processSelectedCells(letters, color, selectedCell, solution, setSolution, setSolvedStrings, matchedCell, setMatchedCell) {
    const word = [...selectedCell].map(elem => letters[elem]).join(''),
        reverseWord = [...selectedCell].map(elem => letters[elem]).reverse().join('');
    choosenColor = highlightColors[Math.floor(Math.random() * highlightColors.length)]
    if (solution.has(word) || solution.has(reverseWord)) {
        let temp = solution.has(word) ? word : reverseWord;
        solution.delete(temp);
        setSolution(new Set([...solution]));
        setSolvedStrings(prev => new Set([...prev, temp]));
        for (const element of [...selectedCell])
            matchedCell.set(element, new Set([...(matchedCell.get(element) ?? []), color]));
        setMatchedCell(new Map(matchedCell));
    }
}

function Grid({ content, solution, setSolution, setSolvedStrings, win }) {

    // const lastMoveTime = useRef(0);
    let [clicked, setClicked] = useState(false);
    let [selectedCell, setSelectedCell] = useState(new Set());
    let [hoveredCell, setHoveredCell] = useState(null);
    let [matchedCell, setMatchedCell] = useState(new Map());
    let startX = useRef(null);
    let startY = useRef(null);
    let lastX = useRef(null);
    let lastY = useRef(null);

    
    const start = (e) => {
        setClicked(true);
        startX.current = e.target.dataset.x;
        startY.current = e.target.dataset.y;
        lastX.current = null;
        lastY.current = null;
    }
    const move = (e,isTouch) => {
        //Throttling Abhi kaam ki nahi hai
        // const now = Date.now();
        // if (now - lastMoveTime.current < 100) return; // Adjust delay (100ms = slower movement)
        //     lastMoveTime.current = now;
        if(isTouch)
            e.target = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);

        if (!clicked) setHoveredCell(+e.target.dataset.y * content.size + 1 * e.target.dataset.x);
        else {
            const paint = () => { setSelectedCell(prev => new Set([...prev, e.target.dataset.y * content.size + (+e.target.dataset.x)])) };
            if (!e.target?.classList?.contains("gridContainer")) {
                if (startX.current == e.target.dataset.x && startY.current == e.target.dataset.y)
                    paint();
                else if (lastX.current == null && lastY.current == null) {
                    lastX.current = e.target.dataset.x;
                    lastY.current = e.target.dataset.y;
                    paint();
                } else {
                    if ((startX.current - lastX.current == lastX.current - e.target.dataset.x)
                        && (startY.current - lastY.current == lastY.current - e.target.dataset.y)) {
                        startX.current = lastX.current;
                        startY.current = lastY.current;
                        lastX.current = e.target.dataset.x;
                        lastY.current = e.target.dataset.y;
                        paint();
                    }
                }
            }
        }
    }
    const end = () => {
        setClicked(false);
        processSelectedCells(content.letters, choosenColor, selectedCell, solution, setSolution, setSolvedStrings, matchedCell, setMatchedCell);
        setSelectedCell(new Set())
    }

    let gridCells = [];
    for (let i = 0; i < content.size; i++)
        for (let j = 0; j < content.size; j++)
            gridCells.push(<div
                className={`relative h-full w-full p-1.5 border-1 border-black rounded-[5px] flex flex-row justify-center items-center `}
                data-x={j}
                data-y={i}
                key={i * content.size + j}
                style={{
                    backgroundColor: `${(hoveredCell == (i * content.size + j)) ? choosenColor : (selectedCell.has(i * content.size + j)) ? choosenColor : 'white'}`,
                    transition: "background-color 0.05s ease-in-out",
                    zIndex:0
                }}>    
                
                {content.letters[i * content.size + j]}

                {[...(matchedCell.get(i * content.size + j) || [])].map((element) => {
                    return <div
                        className='backgroundCells absolute h-full w-full pointer-events-none'
                        key={`${element}`}
                        style={{
                            backgroundColor: `${element}`,
                            opacity: 0.25,
                            zIndex:-1
                        }}></div>
                })}
            </div>);

    let section = <section
        className='gridContainer bg-white p-2 w-full h-full grid gap-1  select-none'
        style={{
            gridTemplateColumns: `repeat(${content.size},1fr)`,
            gridTemplateRows: `repeat(${content.size},1fr)`,
            touchAction: `${win?"auto":"none"}`
        }}

        //For PC Only
        onMouseDown={start}
        onMouseMove={move}
        onMouseUp={end}
        onMouseLeave={() => {setHoveredCell(null);end();}}

        //For Android Only
        onTouchStart={start}
        onTouchMove={(e) => {move(e,true)}}
        onTouchEnd={end}
    >
        {gridCells}
    </section>

    return section;
}

export { Grid };