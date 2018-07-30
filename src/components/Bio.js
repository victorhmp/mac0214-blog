import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Victor Hugo M. Pinto`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Escrito por <strong>Victor Hugo M. Pinto</strong>, aluno do
          Bacharelado em Ciência da Computação no IME-USP.{' '}
          <a href="mailto:victor2142@gmail.com">Email para contato.</a>
        </p>
      </div>
    )
  }
}

export default Bio
