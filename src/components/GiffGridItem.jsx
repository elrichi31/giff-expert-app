import React from 'react'
import '../index.css'
import PropTypes from 'prop-types'
export const GiffGridItem = ({id, url}) => {
    return (
        <div >
            <img src={url} alt={id} className="cards"/>
        </div>
    )
}

GiffGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
