import SearchLand from "@/components/SearchLand";
import LandFrame from "@/components/landFrame";
import LandProperties from "@/components/landProperties";
import { promises as fs } from 'fs';

export default async function Home({ FocusPlot }) {
  const file = await fs.readFile(process.cwd() + '/lib/lands.json', 'utf8');
  const lands = JSON.parse(file);
  return (
    <main className="flex min-h-screen w-[99%] flex-col items-center justify-center  gap-y-10 px-10 text-black mt-8">

      {lands.map((land) => {
        return <div id={`${land.plot}`} key={`land-${land.plot}`} className="w-full rounded-sm flex-col bg-white pt-2 gap-10">
          <SearchLand />
          <LandProperties key={`land-#${land.plot}`} land={land} />
          <LandFrame key={`frame-#${land.plot}`} number={land.plot} FocusPlot={(FocusPlot == land.plot)} />
        </div>
      })}
    </main>
  );
}
