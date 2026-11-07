import {HashRouter,Routes,Route,NavLink,Link,useLocation,Navigate} from 'react-router-dom';
import {useEffect} from 'react';
import PhuQuoc,{DayDetail,Hotels} from './pages/PhuQuoc.jsx';
import Vietnam from './pages/Vietnam.jsx';
import SiteFooter from './components/SiteFooter.jsx';

const world=location.hostname==='127.0.0.1'?'http://127.0.0.1:5180/#/':'../cody-travel-journal/#/';
function Shell(){const {pathname}=useLocation();useEffect(()=>{document.documentElement.dataset.travelTheme='vietnam';window.scrollTo(0,0);document.title='越南旅記｜Cody & Doreen'},[pathname]);return <><header className="journal-nav"><div className="nav-inner"><a className="journal-brand" href={world}><span className="brand-dot"/><span><span className="brand-title">Cody & Doreen</span><span className="brand-caption">旅行紀錄 · TRAVEL JOURNAL</span></span></a><nav className="vietnam-nav"><NavLink to="/" end>越南地圖</NavLink><NavLink to="/phu-quoc" end>富國島</NavLink><NavLink to="/phu-quoc/itinerary" className={({isActive})=>isActive||pathname.includes('/day/')?'active':''}>每日行程</NavLink><NavLink to="/phu-quoc/hotels">住宿</NavLink></nav></div></header><main><Routes><Route path="/" element={<Vietnam/>}/><Route path="/phu-quoc" element={<PhuQuoc/>}/><Route path="/phu-quoc/itinerary" element={<PhuQuoc itinerary/>}/><Route path="/phu-quoc/day/:dayId" element={<DayDetail/>}/><Route path="/phu-quoc/hotels" element={<Hotels/>}/><Route path="*" element={<Navigate to="/phu-quoc" replace/>}/></Routes></main><SiteFooter/></>}
export default function App(){return <HashRouter><Shell/></HashRouter>}
