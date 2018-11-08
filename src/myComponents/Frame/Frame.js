import React from 'react'
import { string, oneOf } from 'prop-types'

//import desktop from '../../images/frames/desktop.png'
//import tablet from '../../images/frames/tablet.png'
//import phone from '../../images/frames/phone.png'

const containers = {
    desktop: '/images/frames/desktop.png',
    tablet: '/images/frames/tablet.png',
    phone: '/images/frames/phone.png'
}

const Frame = ({
    container,
    src
}) => (
    <div className="Frame">
        <img className={`FrameSrc ${container}Src`} src={src} alt={`${container} Src`} />
        <img className={`FrameContainer ${container}`} src={containers[container]} alt={container} />    
    </div>
)

Frame.defaultProps = {
    container: "desktop"
}

Frame.propTypes = {
    container: oneOf([
        'desktop',
        'tablet',
        'phone'
    ]),
    src: string
}

export default Frame