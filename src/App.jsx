import { useState } from "react"
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Pasear al perro',
      day: 'Miercoles 10',
      reminder: true
    },
    {
      id: 2,
      text: 'Futbol con amigos',
      day: 'Jueves 11',
      reminder: true
    },
    {
      id: 3,
      text: 'Noche de COD',
      day: 'Viernes 12',
      reminder: false,
    }
  ])

  //ADD TASK

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //DELETE TASK

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==
      id))
  }

  //Toogle Reminder

  const toggleReminder = (id) => {
     setTasks(tasks.map((task) => task.id === id
     ? {...task, reminder:!task.reminder} : task ))
  } 

  return (
    <>
      <div className='max-w-md m-7 p-7 border border-gray-900 rounded min-h-fit'>
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (<Tasks tasks={tasks}
        onToggle={toggleReminder}  onDelete={deleteTask}/>) : ('No Tasks To Show')}
      </div>
    </>
  )
}

export default App
