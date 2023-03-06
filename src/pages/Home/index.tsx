import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (!searchParams.has('time')) {
      const params = new URLSearchParams(searchParams)
      params.set('time', Date.now().toString())

      setSearchParams(params)
    }

    if (!searchParams.has('latitude') || !searchParams.has('longitude')) {
      navigator.geolocation.getCurrentPosition((position) => {
        const params = new URLSearchParams(searchParams)
        params.set('latitude', position.coords.latitude.toString())
        params.set('longitude', position.coords.longitude.toString())

        setSearchParams(params)
      })
    }
  }, [])

  return (
    <div>
      Home
    </div>
  )
}

export default Home
