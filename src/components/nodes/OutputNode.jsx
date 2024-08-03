import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'value' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="output"
      handles={handles}
      giveFieldName={true}
    >
      <div className="flex flex-col justify-center gap-1">
        <label className="text-xs text-gray-500">Type</label>
        <select className="w-full text-sm text-[#476581] m-0 p-0 focus:outline-none" value={data.type} onChange={data.handleTypeChange}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};
