import React from "react"
import "./index.scss"

export default class BurgerMenu extends React.Component {
  static componentId = "burger-menu"

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      overlay: {
        height: 0,
        width: 0,
      },
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div className={BurgerMenu.componentId}>
        <div
          className={`${BurgerMenu.componentId}-icon ${
            this.state.isOpen ? "open" : "closed"
          }`}
          onClick={this.toggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}
