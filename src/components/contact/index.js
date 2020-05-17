import React from "react"
import "./styles.scss"
import { Row, Col } from "react-bootstrap"
import AnimationContainer from "components/vendor/animation-container"
import BaffleText from "components/vendor/baffle-text"
import ThemeContext from "../../context"
import Text from "./text.yml"

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.submitUrl = "https://formspree.io/mqkyeayy"
    this.validateForm = this.validateForm.bind(this)
    this.state = {
      name: "",
      email: "",
      message: "",
      formStatus: "",
      show: false
    }
    this.show = this.show.bind(this)
  }

  static contextType = ThemeContext

  show() {
    this.setState({ show: true })
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
    let content

    if (this.state.show || this.context.height === "auto") {
      if (this.state.formStatus === "SUCCESS") {
        content = this.successMessage()
      } else {
        content = <form
          onSubmit={this.validateForm}
          action={this.submitUrl}
          method="POST"
        >
          <AnimationContainer delay={50} animation="fadeInUp fast">
            <div className="form-group">
              <input type="text" name="name" className={this.fieldClass(this.state.name)} placeholder={Text.form.name} onChange={e => this.setState({ name: e.target.value })} />
            </div>
          </AnimationContainer>

          <AnimationContainer delay={100} animation="fadeInUp fast">
            <div className="form-group">
              <input type="text" name="email" className={this.fieldClass(this.state.email)} placeholder={Text.form.email} onChange={e => this.setState({ email: e.target.value })} />
            </div>
          </AnimationContainer>

          <AnimationContainer delay={150} animation="fadeInUp fast">
            <div className="form-group">
              <textarea name="message" className={this.fieldClass(this.state.message)} placeholder={Text.form.message} onChange={e => this.setState({ message: e.target.value })}></textarea>
            </div>
          </AnimationContainer>

          {this.submitButton()}

          {this.errorMessage()}
        </form>
      }

      return(content)
    }
  }

  submitButton() {
    return (
      <AnimationContainer delay={200} animation="fadeInUp fast">
        <div className="submit">
          <button className={`hover-button ${this.state.formStatus === "VALIDATION_ERROR" ? "error" : ""}`}>
            <span>{Text.form.submit}</span>
          </button>
        </div>
      </AnimationContainer>
    )
  }

  successMessage() {
    return(
      <p className="message success">{Text.messages.success}</p>
    )
  }

  errorMessage() {
    let content

    if (this.state.formStatus === "REQUEST_ERROR") {
      content = Text.messages.error.request
    } else if (this.state.formStatus === "VALIDATION_ERROR") {
      content = Text.messages.error.validation
    }

    if (typeof content !== "undefined" && content !== "") {
      return (
        <AnimationContainer delay={250} animation="fadeInUp fast">
          <p className="message error">{content}</p>
        </AnimationContainer>
      )
    }
  }

  fieldClass(fieldValue) {
    // Fields validation should be just in one place.
    if (this.state.formStatus === "VALIDATION_ERROR" && fieldValue === "") {
      return "error"
    } else {
      return ""
    }
  }

  validateForm(event) {
    event.preventDefault()

    // TODO: Email's format should be validated.
    if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
      this.setState({ formStatus: "VALIDATION_ERROR" })
    } else {
      this.setState({ formStatus: "" })
      this.submitForm(event.target)
    }
  }

  submitForm(form) {
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()

    console.log("Sending the following data to \"" + form.action + "\":")
    for (var pair of data.entries()) {
      console.log(pair[0]+ ": " + pair[1])
    }

    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return

      if (xhr.status === 200) {
        form.reset()
        this.setState({ formStatus: "SUCCESS" })
      } else {
        this.setState({ formStatus: "REQUEST_ERROR" })
        console.log(xhr.responseText)
      }
    }
    xhr.send(data)
  }
}

export default Contact
