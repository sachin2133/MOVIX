
import { useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchdatafromapi } from "./utils/Api"
import { getApiconfigration, getgenres } from "./Store/Homeslice"
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from './pages/home/Home'
import Detail from './pages/Detail/Detail'
import Search from './pages/Search/Search'
import Explore from './pages/explore/Explore'
import Pagenotfound from './pages/pagenotfound/Pagenotfound'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  const dispatch = useDispatch()
  const { url } = useSelector((state) =>
    state.home
  )
  useEffect(() => {
    fetchapiconfig()
    genresCall()
  }, [])
  const fetchapiconfig = () => {
    fetchdatafromapi('/configuration')
      .then((res) => {
        console.log(res);
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original"
        }
        dispatch(getApiconfigration(url))
      })
  }
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
        promises.push(fetchdatafromapi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getgenres(allGenres));
};

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:query' element={<Search />} />
        <Route path="/:mediaType/:id" element={<Detail />} />
        <Route path='/explore/:mediatype' element={<Explore />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
