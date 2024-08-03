import BaseNode from '../BaseNode';
import { Position } from 'reactflow';

export const APIRequestNode = ({ id, data }) => {
    const handles = [
        { type: 'target', position: Position.Left, id: 'request' },
        { type: 'source', position: Position.Right, id: 'response' }
    ];

    return (
        <BaseNode
            id={id}
            data={data}
            type="apiRequest"
            handles={handles}
            giveFieldName={true}
        />
    );
};
