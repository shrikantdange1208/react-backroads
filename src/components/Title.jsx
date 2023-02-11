import React from 'react'

export default function Title(props) {
  const { title, subTitle } = props
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  )
}
