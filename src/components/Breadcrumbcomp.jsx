import React from 'react'
import './Breadcrumbcomp.css'
import { Breadcrumb } from 'antd'

function Breadcrumbcomp() {
  return (
    <div>
      <Breadcrumb
      className='breadcrumb'
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="/about">About</a>,
      },
      {
        title: <a href="/recipes">Recipes</a>,
      },
    ]}
  />
    </div>
  )
}

export default Breadcrumbcomp
