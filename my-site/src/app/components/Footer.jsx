import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div>
      <span>Made by Stephen Tao</span>
      <Link
        href={"/credits"}
      >
        Credits
      </Link>
    </div>
  )
}

export default Footer
