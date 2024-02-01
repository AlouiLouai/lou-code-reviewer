'use client';
import { useState } from "react";

export default function InputComponent() {
    const [codeInput, setCodeInput] = useState('');
    return (
        <div className="flex-none flex flex-col justify-center items-center bg-black rounded-lg h-1/3">
            <textarea
                className="w-full h-full bg-black text-white border border-blue-500 p-4 rounded-lg"
                placeholder="Enter your code here..."
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
            ></textarea>
        </div>
    )
}