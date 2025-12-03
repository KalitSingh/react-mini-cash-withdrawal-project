import './index.css'

const DenominationItem = props => {
  const {items, withdrawCash} = props
  const {value} = items
  console.log(value)

  const onClickCash = () => withdrawCash(value)
  return (
    <li>
      <button
        type="button"
        onClick={onClickCash}
        className="denomination-items"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
