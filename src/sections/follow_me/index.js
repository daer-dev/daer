import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class FollowMe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.show = this.show.bind(this)
  }

  static contextType = ThemeContext

  show() {
    this.setState({ show: true })
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="follow_me"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== 'auto'
                ? this.context.height * 0.8
                : 'inherit',
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Social media</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="Follow me"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="social-media-container"
                style={{
                  minHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.6
                      : 'inherit',
                }}
              >
                <Container>
                  {this.follow_me()}
                </Container>
              </div>
            </Col>
          </div>
        </Row>
      </section>
    )
  }

  follow_me() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <React.Fragment>
          <Row>
            <Col md={12} className="intro">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="social-media">
              <AnimationContainer delay={200} animation="fadeInLeft fast">
                <a href="http://www.google.com">
                  <div className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                  <h4>Github</h4>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                  In et sem libero.
                </p>
              </AnimationContainer>
            </Col>
            <Col md={4} className="social-media border-side">
              <AnimationContainer delay={400} animation="fadeInDown fast">
                <a href="http://www.google.com">
                  <div className="icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                  <h4>Linkedin</h4>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                  In et sem libero.
                </p>
              </AnimationContainer>
            </Col>
            <Col md={4} className="social-media">
              <AnimationContainer delay={600} animation="fadeInRight fast">
                <a href="http://www.google.com">
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitter} />
                  </div>
                  <h4>Twitter</h4>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                  In et sem libero.
                </p>
              </AnimationContainer>
            </Col>
          </Row>
        </React.Fragment>
      )
    }
  }
}

export default FollowMe
