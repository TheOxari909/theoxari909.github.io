'use client';

import React, { useState } from 'react';

interface Item {
    id: number;
    value: String;
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
        console.log("This'll be removed: ", to_del);
    };

    return (
        <div>
            <input type="text" onChange={handleChange} value={value}></input>
            <button onClick={() => addToDo()}>Add To Do</button>
            <ul>
                {list ? (
                    list.map(e => (
                        <li key={e.id}>
                            <button onClick={() => removeItem(e.id)}>X</button>
                            &nbsp;{e.value}
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
        <div className="h-screen bg-[url('./img.jpg')] bg-cover p-6 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-10">
            <Todo />
        </div>
    );
}
