import React from 'react'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

var scrollToElement = require('scroll-to-element')

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }

    this.sections = [
      {
        name: "Home"
      },
      {
        name: "About"
      },
      {
        name: "Follow Me"
      },
      {
        name: "Contact"
      }
    ]
  }

  navScroll(id, v) {
    this.setState({show: false})

    const el = document.getElementById(id)

    scrollToElement(el, {
      offset: 0,
      ease: 'in-out-expo',
      duration: 2000
    }).on('end', () => {
      this.props.change(v)
    });
  }

  render() {
    return(
      <div>
        <div className="opener">
          <FontAwesomeIcon icon={faBars} className="closeNav" onClick={() => this.setState({show: true})} />
        </div>
        <div className={`navigation ${this.state.show ? "active" : ""}`}>
          <FontAwesomeIcon icon={faTimes} className="closeNav" onClick={() => this.setState({show: false})} />
          <div className="logo">
            <img src="img/logo.png" alt="logo"/>
          </div>
          <div className="links">
            <ul>
              {this.links()}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  links() {
    return this.sections.map((section, index) => {
      return (
        <li key={index}>
          <button onClick={() => this.navScroll(this.section_class(section), index)}>
            {section.name}
          </button>
        </li>
      )
    })
  }

  section_class(section) {
    section.name.replace(' ', '_').toLowerCase()
  }
}

export default Navigation
