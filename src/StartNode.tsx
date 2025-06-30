import { Handle, Position } from 'reactflow';

function StartNode({ data }) {
  return (
    <div className="bg-blue-500 text-white p-3 border-2 border-blue-700 rounded">
      <Handle type="source" position={Position.Right} />
      <div>
        <strong>{data.label}</strong>
      </div>
    </div>
  );
}

export default StartNode;
