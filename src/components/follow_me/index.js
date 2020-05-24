import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import BaffleText from "components/vendor/baffle-text"
import AnimationContainer from "components/vendor/animation-container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import ThemeContext from "../../context"
import "./styles.scss"
import Text from "./text.yml"

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
              this.context.height !== "auto"
                ? this.context.height * 0.8
                : "inherit",
          }}
        >
          <div className="content">
            <Col md={12}>
              {this.title()}

              <div
                className="social-media-container"
                style={{
                  minHeight:
                    this.context.height !== "auto"
                      ? this.context.height * 0.6
                      : "inherit",
                }}
              >
                <Container>
                  <Row>
                    {this.intro()}
                  </Row>

                  <Row>
                    {this.socialMedia()}
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

  socialMedia() {
    var blocks = []
    var data = [
      {
        animation: "fadeInLeft",
        cssClass: "",
        icon: faGithub,
        url: Text.social_media.github.url,
        title: Text.social_media.github.title,
        text: Text.social_media.github.text
      },
      {
        animation: "fadeInDown",
        cssClass: "border-side",
        icon: faLinkedin,
        url: Text.social_media.linkedin.url,
        title: Text.social_media.linkedin.title,
        text: Text.social_media.linkedin.text
      },
      {
        animation: "fadeInRight",
        cssClass: "",
        icon: faTwitter,
        url: Text.social_media.twitter.url,
        title: Text.social_media.twitter.title,
        text: Text.social_media.twitter.text
      }
    ]

      for (var i = 0; i < data.length; i++) {
        blocks.push(
          <Col md={4} className={"social-media " + data[i].cssClass}>
            <AnimationContainer delay={200} animation={data[i].animation + " fast"}>
              <Row>
                <Col xs={4} md={12}>
                  <a href={data[i].url}>
                    <div className="icon">
                      <FontAwesomeIcon icon={data[i].icon} />
                    </div>
                    <h4>{data[i].title}</h4>
                  </a>
                </Col>

                <Col xs={8} md={12}>
                  <p>{data[i].text}</p>
                </Col>
              </Row>
            </AnimationContainer>
          </Col>
        )
    }

    return <React.Fragment>{blocks}</React.Fragment>
  }
}

export default FollowMe
