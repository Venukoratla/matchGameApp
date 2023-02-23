import './index.css'

const SelectionContainer = props => {
  const {details, changeId} = props
  const {tabId, displayText} = details
  const clickedTab = () => {
    changeId(tabId)
  }

  return (
    <li className="text" key={tabId}>
      <button type="button" onClick={clickedTab}>
        {displayText}
      </button>
    </li>
  )
}

export default SelectionContainer
