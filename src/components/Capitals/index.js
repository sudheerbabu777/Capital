import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    capitalId: countryAndCapitalsList[0].id,
  }

  onClickCountry = event => {
    this.setState({capitalId: event.target.value})
  }

  getCountry = () => {
    const {capitalId} = this.state
    const findCountry = countryAndCapitalsList.find(
      each => each.id === capitalId,
    )
    return findCountry.country
  }

  render() {
    const {capitalId} = this.state
    const capital = this.getCountry(capitalId)

    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">Countries And Capitals </h1>
          <div className="captain">
            <select
              className="captain-name-container"
              onChange={this.onClickCountry}
              value={capitalId}
            >
              {countryAndCapitalsList.map(each => (
                <option className="captain-name" value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="captain-name"> is capital of Which country?</p>
          </div>
          <p className="country">{capital}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
