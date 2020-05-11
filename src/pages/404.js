import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import 'scss/retro.scss'
import Text from './404/text.yml'

class page404 extends React.Component {
  render() {
    return(
      <div>
        <Helmet>
          <title>{Text.title}</title>
        </Helmet>
        <div className="error-404">
          <div>
            <h1>{Text.title}</h1>
            <h2>{Text.body}</h2>
            <Link to="/">{Text.home_link}</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default page404
