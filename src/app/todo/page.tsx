'use client';

import React, { useState } from 'react';

interface Item {
    id: number;
    value: String;
    done: boolean;
}

const Todo = () => {
    const [value, setValue] = useState('');
    const [list, setList] = useState<Array<Item>>([]);

    const handleChange = (e: any) => {
        e.preventDefault;
        setValue(e.target.value);
    };

    const addToDo = () => {
        if (value == '') return;
        const new_value: Item = {
            id: Math.floor(Math.random() * 10000),
            value: value,
            done: false,
        };

        let tmp = [...list];
        tmp.unshift(new_value);
        console.log(list);
        setList(tmp);
        setValue('');
    };

    const removeItem = (id: number) => {
        let tmp = [...list];
        const to_del = list.findIndex(e => e.id === id);
        if (to_del > -1) {
            tmp.splice(to_del, 1);
        }
        setList(tmp);
    };

    const moveItem = (id: number) => {
        if (list.length < 1) return;
        let tmp = [...list];
        const to_move = list.findIndex(e => e.id === id);
        if (to_move === 0) return;
        [tmp[to_move], tmp[to_move - 1]] = [tmp[to_move - 1], tmp[to_move]];
        setList(tmp);
    };

    const updateShow = (id: number) => {
        let tmp = [...list];
        const to_edit = list.findIndex(e => e.id === id);
        tmp[to_edit].done = !tmp[to_edit].done;
        setList(tmp);
    };

    return (
        <div className="mx-auto rounded-xl rounded-b-xl bg-slate-200 bg-opacity-40 p-5 shadow-xl lg:w-1/2 lg:overflow-auto">
            <div>
                <input
                    className="m-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    type="text"
                    onChange={handleChange}
                    value={value}></input>
                <button
                    className="m-2 rounded bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700"
                    onClick={() => addToDo()}>
                    Add To Do
                </button>
            </div>
            <ul>
                {list ? (
                    list.map(e => (
                        <li key={e.id} className={`my-2 select-none`}>
                            <button
                                className="py-1/2 mr-2 rounded bg-red-500 px-2 text-lg font-bold text-white hover:bg-red-700"
                                onClick={() => removeItem(e.id)}>
                                X
                            </button>
                            <button
                                className="py-1/2 rounded bg-blue-500 px-2 text-lg font-bold text-white hover:bg-blue-700"
                                onClick={() => moveItem(e.id)}>
                                ^
                            </button>
                            &nbsp;
                            <span
                                className={`text-xl text-gray-900 ${
                                    e.done ? 'line-through' : ''
                                }`}
                                onClick={() => updateShow(e.id)}>
                                {e.value}
                            </span>
                        </li>
                    ))
                ) : (
                    <></>
                )}
            </ul>
        </div>
    );
};

export default function Page() {
    return (
        <div className="h-screen bg-[url('./img.jpg')] bg-cover p-6">
            <Todo />
        </div>
    );
}
