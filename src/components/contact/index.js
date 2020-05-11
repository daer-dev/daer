import React from 'react'
import './styles.scss'
import { Row, Col } from 'react-bootstrap'
import AnimationContainer from 'components/vendor/animation-container'
import BaffleText from 'components/vendor/baffle-text'
import ThemeContext from '../../context'
import Text from './text.yml'

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name:    "",
      email:   "",
      phone:   "",
      message: "",
      error:   false,
      show:    false
    }
    this.show = this.show.bind(this)
  }

  static contextType = ThemeContext

  show() {
    this.setState({ show : true })
  }

  check(val) {
    if (this.state.error && val === "") {
      return false
    } else {
      return true
    }
  }

  submit() {
    if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
      this.setState({ error: true })
    } else {
      this.setState({ error: false })
    }
  }

  render() {
    return (
      <section id={`${this.props.id}`} className="contact" style={{height: this.context.height}}>
        <Row>
          <Col md={2} className="side">
            <h2>
              <BaffleText
                text={Text.title}
                revealDuration={500}
                revealDelay={500}
                parentMethod={this.show}
                callMethodTime={1100}
              />
            </h2>
          </Col>
          <Col md={10} className="form">
            <AnimationContainer delay={0} animation="fadeInUp fast">
              <div className="form-container">
                {this.title()}
                {this.intro()}
                {this.form()}
              </div>
            </AnimationContainer>
          </Col>
        </Row>
      </section>
    )
  }

    title() {
      if (this.state.show || this.context.height === "auto") {
        return (
          <React.Fragment>
            <div className="line-text">
              <h4>{Text.subtitle}</h4>
            </div>
          </React.Fragment>
        )
      }
    }

    intro() {
      if (this.state.show || this.context.height === "auto") {
        return (
          <p>{Text.intro}</p>
        )
      }
    }

    form() {
      if (this.state.show || this.context.height === "auto") {
        return (
          <React.Fragment>
            <AnimationContainer delay={50} animation="fadeInUp fast">
              <div className="form-group">
                <input type="text" className={`name ${this.check(this.state.name) ? "" : "error"}`} placeholder={Text.form.name} onChange={e => this.setState({name: e.target.value})} />
              </div>
            </AnimationContainer>

            <AnimationContainer delay={100} animation="fadeInUp fast">
              <div className="form-group">
                <input type="text" className={`email ${this.check(this.state.email) ? "" : "error"}`} placeholder={Text.form.email} onChange={e => this.setState({email: e.target.value})} />
              </div>
            </AnimationContainer>

            <AnimationContainer delay={150} animation="fadeInUp fast">
              <div className="form-group">
                <input type="text" className="phone" placeholder={Text.form.phone} onChange={e => this.setState({phone: e.target.value})} />
              </div>
            </AnimationContainer>

            <AnimationContainer delay={200} animation="fadeInUp fast">
              <div className="form-group">
                <textarea className={`message ${this.check(this.state.message) ? "" : "error"}`} placeholder={Text.form.message} onChange={e => this.setState({message: e.target.value})}></textarea>
              </div>
            </AnimationContainer>

            <AnimationContainer delay={250} animation="fadeInUp fast">
              <div className="submit">
                <button className={`hover-button ${this.state.error ? "error" : ""}`} onClick={() => this.submit()}>
                  <span>{Text.form.submit}</span>
                </button>
              </div>
            </AnimationContainer>
          </React.Fragment>
        )
      }
    }
}

export default Contact
