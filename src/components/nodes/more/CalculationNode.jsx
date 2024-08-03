import BaseNode from '../BaseNode';
import { Position } from 'reactflow';

export const CalculationNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'input1' },
    { type: 'target', position: Position.Left, id: 'input2' },
    { type: 'source', position: Position.Right, id: 'output' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="calculation"
      handles={handles}
      giveFieldName={true}
    />
  );
};
