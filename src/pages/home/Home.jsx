import React from 'react'
import "./style.scss"
import Hearobanner from '../../herobanner/Hearobanner'
import Trendin from './trending/Trendin'
import Popular from './trending/popular/Popular'
import Toprated from './toprated/Toprated'
export default function Home() {
  return (
    <div className="homePage">
            <Hearobanner />
            <Trendin />
            <Popular />
            <Toprated />

        </div>
  )
}
