import BaseNode from '../BaseNode';
import { Position } from 'reactflow';

export const DatabaseNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'query' },
    { type: 'source', position: Position.Right, id: 'result' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="database"
      handles={handles}
      giveFieldName={true}
    />
  );
};
