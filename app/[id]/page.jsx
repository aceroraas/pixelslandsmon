
import Home from "../page";
export default async function PageHome({params}) {
  return <Home FocusPlot={params.id}/>
}
