import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from 'components/layout'
import Spinner from 'components/vendor/spinner'
import Hero from 'components/hero'
import About from 'components/about'
import FollowMe from 'components/follow_me'
import Contact from 'components/contact'

class HomePage extends React.Component {
  render() {
    const { site } = this.props.data

    return (
      <div>
        <Helmet>
          <title>{site.meta.title}</title>
          <meta name="description" content={site.meta.description} />
        </Helmet>
        <Layout>
          <Hero id="home" />
          <About id="about" />
          <FollowMe id="follow_me" />
          <Contact id="contact" />
        </Layout>
        <Spinner duration={1000} />
      </div>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`
