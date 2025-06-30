import { Handle, Position } from 'reactflow';

function EndNode({ data }) {
  return (
    <div className="bg-red-500 text-white p-3 border-2 border-red-700 rounded">
      <Handle type="target" position={Position.Left} />
      <div>
        <strong>{data.label}</strong>
      </div>
    </div>
  );
}

export default EndNode;
