import React, { useReducer } from "react";

const initialState = { num1: "0", num2: "0", operator: "+", result: "0" };

function reducer(state, action) {
    switch (action.type) {
        case "SET_NUM1":
            return { ...state, num1: action.payload || "0" };
        case "SET_NUM2":
            return { ...state, num2: action.payload || "0" };
        case "SET_OPERATOR":
            return { ...state, operator: action.payload };
        case "CALCULATE":
            const num1 = parseFloat(state.num1) || 0;
            const num2 = parseFloat(state.num2) || 0;
            const result = state.operator === "+" ? num1 + num2 : num1 - num2;
            return { ...state, result: result.toString() };
        default:
            return state;
    }
}

export default function Calculation() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
                    Simple Calculator
                </h2>

                <div className="flex justify-between mb-4">
                    <input
                        type="number"
                        className="p-3 border rounded-lg w-1/3 text-center text-lg outline-none"
                        value={state.num1}
                        onChange={(e) =>
                            dispatch({ type: "SET_NUM1", payload: e.target.value })
                        }
                    />
                    <select
                        className="p-3 border rounded-lg text-lg"
                        value={state.operator}
                        onChange={(e) =>
                            dispatch({ type: "SET_OPERATOR", payload: e.target.value })
                        }
                    >
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                    <input
                        type="number"
                        className="p-3 border rounded-lg w-1/3 text-center text-lg outline-none"
                        value={state.num2}
                        onChange={(e) =>
                            dispatch({ type: "SET_NUM2", payload: e.target.value })
                        }
                    />
                </div>

                <button
                    className="w-full text-white p-3 rounded-lg text-lg font-semibold transition bg-blue-600 hover:bg-blue-700"
                    onClick={() => dispatch({ type: "CALCULATE" })}
                >
                    Calculate
                </button>

                <input
                    type="text"
                    className="mt-4 p-3 border rounded-lg w-full text-center text-lg font-bold bg-gray-200"
                    value={state.result}
                    readOnly
                />
            </div>
        </div>
    );
}
