import { Handle, Position } from 'reactflow';

function OutputNode({ data }) {
  return (
    <div className="bg-green-500 text-white p-3 border-2 border-green-700 rounded">
      <Handle type="target" position={Position.Left} />
      <div>
        <strong>{data.label}</strong>
      </div>
    </div>
  );
}

export default OutputNode;
