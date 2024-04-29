import { AreaChartHero } from "./components/areachart"

export default function App() {
  return ( 
    <div>
      < AreaChartHero/>
      <div  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div className='flax'>
          <img src="icon1.jpg" alt="" />
          <h5 className="mb-2 font-normal tracking-tight text-gray-700">Number of companies</h5>
        </div>
        <div className='flex '>
          <p className=" text-2xl font-bold text-gray-900 ">2</p>
          {/* chart code */}
        </div>
      </div>
    </div>
  )
}
