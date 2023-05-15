/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTask = ({onAdd}) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);
    
    const onSubmit = (e) => {
        e.preventDefault()      //Prevent the form from submitting

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        
        <form className="mb-10" onSubmit={onSubmit}>
            <div className="my-5">
                <label className="block">Tarea</label>
                <input className="border border-black w-full h-10 m-2 py-2 px-4" type="text" placeholder="Agregar Tarea"
                value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="my-5">
                <label className="block">Fecha y Hora</label>
                <input className="border border-black w-full h-10 m-2 py-2 px-4" type="text" placeholder="Agreagar Dia y Fecha"
                value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className="my-5 flex items-center justify-between">
                <label>Recordatorio</label>
                <input className="mr-20 w-4 h-4" type="checkbox" checked={reminder}
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type="submit" value="Agregar Tarea" className="bg-black block w-full text-white rounded p-1 cursor-pointer"></input>
        </form>
    );
};

export default AddTask;
