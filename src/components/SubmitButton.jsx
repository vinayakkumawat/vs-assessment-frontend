"use client"

import React, { useState } from 'react';
import { IoIosRocket } from "react-icons/io";
import { useStore } from './useStore';
import { shallow } from 'zustand/shallow';
import axios from 'axios';
import AlertDialog from "./AlertDialog";

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {

    const { nodes, edges } = useStore(selector, shallow);
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    const [ data, setData ] = useState({});

    const handleSubmit = async () => {
        try {
            const pipeline = {
                nodes: nodes.map(node => ({ id: node.id })),
                edges: edges.map(edge => ({ source: edge.source, target: edge.target }))
            }
            const response = await axios.post('http://localhost:8000/pipelines/parse', pipeline, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const { num_nodes, num_edges, is_dag } = response.data;
            setIsSubmitted(true);
            setData({ num_nodes, num_edges, is_dag });
        } catch (error) {
            console.error('Error submitting pipeline:', error);
        }
    };

    return (
        <>
            <button className="px-4 py-2 font-bold bg-[#6366f1] hover:bg-[#4f46e5] flex justify-center items-center rounded-lg border shadow-sm text-white transition duration-150 ease-in-out" onClick={handleSubmit} type="submit">
                <IoIosRocket className="mr-2 w-4 h-4" />
                <span className="text-xs">Submit</span>
            </button>
            <AlertDialog isOpen={isSubmitted} onClose={() => setIsSubmitted(false)} data={data} />
        </>
    );
}
