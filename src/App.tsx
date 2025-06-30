import { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
} from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from './Sidebar';
import PropertiesPanel from './PropertiesPanel';
import StartNode from './StartNode';
import EndNode from './EndNode';
import CustomNode from './CustomNode';

const initialNodes = [
  {
    id: '1',
    type: 'start',
    data: { label: 'Start Node' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    type: 'end',
    data: { label: 'End Node' },
    position: { x: 500, y: 5 },
  },
];

let id = 2;
const getId = () => `dndnode_${id++}`;

const nodeTypes = {
  start: StartNode,
  end: EndNode,
  custom: CustomNode,
};

const App = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes],
  );

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  return (
    <div className="flex flex-row w-screen h-screen" ref={reactFlowWrapper}>
      <ReactFlowProvider>
        <Sidebar />
        <div className="flex-grow h-full">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeClick={onNodeClick}
            fitView
          >
            <Controls />
            <Background />
          </ReactFlow>
        </div>
        {selectedNode && (
          <PropertiesPanel
            selectedNode={selectedNode}
            setNodes={setNodes}
          />
        )}
      </ReactFlowProvider>
    </div>
  );
};

export default App;
