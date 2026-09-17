(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let port,mapId='',mapBusy=0,mapOk=0,mapRot=0,mapPoints=null;
const MAPSVG='<svg class="p3map" viewBox="0 0 400 260"><polyline class="p3track" points=""/><g class="p3wind"><path d="M200 124 L193 114 L193 76 L184 76 L200 42 L216 76 L207 76 L207 114 Z" fill="#e6df00" stroke="#7b6f00" stroke-width="4" stroke-linejoin="round" opacity="0.95"/><path d="M200 124 L193 114 L193 76 L184 76 L200 42 L216 76 L207 76 L207 114 Z" fill="none" stroke="rgba(0,0,0,0.35)" stroke-width="8" stroke-linejoin="round" transform="translate(2 2)"/></g></svg>';
const CHARTSVG='<svg class="p3chart" viewBox="0 0 520 260" overflow="visible" style="overflow:visible"><line class="axis" x1="42" y1="18" x2="42" y2="220"/><line class="axis" x1="42" y1="220" x2="505" y2="220"/><text x="49" y="12" text-anchor="end">70°C</text><text x="-13" y="225">0</text><polyline class="trackline"/><polyline class="airline"/><text class="period" x="274" y="252" text-anchor="middle">PERIOD 3 HOURS</text></svg>';
function injectMultiP3(){
  for(const h of $$('.multiDashboard .multiP3')){
    if(!h.querySelector(':scope > .p3MultiLower')){
      const d=document.createElement('div');
      d.className='p3MultiLower';
      d.innerHTML='<div class="trackMapContainer p3MultiMapContainer"><div class="trackMap"></div></div><div class="weatherChartContainer p3MultiChartContainer"></div><div class="weatherInfoContainer p3MultiWeatherContainer"><table class="weatherInfoTable p3MultiWeatherTable"><tbody><tr class="trackTempRow"><td class="trackTemp p3LegendMarkerCell">&gt;</td><td class="trackTemp p3LegendLabel">TRACK TEMP</td><td class="trackTemp p3vTrackTemp">-</td></tr><tr class="airTempRow"><td class="airTemp p3LegendMarkerCell">&gt;</td><td class="airTemp p3LegendLabel">AIR TEMP</td><td class="airTemp p3vAirTemp">-</td></tr><tr class="rainIndicatorRow"><td class="p3LegendMarkerCell"></td><td class="rainIndicator p3LegendLabel">WET / DRY</td><td class="rainIndicator p3vRain">-</td></tr><tr class="windSpeedRow"><td class="p3LegendMarkerCell"></td><td class="windSpeed p3LegendLabel">WIND SPEED</td><td class="windSpeed p3vWind">-</td></tr><tr class="humidityRow"><td class="p3LegendMarkerCell"></td><td class="humidity p3LegendLabel">HUMIDITY</td><td class="humidity p3vHumidity">-</td></tr><tr class="pressureRow"><td class="p3LegendMarkerCell"></td><td class="pressure p3LegendLabel">PRESSURE</td><td class="pressure p3vPressure">-</td></tr></tbody></table></div>';
      h.appendChild(d);
    }
  }
}
function ensurePair(root){
  const m=root.querySelector('.trackMap'),c=root.querySelector('.weatherChartContainer');
  if(m&&!m.querySelector('svg'))m.innerHTML=MAPSVG;
  if(c&&!c.querySelector('svg')){c.innerHTML=CHARTSVG;c.style.overflow='visible'}
}
function ensure(){
  injectMultiP3();
  const normal=document.querySelector('.trackInfoWrapper');
  if(normal)ensurePair(normal);
  for(const r of $$('.p3MultiLower'))ensurePair(r);
  if(mapPoints)renderMap();
  return !!(normal||$('.p3MultiLower'));
}
function updateMultiWeather(w){
 const vals={'.p3vTrackTemp':w?.TrackTemp,'.p3vAirTemp':w?.AirTemp,'.p3vRain':w?.Rainfall,'.p3vWind':w?.WindSpeed,'.p3vHumidity':w?.Humidity,'.p3vPressure':w?.Pressure};
 for(const [sel,val] of Object.entries(vals))$$('.p3MultiLower '+sel).forEach(el=>el.textContent=(val??'-'));
}
async function gql(f){
 if(!port){for(let p=10101;p<=10110;p++)try{let r=await fetch(`http://127.0.0.1:${p}/api/graphql`,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({query:'query { version }'})});if(r.ok){port=p;break}}catch(e){}}
 if(!port)return null;
 try{let r=await fetch(`http://127.0.0.1:${port}/api/graphql`,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({query:`query P3MV { liveTimingState { ${f} } }`})});return(await r.json())?.data?.liveTimingState||null}catch(e){return null}
}
function getjson(url){return new Promise(res=>{try{const h=require('https');let q=h.get(url,{headers:{'User-Agent':'RetroLiveTiming/0.2.3'}},r=>{let b='';r.on('data',c=>b+=c);r.on('end',()=>{if(r.statusCode>=200&&r.statusCode<300)try{res(JSON.parse(b))}catch(e){res(null)}else res(null)})});q.on('error',()=>res(null));q.setTimeout(7000,()=>{q.destroy();res(null)})}catch(e){fetch(url,{cache:'no-store'}).then(r=>r.ok?r.json():null).then(res).catch(()=>res(null))}})}
function buildMapPoints(a,deg){
 if(!a||a.length<3)return null;deg=isFinite(+deg)?+deg:0;
 let r=deg*Math.PI/180,co=Math.cos(r),si=Math.sin(r);a=a.map(p=>[p[0]*co-p[1]*si,p[0]*si+p[1]*co]);
 let xs=a.map(p=>p[0]),ys=a.map(p=>p[1]),x0=Math.min(...xs),x1=Math.max(...xs),y0=Math.min(...ys),y1=Math.max(...ys);if(!(x1>x0&&y1>y0))return null;
 let s=Math.min(350/(x1-x0),220/(y1-y0)),ox=(400-(x1-x0)*s)/2,oy=(260-(y1-y0)*s)/2,q=a.map(p=>`${ox+(p[0]-x0)*s},${oy+(y1-p[1])*s}`);q.push(q[0]);return q.join(' ')
}
function renderMap(){if(!mapPoints)return 0;let n=0;for(const el of $$('.p3track')){el.setAttribute('points',mapPoints);n++}return n}
function meta(si){let c=si?.Meeting?.Circuit||si?.Circuit||{},k=c.Key??c.key??si?.Meeting?.CircuitKey??si?.CircuitKey;let z=si?.StartDate||si?.Meeting?.StartDate||si?.Path||'',m=String(z).match(/20\d\d/),y=m?+m[0]:NaN;return[+k,y]}
async function circuit(si){
 let[k,y]=meta(si);if(!isFinite(k)||!isFinite(y))return 0;let id=`${k}/${y}`;
 if(mapOk&&mapId===id){renderMap();return 1}if(mapBusy&&mapId===id)return 0;
 mapId=id;mapBusy=1;mapOk=0;let d=await getjson(`https://api.multiviewer.app/api/v1/circuits/${k}/${y}`);mapBusy=0;
 if(!d||!Array.isArray(d.x)||!Array.isArray(d.y)||d.x.length<3||d.x.length!==d.y.length)return 0;
 let a=[];for(let i=0;i<d.x.length;i++){let x=+d.x[i],yy=+d.y[i];if(isFinite(x)&&isFinite(yy))a.push([x,yy])}
 mapRot=isFinite(+d.rotation)?+d.rotation:0;mapPoints=buildMapPoints(a,mapRot);mapOk=!!mapPoints;renderMap();return mapOk
}
function series(o){let a=[],i=0;function walk(v,t){if(!v||typeof v!='object')return;let z=v.Utc||v.Timestamp||v.Time||t;if(v.TrackTemp!=null&&v.AirTemp!=null){let d=z?Date.parse(z):NaN;a.push({t:isFinite(d)?d:i++,track:+v.TrackTemp,air:+v.AirTemp})}for(let x of Object.values(v))if(x)walk(x,z)}walk(o);return a.filter(x=>isFinite(x.track)&&isFinite(x.air))}
function chart(o,w){
 let a=series(o);if(!a.length&&w?.TrackTemp!=null)a=[{t:0,track:+w.TrackTemp,air:+w.AirTemp}];if(!a.length)return;
 let real=a.some(x=>x.t>1e10),end=real?Math.max(...a.map(x=>x.t)):a.length-1||1,start=real?end-10800000:0;a=a.filter(x=>x.t>=start);
 let px=x=>42+(x.t-start)/Math.max(1,end-start)*463,py=v=>220-Math.max(0,Math.min(70,v))/70*202,pts=k=>a.map(x=>`${px(x)},${py(x[k])}`).join(' ');
 for(const el of $$('.trackline'))el.setAttribute('points',pts('track'));for(const el of $$('.airline'))el.setAttribute('points',pts('air'))
}
function wind(w){if(!isFinite(+w?.WindDirection))return;let wd=(+w.WindDirection+180-mapRot)%360;if(wd<0)wd+=360;for(const g of $$('.p3wind'))g.setAttribute('transform',`rotate(${wd} 200 130)`)}
async function tick(){if(!ensure())return;let d=await gql('WeatherData WeatherDataSeries SessionInfo');if(!d)return;let w=d.WeatherData||{};updateMultiWeather(w);await circuit(d.SessionInfo);wind(w);chart(d.WeatherDataSeries,w)}
setInterval(tick,1000);setTimeout(tick,300)
})();