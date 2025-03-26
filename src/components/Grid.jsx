/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react';
import 'tailwindcss';

const highlightColors = ["#00FF00","#008CFF","#FF1493","#A200FF","#00FF7F","#1E90FF","#FF4500","#8A2BE2","#FFD700","#FF1493","#00CED1"];
let choosenColor = highlightColors[Math.floor(Math.random() * highlightColors.length)];

function processSelectedCells(letters, color, selectedCell, solution, setSolution, setSolvedStrings, matchedCell, setMatchedCell) {
    const word = [...selectedCell].map(elem => letters[elem]).join(''),
        reverseWord = [...selectedCell].map(elem => letters[elem]).reverse().join('');
    choosenColor = highlightColors[Math.floor(Math.random() * highlightColors.length)]
    if (solution.has(word) || solution.has(reverseWord)) {
        let temp = solution.has(word)?word:reverseWord;
        solution.delete(temp);
        setSolution(new Set([...solution]));
        setSolvedStrings(prev => new Set([...prev, temp]));
        for (const element of [...selectedCell])
            matchedCell.set(element, new Set([...(matchedCell.get(element) ?? []), color]));
        setMatchedCell(new Map(matchedCell));
    }
}

function Grid({ content, solution, setSolution, setSolvedStrings }) {

    // const lastMoveTime = useRef(0);
    let [clicked, setClicked] = useState(false);
    let [selectedCell, setSelectedCell] = useState(new Set());
    let [hoveredCell, setHoveredCell] = useState(null);
    let [matchedCell, setMatchedCell] = useState(new Map());
    let gridCells = [];
    for (let i = 0; i < content.size; i++)
        for (let j = 0; j < content.size; j++)
            gridCells.push(<div
                className={`relative h-full w-full z-0 p-1.5 border-1 border-black rounded-[5px] flex flex-row justify-center items-center `}
                data-x={j}
                data-y={i}
                key={i * content.size + j}
                style={{ backgroundColor: `${(hoveredCell == (i * content.size + j)) ? choosenColor : (selectedCell.has(i * content.size + j)) ? choosenColor : 'white'}`,
                        transition: "background-color 0.05s ease-in-out",
                        }}
            >{content.letters[i * content.size + j]}
                {[...(matchedCell.get(i * content.size + j) || [])].map((element) => {
                    return <div
                        className='absolute h-full w-full -z-50 pointer-events-none'
                        key={`${element}`}
                        style={{
                            backgroundColor: `${element}`,
                            opacity: 0.25,
                        }}></div>
                })}
            </div>);

    let section = <section
        className='gridContainer bg-white p-2 w-full h-full grid gap-1 z-10 select-none'
        style={{
            gridTemplateColumns: `repeat(${content.size},1fr)`,
            gridTemplateRows: `repeat(${content.size},1fr)`
        }}

        //For PC Only
        onMouseDown={() => { setClicked(true) }}
        onMouseMove={(e) => {
            //Throttling Abhi kaam ki nahi hai
            // const now = Date.now();
            // if (now - lastMoveTime.current < 100) return; // Adjust delay (100ms = slower movement)
            //     lastMoveTime.current = now;
            if (!clicked) setHoveredCell(+e.target.dataset.y * content.size + 1 * e.target.dataset.x);
            else {
                if (!e.target?.classList?.contains("gridContainer"))
                    setSelectedCell(prev => new Set([...prev, +e.target.dataset.y * content.size + 1 * e.target.dataset.x]))
            }
        }}
        onMouseUp={() => {
            setClicked(false);
            processSelectedCells(content.letters, choosenColor, selectedCell, solution, setSolution, setSolvedStrings, matchedCell, setMatchedCell);
            setSelectedCell(new Set())
        }}
        onMouseLeave={() => {
            setClicked(false);
            setHoveredCell(null);
            processSelectedCells(content.letters, choosenColor, selectedCell, solution, setSolution, setSolvedStrings, matchedCell, setMatchedCell);
            setSelectedCell(new Set())
        }}

        //For Android
        //TODO:Complete Touch Screen Part
    >
        {gridCells}
    </section>

    return section;
}

export { Grid };