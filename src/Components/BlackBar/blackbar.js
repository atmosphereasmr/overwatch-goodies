import React, {Component} from 'react'
import './blackbar.css'
import SelectHero from '../Select Hero/select-hero'

export default class BlackBar extends Component {
  render() {
    return (
      <div className="blackbar">
      <SelectHero />
      </div>
    )
  }
}
