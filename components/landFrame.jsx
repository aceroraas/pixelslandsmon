'use client'
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const LandFrame = ({number,FocusPlot}) => {
  const [showLand,setShowLand] = useState(false);
  const FocusPlotRef = useRef(false);
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const handleClick = (e)=>{
      setShowLand(!showLand)
  }

useEffect(()=>{
  if(FocusPlot && FocusPlotRef){
    window.scrollTo({
      behavior:"auto",
      top:(FocusPlotRef.current.offsetTop-200)
    })
    FocusPlotRef.current.focus();
  }
},[FocusPlotRef,FocusPlot]);
 return <div ref={ref} className={`w-full rounded-b-sm ${showLand?"h-[508px]":"h-[45px]"} py-2 ${inView?"bg-blue-500":"bg-fuchsia-400"}`} autoFocus={FocusPlot}>
  <button ref={FocusPlotRef} className='ml-3 mb-3 p-1 bg-slate-300 rounded-md text-blue-900' onClick={handleClick} >{`${showLand?"HIDE":"SHOW"}`}</button>
  {inView&&showLand?<iframe
  className='pointer-events-none'
      width="100%"
      height="500px"
      loading="lazy"
      src={`https://play.pixels.xyz/pixels/share/${number}`}
    ></iframe>:""}
  </div>

};

export default LandFrame;