import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import './App.css';
import { FaShoePrints } from 'react-icons/fa';
import SearchTask from './components/SearchTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const [search, setSearch] = useState ("");
  const [tasks, setTasks] = useState([])

    //Add Task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = { id, ...task }
      setTasks([...tasks, newTask])
    }

    //Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }
    //Delete all tasks
    const deleteAllListItem = (id) => {
      setTasks(tasks.filter((task) => task.id === id));
    };
    
    // Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => 
        task.id === id ? { ...task, reminder: 
        !task.reminder } : task
      )
    )
    }

    // Search Task
    const handleSearchChange = (e) => {
      setSearch(e.target.value);
    };

    const filtered =
    !search
      ? tasks
      : tasks.filter((task) =>
      task.text.toLowerCase().includes(search.toLowerCase())
        );


    return (
      <div className='container'>
        <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}        
        <SearchTask 
        placeholder="sök..."
        search={search}
        handleSearchChange={handleSearchChange}
               />
        
        {tasks.length > 0 ? (
        <Tasks filtered={filtered} tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} onDeleteAll={deleteAllListItem} />
        ) : (
          'No Tasks To Show'
        )}

      </div>
      );
}


export default App;
