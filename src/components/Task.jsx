/* eslint-disable react/prop-types */
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`bg-slate-100 m-1.5 py-2.5 px-5 border-4 ${task.reminder ? 'border-l-green-500' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3 className="flex justify-between">{task.text}{' '}
                <FaTimes
                    style={{
                        color: 'red', cursor:
                            'pointer'
                    }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
