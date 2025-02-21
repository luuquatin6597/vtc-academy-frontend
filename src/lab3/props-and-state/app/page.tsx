'use client'

import React from 'react'
import FormComponent from './components/form'
import ListComponent from './components/list'
import GridComponent from './components/grid'

export default function Home() {
  return (
    <main className='container mx-auto py-6 px-4'>
      <FormComponent />

      <ListComponent />

      <GridComponent />
    </main>
  )
}
