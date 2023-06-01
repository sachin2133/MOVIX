import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/Usefetch'
import { useSelector } from 'react-redux'
import Img from '../component/lazyloading/Img'
import "./style.scss"
import ContentWrapper from '../component/contentwrraper/contentwraper'
export default function Hearobanner() {
  const [background, setbackground] = useState("")
  const [query, setquery] = useState("")
  const navigate = useNavigate()
  const { url } = useSelector((state) => state.home)
  const { data, loading } = useFetch("/movie/upcoming")
  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)].backdrop_path
    setbackground(bg)
  }, [data])
  const searchqueryhandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/Search/ ${query}`)
    }
  }
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <ContentWrapper>
      <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setquery(e.target.value)}
                            onKeyUp={searchqueryhandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
      </ContentWrapper>

    </div>

  )
}