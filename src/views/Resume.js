import React from 'react'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import './Resume.css'

export default ({ fields }) => {
  const { title, subtitle, intro } = fields
  return (
    <div className='Resume'>
      <PageHeader
        title={title}
        subtitle={subtitle}
      />
      <div className='section'>
        <div className='container'>
          <Content source={intro} />
        </div>
      </div>
    </div>
  )
}
