import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../reducer/reduce'
export default function Header() {
    const total = useSelector((state: RootState) => state.total);
  return (
    <div>cart:{total}</div>
  )
}

