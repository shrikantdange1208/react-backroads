import React from 'react'
import { socialLinks } from '../data'

export default function SocialLinks({ parentClass, itemClass }) {
  return (
    <ul className={parentClass}>
      {socialLinks.map((socialLink) => {
        return (
          <li key={socialLink.id}>
            <a
              href={socialLink.href}
              target={socialLink.target}
              rel="noreferrer"
              className={itemClass}
            >
              <i className={socialLink.className}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
