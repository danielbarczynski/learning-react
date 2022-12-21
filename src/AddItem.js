import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ handleSubmit, setInputItem, inputItem }) => {
	const inputRef = useRef(); 

	return (
		<form className="addForm" onSubmit={(e) => handleSubmit(e)}>
			<label htmlFor="addItem">Add Item</label>
			<input
				autoFocus
				type="text"
				id="addItem"
				ref={inputRef}
				placeholder="Add Item"
				required
				value={inputItem}
				onChange={(e) => setInputItem(e.target.value)}
			/>
			<button
				type='submit'
				aria-label='Add Item'
				onClick={() => inputRef.current.focus()}
			>
				<FaPlus />
			</button>
		</form>
	)
}

export default AddItem