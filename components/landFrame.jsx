'use client'
import { useInView } from 'react-intersection-observer';
const LandFrame = ({number}) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  
 return <div ref={ref} className={`w-full h-[508px] py-2 ${inView?"bg-blue-500":"bg-fuchsia-400"} pointer-events-none`}>
  {inView?<iframe
      width="100%"
      height="500px"
      loading="lazy"
      src={`https://play.pixels.xyz/pixels/share/${number}`}
    ></iframe>:""}
  </div>

};

export default LandFrame;