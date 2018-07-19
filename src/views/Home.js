import React from 'react'

import Content from '../components/Content'
import './Home.css'

export default ({ fields }) => {
  const { body } = fields
  return (
    <main className='Home'>

        <div className='section'>
            <div className='container'>
            <Content source={body} />
            </div>
        </div>
    </main>
  )
}
