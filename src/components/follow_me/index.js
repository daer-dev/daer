import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/vendor/baffle-text'
import AnimationContainer from 'components/vendor/animation-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'
import Text from './text.yml'

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
              {this.title()}

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
                  <Row>
                    {this.intro()}
                  </Row>

                  <Row>
                    {this.social_media()}
                  </Row>
                </Container>
              </div>
            </Col>
          </div>
        </Row>
      </section>
    )
  }

  title() {
    return (
      <React.Fragment>
        <div className="line-text">
          <h4>{Text.subtitle}</h4>
        </div>

        <div className="heading">
          <BaffleText
            text={Text.title}
            revealDuration={500}
            revealDelay={500}
            parentMethod={this.show}
            callMethodTime={1100}
          />
        </div>
      </React.Fragment>
    )
  }

  intro() {
    return (
      <Col md={12} className="intro">
        <AnimationContainer delay={0} animation="fadeIn fast">
          <p>{Text.intro}</p>
        </AnimationContainer>
      </Col>
    )
  }

  social_media() {
    return (
      <React.Fragment>
        <Col md={4} className="social-media">
          <AnimationContainer delay={200} animation="fadeInLeft fast">
            <a href={Text.social_media.github.url}>
              <div className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <h4>{Text.social_media.github.title}</h4>
            </a>

            <p>{Text.social_media.github.text}</p>
          </AnimationContainer>
        </Col>

        <Col md={4} className="social-media border-side">
          <AnimationContainer delay={400} animation="fadeInDown fast">
            <a href={Text.social_media.linkedin.url}>
              <div className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <h4>{Text.social_media.linkedin.title}</h4>
            </a>

            <p>{Text.social_media.linkedin.text}</p>
          </AnimationContainer>
        </Col>

        <Col md={4} className="social-media">
          <AnimationContainer delay={600} animation="fadeInRight fast">
            <a href={Text.social_media.twitter.url}>
              <div className="icon">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <h4>{Text.social_media.twitter.title}</h4>
            </a>

            <p>{Text.social_media.twitter.text}</p>
          </AnimationContainer>
        </Col>
      </React.Fragment>
    )
  }
}

export default FollowMe
