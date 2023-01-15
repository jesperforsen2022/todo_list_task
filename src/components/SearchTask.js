
const SearchTask = ({ search, handleSearchChange, placeholder }) => {
  return (
    <div className="search">
          <div className='form-control'>
            <label>Hitta Todo</label>
            <input 
            type='text' 
            value={search}
            onChange={handleSearchChange}
            placeholder={placeholder}
            />
          </div>
    </div>
  )
}

export default SearchTask