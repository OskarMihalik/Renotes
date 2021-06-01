import React from 'react';

function TreeItem({nodes, deleteItem}) {
    return (
        <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}
    onLabelClick={() => deleteItem(nodes, nodes.id)}/>
    );
}

export default TreeItem;