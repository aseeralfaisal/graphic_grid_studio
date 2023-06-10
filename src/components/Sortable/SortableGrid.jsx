import React from 'react'
import {
    DndContext,
    closestCenter
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from './SortableItem';

const SortableGrid = ({ items, setItems }) => {

    function handleDragEnd(event) {
        console.log("Drag end called");
        const { active, over } = event;
        console.log("ACTIVE: " + active.id);
        console.log("OVER :" + over.id);

        if (active.id !== over.id) {
            setItems((items) => {
                const activeIndex = items.indexOf(active.id);
                const overIndex = items.indexOf(over.id);
                console.log(arrayMove(items, activeIndex, overIndex));
                return arrayMove(items, activeIndex, overIndex);
                // items: [2, 3, 1]   0  -> 2
                // [1, 2, 3] oldIndex: 0 newIndex: 2  -> [2, 3, 1] 
            });

        }
    }

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <div style={{
                display: 'grid',
                gap: 14,
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridTemplateRows: 'auto'
            }}>
                <SortableContext
                    items={items}
                    strategy={verticalListSortingStrategy}
                >
                    {items.map((item, idx) => <SortableItem key={idx} id={item} />)}
                </SortableContext>
            </div>
        </DndContext>
    )
}

export default SortableGrid