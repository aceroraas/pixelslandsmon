import LandIsLock from "./landIsLock";
import LandTreeTimer from "./landTreeTimer";
const LandProperties = ({ land }) => {
   const industries = {
      mine: "⛏️",
      textile: "👗",
      sluggery: "🐛",
      kiln: "🧱",
      apiary: "🐝",
      woodwork: "🔨",
      winery: "🍷"
   }
   return <div className="flex w-full flex-row flex-wrap justify-stretch items-center gap-4 px-3">
      <span className="font-bold text-2xl">{`#${land.plot}`}</span>
      <LandIsLock land={land} />
      <LandTreeTimer land={land} />
      <span className="font-bold text-2xl">{`🌱${land.soilCount}`}</span>
      <span className="font-bold text-2xl">{land.windmill ? "🌾" : ""}</span>
      <span className="font-bold text-2xl">{land.coop ? "🐓" : ""}</span>
      {land.industries.map((e, i) => {
         return <span key={`indus-${i}`} className="font-bold text-2xl">{industries[e] ?? e.toUpperCase()}</span>
      })}
   </div>

};

export default LandProperties;