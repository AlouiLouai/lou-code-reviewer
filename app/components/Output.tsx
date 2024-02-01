'use client';
import { useState } from "react";

export default function OutputComponent() {
    const [generatedComments, setGeneratedComments] = useState('');
    // Function to simulate generating comments with AI
    const generateComments = () => {
        // Simulate AI generation (replace this with your actual logic)
        setGeneratedComments('AI-generated comments and improvements will appear here.');
    };
    return (
        <div className="flex-grow flex flex-col justify-between p-8">
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={generateComments}>
                Generate Comments
            </button>
            <div className="w-full bg-black rounded-lg p-4 h-full border border-blue-500 mt-4">
                <p>{generatedComments}</p>
            </div>
        </div>
    )
}