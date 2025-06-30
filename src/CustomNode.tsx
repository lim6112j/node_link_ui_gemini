import { Handle, Position } from 'reactflow';

function CustomNode({ data }) {
  return (
    <div className="bg-white p-3 border-2 border-gray-500 rounded">
      <Handle type="target" position={Position.Left} />
      <div>
        <strong>{data.label}</strong>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default CustomNode;
