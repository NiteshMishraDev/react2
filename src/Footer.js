import React from 'react'
import './Footer.css'

export default function Footer(props) {
  return (
    <div className='footer'>
        <h3>
            <h4>{props.year}/{props.month}</h4>
            <h5> &#169; NiteshMishra</h5>
        </h3>
    </div>
  )
}
