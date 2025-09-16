import Backyard from './shared/Backyard'
import Header from './shared/Header'
import Hero from './shared/Hero'

function App() {
  return (
    <>
      <main className="px-5.5 sm:px-8 md:px-21">
        <Header />
        <Hero />
        <Backyard />
      </main>
    </>
  )
}

export default App
