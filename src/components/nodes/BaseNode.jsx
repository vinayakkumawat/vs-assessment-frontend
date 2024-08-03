"use client"

import React, { useState } from 'react';
import { Handle } from 'reactflow';
import { icons } from "../icons-data";

const BaseNode = ({ id, data, type, handles, giveFieldName, children }) => {

  const [currName, setCurrName] = useState(data?.name || `input`);

  const countHandlesPosition = (handles, position) => {
    return handles.filter(handle => handle.position === position).length;
  };

  const leftHandlesCount = countHandlesPosition(handles, 'left');
  const rightHandlesCount = countHandlesPosition(handles, 'right');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  return (
    <div className="p-2 w-auto h-full rounded-lg border border-[#476581] hover:shadow-[0px_0px_0px_4px] hover:shadow-[#d1d0ff] transition duration-150 ease-in-out">
      <div className="flex items-center gap-1 text-[#476581]">
        {icons[type]}
        <span className="capitalize font-semibold text-base">{type}</span>
      </div>
      <div className="p-2 flex flex-col gap-2">

        {giveFieldName &&
          <div className="flex flex-col justify-center gap-1">
            <label className="text-xs text-gray-500">Field Name</label>
            <input className="p-1 w-full text-sm text-[#476581] focus:outline-none" type="text" placeholder={currName} onChange={handleNameChange} />
          </div>
        }

        {children}

      </div>
      {handles.map((handle, index) => (
        <div key={index}>
          {handle.label && (
            <label className="bg-white text-xs text-gray-500 absolute top-1/2 -translate-y-1/2" style={{ marginTop: '12px', marginLeft: handle.position === 'left' ? '-50px' : 'auto', marginRight: handle.position === 'right' ? '-50px' : 'auto', top: handle.position === 'left' ? leftHandlesCount === 1 ? '50%' : ((index+1)*100)/(leftHandlesCount+1) + '%' : rightHandlesCount === 1 ? '50%' : ((index-leftHandlesCount+1)*100)/(rightHandlesCount+1) + '%' }}>
              {handle.label.replace(/{{|}}/g, '')}
            </label>
          )}
          <Handle
            type={handle.type}
            position={handle.position}
            id={`${id}-${handle.id}`}
            style={{ width: '15px', height: '15px', border: '1px solid #476581', borderRadius: '50%', background: '#fff', marginLeft: handle.position === 'left' ? '-3px' : 'auto', marginRight: handle.position === 'right' ? '-3px' : 'auto', top: handle.position === 'left' ? leftHandlesCount === 1 ? '50%' : ((index+1)*100)/(leftHandlesCount+1) + '%' : rightHandlesCount === 1 ? '50%' : ((index-leftHandlesCount+1)*100)/(rightHandlesCount+1) + '%' }}
          />
        </div>
      ))}
    </div>
  );
};

export default BaseNode;
