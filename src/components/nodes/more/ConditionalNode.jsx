import BaseNode from '../BaseNode';
import { Position } from 'reactflow';

export const ConditionalNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'condition' },
    { type: 'source', position: Position.Right, id: 'true' },
    { type: 'source', position: Position.Right, id: 'false' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="conditional"
      handles={handles}
      giveFieldName={true}
    />
  );
};
