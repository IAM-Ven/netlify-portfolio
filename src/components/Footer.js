import React from 'react'

import './Footer.css'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <footer className='Footer'>
    <div className='container taCenter'>
      <span>Created in React & React Router</span><br />
      <span>Designed from scratch inspired by <a href="https://neuethemes.net/preview/gridus/v2.2.2">Gridus</a></span><br />
      <span>© 2018 All rights reserved.</span>
    </div>
  </footer>
)
