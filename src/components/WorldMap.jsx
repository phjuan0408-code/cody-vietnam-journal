import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { useNavigate } from 'react-router-dom';
import world from '../data/world-countries.json';
const countries={392:{name:'日本',path:'/japan',color:'#ad4f38'},704:{name:'越南',path:'/vietnam',color:'#267c78'}};
export default function WorldMap({vietnam=false}){
 const navigate=useNavigate();
 return <div className={'atlas '+(vietnam?'atlas-vietnam':'')}><ComposableMap projection="geoEqualEarth" width={1000} height={vietnam?680:510} projectionConfig={vietnam?{rotate:[-107,0,0],center:[0,17],scale:1800}:{rotate:[-10,0,0],scale:175,center:[0,0]}} aria-label={vietnam?'越南與富國島位置圖':'世界旅程地圖：日本與越南'}>
 <Geographies geography={vietnam ? `${import.meta.env.BASE_URL}maps/vietnam-10m.json` : world}>{({geographies})=>geographies.filter(g=>g.id!=='010').map(g=>{const c=countries[Number(g.id)];return <Geography key={g.rsmKey} geography={g} fill={c?.color||'#dcded3'} stroke="#f6f5ee" strokeWidth={vietnam ? .6 : .5} onClick={()=>c&&navigate(c.path)} style={{default:{outline:'none'},hover:{fill:c?c.color:'#dcded3',opacity:c ? .8 : 1,cursor:c?'pointer':'default',outline:'none'},pressed:{outline:'none'}}}/>})}</Geographies>
 {(vietnam?[{name:'富國島',coordinates:[103.97,10.22],path:'/phu-quoc',color:'#267c78',dx:-20,dy:32}]:[{name:'日本',coordinates:[138,37],path:'/japan',color:'#ad4f38',dx:18,dy:-10},{name:'越南',coordinates:[107,16],path:'/vietnam',color:'#267c78',dx:-62,dy:30}]).map(c=><Marker key={c.path} coordinates={c.coordinates}><g role="link" tabIndex={0} aria-label={'探索'+c.name} onClick={()=>navigate(c.path)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();navigate(c.path)}}} className="map-target"><circle r={8} fill={c.color} stroke="#fff" strokeWidth={3}/><path d={`M0,0 L${c.dx},${c.dy}`} stroke={c.color} fill="none"/><rect x={c.dx-8} y={c.dy-22} width={c.name.length*23+16} height={34} rx={3} fill="#faf8f3"/><text x={c.dx} y={c.dy} fill={c.color} fontSize={22} fontWeight={600}>{c.name} ↗</text></g></Marker>)}
 </ComposableMap><span className="atlas-credit">地圖資料：Natural Earth / world-atlas</span></div>
}
