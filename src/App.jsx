import Hero from "./componenta/Hero"
import Navbar from "./componenta/Navbar"
import ScannerDemo from "./componenta/ScannerDemo"


const app = () => {
  return (
    <div className="bg-[#f3f6f2] min-h-screen px-7 py-8">

      <div className="bg-[#ebf3eef3] border border-gray-200 rounded-3xl">
        <Navbar/>
        <Hero/>
        <ScannerDemo/>

      </div>
    </div>
  )
}

export default app