import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {value: 2000}

  withdrawCash = cashValue => {
    console.log(typeof cashValue)
    this.setState(prevState => ({value: prevState.value - cashValue}))
  }

  render() {
    // Class compnent me props render() ke ander hi access hota hai no doubt (no other way !)
    const {denominationsList} = this.props
    const {value} = this.state
    console.log(denominationsList)

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="namePic-container">
            <p className="profile-pic">s</p>
            <span className="user-name">Sarah Williams</span>
          </div>

          <div className="balance-container">
            <p className="balance-title">Your Balance</p>
            <div>
              <p className="amount-total-reused">{value}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>

          <div className="">
            <p className="amount-total-reused">Withdraw</p>
            <p className="instruction">CHOOSE SUM (IN RUPEES)</p>
            <ul className="amount-items-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  items={eachItem}
                  key={eachItem.id}
                  withdrawCash={this.withdrawCash}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
