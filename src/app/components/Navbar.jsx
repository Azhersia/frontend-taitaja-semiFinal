import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='navContainer'>
            <Link className='navTitle' href="/">TAITAJA TIETOTESTI</Link>
            <Link className='navLogin' href="/login">Kirjaudu sisään</Link>
    </div>
  )
}
