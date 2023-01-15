import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
}

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Todo</label>
            <input 
            type='text' 
            placeholder='Lägg till todo' 
            value={text} 
            onChange={(e) => setText(e.target.
            value)} 
            />
        </div>
        <div className='form-control'>
            <label>Datum & tid</label>
            <input 
            type='text' 
            placeholder='lägg till datum och tid' 
            value={day} 
            onChange={(e) => setDay(e.target.
            value)}/>
        </div>
        <div className='form-control 
        form-control-check'>
            <label>Sätt påminnelse</label>
            <input 
            type='checkbox' 
            checked={reminder}
            value={reminder} 
            onChange={(e) => setReminder(e.currentTarget.checked)} 
            />
        </div>

        <input type='submit' value='Spara' 
        className='btn btn-block' />
    </form>
  )
}

export default AddTask