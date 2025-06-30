export default function Sidebar() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="border-r-2 border-gray-200 p-4 text-sm bg-gray-100 w-64 h-screen">
      <div className="font-bold mb-4">Nodes</div>
      <div
        className="bg-blue-500 text-white p-3 border-2 border-blue-700 rounded cursor-grab"
        onDragStart={(event) => onDragStart(event, 'start')}
        draggable
      >
        Start Node
      </div>
      <div
        className="bg-red-500 text-white p-3 border-2 border-red-700 rounded cursor-grab mt-4"
        onDragStart={(event) => onDragStart(event, 'end')}
        draggable
      >
        End Node
      </div>
      <div
        className="bg-white p-3 border-2 border-gray-500 rounded cursor-grab mt-4"
        onDragStart={(event) => onDragStart(event, 'custom')}
        draggable
      >
        Custom Node
      </div>
    </aside>
  );
}