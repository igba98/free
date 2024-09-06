import React from 'react'
import Profile from './components/Profile'
import Content from './components/Content'
export default function page() {
  return (
    <main className='flex flex-row container mx-auto gap-12'>
      <Profile />
      <Content />
    </main>
  )
}
