import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'system' },
    { type: 'target', position: Position.Left, id: 'prompt' },
    { type: 'source', position: Position.Right, id: 'response' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="LLM"
      handles={handles}
    >
      <div className='p-1'>
        <span className='text-sm text-[#476581]'>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};
