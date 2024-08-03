"use client"

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className={`flex justify-center items-center gap-4 overflow-x-scroll`}>
            <DraggableNode type='customInput' label='Input'/>
            <DraggableNode type='llm' label='LLM' />
            <DraggableNode type='customOutput' label='Output' />
            <DraggableNode type='text' label='Text' />
            <DraggableNode type='calculation' label='Calculation' />
            <DraggableNode type='conditional' label='Conditional' />
            <DraggableNode type='apiRequest' label='API Request' />
            <DraggableNode type='database' label='Database' />
            <DraggableNode type='log' label='Log' />
        </div>
    );
};
