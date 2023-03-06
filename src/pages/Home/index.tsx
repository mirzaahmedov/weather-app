import useURLSearchParams from "@/hooks/useURLSearchParams"

const Home = () => {
  const [searchParams, error] = useURLSearchParams()

  return (
    <div>
    {searchParams ? (
      "Home"
    ) : (
      <div>
        <h1>Something went wrong</h1>
        <p>{error?.message}</p>
      </div>
    )}
    </div>
  )
}

export default Home
