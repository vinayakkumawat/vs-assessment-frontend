import BaseNode from '../BaseNode';
import { Position } from 'reactflow';

export const LogNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'input' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="log"
      handles={handles}
      giveFieldName={true}
    />
  );
};
