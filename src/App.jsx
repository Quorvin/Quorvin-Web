import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ServicesOverview from './pages/ServicesOverview'
import ServiceDetail from './pages/ServiceDetail'
import UseCasesIndex from './pages/UseCasesIndex'
import UseCaseDetail from './pages/UseCaseDetail'
import InsightsIndex from './pages/InsightsIndex'
import InsightDetail from './pages/InsightDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// On every page change: scroll to the top and move keyboard / screen reader
// focus to the page content, so people do not stay stuck in the old position.
function RouteChange() {
  const { pathname } = useLocation()
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    window.scrollTo(0, 0)
    document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <RouteChange />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/use-cases" element={<UseCasesIndex />} />
          <Route path="/use-cases/:slug" element={<UseCaseDetail />} />
          <Route path="/insights" element={<InsightsIndex />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
