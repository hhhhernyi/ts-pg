import { Link } from "react-router"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1>Hello and welcome to the game</h1>
        <Link to="/play"><button >Play game!</button></Link>
      </div>
  )
}

export default Home