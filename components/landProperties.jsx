import LandIsLock from "./landIsLock";
import LandTreeTimer from "./landTreeTimer";
import { industries, landsTypes } from "@/lib/commons";
const LandProperties = ({ land }) => {
   return <div className={`flex w-full flex-row flex-wrap justify-stretch items-center gap-4 px-3`}>
      <span className="font-bold text-2xl">{`#${land.plot}`}</span>
      <span className="p-2 my-1 flex flex-row justify-center items-center gap-4 text-xl uppercase">
         <img src={landsTypes[land.type].urlIcon} alt={land.type} width="45px" height="45px" />
         {land.type}
      </span>
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