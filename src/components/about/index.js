import React from 'react'
import Particles from 'react-particles-js'
import { Row, Col } from 'react-bootstrap'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {
  static contextType = ThemeContext

  render() {
    return (
      <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
        {this.particles()}
        <Row>
          <Col md={6} className="content">
            <div className="content-text">
              {this.title()}
              {this.first_page()}
            </div>
          </Col>
          <Col md={6} className="content">
            {this.second_page()}
          </Col>
        </Row>
      </section>
    )
  }

  particles() {
    return (
      <Particles
        className="particles"
        params={{
          "particles": {
            "number": {
              "value": 65,
              "density": {
                "enable": false,
                "value_area": 9000
              }
            },
            "line_linked": {
              "enable": true,
              "opacity": .5
            },
            "size": {
              "value": 1
            },
          },
          "retina_detect": true
          }
        }
      />
    )
  }

  title() {
    return (
      <div>
        <div className="line-text">
          <h4>About Me</h4>
        </div>
        <h3>I'm a Full Stack web developer working remotely</h3>
        <div className="separator" />
      </div>
    )
  }

  first_page() {
    return (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit nisi vitae feugiat vestibulum. Aliquam porta nulla vel odio scelerisque, pretium volutpat dui euismod. Integer porttitor dolor placerat malesuada dictum. Fusce enim dolor, dignissim quis ornare at, elementum nec turpis. Donec ac interdum libero, sed condimentum lectus. Nunc nec iaculis tortor. Donec interdum sollicitudin eros in pharetra. Donec ultricies laoreet dictum. Maecenas vestibulum sodales justo, id hendrerit orci aliquet gravida. Nulla facilisi.</p>
      </div>
    )
  }

  second_page() {
    return (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit nisi vitae feugiat vestibulum. Aliquam porta nulla vel odio scelerisque, pretium volutpat dui euismod. Integer porttitor dolor placerat malesuada dictum. Fusce enim dolor, dignissim quis ornare at, elementum nec turpis. Donec ac interdum libero, sed condimentum lectus. Nunc nec iaculis tortor. Donec interdum sollicitudin eros in pharetra. Donec ultricies laoreet dictum. Maecenas vestibulum sodales justo, id hendrerit orci aliquet gravida. Nulla facilisi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit nisi vitae feugiat vestibulum. Aliquam porta nulla vel odio scelerisque, pretium volutpat dui euismod. Integer porttitor dolor placerat malesuada dictum. Fusce enim dolor, dignissim quis ornare at, elementum nec turpis. Donec ac interdum libero, sed condimentum lectus. Nunc nec iaculis tortor. Donec interdum sollicitudin eros in pharetra. Donec ultricies laoreet dictum. Maecenas vestibulum sodales justo, id hendrerit orci aliquet gravida. Nulla facilisi.</p>
      </div>
    )
  }
}

export default Hero
