import { useState, useEffect } from 'react';

export default function PropertiesPanel({ selectedNode, setNodes }) {
  const [nodeName, setNodeName] = useState(selectedNode.data.label);

  useEffect(() => {
    setNodeName(selectedNode.data.label);
  }, [selectedNode]);

  const onNodeNameChange = (event) => {
    setNodeName(event.target.value);
  };

  const onUpdateNode = () => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === selectedNode.id) {
          return {
            ...node,
            data: {
              ...node.data,
              label: nodeName,
            },
          };
        }
        return node;
      })
    );
  };

  return (
    <aside className="border-l-2 border-gray-200 p-4 text-sm bg-gray-100 w-64 h-screen">
      <div className="font-bold mb-4">Properties</div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Node Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={nodeName}
          onChange={onNodeNameChange}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onUpdateNode}
      >
        Update
      </button>
    </aside>
  );
}
