import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailbanner/Detailbanner'
import useFetch from '../../hooks/Usefetch'
import Cast from './cast/Cast'
export default function Detail() {
  const {mediatype,id}=useParams()
  const {data,loading}=useFetch(`/${mediatype}/${id}/videos`)
  const {data:credits,loading:creditsloading}=useFetch(`/${mediatype}/${id}/credits`)
  return (
    <div> detail
<DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
<Cast data={credits.Cast} loading={creditsloading}/>
    </div>
  )
}