import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Position, useUpdateNodeInternals } from 'reactflow';

export const TextNode = ({ id, data }) => {

  const [currText, setCurrText] = useState('text input');
  const [inputHeight, setInputHeight] = useState('36px');
  const [handles, setHandles] = useState([
    { type: 'source', position: Position.Right, id: 'output' }
  ]);

  const updateNodeInternals = useUpdateNodeInternals();

  const handleVariableChange = (e) => {
    const inputValue = e.target.value.toString();
    const regex = /{{\s*([a-zA-Z][a-zA-Z0-9_-]*)\s*}}/g;
    const matches = inputValue.match(regex);

    // Create handles for each variable
    const newHandles = matches
      ? matches.map((_, index) => ({
        type: 'target',
        position: Position.Left,
        id: `variable-${index}`,
        label: `${matches[index]}`
      }))
      : [];

    // Update handles state
    setHandles([...newHandles, { type: 'source', position: Position.Right, id: 'output' }]);
    updateNodeInternals(id);

    // Update input value
    setCurrText(inputValue);
  };

  const handleInputTextChange = (e) => {
    setCurrText(e.target.value);
    setInputHeight(e.target.scrollHeight + 'px');
    handleVariableChange(e);
  };

  return (
    <BaseNode id={id} data={data} type="text" handles={handles}>
      <label className="text-xs text-gray-500">Text</label>
      <textarea
        className="p-2 w-full text-sm text-[#476581] rounded-lg border shadow-sm focus:outline-none resize-none"
        placeholder={currText}
        onChange={handleInputTextChange}
        style={{ height: inputHeight }}
      />
    </BaseNode>
  );
};
