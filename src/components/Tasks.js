import Task from './Task'

const Tasks = ({ filtered, onDelete, onToggle, onDeleteAll }) => {
  return (
    <>
        {filtered.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} 
        />
        ))}
        <button className="btn" onClick={onDeleteAll}>
            Ränsa Listan
          </button>
    </>
  )
}

export default Tasks