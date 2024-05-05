// Write your code here
import './index.css'

const TodoItem = props => {
  const {item, deleteItem} = props
  const {title, id} = item
  const onDeleteId = () => {
    deleteItem(id)
  }
  return (
    <li className="li-bg">
      <p>{title}</p>
      <button onClick={onDeleteId} className="btn-bg">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
