"use client"

import { icons } from "./icons-data";


export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={`w-20 h-20 font-light text-gray-500 flex flex-col justify-center items-center gap-1 rounded-lg border shadow-sm cursor-grab hover:shadow-md transition duration-150 ease-in-out ${type}`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
          {icons[type]}
          <span className={`text-[10px]`}>{label}</span>
      </div>
    );
  };
  