import React from "react"
import "./index.scss"
import URL from "../../../url"

export default class BurgerMenu extends React.Component {
  static componentId = "burger-menu"

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isOpen } = this.state
    return (
      <div
        className={`${BurgerMenu.componentId} ${
          this.state.isOpen ? "open" : "closed"
        }`}
      >
        {!isOpen && (
          <div
            className={`${BurgerMenu.componentId}-icon`}
            onClick={this.toggle}
          >
            <span />
            <span />
            <span />
          </div>
        )}

        {isOpen && (
          <React.Fragment>
            <div
              className={`${BurgerMenu.componentId}-icon`}
              onClick={this.toggle}
            >
              <span />
              <span />
            </div>
            <div>
              <a onClick={this.toggle} href={URL.SERVICE.INDEX}>
                Services
              </a>
              <a onClick={this.toggle} href={URL.ABOUT_US}>
                Abouts Us
              </a>
              <a onClick={this.toggle} href={URL.THOUGHTS_ON_PROGRAMMING}>
                Thoughts
              </a>
              <a onClick={this.toggle} href={URL.CONTACT}>
                Contact
              </a>
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}
