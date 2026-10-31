(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Ea="180",_h=0,Ka=1,xh=2,hl=1,ul=2,Nn=3,ti=0,Ze=1,Ie=2,jn=0,Ji=1,yn=2,ja=3,Qa=4,vh=5,mi=100,Mh=101,yh=102,Sh=103,Eh=104,wh=200,Th=201,bh=202,Ah=203,Do=204,Io=205,Rh=206,Ch=207,Ph=208,Lh=209,Dh=210,Ih=211,Uh=212,Nh=213,Fh=214,Uo=0,No=1,Fo=2,Qi=3,Oo=4,Bo=5,zo=6,ko=7,fl=0,Oh=1,Bh=2,Qn=0,zh=1,kh=2,Hh=3,dl=4,Vh=5,Gh=6,Wh=7,pl=300,tr=301,er=302,Ho=303,Vo=304,Fs=306,nr=1e3,vi=1001,Go=1002,gn=1003,Xh=1004,Wr=1005,Sn=1006,qs=1007,Mi=1008,bn=1009,ml=1010,gl=1011,Ar=1012,wa=1013,yi=1014,On=1015,Or=1016,Ta=1017,ba=1018,Rr=1020,_l=35902,xl=35899,vl=1021,Ml=1022,mn=1023,Cr=1026,Pr=1027,yl=1028,Aa=1029,Sl=1030,Ra=1031,Ca=1033,Ss=33776,Es=33777,ws=33778,Ts=33779,Wo=35840,Xo=35841,qo=35842,Yo=35843,$o=36196,Zo=37492,Jo=37496,Ko=37808,jo=37809,Qo=37810,ta=37811,ea=37812,na=37813,ia=37814,ra=37815,sa=37816,oa=37817,aa=37818,ca=37819,la=37820,ha=37821,ua=36492,fa=36494,da=36495,pa=36283,ma=36284,ga=36285,_a=36286,qh=3200,Yh=3201,El=0,$h=1,Kn="",Pe="srgb",ir="srgb-linear",Rs="linear",me="srgb",Ri=7680,tc=519,Zh=512,Jh=513,Kh=514,wl=515,jh=516,Qh=517,tu=518,eu=519,xa=35044,ec="300 es",En=2e3,Cs=2001;class ar{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nc=1234567;const Sr=Math.PI/180,Lr=180/Math.PI;function wn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function Pa(i,t){return(i%t+t)%t}function nu(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function iu(i,t,e){return i!==t?(e-i)/(t-i):0}function Er(i,t,e){return(1-e)*i+e*t}function ru(i,t,e,n){return Er(i,t,1-Math.exp(-e*n))}function su(i,t=1){return t-Math.abs(Pa(i,t*2)-t)}function ou(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function cu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function lu(i,t){return i+Math.random()*(t-i)}function hu(i){return i*(.5-Math.random())}function uu(i){i!==void 0&&(nc=i);let t=nc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fu(i){return i*Sr}function du(i){return i*Lr}function pu(i){return(i&i-1)===0&&i!==0}function mu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _u(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xt={DEG2RAD:Sr,RAD2DEG:Lr,generateUUID:wn,clamp:ee,euclideanModulo:Pa,mapLinear:nu,inverseLerp:iu,lerp:Er,damp:ru,pingpong:su,smoothstep:ou,smootherstep:au,randInt:cu,randFloat:lu,randFloatSpread:hu,seededRandom:uu,degToRad:fu,radToDeg:du,isPowerOfTwo:pu,ceilPowerOfTwo:mu,floorPowerOfTwo:gu,setQuaternionFromProperEuler:_u,normalize:de,denormalize:pn};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Br{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],M=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=M;return}if(u!==M||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*M,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),b=Math.atan2(A,p*S);m=Math.sin(m*b)/A,a=Math.sin(a*b)/A}const _=a*S;if(l=l*m+f*_,c=c*m+d*_,h=h*m+g*_,u=u*m+M*_,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ic.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ys.copy(this).projectOnVector(t),this.sub(Ys)}reflect(t){return this.sub(Ys.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ys=new R,ic=new Br;class jt{constructor(t,e,n,r,s,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],M=r[0],m=r[3],p=r[6],S=r[1],y=r[4],_=r[7],A=r[2],b=r[5],C=r[8];return s[0]=o*M+a*S+l*A,s[3]=o*m+a*y+l*b,s[6]=o*p+a*_+l*C,s[1]=c*M+h*S+u*A,s[4]=c*m+h*y+u*b,s[7]=c*p+h*_+u*C,s[2]=f*M+d*S+g*A,s[5]=f*m+d*y+g*b,s[8]=f*p+d*_+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=e*u+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=u*M,t[1]=(r*c-h*n)*M,t[2]=(a*n-r*o)*M,t[3]=f*M,t[4]=(h*e-r*l)*M,t[5]=(r*s-a*e)*M,t[6]=d*M,t[7]=(n*l-c*e)*M,t[8]=(o*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($s.makeScale(t,e)),this}rotate(t){return this.premultiply($s.makeRotation(-t)),this}translate(t,e){return this.premultiply($s.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $s=new jt;function Tl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xu(){const i=Ps("canvas");return i.style.display="block",i}const rc={};function Dr(i){i in rc||(rc[i]=!0,console.warn(i))}function vu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const sc=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oc=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mu(){const i={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===me&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Kn?Rs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Dr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Dr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ir]:{primaries:t,whitePoint:n,transfer:Rs,toXYZ:sc,fromXYZ:oc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:me,toXYZ:sc,fromXYZ:oc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}const le=Mu();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ci;class yu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ci===void 0&&(Ci=Ps("canvas")),Ci.width=t.width,Ci.height=t.height;const r=Ci.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Ci}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ps("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Su=0;class La{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=wn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zs(r[o].image)):s.push(Zs(r[o]))}else s=Zs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Zs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eu=0;const Js=new R;class Xe extends ar{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=vi,r=vi,s=Sn,o=Mi,a=mn,l=bn,c=Xe.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=wn(),this.name="",this.source=new La(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Js).x}get height(){return this.source.getSize(Js).y}get depth(){return this.source.getSize(Js).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nr:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case Go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nr:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case Go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=pl;Xe.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,r=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(d+1)/2,A=(p+1)/2,b=(h+f)/4,C=(u+M)/4,D=(g+m)/4;return y>_&&y>A?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=b/n,s=C/n):_>A?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=b/r,s=D/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=C/s,r=D/s),this.set(n,r,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-M)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wu extends ar{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Xe(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new La(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends wu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class bl extends Xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tu extends Xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(s,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(t.matrixWorld),this.union(Xr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),qr.subVectors(this.max,ur),Pi.subVectors(t.a,ur),Li.subVectors(t.b,ur),Di.subVectors(t.c,ur),Wn.subVectors(Li,Pi),Xn.subVectors(Di,Li),oi.subVectors(Pi,Di);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-oi.z,oi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,oi.z,0,-oi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-oi.y,oi.x,0];return!Ks(e,Pi,Li,Di,qr)||(e=[1,0,0,0,1,0,0,0,1],!Ks(e,Pi,Li,Di,qr))?!1:(Yr.crossVectors(Wn,Xn),e=[Yr.x,Yr.y,Yr.z],Ks(e,Pi,Li,Di,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pn=[new R,new R,new R,new R,new R,new R,new R,new R],ln=new R,Xr=new zr,Pi=new R,Li=new R,Di=new R,Wn=new R,Xn=new R,oi=new R,ur=new R,qr=new R,Yr=new R,ai=new R;function Ks(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ai.fromArray(i,s);const a=r.x*Math.abs(ai.x)+r.y*Math.abs(ai.y)+r.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const bu=new zr,fr=new R,js=new R;class Os{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):bu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(fr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(js.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(js)),this.expandByPoint(fr.copy(t.center).sub(js))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ln=new R,Qs=new R,$r=new R,qn=new R,to=new R,Zr=new R,eo=new R;class Al{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Qs.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(Qs);const s=t.distanceTo(e)*.5,o=-this.direction.dot($r),a=qn.dot(this.direction),l=-qn.dot($r),c=qn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const M=1/h;u*=M,f*=M,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Qs).addScaledVector($r,f),d}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),r=Ln.dot(Ln)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,r,s){to.subVectors(e,t),Zr.subVectors(n,t),eo.crossVectors(to,Zr);let o=this.direction.dot(eo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,t);const l=a*this.direction.dot(Zr.crossVectors(qn,Zr));if(l<0)return null;const c=a*this.direction.dot(to.cross(qn));if(c<0||l+c>o)return null;const h=-a*qn.dot(eo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,n,r,s,o,a,l,c,h,u,f,d,g,M,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,f,d,g,M,m)}set(t,e,n,r,s,o,a,l,c,h,u,f,d,g,M,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ii.setFromMatrixColumn(t,0).length(),s=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,M=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-M*c,e[9]=-a*l,e[2]=M-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,M=c*u;e[0]=f+M*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=M+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,M=c*u;e[0]=f-M*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=M-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,M=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+M,e[1]=l*u,e[5]=M*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,M=a*c;e[0]=l*h,e[4]=M-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-M*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,M=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+M,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=M*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Au,t,Ru)}lookAt(t,e,n){const r=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Yn.crossVectors(n,je),Yn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Yn.crossVectors(n,je)),Yn.normalize(),Jr.crossVectors(je,Yn),r[0]=Yn.x,r[4]=Jr.x,r[8]=je.x,r[1]=Yn.y,r[5]=Jr.y,r[9]=je.y,r[2]=Yn.z,r[6]=Jr.z,r[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],M=n[6],m=n[10],p=n[14],S=n[3],y=n[7],_=n[11],A=n[15],b=r[0],C=r[4],D=r[8],E=r[12],v=r[1],P=r[5],U=r[9],z=r[13],J=r[2],G=r[6],Z=r[10],tt=r[14],W=r[3],dt=r[7],_t=r[11],wt=r[15];return s[0]=o*b+a*v+l*J+c*W,s[4]=o*C+a*P+l*G+c*dt,s[8]=o*D+a*U+l*Z+c*_t,s[12]=o*E+a*z+l*tt+c*wt,s[1]=h*b+u*v+f*J+d*W,s[5]=h*C+u*P+f*G+d*dt,s[9]=h*D+u*U+f*Z+d*_t,s[13]=h*E+u*z+f*tt+d*wt,s[2]=g*b+M*v+m*J+p*W,s[6]=g*C+M*P+m*G+p*dt,s[10]=g*D+M*U+m*Z+p*_t,s[14]=g*E+M*z+m*tt+p*wt,s[3]=S*b+y*v+_*J+A*W,s[7]=S*C+y*P+_*G+A*dt,s[11]=S*D+y*U+_*Z+A*_t,s[15]=S*E+y*z+_*tt+A*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],M=t[7],m=t[11],p=t[15];return g*(+s*l*u-r*c*u-s*a*f+n*c*f+r*a*d-n*l*d)+M*(+e*l*d-e*c*f+s*o*f-r*o*d+r*c*h-s*l*h)+m*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+p*(-r*a*h-e*l*u+e*a*f+r*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],M=t[13],m=t[14],p=t[15],S=u*m*c-M*f*c+M*l*d-a*m*d-u*l*p+a*f*p,y=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,_=h*M*c-g*u*c+g*a*d-o*M*d-h*a*p+o*u*p,A=g*u*l-h*M*l-g*a*f+o*M*f+h*a*m-o*u*m,b=e*S+n*y+r*_+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=S*C,t[1]=(M*f*s-u*m*s-M*r*d+n*m*d+u*r*p-n*f*p)*C,t[2]=(a*m*s-M*l*s+M*r*c-n*m*c-a*r*p+n*l*p)*C,t[3]=(u*l*s-a*f*s-u*r*c+n*f*c+a*r*d-n*l*d)*C,t[4]=y*C,t[5]=(h*m*s-g*f*s+g*r*d-e*m*d-h*r*p+e*f*p)*C,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*p-e*l*p)*C,t[7]=(o*f*s-h*l*s+h*r*c-e*f*c-o*r*d+e*l*d)*C,t[8]=_*C,t[9]=(g*u*s-h*M*s-g*n*d+e*M*d+h*n*p-e*u*p)*C,t[10]=(o*M*s-g*a*s+g*n*c-e*M*c-o*n*p+e*a*p)*C,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*C,t[12]=A*C,t[13]=(h*M*r-g*u*r+g*n*f-e*M*f-h*n*m+e*u*m)*C,t[14]=(g*a*r-o*M*r-g*n*l+e*M*l+o*n*m-e*a*m)*C,t[15]=(o*u*r-h*a*r+h*n*l-e*u*l-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,M=o*h,m=o*u,p=a*u,S=l*c,y=l*h,_=l*u,A=n.x,b=n.y,C=n.z;return r[0]=(1-(M+p))*A,r[1]=(d+_)*A,r[2]=(g-y)*A,r[3]=0,r[4]=(d-_)*b,r[5]=(1-(f+p))*b,r[6]=(m+S)*b,r[7]=0,r[8]=(g+y)*C,r[9]=(m-S)*C,r[10]=(1-(f+M))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ii.set(r[0],r[1],r[2]).length();const o=Ii.set(r[4],r[5],r[6]).length(),a=Ii.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],hn.copy(this);const c=1/s,h=1/o,u=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,e.setFromRotationMatrix(hn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=En,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let g,M;if(l)g=s/(o-s),M=o*s/(o-s);else if(a===En)g=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===Cs)g=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=En,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r);let g,M;if(l)g=1/(o-s),M=o/(o-s);else if(a===En)g=-2/(o-s),M=-(o+s)/(o-s);else if(a===Cs)g=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ii=new R,hn=new Me,Au=new R(0,0,0),Ru=new R(1,1,1),Yn=new R,Jr=new R,je=new R,ac=new Me,cc=new Br;class An{constructor(t=0,e=0,n=0,r=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ac,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cc.setFromEuler(this),this.setFromQuaternion(cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Rl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cu=0;const lc=new R,Ui=new Br,Dn=new Me,Kr=new R,dr=new R,Pu=new R,Lu=new Br,hc=new R(1,0,0),uc=new R(0,1,0),fc=new R(0,0,1),dc={type:"added"},Du={type:"removed"},Ni={type:"childadded",child:null},no={type:"childremoved",child:null};class Ne extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new R,e=new An,n=new Br,r=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Me},normalMatrix:{value:new jt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(fc,t)}translateOnAxis(t,e){return lc.copy(t).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kr.copy(t):Kr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(dr,Kr,this.up):Dn.lookAt(Kr,dr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Ui.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Du),no.child=t,this.dispatchEvent(no),no.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,Pu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ne.DEFAULT_UP=new R(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new R,In=new R,io=new R,Un=new R,Fi=new R,Oi=new R,pc=new R,ro=new R,so=new R,oo=new R,ao=new ge,co=new ge,lo=new ge;class an{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),un.subVectors(t,e),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){un.subVectors(r,e),In.subVectors(n,e),io.subVectors(t,e);const o=un.dot(un),a=un.dot(In),l=un.dot(io),c=In.dot(In),h=In.dot(io),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return ao.setScalar(0),co.setScalar(0),lo.setScalar(0),ao.fromBufferAttribute(t,e),co.fromBufferAttribute(t,n),lo.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ao,s.x),o.addScaledVector(co,s.y),o.addScaledVector(lo,s.z),o}static isFrontFacing(t,e,n,r){return un.subVectors(n,e),In.subVectors(t,e),un.cross(In).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),In.subVectors(this.a,this.b),un.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return an.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Fi.subVectors(r,n),Oi.subVectors(s,n),ro.subVectors(t,n);const l=Fi.dot(ro),c=Oi.dot(ro);if(l<=0&&c<=0)return e.copy(n);so.subVectors(t,r);const h=Fi.dot(so),u=Oi.dot(so);if(h>=0&&u<=h)return e.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Fi,o);oo.subVectors(t,s);const d=Fi.dot(oo),g=Oi.dot(oo);if(g>=0&&d<=g)return e.copy(s);const M=d*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Oi,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return pc.subVectors(s,r),a=(u-h)/(u-h+(d-g)),e.copy(r).addScaledVector(pc,a);const p=1/(m+M+f);return o=M*p,a=f*p,e.copy(n).addScaledVector(Fi,o).addScaledVector(Oi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},jr={h:0,s:0,l:0};function ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=le.workingColorSpace){if(t=Pa(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ho(o,s,t+1/3),this.g=ho(o,s,t),this.b=ho(o,s,t-1/3)}return le.colorSpaceToWorking(this,r),this}setStyle(t,e=Pe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=Cl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return le.workingToColorSpace(He.copy(this),t),Math.round(ee(He.r*255,0,255))*65536+Math.round(ee(He.g*255,0,255))*256+Math.round(ee(He.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(He.copy(this),e);const n=He.r,r=He.g,s=He.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Pe){le.workingToColorSpace(He.copy(this),t);const e=He.r,n=He.g,r=He.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(jr);const n=Er($n.h,jr.h,e),r=Er($n.s,jr.s,e),s=Er($n.l,jr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Zt;Zt.NAMES=Cl;let Iu=0;class bi extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=Ji,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=Io,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==Io&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ce extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new R,Qr=new at;let Uu=0;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xa,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),r=de(r,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xa&&(t.usage=this.usage),t}}class Pl extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ll extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Nu=0;const on=new Me,uo=new Ne,Bi=new R,Qe=new zr,pr=new zr,Be=new R;class De extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tl(t)?Ll:Pl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(Qe.min,pr.min),Qe.expandByPoint(Be),Be.addVectors(Qe.max,pr.max),Qe.expandByPoint(Be)):(Qe.expandByPoint(pr.min),Qe.expandByPoint(pr.max))}Qe.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Be.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Be));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(Bi.fromBufferAttribute(t,c),Be.add(Bi)),r=Math.max(r,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new R,l[D]=new R;const c=new R,h=new R,u=new R,f=new at,d=new at,g=new at,M=new R,m=new R;function p(D,E,v){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,v),f.fromBufferAttribute(s,D),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,v),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[D].add(M),a[E].add(M),a[v].add(M),l[D].add(m),l[E].add(m),l[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,E=S.length;D<E;++D){const v=S[D],P=v.start,U=v.count;for(let z=P,J=P+U;z<J;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const y=new R,_=new R,A=new R,b=new R;function C(D){A.fromBufferAttribute(r,D),b.copy(A);const E=a[D];y.copy(E),y.sub(A.multiplyScalar(A.dot(E))).normalize(),_.crossVectors(b,E);const P=_.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,P)}for(let D=0,E=S.length;D<E;++D){const v=S[D],P=v.start,U=v.count;for(let z=P,J=P+U;z<J;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?d=l[M]*a.data.stride+a.offset:d=l[M]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new cn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new Me,ci=new Al,ts=new Os,gc=new R,es=new R,ns=new R,is=new R,fo=new R,rs=new R,_c=new R,ss=new R;class nn extends Ne{constructor(t=new De,e=new Ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(fo.fromBufferAttribute(u,t),o?rs.addScaledVector(fo,h):rs.addScaledVector(fo.sub(e),h))}e.add(rs)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(s),ci.copy(t.ray).recast(t.near),!(ts.containsPoint(ci.origin)===!1&&(ci.intersectSphere(ts,gc)===null||ci.origin.distanceToSquared(gc)>(t.far-t.near)**2))&&(mc.copy(s).invert(),ci.copy(t.ray).applyMatrix4(mc),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=S,A=y;_<A;_+=3){const b=a.getX(_),C=a.getX(_+1),D=a.getX(_+2);r=os(this,p,t,n,c,h,u,b,C,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){const S=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);r=os(this,o,t,n,c,h,u,S,y,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=S,A=y;_<A;_+=3){const b=_,C=_+1,D=_+2;r=os(this,p,t,n,c,h,u,b,C,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){const S=m,y=m+1,_=m+2;r=os(this,o,t,n,c,h,u,S,y,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Fu(i,t,e,n,r,s,o,a){let l;if(t.side===Ze?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===ti,a),l===null)return null;ss.copy(a),ss.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ss);return c<e.near||c>e.far?null:{distance:c,point:ss.clone(),object:i}}function os(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,es),i.getVertexPosition(l,ns),i.getVertexPosition(c,is);const h=Fu(i,t,e,n,es,ns,is,_c);if(h){const u=new R;an.getBarycoord(_c,es,ns,is,u),r&&(h.uv=an.getInterpolatedAttribute(r,a,l,c,u,new at)),s&&(h.uv1=an.getInterpolatedAttribute(s,a,l,c,u,new at)),o&&(h.normal=an.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new R,materialIndex:0};an.getNormal(es,ns,is,f.normal),h.face=f,h.barycoord=u}return h}class ne extends De{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(M,m,p,S,y,_,A,b,C,D,E){const v=_/C,P=A/D,U=_/2,z=A/2,J=b/2,G=C+1,Z=D+1;let tt=0,W=0;const dt=new R;for(let _t=0;_t<Z;_t++){const wt=_t*P-z;for(let qt=0;qt<G;qt++){const ie=qt*v-U;dt[M]=ie*S,dt[m]=wt*y,dt[p]=J,c.push(dt.x,dt.y,dt.z),dt[M]=0,dt[m]=0,dt[p]=b>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(qt/C),u.push(1-_t/D),tt+=1}}for(let _t=0;_t<D;_t++)for(let wt=0;wt<C;wt++){const qt=f+wt+G*_t,ie=f+wt+G*(_t+1),he=f+(wt+1)+G*(_t+1),oe=f+(wt+1)+G*_t;l.push(qt,ie,oe),l.push(ie,he,oe),W+=6}a.addGroup(d,W,E),d+=W,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=rr(i[e]);for(const r in n)t[r]=n[r]}return t}function Ou(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Bu={clone:rr,merge:We};var zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=Ou(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Il extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new R,xc=new at,vc=new at;class tn extends Il{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,xc,vc),e.subVectors(vc,xc)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=-90,ki=1;class Hu extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(zi,ki,t,e);r.layers=this.layers,this.add(r);const s=new tn(zi,ki,t,e);s.layers=this.layers,this.add(s);const o=new tn(zi,ki,t,e);o.layers=this.layers,this.add(o);const a=new tn(zi,ki,t,e);a.layers=this.layers,this.add(a);const l=new tn(zi,ki,t,e);l.layers=this.layers,this.add(l);const c=new tn(zi,ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ul extends Xe{constructor(t=[],e=tr,n,r,s,o,a,l,c,h){super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vu extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ul(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ne(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:jn});s.uniforms.tEquirect.value=e;const o=new nn(r,s),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Sn),new Hu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class Le extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gu={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gu)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Da{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new Da(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wu extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xa,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new R;class Ls{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),r=de(r,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ls(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ji extends bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hi;const mr=new R,Vi=new R,Gi=new R,Wi=new at,gr=new at,Nl=new Me,as=new R,_r=new R,cs=new R,Mc=new at,mo=new at,yc=new at;class wr extends Ne{constructor(t=new ji){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new De;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xu(e,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new Ls(n,3,0,!1)),Hi.setAttribute("uv",new Ls(n,2,3,!1))}this.geometry=Hi,this.material=t,this.center=new at(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vi.setFromMatrixScale(this.matrixWorld),Nl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vi.multiplyScalar(-Gi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;ls(as.set(-.5,-.5,0),Gi,o,Vi,r,s),ls(_r.set(.5,-.5,0),Gi,o,Vi,r,s),ls(cs.set(.5,.5,0),Gi,o,Vi,r,s),Mc.set(0,0),mo.set(1,0),yc.set(1,1);let a=t.ray.intersectTriangle(as,_r,cs,!1,mr);if(a===null&&(ls(_r.set(-.5,.5,0),Gi,o,Vi,r,s),mo.set(0,1),a=t.ray.intersectTriangle(as,cs,_r,!1,mr),a===null))return;const l=t.ray.origin.distanceTo(mr);l<t.near||l>t.far||e.push({distance:l,point:mr.clone(),uv:an.getInterpolation(mr,as,_r,cs,Mc,mo,yc,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ls(i,t,e,n,r,s){Wi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(gr.x=s*Wi.x-r*Wi.y,gr.y=r*Wi.x+s*Wi.y):gr.copy(Wi),i.copy(t),i.x+=gr.x,i.y+=gr.y,i.applyMatrix4(Nl)}const go=new R,qu=new R,Yu=new jt;class di{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=go.subVectors(n,e).cross(qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(go),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yu.getNormalMatrix(t),r=this.coplanarPoint(go).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Os,$u=new at(.5,.5),hs=new R;class Ia{constructor(t=new di,e=new di,n=new di,r=new di,s=new di,o=new di){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],M=s[9],m=s[10],p=s[11],S=s[12],y=s[13],_=s[14],A=s[15];if(r[0].setComponents(c-o,d-h,p-g,A-S).normalize(),r[1].setComponents(c+o,d+h,p+g,A+S).normalize(),r[2].setComponents(c+a,d+u,p+M,A+y).normalize(),r[3].setComponents(c-a,d-u,p-M,A-y).normalize(),n)r[4].setComponents(l,f,m,_).normalize(),r[5].setComponents(c-l,d-f,p-m,A-_).normalize();else if(r[4].setComponents(c-l,d-f,p-m,A-_).normalize(),e===En)r[5].setComponents(c+l,d+f,p+m,A+_).normalize();else if(e===Cs)r[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){li.center.set(0,0,0);const e=$u.distanceTo(t.center);return li.radius=.7071067811865476+e,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(hs.x=r.normal.x>0?t.max.x:t.min.x,hs.y=r.normal.y>0?t.max.y:t.min.y,hs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fl extends bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sc=new Me,va=new Al,us=new Os,fs=new R;class Zu extends Ne{constructor(t=new De,e=new Fl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(r),us.radius+=s,t.ray.intersectsSphere(us)===!1)return;Sc.copy(r).invert(),va.copy(t.ray).applyMatrix4(Sc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,M=d;g<M;g++){const m=c.getX(g);fs.fromBufferAttribute(u,m),Ec(fs,m,l,r,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,M=d;g<M;g++)fs.fromBufferAttribute(u,g),Ec(fs,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ec(i,t,e,n,r,s,o){const a=va.distanceSqToPoint(i);if(a<e){const l=new R;va.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ni extends Xe{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ol extends Xe{constructor(t,e,n=yi,r,s,o,a=gn,l=gn,c,h=Cr,u=1){if(h!==Cr&&h!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new La(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bl extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Tn extends De{constructor(t=1,e=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:r,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,g=n*2+s,M=r+1,m=new R,p=new R;for(let S=0;S<=g;S++){let y=0,_=0,A=0,b=0;if(S<=n){const E=S/n,v=E*Math.PI/2;_=-h-t*Math.cos(v),A=t*Math.sin(v),b=-t*Math.cos(v),y=E*u}else if(S<=n+s){const E=(S-n)/s;_=-h+E*e,A=t,b=0,y=u+E*f}else{const E=(S-n-s)/n,v=E*Math.PI/2;_=h+t*Math.sin(v),A=t*Math.cos(v),b=t*Math.sin(v),y=u+f+E*u}const C=Math.max(0,Math.min(1,y/d));let D=0;S===0?D=.5/r:S===g&&(D=-.5/r);for(let E=0;E<=r;E++){const v=E/r,P=v*Math.PI*2,U=Math.sin(P),z=Math.cos(P);p.x=-A*z,p.y=_,p.z=A*U,a.push(p.x,p.y,p.z),m.set(-A*z,b,A*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(v+D,C)}if(S>0){const E=(S-1)*M;for(let v=0;v<r;v++){const P=E+v,U=E+v+1,z=S*M+v,J=S*M+v+1;o.push(P,U,z),o.push(U,J,z)}}}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Bs extends De{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new R,h=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ot extends De{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const M=[],m=n/2;let p=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function S(){const _=new R,A=new R;let b=0;const C=(e-t)/n;for(let D=0;D<=s;D++){const E=[],v=D/s,P=v*(e-t)+t;for(let U=0;U<=r;U++){const z=U/r,J=z*l+a,G=Math.sin(J),Z=Math.cos(J);A.x=P*G,A.y=-v*n+m,A.z=P*Z,u.push(A.x,A.y,A.z),_.set(G,C,Z).normalize(),f.push(_.x,_.y,_.z),d.push(z,1-v),E.push(g++)}M.push(E)}for(let D=0;D<r;D++)for(let E=0;E<s;E++){const v=M[E][D],P=M[E+1][D],U=M[E+1][D+1],z=M[E][D+1];(t>0||E!==0)&&(h.push(v,P,z),b+=3),(e>0||E!==s-1)&&(h.push(P,U,z),b+=3)}c.addGroup(p,b,0),p+=b}function y(_){const A=g,b=new at,C=new R;let D=0;const E=_===!0?t:e,v=_===!0?1:-1;for(let U=1;U<=r;U++)u.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),g++;const P=g;for(let U=0;U<=r;U++){const J=U/r*l+a,G=Math.cos(J),Z=Math.sin(J);C.x=E*Z,C.y=m*v,C.z=E*G,u.push(C.x,C.y,C.z),f.push(0,v,0),b.x=G*.5+.5,b.y=Z*.5*v+.5,d.push(b.x,b.y),g++}for(let U=0;U<r;U++){const z=A+U,J=P+U;_===!0?h.push(J,J+1,z):h.push(J+1,J,z),D+=3}c.addGroup(p,D,_===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ot(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zn extends Ot{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new zn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ua extends De{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),c(n),h(),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(s.slice(),3)),this.setAttribute("uv",new se(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new R,_=new R,A=new R;for(let b=0;b<e.length;b+=3)d(e[b+0],y),d(e[b+1],_),d(e[b+2],A),l(y,_,A,S)}function l(S,y,_,A){const b=A+1,C=[];for(let D=0;D<=b;D++){C[D]=[];const E=S.clone().lerp(_,D/b),v=y.clone().lerp(_,D/b),P=b-D;for(let U=0;U<=P;U++)U===0&&D===b?C[D][U]=E:C[D][U]=E.clone().lerp(v,U/P)}for(let D=0;D<b;D++)for(let E=0;E<2*(b-D)-1;E++){const v=Math.floor(E/2);E%2===0?(f(C[D][v+1]),f(C[D+1][v]),f(C[D][v])):(f(C[D][v+1]),f(C[D+1][v+1]),f(C[D+1][v]))}}function c(S){const y=new R;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(S),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function h(){const S=new R;for(let y=0;y<s.length;y+=3){S.x=s[y+0],S.y=s[y+1],S.z=s[y+2];const _=m(S)/2/Math.PI+.5,A=p(S)/Math.PI+.5;o.push(_,1-A)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){const y=o[S+0],_=o[S+2],A=o[S+4],b=Math.max(y,_,A),C=Math.min(y,_,A);b>.9&&C<.1&&(y<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),A<.2&&(o[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function d(S,y){const _=S*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){const S=new R,y=new R,_=new R,A=new R,b=new at,C=new at,D=new at;for(let E=0,v=0;E<s.length;E+=9,v+=6){S.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),_.set(s[E+6],s[E+7],s[E+8]),b.set(o[v+0],o[v+1]),C.set(o[v+2],o[v+3]),D.set(o[v+4],o[v+5]),A.copy(S).add(y).add(_).divideScalar(3);const P=m(A);M(b,v+0,S,P),M(C,v+2,y,P),M(D,v+4,_,P)}}function M(S,y,_,A){A<0&&S.x===1&&(o[y]=S.x-1),_.x===0&&_.z===0&&(o[y]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.vertices,t.indices,t.radius,t.details)}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],f=n[r+1]-h,d=(o-h)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new at:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,r=[],s=[],o=[],a=new R,l=new Me;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ee(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(ee(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Na extends Rn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ju extends Na{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fa(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const ds=new R,_o=new Fa,xo=new Fa,vo=new Fa;class sr extends Rn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new R){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(ds.subVectors(r[0],r[1]).add(r[0]),c=ds);const u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(ds.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ds),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),M=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),_o.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,M,m),xo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,M,m),vo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(_o.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),xo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),vo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(_o.calc(l),xo.calc(l),vo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new R().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wc(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function Ku(i,t){const e=1-i;return e*e*t}function ju(i,t){return 2*(1-i)*i*t}function Qu(i,t){return i*i*t}function Tr(i,t,e,n){return Ku(i,t)+ju(i,e)+Qu(i,n)}function tf(i,t){const e=1-i;return e*e*e*t}function ef(i,t){const e=1-i;return 3*e*e*i*t}function nf(i,t){return 3*(1-i)*i*i*t}function rf(i,t){return i*i*i*t}function br(i,t,e,n,r){return tf(i,t)+ef(i,e)+nf(i,n)+rf(i,r)}class zl extends Rn{constructor(t=new at,e=new at,n=new at,r=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new at){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(br(t,r.x,s.x,o.x,a.x),br(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sf extends Rn{constructor(t=new R,e=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new R){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(br(t,r.x,s.x,o.x,a.x),br(t,r.y,s.y,o.y,a.y),br(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kl extends Rn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class of extends Rn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hl extends Rn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Tr(t,r.x,s.x,o.x),Tr(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vl extends Rn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Tr(t,r.x,s.x,o.x),Tr(t,r.y,s.y,o.y),Tr(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gl extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(wc(a,l.x,c.x,h.x,u.x),wc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new at().fromArray(r))}return this}}var Ds=Object.freeze({__proto__:null,ArcCurve:Ju,CatmullRomCurve3:sr,CubicBezierCurve:zl,CubicBezierCurve3:sf,EllipseCurve:Na,LineCurve:kl,LineCurve3:of,QuadraticBezierCurve:Hl,QuadraticBezierCurve3:Vl,SplineCurve:Gl});class af extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ds[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Ds[r.type]().fromJSON(r))}return this}}class Tc extends af{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new kl(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Hl(this.currentPoint.clone(),new at(t,e),new at(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new zl(this.currentPoint.clone(),new at(t,e),new at(n,r),new at(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Gl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const c=new Na(t,e,n,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Wl extends Tc{constructor(t){super(t),this.uuid=wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Tc().fromJSON(r))}return this}}function cf(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Xl(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=df(i,t,s,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<r;f+=e){const d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ir(s,o,e,a,l,c,0),o}function Xl(i,t,e,n,r){let s;if(r===wf(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=bc(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=bc(o/n|0,i[o],i[o+1],s);return s&&or(s,s.next)&&(Nr(s),s=s.next),s}function Ei(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(or(e,e.next)||Te(e.prev,e,e.next)===0)){if(Nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ir(i,t,e,n,r,s,o){if(!i)return;!o&&s&&xf(i,n,r,s);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?hf(i,n,r,s):lf(i)){t.push(l.i,i.i,c.i),Nr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=uf(Ei(i),t),Ir(i,t,e,n,r,s,2)):o===2&&ff(i,t,e,n,r,s):Ir(Ei(i),t,e,n,r,s,1);break}}}function lf(i){const t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Mr(r,a,s,l,o,c,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hf(i,t,e,n){const r=i.prev,s=i,o=i.next;if(Te(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),M=Math.max(a,l,c),m=Math.max(h,u,f),p=Ma(d,g,t,e,n),S=Ma(M,m,t,e,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=S;){if(y.x>=d&&y.x<=M&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Mr(a,h,l,u,c,f,y.x,y.y)&&Te(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=M&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Mr(a,h,l,u,c,f,_.x,_.y)&&Te(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=M&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Mr(a,h,l,u,c,f,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=S;){if(_.x>=d&&_.x<=M&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Mr(a,h,l,u,c,f,_.x,_.y)&&Te(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function uf(i,t){let e=i;do{const n=e.prev,r=e.next.next;!or(n,r)&&Yl(n,e,e.next,r)&&Ur(n,r)&&Ur(r,n)&&(t.push(n.i,e.i,r.i),Nr(e),Nr(e.next),e=i=r),e=e.next}while(e!==i);return Ei(e)}function ff(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&yf(o,a)){let l=$l(o,a);o=Ei(o,o.next),l=Ei(l,l.next),Ir(o,t,e,n,r,s,0),Ir(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function df(i,t,e,n){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Xl(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Mf(c))}r.sort(pf);for(let s=0;s<r.length;s++)e=mf(r[s],e);return e}function pf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function mf(i,t){const e=gf(i,t);if(!e)return t;const n=$l(e,i);return Ei(n,n.next),Ei(e,e.next)}function gf(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,o;if(or(i,e))return e;do{if(or(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ql(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){const u=Math.abs(r-e.y)/(n-e.x);Ur(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&_f(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function _f(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function xf(i,t,e,n){let r=i;do r.z===0&&(r.z=Ma(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,vf(r)}function vf(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Ma(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Mf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ql(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Mr(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&ql(i,t,e,n,r,s,o,a)}function yf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Sf(i,t)&&(Ur(i,t)&&Ur(t,i)&&Ef(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||or(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function or(i,t){return i.x===t.x&&i.y===t.y}function Yl(i,t,e,n){const r=ms(Te(i,t,e)),s=ms(Te(i,t,n)),o=ms(Te(e,n,i)),a=ms(Te(e,n,t));return!!(r!==s&&o!==a||r===0&&ps(i,e,t)||s===0&&ps(i,n,t)||o===0&&ps(e,i,n)||a===0&&ps(e,t,n))}function ps(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ms(i){return i>0?1:i<0?-1:0}function Sf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Yl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ur(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function Ef(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function $l(i,t){const e=ya(i.i,i.x,i.y),n=ya(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function bc(i,t,e,n){const r=ya(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ya(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wf(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Tf{static triangulate(t,e,n=2){return cf(t,e,n)}}class $i{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return $i.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Ac(t),Rc(n,t);let o=t.length;e.forEach(Ac);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Rc(n,e[l]);const a=Tf.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Ac(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Rc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Oa extends De{constructor(t=new Wl([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new se(r,3)),this.setAttribute("uv",new se(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:bf;let y,_=!1,A,b,C,D;p&&(y=p.getSpacedPoints(h),_=!0,f=!1,A=p.computeFrenetFrames(h,!1),b=new R,C=new R,D=new R),f||(m=0,d=0,g=0,M=0);const E=a.extractPoints(c);let v=E.shape;const P=E.holes;if(!$i.isClockWise(v)){v=v.reverse();for(let it=0,Q=P.length;it<Q;it++){const j=P[it];$i.isClockWise(j)&&(P[it]=j.reverse())}}function z(it){const j=10000000000000001e-36;let N=it[0];for(let $=1;$<=it.length;$++){const q=$%it.length,nt=it[q],Rt=nt.x-N.x,Bt=nt.y-N.y,T=Rt*Rt+Bt*Bt,x=Math.max(Math.abs(nt.x),Math.abs(nt.y),Math.abs(N.x),Math.abs(N.y)),B=j*x*x;if(T<=B){it.splice(q,1),$--;continue}N=nt}}z(v),P.forEach(z);const J=P.length,G=v;for(let it=0;it<J;it++){const Q=P[it];v=v.concat(Q)}function Z(it,Q,j){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(Q,j)}const tt=v.length;function W(it,Q,j){let N,$,q;const nt=it.x-Q.x,Rt=it.y-Q.y,Bt=j.x-it.x,T=j.y-it.y,x=nt*nt+Rt*Rt,B=nt*T-Rt*Bt;if(Math.abs(B)>Number.EPSILON){const X=Math.sqrt(x),st=Math.sqrt(Bt*Bt+T*T),Y=Q.x-Rt/X,It=Q.y+nt/X,ft=j.x-T/st,Pt=j.y+Bt/st,Lt=((ft-Y)*T-(Pt-It)*Bt)/(nt*T-Rt*Bt);N=Y+nt*Lt-it.x,$=It+Rt*Lt-it.y;const ct=N*N+$*$;if(ct<=2)return new at(N,$);q=Math.sqrt(ct/2)}else{let X=!1;nt>Number.EPSILON?Bt>Number.EPSILON&&(X=!0):nt<-Number.EPSILON?Bt<-Number.EPSILON&&(X=!0):Math.sign(Rt)===Math.sign(T)&&(X=!0),X?(N=-Rt,$=nt,q=Math.sqrt(x)):(N=nt,$=Rt,q=Math.sqrt(x/2))}return new at(N/q,$/q)}const dt=[];for(let it=0,Q=G.length,j=Q-1,N=it+1;it<Q;it++,j++,N++)j===Q&&(j=0),N===Q&&(N=0),dt[it]=W(G[it],G[j],G[N]);const _t=[];let wt,qt=dt.concat();for(let it=0,Q=J;it<Q;it++){const j=P[it];wt=[];for(let N=0,$=j.length,q=$-1,nt=N+1;N<$;N++,q++,nt++)q===$&&(q=0),nt===$&&(nt=0),wt[N]=W(j[N],j[q],j[nt]);_t.push(wt),qt=qt.concat(wt)}let ie;if(m===0)ie=$i.triangulateShape(G,P);else{const it=[],Q=[];for(let j=0;j<m;j++){const N=j/m,$=d*Math.cos(N*Math.PI/2),q=g*Math.sin(N*Math.PI/2)+M;for(let nt=0,Rt=G.length;nt<Rt;nt++){const Bt=Z(G[nt],dt[nt],q);Ut(Bt.x,Bt.y,-$),N===0&&it.push(Bt)}for(let nt=0,Rt=J;nt<Rt;nt++){const Bt=P[nt];wt=_t[nt];const T=[];for(let x=0,B=Bt.length;x<B;x++){const X=Z(Bt[x],wt[x],q);Ut(X.x,X.y,-$),N===0&&T.push(X)}N===0&&Q.push(T)}}ie=$i.triangulateShape(it,Q)}const he=ie.length,oe=g+M;for(let it=0;it<tt;it++){const Q=f?Z(v[it],qt[it],oe):v[it];_?(C.copy(A.normals[0]).multiplyScalar(Q.x),b.copy(A.binormals[0]).multiplyScalar(Q.y),D.copy(y[0]).add(C).add(b),Ut(D.x,D.y,D.z)):Ut(Q.x,Q.y,0)}for(let it=1;it<=h;it++)for(let Q=0;Q<tt;Q++){const j=f?Z(v[Q],qt[Q],oe):v[Q];_?(C.copy(A.normals[it]).multiplyScalar(j.x),b.copy(A.binormals[it]).multiplyScalar(j.y),D.copy(y[it]).add(C).add(b),Ut(D.x,D.y,D.z)):Ut(j.x,j.y,u/h*it)}for(let it=m-1;it>=0;it--){const Q=it/m,j=d*Math.cos(Q*Math.PI/2),N=g*Math.sin(Q*Math.PI/2)+M;for(let $=0,q=G.length;$<q;$++){const nt=Z(G[$],dt[$],N);Ut(nt.x,nt.y,u+j)}for(let $=0,q=P.length;$<q;$++){const nt=P[$];wt=_t[$];for(let Rt=0,Bt=nt.length;Rt<Bt;Rt++){const T=Z(nt[Rt],wt[Rt],N);_?Ut(T.x,T.y+y[h-1].y,y[h-1].x+j):Ut(T.x,T.y,u+j)}}}K(),rt();function K(){const it=r.length/3;if(f){let Q=0,j=tt*Q;for(let N=0;N<he;N++){const $=ie[N];Tt($[2]+j,$[1]+j,$[0]+j)}Q=h+m*2,j=tt*Q;for(let N=0;N<he;N++){const $=ie[N];Tt($[0]+j,$[1]+j,$[2]+j)}}else{for(let Q=0;Q<he;Q++){const j=ie[Q];Tt(j[2],j[1],j[0])}for(let Q=0;Q<he;Q++){const j=ie[Q];Tt(j[0]+tt*h,j[1]+tt*h,j[2]+tt*h)}}n.addGroup(it,r.length/3-it,0)}function rt(){const it=r.length/3;let Q=0;St(G,Q),Q+=G.length;for(let j=0,N=P.length;j<N;j++){const $=P[j];St($,Q),Q+=$.length}n.addGroup(it,r.length/3-it,1)}function St(it,Q){let j=it.length;for(;--j>=0;){const N=j;let $=j-1;$<0&&($=it.length-1);for(let q=0,nt=h+m*2;q<nt;q++){const Rt=tt*q,Bt=tt*(q+1),T=Q+N+Rt,x=Q+$+Rt,B=Q+$+Bt,X=Q+N+Bt;Jt(T,x,B,X)}}}function Ut(it,Q,j){l.push(it),l.push(Q),l.push(j)}function Tt(it,Q,j){fe(it),fe(Q),fe(j);const N=r.length/3,$=S.generateTopUV(n,r,N-3,N-2,N-1);L($[0]),L($[1]),L($[2])}function Jt(it,Q,j,N){fe(it),fe(Q),fe(N),fe(Q),fe(j),fe(N);const $=r.length/3,q=S.generateSideWallUV(n,r,$-6,$-3,$-2,$-1);L(q[0]),L(q[1]),L(q[3]),L(q[1]),L(q[2]),L(q[3])}function fe(it){r.push(l[it*3+0]),r.push(l[it*3+1]),r.push(l[it*3+2])}function L(it){s.push(it.x),s.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Af(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Ds[r.type]().fromJSON(r)),new Oa(n,t.options)}}const bf={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new at(s,o),new at(a,l),new at(c,h)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[r*3],d=t[r*3+1],g=t[r*3+2],M=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new at(o,1-l),new at(c,1-u),new at(f,1-g),new at(M,1-p)]:[new at(a,1-l),new at(h,1-u),new at(d,1-g),new at(m,1-p)]}};function Af(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ba extends De{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=ee(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/e,u=new R,f=new at,d=new R,g=new R,M=new R;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,M.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),l.push(d.x,d.y,d.z),M.copy(g)}for(let S=0;S<=e;S++){const y=n+S*h*r,_=Math.sin(y),A=Math.cos(y);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*_,u.y=t[b].y,u.z=t[b].x*A,o.push(u.x,u.y,u.z),f.x=S/e,f.y=b/(t.length-1),a.push(f.x,f.y);const C=l[3*b+0]*_,D=l[3*b+1],E=l[3*b+0]*A;c.push(C,D,E)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){const _=y+S*t.length,A=_,b=_+t.length,C=_+t.length+1,D=_+1;s.push(A,b,D),s.push(C,D,b)}this.setIndex(s),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.points,t.segments,t.phiStart,t.phiLength)}}class Re extends De{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],M=[],m=[];for(let p=0;p<h;p++){const S=p*f-o;for(let y=0;y<c;y++){const _=y*u-s;g.push(_,-S,0),M.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const y=S+c*p,_=S+c*(p+1),A=S+1+c*(p+1),b=S+1+c*p;d.push(y,_,b),d.push(_,A,b)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(M,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.width,t.height,t.widthSegments,t.heightSegments)}}class Is extends De{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/r,d=new R,g=new at;for(let M=0;M<=r;M++){for(let m=0;m<=n;m++){const p=s+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let M=0;M<r;M++){const m=M*(n+1);for(let p=0;p<n;p++){const S=p+m,y=S,_=S+n+1,A=S+n+2,b=S+1;a.push(y,_,b),a.push(_,A,b)}}this.setIndex(a),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ii extends De{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new R,f=new R,d=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){const S=[],y=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const b=A/e;u.x=-t*Math.cos(r+b*s)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(r+b*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),m.push(b+_,1-y),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const y=h[p][S+1],_=h[p][S],A=h[p+1][S],b=h[p+1][S+1];(p!==0||o>0)&&d.push(y,_,b),(p!==n-1||l<Math.PI)&&d.push(_,A,b)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(M,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class za extends Ua{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new za(t.radius,t.detail)}}class _n extends De{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){const M=g/r*s,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(M),u.y=(t+e*Math.cos(m))*Math.sin(M),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){const M=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,S=(r+1)*d+g;o.push(M,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class wi extends De{constructor(t=new Vl(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new at;let h=new R;const u=[],f=[],d=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function M(){for(let y=0;y<e;y++)m(y);m(s===!1?e:0),S(),p()}function m(y){h=t.getPointAt(y/e,h);const _=o.normals[y],A=o.binormals[y];for(let b=0;b<=r;b++){const C=b/r*Math.PI*2,D=Math.sin(C),E=-Math.cos(C);l.x=E*_.x+D*A.x,l.y=E*_.y+D*A.y,l.z=E*_.z+D*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let _=1;_<=r;_++){const A=(r+1)*(y-1)+(_-1),b=(r+1)*y+(_-1),C=(r+1)*y+_,D=(r+1)*(y-1)+_;g.push(A,b,D),g.push(b,C,D)}}function S(){for(let y=0;y<=e;y++)for(let _=0;_<=r;_++)c.x=y/e,c.y=_/r,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new wi(new Ds[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class yt extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bs extends yt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Rf extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cf extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zs extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Pf extends zs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Mo=new Me,Cc=new R,Pc=new R;class Zl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cc),Pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pc),e.updateMatrixWorld(),Mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lc=new Me,xr=new R,yo=new R;class Lf extends Zl{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),xr.setFromMatrixPosition(t.matrixWorld),n.position.copy(xr),yo.copy(n.position),yo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(yo),n.updateMatrixWorld(),r.makeTranslation(-xr.x,-xr.y,-xr.z),Lc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc,n.coordinateSystem,n.reversedDepth)}}class So extends zs{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Lf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Jl extends Il{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Df extends Zl{constructor(){super(new Jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eo extends zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Df}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class If extends zs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Uf extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Nf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Dc(i,t,e,n){const r=Ff(n);switch(e){case vl:return i*t;case yl:return i*t/r.components*r.byteLength;case Aa:return i*t/r.components*r.byteLength;case Sl:return i*t*2/r.components*r.byteLength;case Ra:return i*t*2/r.components*r.byteLength;case Ml:return i*t*3/r.components*r.byteLength;case mn:return i*t*4/r.components*r.byteLength;case Ca:return i*t*4/r.components*r.byteLength;case Ss:case Es:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ws:case Ts:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:case Yo:return Math.max(i,16)*Math.max(t,8)/4;case Wo:case qo:return Math.max(i,8)*Math.max(t,8)/2;case $o:case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case aa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case la:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ua:case fa:case da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case pa:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ga:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ff(i){switch(i){case bn:case ml:return{byteLength:1,components:1};case Ar:case gl:case Or:return{byteLength:2,components:1};case Ta:case ba:return{byteLength:2,components:4};case yi:case wa:case On:return{byteLength:4,components:1};case _l:case xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ea);function Kl(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Of(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],M=u[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,u[f]=M)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const M=u[d];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ad=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",md=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Td=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Od=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,np=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,op=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,m0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Bf,alphahash_pars_fragment:zf,alphamap_fragment:kf,alphamap_pars_fragment:Hf,alphatest_fragment:Vf,alphatest_pars_fragment:Gf,aomap_fragment:Wf,aomap_pars_fragment:Xf,batching_pars_vertex:qf,batching_vertex:Yf,begin_vertex:$f,beginnormal_vertex:Zf,bsdfs:Jf,iridescence_fragment:Kf,bumpmap_pars_fragment:jf,clipping_planes_fragment:Qf,clipping_planes_pars_fragment:td,clipping_planes_pars_vertex:ed,clipping_planes_vertex:nd,color_fragment:id,color_pars_fragment:rd,color_pars_vertex:sd,color_vertex:od,common:ad,cube_uv_reflection_fragment:cd,defaultnormal_vertex:ld,displacementmap_pars_vertex:hd,displacementmap_vertex:ud,emissivemap_fragment:fd,emissivemap_pars_fragment:dd,colorspace_fragment:pd,colorspace_pars_fragment:md,envmap_fragment:gd,envmap_common_pars_fragment:_d,envmap_pars_fragment:xd,envmap_pars_vertex:vd,envmap_physical_pars_fragment:Pd,envmap_vertex:Md,fog_vertex:yd,fog_pars_vertex:Sd,fog_fragment:Ed,fog_pars_fragment:wd,gradientmap_pars_fragment:Td,lightmap_pars_fragment:bd,lights_lambert_fragment:Ad,lights_lambert_pars_fragment:Rd,lights_pars_begin:Cd,lights_toon_fragment:Ld,lights_toon_pars_fragment:Dd,lights_phong_fragment:Id,lights_phong_pars_fragment:Ud,lights_physical_fragment:Nd,lights_physical_pars_fragment:Fd,lights_fragment_begin:Od,lights_fragment_maps:Bd,lights_fragment_end:zd,logdepthbuf_fragment:kd,logdepthbuf_pars_fragment:Hd,logdepthbuf_pars_vertex:Vd,logdepthbuf_vertex:Gd,map_fragment:Wd,map_pars_fragment:Xd,map_particle_fragment:qd,map_particle_pars_fragment:Yd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:Zd,morphinstance_vertex:Jd,morphcolor_vertex:Kd,morphnormal_vertex:jd,morphtarget_pars_vertex:Qd,morphtarget_vertex:tp,normal_fragment_begin:ep,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:rp,normal_vertex:sp,normalmap_pars_fragment:op,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:cp,clearcoat_pars_fragment:lp,iridescence_pars_fragment:hp,opaque_fragment:up,packing:fp,premultiplied_alpha_fragment:dp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:xp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:Mp,shadowmap_vertex:yp,shadowmask_pars_fragment:Sp,skinbase_vertex:Ep,skinning_pars_vertex:wp,skinning_vertex:Tp,skinnormal_vertex:bp,specularmap_fragment:Ap,specularmap_pars_fragment:Rp,tonemapping_fragment:Cp,tonemapping_pars_fragment:Pp,transmission_fragment:Lp,transmission_pars_fragment:Dp,uv_pars_fragment:Ip,uv_pars_vertex:Up,uv_vertex:Np,worldpos_vertex:Fp,background_vert:Op,background_frag:Bp,backgroundCube_vert:zp,backgroundCube_frag:kp,cube_vert:Hp,cube_frag:Vp,depth_vert:Gp,depth_frag:Wp,distanceRGBA_vert:Xp,distanceRGBA_frag:qp,equirect_vert:Yp,equirect_frag:$p,linedashed_vert:Zp,linedashed_frag:Jp,meshbasic_vert:Kp,meshbasic_frag:jp,meshlambert_vert:Qp,meshlambert_frag:t0,meshmatcap_vert:e0,meshmatcap_frag:n0,meshnormal_vert:i0,meshnormal_frag:r0,meshphong_vert:s0,meshphong_frag:o0,meshphysical_vert:a0,meshphysical_frag:c0,meshtoon_vert:l0,meshtoon_frag:h0,points_vert:u0,points_frag:f0,shadow_vert:d0,shadow_frag:p0,sprite_vert:m0,sprite_frag:g0},mt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Mn={basic:{uniforms:We([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:We([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:We([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:We([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:We([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:We([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:We([mt.points,mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:We([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:We([mt.common,mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:We([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:We([mt.sprite,mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:We([mt.common,mt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:We([mt.lights,mt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Mn.physical={uniforms:We([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const gs={r:0,b:0,g:0},hi=new An,_0=new Me;function x0(i,t,e,n,r,s,o){const a=new Zt(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function M(y){let _=!1;const A=g(y);A===null?p(a,l):A&&A.isColor&&(p(A,1),_=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===Fs)?(h===void 0&&(h=new nn(new ne(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:rr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),hi.copy(_.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(hi)),h.material.toneMapped=le.getTransfer(A.colorSpace)!==me,(u!==A||f!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new nn(new Re(2,2),new ei({name:"BackgroundMaterial",uniforms:rr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=le.getTransfer(A.colorSpace)!==me,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(gs,Dl(i)),n.buffers.color.setClear(gs.r,gs.g,gs.b,_,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:M,addToRenderList:m,dispose:S}}function v0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(v,P,U,z,J){let G=!1;const Z=u(z,U,P);s!==Z&&(s=Z,c(s.object)),G=d(v,z,U,J),G&&g(v,z,U,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(v,P,U,z),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,P,U){const z=U.wireframe===!0;let J=n[v.id];J===void 0&&(J={},n[v.id]=J);let G=J[P.id];G===void 0&&(G={},J[P.id]=G);let Z=G[z];return Z===void 0&&(Z=f(l()),G[z]=Z),Z}function f(v){const P=[],U=[],z=[];for(let J=0;J<e;J++)P[J]=0,U[J]=0,z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:z,object:v,attributes:{},index:null}}function d(v,P,U,z){const J=s.attributes,G=P.attributes;let Z=0;const tt=U.getAttributes();for(const W in tt)if(tt[W].location>=0){const _t=J[W];let wt=G[W];if(wt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(wt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(wt=v.instanceColor)),_t===void 0||_t.attribute!==wt||wt&&_t.data!==wt.data)return!0;Z++}return s.attributesNum!==Z||s.index!==z}function g(v,P,U,z){const J={},G=P.attributes;let Z=0;const tt=U.getAttributes();for(const W in tt)if(tt[W].location>=0){let _t=G[W];_t===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(_t=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(_t=v.instanceColor));const wt={};wt.attribute=_t,_t&&_t.data&&(wt.data=_t.data),J[W]=wt,Z++}s.attributes=J,s.attributesNum=Z,s.index=z}function M(){const v=s.newAttributes;for(let P=0,U=v.length;P<U;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){const U=s.newAttributes,z=s.enabledAttributes,J=s.attributeDivisors;U[v]=1,z[v]===0&&(i.enableVertexAttribArray(v),z[v]=1),J[v]!==P&&(i.vertexAttribDivisor(v,P),J[v]=P)}function S(){const v=s.newAttributes,P=s.enabledAttributes;for(let U=0,z=P.length;U<z;U++)P[U]!==v[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function y(v,P,U,z,J,G,Z){Z===!0?i.vertexAttribIPointer(v,P,U,J,G):i.vertexAttribPointer(v,P,U,z,J,G)}function _(v,P,U,z){M();const J=z.attributes,G=U.getAttributes(),Z=P.defaultAttributeValues;for(const tt in G){const W=G[tt];if(W.location>=0){let dt=J[tt];if(dt===void 0&&(tt==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),tt==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor)),dt!==void 0){const _t=dt.normalized,wt=dt.itemSize,qt=t.get(dt);if(qt===void 0)continue;const ie=qt.buffer,he=qt.type,oe=qt.bytesPerElement,K=he===i.INT||he===i.UNSIGNED_INT||dt.gpuType===wa;if(dt.isInterleavedBufferAttribute){const rt=dt.data,St=rt.stride,Ut=dt.offset;if(rt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<W.locationSize;Tt++)p(W.location+Tt,rt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Tt=0;Tt<W.locationSize;Tt++)m(W.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let Tt=0;Tt<W.locationSize;Tt++)y(W.location+Tt,wt/W.locationSize,he,_t,St*oe,(Ut+wt/W.locationSize*Tt)*oe,K)}else{if(dt.isInstancedBufferAttribute){for(let rt=0;rt<W.locationSize;rt++)p(W.location+rt,dt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let rt=0;rt<W.locationSize;rt++)m(W.location+rt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let rt=0;rt<W.locationSize;rt++)y(W.location+rt,wt/W.locationSize,he,_t,wt*oe,wt/W.locationSize*rt*oe,K)}}else if(Z!==void 0){const _t=Z[tt];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(W.location,_t);break;case 3:i.vertexAttrib3fv(W.location,_t);break;case 4:i.vertexAttrib4fv(W.location,_t);break;default:i.vertexAttrib1fv(W.location,_t)}}}}S()}function A(){D();for(const v in n){const P=n[v];for(const U in P){const z=P[U];for(const J in z)h(z[J].object),delete z[J];delete P[U]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const U in P){const z=P[U];for(const J in z)h(z[J].object),delete z[J];delete P[U]}delete n[v.id]}function C(v){for(const P in n){const U=n[P];if(U[v.id]===void 0)continue;const z=U[v.id];for(const J in z)h(z[J].object),delete z[J];delete U[v.id]}}function D(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function M0(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let M=0;M<u;M++)g+=h[M]*f[M];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function y0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===Or&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==bn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==On&&!D)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:A,maxSamples:b}}function S0(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new di,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const S=s?0:n,y=S*4;let _=p.clippingState||null;l.value=_,_=h(g,f,y,d);for(let A=0;A!==y;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const p=d+M*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==M;++y,_+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function E0(i){let t=new WeakMap;function e(o,a){return a===Ho?o.mapping=tr:a===Vo&&(o.mapping=er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ho||a===Vo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vu(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Zi=4,Ic=[.125,.215,.35,.446,.526,.582],gi=20,wo=new Jl,Uc=new Zt;let To=null,bo=0,Ao=0,Ro=!1;const pi=(1+Math.sqrt(5))/2,Xi=1/pi,Nc=[new R(-pi,Xi,0),new R(pi,Xi,0),new R(-Xi,0,pi),new R(Xi,0,pi),new R(0,pi,-Xi),new R(0,pi,Xi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],w0=new R;class Fc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=w0}=s;To=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(To,bo,Ao),this._renderer.xr.enabled=Ro,t.scissorTest=!1,_s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),To=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Or,format:mn,colorSpace:ir,depthBuffer:!1},r=Oc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T0(s)),this._blurMaterial=b0(s,t,e)}return r}_compileMaterial(t){const e=new nn(this._lodPlanes[0],t);this._renderer.compile(e,wo)}_sceneToCubeUV(t,e,n,r,s){const l=new tn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Uc),u.toneMapping=Qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const M=new Ce({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),m=new nn(new ne,M);let p=!1;const S=t.background;S?S.isColor&&(M.color.copy(S),t.background=null,p=!0):(M.color.copy(Uc),p=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const A=this._cubeSize;_s(r,_*A,y>2?A:0,A,A),u.setRenderTarget(r),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===tr||t.mapping===er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;_s(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,wo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nc[(r-s-1)%Nc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new nn(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*gi-1),M=s/g,m=isFinite(s)?1+Math.floor(h*M):gi;m>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const p=[];let S=0;for(let C=0;C<gi;++C){const D=C/M,E=Math.exp(-D*D/2);p.push(E),C===0?S+=E:C<m&&(S+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const _=this._sizeLods[r],A=3*_*(r>y-Zi?r-y+Zi:0),b=4*(this._cubeSize-_);_s(e,A,b,3*_,2*_),l.setRenderTarget(e),l.render(u,wo)}}function T0(i){const t=[],e=[],n=[];let r=i;const s=i-Zi+1+Ic.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Zi?l=Ic[o-i+Zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,M=3,m=2,p=1,S=new Float32Array(M*g*d),y=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let b=0;b<d;b++){const C=b%3*2/3-1,D=b>2?0:-1,E=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];S.set(E,M*g*b),y.set(f,m*g*b);const v=[b,b,b,b,b,b];_.set(v,p*g*b)}const A=new De;A.setAttribute("position",new cn(S,M)),A.setAttribute("uv",new cn(y,m)),A.setAttribute("faceIndex",new cn(_,p)),t.push(A),r>Zi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Oc(i,t,e){const n=new Si(i,t,e);return n.texture.mapping=Fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _s(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function b0(i,t,e){const n=new Float32Array(gi),r=new R(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Bc(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function zc(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function ka(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ho||l===Vo,h=l===tr||l===er;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Fc(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&r(d)?(e===null&&(e=new Fc(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function R0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Dr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function C0(i,t,e,n){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let M=0;if(d!==null){const S=d.array;M=d.version;for(let y=0,_=S.length;y<_;y+=3){const A=S[y+0],b=S[y+1],C=S[y+2];f.push(A,b,b,C,C,A)}}else if(g!==void 0){const S=g.array;M=g.version;for(let y=0,_=S.length/3-1;y<_;y+=3){const A=y+0,b=y+1,C=y+2;f.push(A,b,b,C,C,A)}}else return;const m=new(Tl(f)?Ll:Pl)(f,1);m.version=M;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function P0(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,M){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,M,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*M[S];e.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function L0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function D0(i,t,e){const n=new WeakMap,r=new ge;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let v=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),M===!0&&(_=2),m===!0&&(_=3);let A=a.attributes.position.count*_,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const C=new Float32Array(A*b*4*u),D=new bl(C,A,b,u);D.type=On,D.needsUpdate=!0;const E=_*4;for(let P=0;P<u;P++){const U=p[P],z=S[P],J=y[P],G=A*b*4*P;for(let Z=0;Z<U.count;Z++){const tt=Z*E;g===!0&&(r.fromBufferAttribute(U,Z),C[G+tt+0]=r.x,C[G+tt+1]=r.y,C[G+tt+2]=r.z,C[G+tt+3]=0),M===!0&&(r.fromBufferAttribute(z,Z),C[G+tt+4]=r.x,C[G+tt+5]=r.y,C[G+tt+6]=r.z,C[G+tt+7]=0),m===!0&&(r.fromBufferAttribute(J,Z),C[G+tt+8]=r.x,C[G+tt+9]=r.y,C[G+tt+10]=r.z,C[G+tt+11]=J.itemSize===4?r.w:1)}}f={count:u,texture:D,size:new at(A,b)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const M=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function I0(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const jl=new Xe,kc=new Ol(1,1),Ql=new bl,th=new Tu,eh=new Ul,Hc=[],Vc=[],Gc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function cr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Hc[r];if(s===void 0&&(s=new Float32Array(r),Hc[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ks(i,t){let e=Vc[t];e===void 0&&(e=new Int32Array(t),Vc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function U0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function B0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Xc.set(n),i.uniformMatrix2fv(this.addr,!1,Xc),Oe(e,n)}}function z0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Wc.set(n),i.uniformMatrix3fv(this.addr,!1,Wc),Oe(e,n)}}function k0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Gc.set(n),i.uniformMatrix4fv(this.addr,!1,Gc),Oe(e,n)}}function H0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function V0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function X0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function Y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function $0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Z0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=wl,s=kc):s=jl,e.setTexture2D(t||s,r)}function J0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||th,r)}function K0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||eh,r)}function j0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Ql,r)}function Q0(i){switch(i){case 5126:return U0;case 35664:return N0;case 35665:return F0;case 35666:return O0;case 35674:return B0;case 35675:return z0;case 35676:return k0;case 5124:case 35670:return H0;case 35667:case 35671:return V0;case 35668:case 35672:return G0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return q0;case 36295:return Y0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return j0}}function tm(i,t){i.uniform1fv(this.addr,t)}function em(i,t){const e=cr(t,this.size,2);i.uniform2fv(this.addr,e)}function nm(i,t){const e=cr(t,this.size,3);i.uniform3fv(this.addr,e)}function im(i,t){const e=cr(t,this.size,4);i.uniform4fv(this.addr,e)}function rm(i,t){const e=cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sm(i,t){const e=cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function om(i,t){const e=cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function am(i,t){i.uniform1iv(this.addr,t)}function cm(i,t){i.uniform2iv(this.addr,t)}function lm(i,t){i.uniform3iv(this.addr,t)}function hm(i,t){i.uniform4iv(this.addr,t)}function um(i,t){i.uniform1uiv(this.addr,t)}function fm(i,t){i.uniform2uiv(this.addr,t)}function dm(i,t){i.uniform3uiv(this.addr,t)}function pm(i,t){i.uniform4uiv(this.addr,t)}function mm(i,t,e){const n=this.cache,r=t.length,s=ks(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||jl,s[o])}function gm(i,t,e){const n=this.cache,r=t.length,s=ks(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||th,s[o])}function _m(i,t,e){const n=this.cache,r=t.length,s=ks(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||eh,s[o])}function xm(i,t,e){const n=this.cache,r=t.length,s=ks(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Ql,s[o])}function vm(i){switch(i){case 5126:return tm;case 35664:return em;case 35665:return nm;case 35666:return im;case 35674:return rm;case 35675:return sm;case 35676:return om;case 5124:case 35670:return am;case 35667:case 35671:return cm;case 35668:case 35672:return lm;case 35669:case 35673:return hm;case 5125:return um;case 36294:return fm;case 36295:return dm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return xm}}class Mm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Q0(e.type)}}class ym{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vm(e.type)}}class Sm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function qc(i,t){i.seq.push(t),i.map[t.id]=t}function Em(i,t,e){const n=i.name,r=n.length;for(Co.lastIndex=0;;){const s=Co.exec(n),o=Co.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){qc(e,c===void 0?new Mm(a,i,t):new ym(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Sm(a),qc(e,u)),e=u}}}class As{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Em(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Yc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const wm=37297;let Tm=0;function bm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const $c=new jt;function Am(i){le._getMatrix($c,le.workingColorSpace,i);const t=`mat3( ${$c.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case Rs:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+bm(i.getShaderSource(t),a)}else return s}function Rm(i,t){const e=Am(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Cm(i,t){let e;switch(t){case zh:e="Linear";break;case kh:e="Reinhard";break;case Hh:e="Cineon";break;case dl:e="ACESFilmic";break;case Gh:e="AgX";break;case Wh:e="Neutral";break;case Vh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xs=new R;function Pm(){le.getLuminanceCoefficients(xs);const i=xs.x.toFixed(4),t=xs.y.toFixed(4),e=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function Dm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Im(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function yr(i){return i!==""}function Jc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(i){return i.replace(Um,Fm)}const Nm=new Map;function Fm(i,t){let e=Qt[t];if(e===void 0){const n=Nm.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sa(e)}const Om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(i){return i.replace(Om,Bm)}function Bm(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ul?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function km(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case Fs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===er&&(t="ENVMAP_MODE_REFRACTION"),t}function Vm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fl:t="ENVMAP_BLENDING_MULTIPLY";break;case Oh:t="ENVMAP_BLENDING_MIX";break;case Bh:t="ENVMAP_BLENDING_ADD";break}return t}function Gm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wm(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=zm(e),c=km(e),h=Hm(e),u=Vm(e),f=Gm(e),d=Lm(e),g=Dm(s),M=r.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(m=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Cm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Rm("linearToOutputTexel",e.outputColorSpace),Pm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),o=Sa(o),o=Jc(o,e),o=Kc(o,e),a=Sa(a),a=Jc(a,e),a=Kc(a,e),o=jc(o),a=jc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+o,_=S+p+a,A=Yc(r,r.VERTEX_SHADER,y),b=Yc(r,r.FRAGMENT_SHADER,_);r.attachShader(M,A),r.attachShader(M,b),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(P){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(M)||"",z=r.getShaderInfoLog(A)||"",J=r.getShaderInfoLog(b)||"",G=U.trim(),Z=z.trim(),tt=J.trim();let W=!0,dt=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,A,b);else{const _t=Zc(r,A,"vertex"),wt=Zc(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+_t+`
`+wt)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(Z===""||tt==="")&&(dt=!1);dt&&(P.diagnostics={runnable:W,programLog:G,vertexShader:{log:Z,prefix:m},fragmentShader:{log:tt,prefix:p}})}r.deleteShader(A),r.deleteShader(b),D=new As(r,M),E=Im(r,M)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(M,wm)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tm++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=b,this}let Xm=0;class qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ym(t),e.set(t,n)),n}}class Ym{constructor(t){this.id=Xm++,this.code=t,this.usedTimes=0}}function $m(i,t,e,n,r,s,o){const a=new Rl,l=new qm,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,v,P,U,z){const J=U.fog,G=z.geometry,Z=E.isMeshStandardMaterial?U.environment:null,tt=(E.isMeshStandardMaterial?e:t).get(E.envMap||Z),W=tt&&tt.mapping===Fs?tt.image.height:null,dt=g[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const _t=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,wt=_t!==void 0?_t.length:0;let qt=0;G.morphAttributes.position!==void 0&&(qt=1),G.morphAttributes.normal!==void 0&&(qt=2),G.morphAttributes.color!==void 0&&(qt=3);let ie,he,oe,K;if(dt){const ue=Mn[dt];ie=ue.vertexShader,he=ue.fragmentShader}else ie=E.vertexShader,he=E.fragmentShader,l.update(E),oe=l.getVertexShaderID(E),K=l.getFragmentShaderID(E);const rt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Ut=z.isInstancedMesh===!0,Tt=z.isBatchedMesh===!0,Jt=!!E.map,fe=!!E.matcap,L=!!tt,it=!!E.aoMap,Q=!!E.lightMap,j=!!E.bumpMap,N=!!E.normalMap,$=!!E.displacementMap,q=!!E.emissiveMap,nt=!!E.metalnessMap,Rt=!!E.roughnessMap,Bt=E.anisotropy>0,T=E.clearcoat>0,x=E.dispersion>0,B=E.iridescence>0,X=E.sheen>0,st=E.transmission>0,Y=Bt&&!!E.anisotropyMap,It=T&&!!E.clearcoatMap,ft=T&&!!E.clearcoatNormalMap,Pt=T&&!!E.clearcoatRoughnessMap,Lt=B&&!!E.iridescenceMap,ct=B&&!!E.iridescenceThicknessMap,Mt=X&&!!E.sheenColorMap,Gt=X&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,xt=!!E.specularColorMap,Kt=!!E.specularIntensityMap,I=st&&!!E.transmissionMap,ut=st&&!!E.thicknessMap,pt=!!E.gradientMap,At=!!E.alphaMap,lt=E.alphaTest>0,et=!!E.alphaHash,Dt=!!E.extensions;let $t=Qn;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&($t=i.toneMapping);const xe={shaderID:dt,shaderType:E.type,shaderName:E.name,vertexShader:ie,fragmentShader:he,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Tt,batchingColor:Tt&&z._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&z.instanceColor!==null,instancingMorph:Ut&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ir,alphaToCoverage:!!E.alphaToCoverage,map:Jt,matcap:fe,envMap:L,envMapMode:L&&tt.mapping,envMapCubeUVHeight:W,aoMap:it,lightMap:Q,bumpMap:j,normalMap:N,displacementMap:f&&$,emissiveMap:q,normalMapObjectSpace:N&&E.normalMapType===$h,normalMapTangentSpace:N&&E.normalMapType===El,metalnessMap:nt,roughnessMap:Rt,anisotropy:Bt,anisotropyMap:Y,clearcoat:T,clearcoatMap:It,clearcoatNormalMap:ft,clearcoatRoughnessMap:Pt,dispersion:x,iridescence:B,iridescenceMap:Lt,iridescenceThicknessMap:ct,sheen:X,sheenColorMap:Mt,sheenRoughnessMap:Gt,specularMap:Nt,specularColorMap:xt,specularIntensityMap:Kt,transmission:st,transmissionMap:I,thicknessMap:ut,gradientMap:pt,opaque:E.transparent===!1&&E.blending===Ji&&E.alphaToCoverage===!1,alphaMap:At,alphaTest:lt,alphaHash:et,combine:E.combine,mapUv:Jt&&M(E.map.channel),aoMapUv:it&&M(E.aoMap.channel),lightMapUv:Q&&M(E.lightMap.channel),bumpMapUv:j&&M(E.bumpMap.channel),normalMapUv:N&&M(E.normalMap.channel),displacementMapUv:$&&M(E.displacementMap.channel),emissiveMapUv:q&&M(E.emissiveMap.channel),metalnessMapUv:nt&&M(E.metalnessMap.channel),roughnessMapUv:Rt&&M(E.roughnessMap.channel),anisotropyMapUv:Y&&M(E.anisotropyMap.channel),clearcoatMapUv:It&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:ft&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&M(E.sheenRoughnessMap.channel),specularMapUv:Nt&&M(E.specularMap.channel),specularColorMapUv:xt&&M(E.specularColorMap.channel),specularIntensityMapUv:Kt&&M(E.specularIntensityMap.channel),transmissionMapUv:I&&M(E.transmissionMap.channel),thicknessMapUv:ut&&M(E.thicknessMap.channel),alphaMapUv:At&&M(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(N||Bt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(Jt||At),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:St,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:qt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:Jt&&E.map.isVideoTexture===!0&&le.getTransfer(E.map.colorSpace)===me,decodeVideoTextureEmissive:q&&E.emissiveMap.isVideoTexture===!0&&le.getTransfer(E.emissiveMap.colorSpace)===me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ie,flipSided:E.side===Ze,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Dt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&E.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function p(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)v.push(P),v.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(S(v,E),y(v,E),v.push(i.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function S(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function y(E,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){const v=g[E.type];let P;if(v){const U=Mn[v];P=Bu.clone(U.uniforms)}else P=E.uniforms;return P}function A(E,v){let P;for(let U=0,z=h.length;U<z;U++){const J=h[U];if(J.cacheKey===v){P=J,++P.usedTimes;break}}return P===void 0&&(P=new Wm(i,v,E,s),h.push(P)),P}function b(E){if(--E.usedTimes===0){const v=h.indexOf(E);h[v]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:b,releaseShaderCache:C,programs:h,dispose:D}}function Zm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Jm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function tl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function el(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,f,d,g,M,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:M,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=M,p.group=m),t++,p}function a(u,f,d,g,M,m){const p=o(u,f,d,g,M,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(u,f,d,g,M,m){const p=o(u,f,d,g,M,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Jm),n.length>1&&n.sort(f||tl),r.length>1&&r.sort(f||tl)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Km(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new el,i.set(n,[o])):r>=s.length?(o=new el,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function jm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Zt};break;case"SpotLight":e={position:new R,direction:new R,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Qm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let tg=0;function eg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ng(i){const t=new jm,e=Qm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const r=new R,s=new Me,o=new Me;function a(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,M=0,m=0,p=0,S=0,y=0,_=0,A=0,b=0,C=0;c.sort(eg);for(let E=0,v=c.length;E<v;E++){const P=c[E],U=P.color,z=P.intensity,J=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=U.r*z,u+=U.g*z,f+=U.b*z;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],z);C++}else if(P.isDirectionalLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,W=e.get(P);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=P.shadow.matrix,S++}n.directional[d]=Z,d++}else if(P.isSpotLight){const Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(U).multiplyScalar(z),Z.distance=J,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[M]=Z;const tt=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,tt.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[M]=tt.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.spotShadow[M]=W,n.spotShadowMap[M]=G,_++}M++}else if(P.isRectAreaLight){const Z=t.get(P);Z.color.copy(U).multiplyScalar(z),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=Z,m++}else if(P.isPointLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const tt=P.shadow,W=e.get(P);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,W.shadowCameraNear=tt.camera.near,W.shadowCameraFar=tt.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=Z,g++}else if(P.isHemisphereLight){const Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(z),Z.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=Z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==M||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==y||D.numSpotShadows!==_||D.numSpotMaps!==A||D.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,D.directionalLength=d,D.pointLength=g,D.spotLength=M,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=y,D.numSpotShadows=_,D.numSpotMaps=A,D.numLightProbes=C,n.version=tg++)}function l(c,h){let u=0,f=0,d=0,g=0,M=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const y=c[p];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),u++}else if(y.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const _=n.hemi[M];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:n}}function nl(i){const t=new ng(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ig(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new nl(i),t.set(r,[a])):s>=o.length?(a=new nl(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function og(i,t,e){let n=new Ia;const r=new at,s=new at,o=new ge,a=new Rf({depthPacking:Yh}),l=new Cf,c={},h=e.maxTextureSize,u={[ti]:Ze,[Ze]:ti,[Ie]:Ie},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:rg,fragmentShader:sg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new nn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let p=this.type;this.render=function(b,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const E=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(jn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=p!==Nn&&this.type===Nn,J=p===Nn&&this.type!==Nn;for(let G=0,Z=b.length;G<Z;G++){const tt=b[G],W=tt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const dt=W.getFrameExtents();if(r.multiply(dt),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/dt.x),r.x=s.x*dt.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/dt.y),r.y=s.y*dt.y,W.mapSize.y=s.y)),W.map===null||z===!0||J===!0){const wt=this.type!==Nn?{minFilter:gn,magFilter:gn}:{};W.map!==null&&W.map.dispose(),W.map=new Si(r.x,r.y,wt),W.map.texture.name=tt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const _t=W.getViewportCount();for(let wt=0;wt<_t;wt++){const qt=W.getViewport(wt);o.set(s.x*qt.x,s.y*qt.y,s.x*qt.z,s.y*qt.w),U.viewport(o),W.updateMatrices(tt,wt),n=W.getFrustum(),_(C,D,W.camera,tt,this.type)}W.isPointLightShadow!==!0&&this.type===Nn&&S(W,D),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,v,P)};function S(b,C){const D=t.update(M);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Si(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,D,f,M,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,D,d,M,null)}function y(b,C,D,E){let v=null;const P=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)v=P;else if(v=D.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=v.uuid,z=C.uuid;let J=c[U];J===void 0&&(J={},c[U]=J);let G=J[z];G===void 0&&(G=v.clone(),J[z]=G,C.addEventListener("dispose",A)),v=G}if(v.visible=C.visible,v.wireframe=C.wireframe,E===Nn?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:u[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=i.properties.get(v);U.light=D}return v}function _(b,C,D,E,v){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===Nn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const z=t.update(b),J=b.material;if(Array.isArray(J)){const G=z.groups;for(let Z=0,tt=G.length;Z<tt;Z++){const W=G[Z],dt=J[W.materialIndex];if(dt&&dt.visible){const _t=y(b,dt,E,v);b.onBeforeShadow(i,b,C,D,z,_t,W),i.renderBufferDirect(D,null,z,_t,b,W),b.onAfterShadow(i,b,C,D,z,_t,W)}}}else if(J.visible){const G=y(b,J,E,v);b.onBeforeShadow(i,b,C,D,z,G,null),i.renderBufferDirect(D,null,z,G,b,null),b.onAfterShadow(i,b,C,D,z,G,null)}}const U=b.children;for(let z=0,J=U.length;z<J;z++)_(U[z],C,D,E,v)}function A(b){b.target.removeEventListener("dispose",A);for(const D in c){const E=c[D],v=b.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}const ag={[Uo]:No,[Fo]:zo,[Oo]:ko,[Qi]:Bo,[No]:Uo,[zo]:Fo,[ko]:Oo,[Bo]:Qi};function cg(i,t){function e(){let I=!1;const ut=new ge;let pt=null;const At=new ge(0,0,0,0);return{setMask:function(lt){pt!==lt&&!I&&(i.colorMask(lt,lt,lt,lt),pt=lt)},setLocked:function(lt){I=lt},setClear:function(lt,et,Dt,$t,xe){xe===!0&&(lt*=$t,et*=$t,Dt*=$t),ut.set(lt,et,Dt,$t),At.equals(ut)===!1&&(i.clearColor(lt,et,Dt,$t),At.copy(ut))},reset:function(){I=!1,pt=null,At.set(-1,0,0,0)}}}function n(){let I=!1,ut=!1,pt=null,At=null,lt=null;return{setReversed:function(et){if(ut!==et){const Dt=t.get("EXT_clip_control");et?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ut=et;const $t=lt;lt=null,this.setClear($t)}},getReversed:function(){return ut},setTest:function(et){et?rt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(et){pt!==et&&!I&&(i.depthMask(et),pt=et)},setFunc:function(et){if(ut&&(et=ag[et]),At!==et){switch(et){case Uo:i.depthFunc(i.NEVER);break;case No:i.depthFunc(i.ALWAYS);break;case Fo:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case Oo:i.depthFunc(i.EQUAL);break;case Bo:i.depthFunc(i.GEQUAL);break;case zo:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=et}},setLocked:function(et){I=et},setClear:function(et){lt!==et&&(ut&&(et=1-et),i.clearDepth(et),lt=et)},reset:function(){I=!1,pt=null,At=null,lt=null,ut=!1}}}function r(){let I=!1,ut=null,pt=null,At=null,lt=null,et=null,Dt=null,$t=null,xe=null;return{setTest:function(ue){I||(ue?rt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(ue){ut!==ue&&!I&&(i.stencilMask(ue),ut=ue)},setFunc:function(ue,Cn,vn){(pt!==ue||At!==Cn||lt!==vn)&&(i.stencilFunc(ue,Cn,vn),pt=ue,At=Cn,lt=vn)},setOp:function(ue,Cn,vn){(et!==ue||Dt!==Cn||$t!==vn)&&(i.stencilOp(ue,Cn,vn),et=ue,Dt=Cn,$t=vn)},setLocked:function(ue){I=ue},setClear:function(ue){xe!==ue&&(i.clearStencil(ue),xe=ue)},reset:function(){I=!1,ut=null,pt=null,At=null,lt=null,et=null,Dt=null,$t=null,xe=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,M=!1,m=null,p=null,S=null,y=null,_=null,A=null,b=null,C=new Zt(0,0,0),D=0,E=!1,v=null,P=null,U=null,z=null,J=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,tt=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),Z=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Z=tt>=2);let dt=null,_t={};const wt=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),ie=new ge().fromArray(wt),he=new ge().fromArray(qt);function oe(I,ut,pt,At){const lt=new Uint8Array(4),et=i.createTexture();i.bindTexture(I,et),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<pt;Dt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(ut+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return et}const K={};K[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(Qi),j(!1),N(Ka),rt(i.CULL_FACE),it(jn);function rt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function St(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Ut(I,ut){return u[I]!==ut?(i.bindFramebuffer(I,ut),u[I]=ut,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ut),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Tt(I,ut){let pt=d,At=!1;if(I){pt=f.get(ut),pt===void 0&&(pt=[],f.set(ut,pt));const lt=I.textures;if(pt.length!==lt.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let et=0,Dt=lt.length;et<Dt;et++)pt[et]=i.COLOR_ATTACHMENT0+et;pt.length=lt.length,At=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,At=!0);At&&i.drawBuffers(pt)}function Jt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const fe={[mi]:i.FUNC_ADD,[Mh]:i.FUNC_SUBTRACT,[yh]:i.FUNC_REVERSE_SUBTRACT};fe[Sh]=i.MIN,fe[Eh]=i.MAX;const L={[wh]:i.ZERO,[Th]:i.ONE,[bh]:i.SRC_COLOR,[Do]:i.SRC_ALPHA,[Dh]:i.SRC_ALPHA_SATURATE,[Ph]:i.DST_COLOR,[Rh]:i.DST_ALPHA,[Ah]:i.ONE_MINUS_SRC_COLOR,[Io]:i.ONE_MINUS_SRC_ALPHA,[Lh]:i.ONE_MINUS_DST_COLOR,[Ch]:i.ONE_MINUS_DST_ALPHA,[Ih]:i.CONSTANT_COLOR,[Uh]:i.ONE_MINUS_CONSTANT_COLOR,[Nh]:i.CONSTANT_ALPHA,[Fh]:i.ONE_MINUS_CONSTANT_ALPHA};function it(I,ut,pt,At,lt,et,Dt,$t,xe,ue){if(I===jn){M===!0&&(St(i.BLEND),M=!1);return}if(M===!1&&(rt(i.BLEND),M=!0),I!==vh){if(I!==m||ue!==E){if((p!==mi||_!==mi)&&(i.blendEquation(i.FUNC_ADD),p=mi,_=mi),ue)switch(I){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFunc(i.ONE,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ja:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,y=null,A=null,b=null,C.set(0,0,0),D=0,m=I,E=ue}return}lt=lt||ut,et=et||pt,Dt=Dt||At,(ut!==p||lt!==_)&&(i.blendEquationSeparate(fe[ut],fe[lt]),p=ut,_=lt),(pt!==S||At!==y||et!==A||Dt!==b)&&(i.blendFuncSeparate(L[pt],L[At],L[et],L[Dt]),S=pt,y=At,A=et,b=Dt),($t.equals(C)===!1||xe!==D)&&(i.blendColor($t.r,$t.g,$t.b,xe),C.copy($t),D=xe),m=I,E=!1}function Q(I,ut){I.side===Ie?St(i.CULL_FACE):rt(i.CULL_FACE);let pt=I.side===Ze;ut&&(pt=!pt),j(pt),I.blending===Ji&&I.transparent===!1?it(jn):it(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const At=I.stencilWrite;a.setTest(At),At&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),q(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(I){v!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),v=I)}function N(I){I!==_h?(rt(i.CULL_FACE),I!==P&&(I===Ka?i.cullFace(i.BACK):I===xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),P=I}function $(I){I!==U&&(Z&&i.lineWidth(I),U=I)}function q(I,ut,pt){I?(rt(i.POLYGON_OFFSET_FILL),(z!==ut||J!==pt)&&(i.polygonOffset(ut,pt),z=ut,J=pt)):St(i.POLYGON_OFFSET_FILL)}function nt(I){I?rt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function Rt(I){I===void 0&&(I=i.TEXTURE0+G-1),dt!==I&&(i.activeTexture(I),dt=I)}function Bt(I,ut,pt){pt===void 0&&(dt===null?pt=i.TEXTURE0+G-1:pt=dt);let At=_t[pt];At===void 0&&(At={type:void 0,texture:void 0},_t[pt]=At),(At.type!==I||At.texture!==ut)&&(dt!==pt&&(i.activeTexture(pt),dt=pt),i.bindTexture(I,ut||K[I]),At.type=I,At.texture=ut)}function T(){const I=_t[dt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(I){ie.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ie.copy(I))}function Gt(I){he.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),he.copy(I))}function Nt(I,ut){let pt=c.get(ut);pt===void 0&&(pt=new WeakMap,c.set(ut,pt));let At=pt.get(I);At===void 0&&(At=i.getUniformBlockIndex(ut,I.name),pt.set(I,At))}function xt(I,ut){const At=c.get(ut).get(I);l.get(ut)!==At&&(i.uniformBlockBinding(ut,At,I.__bindingPointIndex),l.set(ut,At))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},dt=null,_t={},u={},f=new WeakMap,d=[],g=null,M=!1,m=null,p=null,S=null,y=null,_=null,A=null,b=null,C=new Zt(0,0,0),D=0,E=!1,v=null,P=null,U=null,z=null,J=null,ie.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:rt,disable:St,bindFramebuffer:Ut,drawBuffers:Tt,useProgram:Jt,setBlending:it,setMaterial:Q,setFlipSided:j,setCullFace:N,setLineWidth:$,setPolygonOffset:q,setScissorTest:nt,activeTexture:Rt,bindTexture:Bt,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:Lt,texImage3D:ct,updateUBOMapping:Nt,uniformBlockBinding:xt,texStorage2D:ft,texStorage3D:Pt,texSubImage2D:X,texSubImage3D:st,compressedTexSubImage2D:Y,compressedTexSubImage3D:It,scissor:Mt,viewport:Gt,reset:Kt}}function lg(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return d?new OffscreenCanvas(T,x):Ps("canvas")}function M(T,x,B){let X=1;const st=Bt(T);if((st.width>B||st.height>B)&&(X=B/Math.max(st.width,st.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(X*st.width),It=Math.floor(X*st.height);u===void 0&&(u=g(Y,It));const ft=x?g(Y,It):u;return ft.width=Y,ft.height=It,ft.getContext("2d").drawImage(T,0,0,Y,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Y+"x"+It+")."),ft}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,x,B,X,st=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=x;if(x===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),x===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){const It=st?Rs:le.getTransfer(X);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=It===me?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(T,x){let B;return T?x===null||x===yi||x===Rr?B=i.DEPTH24_STENCIL8:x===On?B=i.DEPTH32F_STENCIL8:x===Ar&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===yi||x===Rr?B=i.DEPTH_COMPONENT24:x===On?B=i.DEPTH_COMPONENT32F:x===Ar&&(B=i.DEPTH_COMPONENT16),B}function A(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==gn&&T.minFilter!==Sn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function b(T){const x=T.target;x.removeEventListener("dispose",b),D(x),x.isVideoTexture&&h.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),v(x)}function D(T){const x=n.get(T);if(x.__webglInit===void 0)return;const B=T.source,X=f.get(B);if(X){const st=X[x.__cacheKey];st.usedTimes--,st.usedTimes===0&&E(T),Object.keys(X).length===0&&f.delete(B)}n.remove(T)}function E(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const B=T.source,X=f.get(B);delete X[x.__cacheKey],o.memory.textures--}function v(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let st=0;st<x.__webglFramebuffer[X].length;st++)i.deleteFramebuffer(x.__webglFramebuffer[X][st]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=T.textures;for(let X=0,st=B.length;X<st;X++){const Y=n.get(B[X]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[X])}n.remove(T)}let P=0;function U(){P=0}function z(){const T=P;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),P+=1,T}function J(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function G(T,x){const B=n.get(T);if(T.isVideoTexture&&nt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,T,x);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function Z(T,x){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){K(B,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function tt(T,x){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){K(B,T,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function W(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){rt(B,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const dt={[nr]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[Go]:i.MIRRORED_REPEAT},_t={[gn]:i.NEAREST,[Xh]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[qs]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},wt={[Zh]:i.NEVER,[eu]:i.ALWAYS,[Jh]:i.LESS,[wl]:i.LEQUAL,[Kh]:i.EQUAL,[tu]:i.GEQUAL,[jh]:i.GREATER,[Qh]:i.NOTEQUAL};function qt(T,x){if(x.type===On&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Sn||x.magFilter===qs||x.magFilter===Wr||x.magFilter===Mi||x.minFilter===Sn||x.minFilter===qs||x.minFilter===Wr||x.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,dt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,dt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,dt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,_t[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,_t[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,wt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===gn||x.minFilter!==Wr&&x.minFilter!==Mi||x.type===On&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ie(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",b));const X=x.source;let st=f.get(X);st===void 0&&(st={},f.set(X,st));const Y=J(x);if(Y!==T.__cacheKey){st[Y]===void 0&&(st[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),st[Y].usedTimes++;const It=st[T.__cacheKey];It!==void 0&&(st[T.__cacheKey].usedTimes--,It.usedTimes===0&&E(x)),T.__cacheKey=Y,T.__webglTexture=st[Y].texture}return B}function he(T,x,B){return Math.floor(Math.floor(T/B)/x)}function oe(T,x,B,X){const Y=T.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,X,x.data);else{Y.sort((ct,Mt)=>ct.start-Mt.start);let It=0;for(let ct=1;ct<Y.length;ct++){const Mt=Y[It],Gt=Y[ct],Nt=Mt.start+Mt.count,xt=he(Gt.start,x.width,4),Kt=he(Mt.start,x.width,4);Gt.start<=Nt+1&&xt===Kt&&he(Gt.start+Gt.count-1,x.width,4)===xt?Mt.count=Math.max(Mt.count,Gt.start+Gt.count-Mt.start):(++It,Y[It]=Gt)}Y.length=It+1;const ft=i.getParameter(i.UNPACK_ROW_LENGTH),Pt=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ct=0,Mt=Y.length;ct<Mt;ct++){const Gt=Y[ct],Nt=Math.floor(Gt.start/4),xt=Math.ceil(Gt.count/4),Kt=Nt%x.width,I=Math.floor(Nt/x.width),ut=xt,pt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Kt,I,ut,pt,B,X,x.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function K(T,x,B){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);const st=ie(T,x),Y=x.source;e.bindTexture(X,T.__webglTexture,i.TEXTURE0+B);const It=n.get(Y);if(Y.version!==It.__version||st===!0){e.activeTexture(i.TEXTURE0+B);const ft=le.getPrimaries(le.workingColorSpace),Pt=x.colorSpace===Kn?null:le.getPrimaries(x.colorSpace),Lt=x.colorSpace===Kn||ft===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ct=M(x.image,!1,r.maxTextureSize);ct=Rt(x,ct);const Mt=s.convert(x.format,x.colorSpace),Gt=s.convert(x.type);let Nt=y(x.internalFormat,Mt,Gt,x.colorSpace,x.isVideoTexture);qt(X,x);let xt;const Kt=x.mipmaps,I=x.isVideoTexture!==!0,ut=It.__version===void 0||st===!0,pt=Y.dataReady,At=A(x,ct);if(x.isDepthTexture)Nt=_(x.format===Pr,x.type),ut&&(I?e.texStorage2D(i.TEXTURE_2D,1,Nt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Nt,ct.width,ct.height,0,Mt,Gt,null));else if(x.isDataTexture)if(Kt.length>0){I&&ut&&e.texStorage2D(i.TEXTURE_2D,At,Nt,Kt[0].width,Kt[0].height);for(let lt=0,et=Kt.length;lt<et;lt++)xt=Kt[lt],I?pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,xt.width,xt.height,Mt,Gt,xt.data):e.texImage2D(i.TEXTURE_2D,lt,Nt,xt.width,xt.height,0,Mt,Gt,xt.data);x.generateMipmaps=!1}else I?(ut&&e.texStorage2D(i.TEXTURE_2D,At,Nt,ct.width,ct.height),pt&&oe(x,ct,Mt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Nt,ct.width,ct.height,0,Mt,Gt,ct.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Nt,Kt[0].width,Kt[0].height,ct.depth);for(let lt=0,et=Kt.length;lt<et;lt++)if(xt=Kt[lt],x.format!==mn)if(Mt!==null)if(I){if(pt)if(x.layerUpdates.size>0){const Dt=Dc(xt.width,xt.height,x.format,x.type);for(const $t of x.layerUpdates){const xe=xt.data.subarray($t*Dt/xt.data.BYTES_PER_ELEMENT,($t+1)*Dt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,$t,xt.width,xt.height,1,Mt,xe)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,xt.width,xt.height,ct.depth,Mt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Nt,xt.width,xt.height,ct.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,xt.width,xt.height,ct.depth,Mt,Gt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Nt,xt.width,xt.height,ct.depth,0,Mt,Gt,xt.data)}else{I&&ut&&e.texStorage2D(i.TEXTURE_2D,At,Nt,Kt[0].width,Kt[0].height);for(let lt=0,et=Kt.length;lt<et;lt++)xt=Kt[lt],x.format!==mn?Mt!==null?I?pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,xt.width,xt.height,Mt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Nt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,xt.width,xt.height,Mt,Gt,xt.data):e.texImage2D(i.TEXTURE_2D,lt,Nt,xt.width,xt.height,0,Mt,Gt,xt.data)}else if(x.isDataArrayTexture)if(I){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Nt,ct.width,ct.height,ct.depth),pt)if(x.layerUpdates.size>0){const lt=Dc(ct.width,ct.height,x.format,x.type);for(const et of x.layerUpdates){const Dt=ct.data.subarray(et*lt/ct.data.BYTES_PER_ELEMENT,(et+1)*lt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,ct.width,ct.height,1,Mt,Gt,Dt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Mt,Gt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,ct.width,ct.height,ct.depth,0,Mt,Gt,ct.data);else if(x.isData3DTexture)I?(ut&&e.texStorage3D(i.TEXTURE_3D,At,Nt,ct.width,ct.height,ct.depth),pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Mt,Gt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,ct.width,ct.height,ct.depth,0,Mt,Gt,ct.data);else if(x.isFramebufferTexture){if(ut)if(I)e.texStorage2D(i.TEXTURE_2D,At,Nt,ct.width,ct.height);else{let lt=ct.width,et=ct.height;for(let Dt=0;Dt<At;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Nt,lt,et,0,Mt,Gt,null),lt>>=1,et>>=1}}else if(Kt.length>0){if(I&&ut){const lt=Bt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,At,Nt,lt.width,lt.height)}for(let lt=0,et=Kt.length;lt<et;lt++)xt=Kt[lt],I?pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Mt,Gt,xt):e.texImage2D(i.TEXTURE_2D,lt,Nt,Mt,Gt,xt);x.generateMipmaps=!1}else if(I){if(ut){const lt=Bt(ct);e.texStorage2D(i.TEXTURE_2D,At,Nt,lt.width,lt.height)}pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Gt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Nt,Mt,Gt,ct);m(x)&&p(X),It.__version=Y.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function rt(T,x,B){if(x.image.length!==6)return;const X=ie(T,x),st=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const Y=n.get(st);if(st.version!==Y.__version||X===!0){e.activeTexture(i.TEXTURE0+B);const It=le.getPrimaries(le.workingColorSpace),ft=x.colorSpace===Kn?null:le.getPrimaries(x.colorSpace),Pt=x.colorSpace===Kn||It===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Lt=x.isCompressedTexture||x.image[0].isCompressedTexture,ct=x.image[0]&&x.image[0].isDataTexture,Mt=[];for(let et=0;et<6;et++)!Lt&&!ct?Mt[et]=M(x.image[et],!0,r.maxCubemapSize):Mt[et]=ct?x.image[et].image:x.image[et],Mt[et]=Rt(x,Mt[et]);const Gt=Mt[0],Nt=s.convert(x.format,x.colorSpace),xt=s.convert(x.type),Kt=y(x.internalFormat,Nt,xt,x.colorSpace),I=x.isVideoTexture!==!0,ut=Y.__version===void 0||X===!0,pt=st.dataReady;let At=A(x,Gt);qt(i.TEXTURE_CUBE_MAP,x);let lt;if(Lt){I&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Kt,Gt.width,Gt.height);for(let et=0;et<6;et++){lt=Mt[et].mipmaps;for(let Dt=0;Dt<lt.length;Dt++){const $t=lt[Dt];x.format!==mn?Nt!==null?I?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Dt,0,0,$t.width,$t.height,Nt,$t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Dt,Kt,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Dt,0,0,$t.width,$t.height,Nt,xt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Dt,Kt,$t.width,$t.height,0,Nt,xt,$t.data)}}}else{if(lt=x.mipmaps,I&&ut){lt.length>0&&At++;const et=Bt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Kt,et.width,et.height)}for(let et=0;et<6;et++)if(ct){I?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Mt[et].width,Mt[et].height,Nt,xt,Mt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Kt,Mt[et].width,Mt[et].height,0,Nt,xt,Mt[et].data);for(let Dt=0;Dt<lt.length;Dt++){const xe=lt[Dt].image[et].image;I?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Dt+1,0,0,xe.width,xe.height,Nt,xt,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Dt+1,Kt,xe.width,xe.height,0,Nt,xt,xe.data)}}else{I?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Nt,xt,Mt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Kt,Nt,xt,Mt[et]);for(let Dt=0;Dt<lt.length;Dt++){const $t=lt[Dt];I?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Dt+1,0,0,Nt,xt,$t.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Dt+1,Kt,Nt,xt,$t.image[et])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),Y.__version=st.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function St(T,x,B,X,st,Y){const It=s.convert(B.format,B.colorSpace),ft=s.convert(B.type),Pt=y(B.internalFormat,It,ft,B.colorSpace),Lt=n.get(x),ct=n.get(B);if(ct.__renderTarget=x,!Lt.__hasExternalTextures){const Mt=Math.max(1,x.width>>Y),Gt=Math.max(1,x.height>>Y);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,Y,Pt,Mt,Gt,x.depth,0,It,ft,null):e.texImage2D(st,Y,Pt,Mt,Gt,0,It,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),q(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,st,ct.__webglTexture,0,$(x)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,st,ct.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(T,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const X=x.depthTexture,st=X&&X.isDepthTexture?X.type:null,Y=_(x.stencilBuffer,st),It=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=$(x);q(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Y,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,T)}else{const X=x.textures;for(let st=0;st<X.length;st++){const Y=X[st],It=s.convert(Y.format,Y.colorSpace),ft=s.convert(Y.type),Pt=y(Y.internalFormat,It,ft,Y.colorSpace),Lt=$(x);B&&q(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,Pt,x.width,x.height):q(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,Pt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);const st=X.__webglTexture,Y=$(x);if(x.depthTexture.format===Cr)q(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(x.depthTexture.format===Pr)q(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Jt(T){const x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const st=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",st)};X.addEventListener("dispose",st),x.__depthDisposeCallback=st}x.__boundDepthTexture=X}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const X=T.texture.mipmaps;X&&X.length>0?Tt(x.__webglFramebuffer[0],T):Tt(x.__webglFramebuffer,T)}else if(B){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Ut(x.__webglDepthbuffer[X],T,!1);else{const st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,Y)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ut(x.__webglDepthbuffer,T,!1);else{const st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(T,x,B){const X=n.get(T);x!==void 0&&St(X.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Jt(T)}function L(T){const x=T.texture,B=n.get(T),X=n.get(x);T.addEventListener("dispose",C);const st=T.textures,Y=T.isWebGLCubeRenderTarget===!0,It=st.length>1;if(It||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ft]=[];for(let Pt=0;Pt<x.mipmaps.length;Pt++)B.__webglFramebuffer[ft][Pt]=i.createFramebuffer()}else B.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ft=0;ft<x.mipmaps.length;ft++)B.__webglFramebuffer[ft]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(It)for(let ft=0,Pt=st.length;ft<Pt;ft++){const Lt=n.get(st[ft]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&q(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ft=0;ft<st.length;ft++){const Pt=st[ft];B.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ft]);const Lt=s.convert(Pt.format,Pt.colorSpace),ct=s.convert(Pt.type),Mt=y(Pt.internalFormat,Lt,ct,Pt.colorSpace,T.isXRRenderTarget===!0),Gt=$(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,B.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),qt(i.TEXTURE_CUBE_MAP,x);for(let ft=0;ft<6;ft++)if(x.mipmaps&&x.mipmaps.length>0)for(let Pt=0;Pt<x.mipmaps.length;Pt++)St(B.__webglFramebuffer[ft][Pt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt);else St(B.__webglFramebuffer[ft],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let ft=0,Pt=st.length;ft<Pt;ft++){const Lt=st[ft],ct=n.get(Lt);let Mt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Mt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,ct.__webglTexture),qt(Mt,Lt),St(B.__webglFramebuffer,T,Lt,i.COLOR_ATTACHMENT0+ft,Mt,0),m(Lt)&&p(Mt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,X.__webglTexture),qt(ft,x),x.mipmaps&&x.mipmaps.length>0)for(let Pt=0;Pt<x.mipmaps.length;Pt++)St(B.__webglFramebuffer[Pt],T,x,i.COLOR_ATTACHMENT0,ft,Pt);else St(B.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ft,0);m(x)&&p(ft),e.unbindTexture()}T.depthBuffer&&Jt(T)}function it(T){const x=T.textures;for(let B=0,X=x.length;B<X;B++){const st=x[B];if(m(st)){const Y=S(T),It=n.get(st).__webglTexture;e.bindTexture(Y,It),p(Y),e.unbindTexture()}}}const Q=[],j=[];function N(T){if(T.samples>0){if(q(T)===!1){const x=T.textures,B=T.width,X=T.height;let st=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(T),ft=x.length>1;if(ft)for(let Lt=0;Lt<x.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Pt=T.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Lt=0;Lt<x.length;Lt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Lt]);const ct=n.get(x[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,B,X,0,0,B,X,st,i.NEAREST),l===!0&&(Q.length=0,j.length=0,Q.push(i.COLOR_ATTACHMENT0+Lt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Q.push(Y),j.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Lt=0;Lt<x.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Lt]);const ct=n.get(x[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function $(T){return Math.min(r.maxSamples,T.samples)}function q(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function nt(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Rt(T,x){const B=T.colorSpace,X=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==ir&&B!==Kn&&(le.getTransfer(B)===me?(X!==mn||st!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Bt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=tt,this.setTextureCube=W,this.rebindTextures=fe,this.setupRenderTarget=L,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=q}function hg(i,t){function e(n,r=Kn){let s;const o=le.getTransfer(r);if(n===bn)return i.UNSIGNED_BYTE;if(n===Ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ba)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_l)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ml)return i.BYTE;if(n===gl)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===wa)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Or)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===Ml)return i.RGB;if(n===mn)return i.RGBA;if(n===Cr)return i.DEPTH_COMPONENT;if(n===Pr)return i.DEPTH_STENCIL;if(n===yl)return i.RED;if(n===Aa)return i.RED_INTEGER;if(n===Sl)return i.RG;if(n===Ra)return i.RG_INTEGER;if(n===Ca)return i.RGBA_INTEGER;if(n===Ss||n===Es||n===ws||n===Ts)if(o===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ts)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===Yo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Wo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$o||n===Zo||n===Jo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===$o||n===Zo)return o===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Jo)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ko||n===jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===ra||n===sa||n===oa||n===aa||n===ca||n===la||n===ha)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ko)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ta)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===na)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ia)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ra)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sa)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oa)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ca)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===la)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ha)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===fa||n===da)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ua)return o===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===da)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pa||n===ma||n===ga||n===_a)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===pa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ma)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ga)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_a)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Bl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ei({vertexShader:ug,fragmentShader:fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nn(new Re(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pg extends ar{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const M=typeof XRWebGLBinding<"u",m=new dg,p={},S=e.getContextAttributes();let y=null,_=null;const A=[],b=[],C=new at;let D=null;const E=new tn;E.viewport=new ge;const v=new tn;v.viewport=new ge;const P=[E,v],U=new Uf;let z=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let rt=A[K];return rt===void 0&&(rt=new po,A[K]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(K){let rt=A[K];return rt===void 0&&(rt=new po,A[K]=rt),rt.getGripSpace()},this.getHand=function(K){let rt=A[K];return rt===void 0&&(rt=new po,A[K]=rt),rt.getHandSpace()};function G(K){const rt=b.indexOf(K.inputSource);if(rt===-1)return;const St=A[rt];St!==void 0&&(St.update(K.inputSource,K.frame,c||o),St.dispatchEvent({type:K.type,data:K.inputSource}))}function Z(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",tt);for(let K=0;K<A.length;K++){const rt=b[K];rt!==null&&(b[K]=null,A[K].disconnect(rt))}z=null,J=null,m.reset();for(const K in p)delete p[K];t.setRenderTarget(y),d=null,f=null,u=null,r=null,_=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",tt),S.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Ut=null,Tt=null;S.depth&&(Tt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=S.stencil?Pr:Cr,Ut=S.stencil?Rr:yi);const Jt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Jt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Si(f.textureWidth,f.textureHeight,{format:mn,type:bn,depthTexture:new Ol(f.textureWidth,f.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const St={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,St),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Si(d.framebufferWidth,d.framebufferHeight,{format:mn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(K){for(let rt=0;rt<K.removed.length;rt++){const St=K.removed[rt],Ut=b.indexOf(St);Ut>=0&&(b[Ut]=null,A[Ut].disconnect(St))}for(let rt=0;rt<K.added.length;rt++){const St=K.added[rt];let Ut=b.indexOf(St);if(Ut===-1){for(let Jt=0;Jt<A.length;Jt++)if(Jt>=b.length){b.push(St),Ut=Jt;break}else if(b[Jt]===null){b[Jt]=St,Ut=Jt;break}if(Ut===-1)break}const Tt=A[Ut];Tt&&Tt.connect(St)}}const W=new R,dt=new R;function _t(K,rt,St){W.setFromMatrixPosition(rt.matrixWorld),dt.setFromMatrixPosition(St.matrixWorld);const Ut=W.distanceTo(dt),Tt=rt.projectionMatrix.elements,Jt=St.projectionMatrix.elements,fe=Tt[14]/(Tt[10]-1),L=Tt[14]/(Tt[10]+1),it=(Tt[9]+1)/Tt[5],Q=(Tt[9]-1)/Tt[5],j=(Tt[8]-1)/Tt[0],N=(Jt[8]+1)/Jt[0],$=fe*j,q=fe*N,nt=Ut/(-j+N),Rt=nt*-j;if(rt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Rt),K.translateZ(nt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Tt[10]===-1)K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Bt=fe+nt,T=L+nt,x=$-Rt,B=q+(Ut-Rt),X=it*L/T*Bt,st=Q*L/T*Bt;K.projectionMatrix.makePerspective(x,B,X,st,Bt,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function wt(K,rt){rt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(rt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let rt=K.near,St=K.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(St=m.depthFar)),U.near=v.near=E.near=rt,U.far=v.far=E.far=St,(z!==U.near||J!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,J=U.far),U.layers.mask=K.layers.mask|6,E.layers.mask=U.layers.mask&3,v.layers.mask=U.layers.mask&5;const Ut=K.parent,Tt=U.cameras;wt(U,Ut);for(let Jt=0;Jt<Tt.length;Jt++)wt(Tt[Jt],Ut);Tt.length===2?_t(U,E,v):U.projectionMatrix.copy(E.projectionMatrix),qt(K,U,Ut)};function qt(K,rt,St){St===null?K.matrix.copy(rt.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(rt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Lr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(K){return p[K]};let ie=null;function he(K,rt){if(h=rt.getViewerPose(c||o),g=rt,h!==null){const St=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Ut=!1;St.length!==U.cameras.length&&(U.cameras.length=0,Ut=!0);for(let L=0;L<St.length;L++){const it=St[L];let Q=null;if(d!==null)Q=d.getViewport(it);else{const N=u.getViewSubImage(f,it);Q=N.viewport,L===0&&(t.setRenderTargetTextures(_,N.colorTexture,N.depthStencilTexture),t.setRenderTarget(_))}let j=P[L];j===void 0&&(j=new tn,j.layers.enable(L),j.viewport=new ge,P[L]=j),j.matrix.fromArray(it.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(it.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Q.x,Q.y,Q.width,Q.height),L===0&&(U.matrix.copy(j.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ut===!0&&U.cameras.push(j)}const Tt=r.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const L=u.getDepthInformation(St[0]);L&&L.isValid&&L.texture&&m.init(L,r.renderState)}if(Tt&&Tt.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<St.length;L++){const it=St[L].camera;if(it){let Q=p[it];Q||(Q=new Bl,p[it]=Q);const j=u.getCameraImage(it);Q.sourceTexture=j}}}}for(let St=0;St<A.length;St++){const Ut=b[St],Tt=A[St];Ut!==null&&Tt!==void 0&&Tt.update(Ut,rt,c||o)}ie&&ie(K,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const oe=new Kl;oe.setAnimationLoop(he),this.setAnimationLoop=function(K){ie=K},this.dispose=function(){}}}const ui=new An,mg=new Me;function gg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),M(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,_=S.envMapRotation;y&&(m.envMap.value=y,ui.copy(_),ui.x*=-1,ui.y*=-1,ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(ui)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function _g(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const _=y.program;n.uniformBlockBinding(S,_)}function c(S,y){let _=r[S.id];_===void 0&&(g(S),_=h(S),r[S.id]=_,S.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(S,A);const b=t.render.frame;s[S.id]!==b&&(f(S),s[S.id]=b)}function h(S){const y=u();S.__bindingPointIndex=y;const _=i.createBuffer(),A=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=r[S.id],_=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,C=_.length;b<C;b++){const D=Array.isArray(_[b])?_[b]:[_[b]];for(let E=0,v=D.length;E<v;E++){const P=D[E];if(d(P,b,E,A)===!0){const U=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let J=0;for(let G=0;G<z.length;G++){const Z=z[G],tt=M(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,U+J,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,J),J+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,y,_,A){const b=S.value,C=y+"_"+_;if(A[C]===void 0)return typeof b=="number"||typeof b=="boolean"?A[C]=b:A[C]=b.clone(),!0;{const D=A[C];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return A[C]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function g(S){const y=S.uniforms;let _=0;const A=16;for(let C=0,D=y.length;C<D;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let v=0,P=E.length;v<P;v++){const U=E[v],z=Array.isArray(U.value)?U.value:[U.value];for(let J=0,G=z.length;J<G;J++){const Z=z[J],tt=M(Z),W=_%A,dt=W%tt.boundary,_t=W+dt;_+=dt,_t!==0&&A-_t<tt.storage&&(_+=A-_t),U.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=tt.storage}}}const b=_%A;return b>0&&(_+=A-b),S.__size=_,S.__cache={},this}function M(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class xg{constructor(t={}){const{canvas:e=xu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),M=new Int32Array(4);let m=null,p=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let A=!1;this._outputColorSpace=Pe;let b=0,C=0,D=null,E=-1,v=null;const P=new ge,U=new ge;let z=null;const J=new Zt(0);let G=0,Z=e.width,tt=e.height,W=1,dt=null,_t=null;const wt=new ge(0,0,Z,tt),qt=new ge(0,0,Z,tt);let ie=!1;const he=new Ia;let oe=!1,K=!1;const rt=new Me,St=new R,Ut=new ge,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function fe(){return D===null?W:1}let L=n;function it(w,F){return e.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ea}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",lt,!1),L===null){const F="webgl2";if(L=it(F,w),L===null)throw it(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Q,j,N,$,q,nt,Rt,Bt,T,x,B,X,st,Y,It,ft,Pt,Lt,ct,Mt,Gt,Nt,xt,Kt;function I(){Q=new R0(L),Q.init(),Nt=new hg(L,Q),j=new y0(L,Q,t,Nt),N=new cg(L,Q),j.reversedDepthBuffer&&f&&N.buffers.depth.setReversed(!0),$=new L0(L),q=new Zm,nt=new lg(L,Q,N,q,j,Nt,$),Rt=new E0(_),Bt=new A0(_),T=new Of(L),xt=new v0(L,T),x=new C0(L,T,$,xt),B=new I0(L,x,T,$),ct=new D0(L,j,nt),ft=new S0(q),X=new $m(_,Rt,Bt,Q,j,xt,ft),st=new gg(_,q),Y=new Km,It=new ig(Q),Lt=new x0(_,Rt,Bt,N,B,d,l),Pt=new og(_,B,j),Kt=new _g(L,$,j,N),Mt=new M0(L,Q,$),Gt=new P0(L,Q,$),$.programs=X.programs,_.capabilities=j,_.extensions=Q,_.properties=q,_.renderLists=Y,_.shadowMap=Pt,_.state=N,_.info=$}I();const ut=new pg(_,L);this.xr=ut,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Q.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Q.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(Z,tt,!1))},this.getSize=function(w){return w.set(Z,tt)},this.setSize=function(w,F,k=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,tt=F,e.width=Math.floor(w*W),e.height=Math.floor(F*W),k===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Z*W,tt*W).floor()},this.setDrawingBufferSize=function(w,F,k){Z=w,tt=F,W=k,e.width=Math.floor(w*k),e.height=Math.floor(F*k),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(wt)},this.setViewport=function(w,F,k,V){w.isVector4?wt.set(w.x,w.y,w.z,w.w):wt.set(w,F,k,V),N.viewport(P.copy(wt).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(qt)},this.setScissor=function(w,F,k,V){w.isVector4?qt.set(w.x,w.y,w.z,w.w):qt.set(w,F,k,V),N.scissor(U.copy(qt).multiplyScalar(W).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(w){N.setScissorTest(ie=w)},this.setOpaqueSort=function(w){dt=w},this.setTransparentSort=function(w){_t=w},this.getClearColor=function(w){return w.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,k=!0){let V=0;if(w){let O=!1;if(D!==null){const ht=D.texture.format;O=ht===Ca||ht===Ra||ht===Aa}if(O){const ht=D.texture.type,vt=ht===bn||ht===yi||ht===Ar||ht===Rr||ht===Ta||ht===ba,Ct=Lt.getClearColor(),bt=Lt.getClearAlpha(),Vt=Ct.r,Wt=Ct.g,zt=Ct.b;vt?(g[0]=Vt,g[1]=Wt,g[2]=zt,g[3]=bt,L.clearBufferuiv(L.COLOR,0,g)):(M[0]=Vt,M[1]=Wt,M[2]=zt,M[3]=bt,L.clearBufferiv(L.COLOR,0,M))}else V|=L.COLOR_BUFFER_BIT}F&&(V|=L.DEPTH_BUFFER_BIT),k&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Lt.dispose(),Y.dispose(),It.dispose(),q.dispose(),Rt.dispose(),Bt.dispose(),B.dispose(),xt.dispose(),Kt.dispose(),X.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",vn),ut.removeEventListener("sessionend",Xa),ri.stop()};function pt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=$.autoReset,F=Pt.enabled,k=Pt.autoUpdate,V=Pt.needsUpdate,O=Pt.type;I(),$.autoReset=w,Pt.enabled=F,Pt.autoUpdate=k,Pt.needsUpdate=V,Pt.type=O}function lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function et(w){const F=w.target;F.removeEventListener("dispose",et),Dt(F)}function Dt(w){$t(w),q.remove(w)}function $t(w){const F=q.get(w).programs;F!==void 0&&(F.forEach(function(k){X.releaseProgram(k)}),w.isShaderMaterial&&X.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,k,V,O,ht){F===null&&(F=Tt);const vt=O.isMesh&&O.matrixWorld.determinant()<0,Ct=uh(w,F,k,V,O);N.setMaterial(V,vt);let bt=k.index,Vt=1;if(V.wireframe===!0){if(bt=x.getWireframeAttribute(k),bt===void 0)return;Vt=2}const Wt=k.drawRange,zt=k.attributes.position;let re=Wt.start*Vt,pe=(Wt.start+Wt.count)*Vt;ht!==null&&(re=Math.max(re,ht.start*Vt),pe=Math.min(pe,(ht.start+ht.count)*Vt)),bt!==null?(re=Math.max(re,0),pe=Math.min(pe,bt.count)):zt!=null&&(re=Math.max(re,0),pe=Math.min(pe,zt.count));const be=pe-re;if(be<0||be===1/0)return;xt.setup(O,V,Ct,k,bt);let ve,_e=Mt;if(bt!==null&&(ve=T.get(bt),_e=Gt,_e.setIndex(ve)),O.isMesh)V.wireframe===!0?(N.setLineWidth(V.wireframeLinewidth*fe()),_e.setMode(L.LINES)):_e.setMode(L.TRIANGLES);else if(O.isLine){let Ht=V.linewidth;Ht===void 0&&(Ht=1),N.setLineWidth(Ht*fe()),O.isLineSegments?_e.setMode(L.LINES):O.isLineLoop?_e.setMode(L.LINE_LOOP):_e.setMode(L.LINE_STRIP)}else O.isPoints?_e.setMode(L.POINTS):O.isSprite&&_e.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))_e.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ht=O._multiDrawStarts,ye=O._multiDrawCounts,ce=O._multiDrawCount,Je=bt?T.get(bt).bytesPerElement:1,Ai=q.get(V).currentProgram.getUniforms();for(let Ke=0;Ke<ce;Ke++)Ai.setValue(L,"_gl_DrawID",Ke),_e.render(Ht[Ke]/Je,ye[Ke])}else if(O.isInstancedMesh)_e.renderInstances(re,be,O.count);else if(k.isInstancedBufferGeometry){const Ht=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ye=Math.min(k.instanceCount,Ht);_e.renderInstances(re,be,ye)}else _e.render(re,be)};function xe(w,F,k){w.transparent===!0&&w.side===Ie&&w.forceSinglePass===!1?(w.side=Ze,w.needsUpdate=!0,Gr(w,F,k),w.side=ti,w.needsUpdate=!0,Gr(w,F,k),w.side=Ie):Gr(w,F,k)}this.compile=function(w,F,k=null){k===null&&(k=w),p=It.get(k),p.init(F),y.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==k&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ht=O.material;if(ht)if(Array.isArray(ht))for(let vt=0;vt<ht.length;vt++){const Ct=ht[vt];xe(Ct,k,O),V.add(Ct)}else xe(ht,k,O),V.add(ht)}),p=y.pop(),V},this.compileAsync=function(w,F,k=null){const V=this.compile(w,F,k);return new Promise(O=>{function ht(){if(V.forEach(function(vt){q.get(vt).currentProgram.isReady()&&V.delete(vt)}),V.size===0){O(w);return}setTimeout(ht,10)}Q.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ue=null;function Cn(w){ue&&ue(w)}function vn(){ri.stop()}function Xa(){ri.start()}const ri=new Kl;ri.setAnimationLoop(Cn),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(w){ue=w,ut.setAnimationLoop(w),w===null?ri.stop():ri.start()},ut.addEventListener("sessionstart",vn),ut.addEventListener("sessionend",Xa),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(F),F=ut.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,F,D),p=It.get(w,y.length),p.init(F),y.push(p),rt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),he.setFromProjectionMatrix(rt,En,F.reversedDepth),K=this.localClippingEnabled,oe=ft.init(this.clippingPlanes,K),m=Y.get(w,S.length),m.init(),S.push(m),ut.enabled===!0&&ut.isPresenting===!0){const ht=_.xr.getDepthSensingMesh();ht!==null&&Ws(ht,F,-1/0,_.sortObjects)}Ws(w,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(dt,_t),Jt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Jt&&Lt.addToRenderList(m,w),this.info.render.frame++,oe===!0&&ft.beginShadows();const k=p.state.shadowsArray;Pt.render(k,w,F),oe===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ht=F.cameras;if(O.length>0)for(let vt=0,Ct=ht.length;vt<Ct;vt++){const bt=ht[vt];Ya(V,O,w,bt)}Jt&&Lt.render(w);for(let vt=0,Ct=ht.length;vt<Ct;vt++){const bt=ht[vt];qa(m,w,bt,bt.viewport)}}else O.length>0&&Ya(V,O,w,F),Jt&&Lt.render(w),qa(m,w,F);D!==null&&C===0&&(nt.updateMultisampleRenderTarget(D),nt.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(_,w,F),xt.resetDefaultState(),E=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],oe===!0&&ft.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ws(w,F,k,V){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||he.intersectsSprite(w)){V&&Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(rt);const vt=B.update(w),Ct=w.material;Ct.visible&&m.push(w,vt,Ct,k,Ut.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||he.intersectsObject(w))){const vt=B.update(w),Ct=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ut.copy(w.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ut.copy(vt.boundingSphere.center)),Ut.applyMatrix4(w.matrixWorld).applyMatrix4(rt)),Array.isArray(Ct)){const bt=vt.groups;for(let Vt=0,Wt=bt.length;Vt<Wt;Vt++){const zt=bt[Vt],re=Ct[zt.materialIndex];re&&re.visible&&m.push(w,vt,re,k,Ut.z,zt)}}else Ct.visible&&m.push(w,vt,Ct,k,Ut.z,null)}}const ht=w.children;for(let vt=0,Ct=ht.length;vt<Ct;vt++)Ws(ht[vt],F,k,V)}function qa(w,F,k,V){const O=w.opaque,ht=w.transmissive,vt=w.transparent;p.setupLightsView(k),oe===!0&&ft.setGlobalState(_.clippingPlanes,k),V&&N.viewport(P.copy(V)),O.length>0&&Vr(O,F,k),ht.length>0&&Vr(ht,F,k),vt.length>0&&Vr(vt,F,k),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Ya(w,F,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Si(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Or:bn,minFilter:Mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const ht=p.state.transmissionRenderTarget[V.id],vt=V.viewport||P;ht.setSize(vt.z*_.transmissionResolutionScale,vt.w*_.transmissionResolutionScale);const Ct=_.getRenderTarget(),bt=_.getActiveCubeFace(),Vt=_.getActiveMipmapLevel();_.setRenderTarget(ht),_.getClearColor(J),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),Jt&&Lt.render(k);const Wt=_.toneMapping;_.toneMapping=Qn;const zt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),oe===!0&&ft.setGlobalState(_.clippingPlanes,V),Vr(w,k,V),nt.updateMultisampleRenderTarget(ht),nt.updateRenderTargetMipmap(ht),Q.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let pe=0,be=F.length;pe<be;pe++){const ve=F[pe],_e=ve.object,Ht=ve.geometry,ye=ve.material,ce=ve.group;if(ye.side===Ie&&_e.layers.test(V.layers)){const Je=ye.side;ye.side=Ze,ye.needsUpdate=!0,$a(_e,k,V,Ht,ye,ce),ye.side=Je,ye.needsUpdate=!0,re=!0}}re===!0&&(nt.updateMultisampleRenderTarget(ht),nt.updateRenderTargetMipmap(ht))}_.setRenderTarget(Ct,bt,Vt),_.setClearColor(J,G),zt!==void 0&&(V.viewport=zt),_.toneMapping=Wt}function Vr(w,F,k){const V=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ht=w.length;O<ht;O++){const vt=w[O],Ct=vt.object,bt=vt.geometry,Vt=vt.group;let Wt=vt.material;Wt.allowOverride===!0&&V!==null&&(Wt=V),Ct.layers.test(k.layers)&&$a(Ct,F,k,bt,Wt,Vt)}}function $a(w,F,k,V,O,ht){w.onBeforeRender(_,F,k,V,O,ht),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(_,F,k,V,w,ht),O.transparent===!0&&O.side===Ie&&O.forceSinglePass===!1?(O.side=Ze,O.needsUpdate=!0,_.renderBufferDirect(k,F,V,O,w,ht),O.side=ti,O.needsUpdate=!0,_.renderBufferDirect(k,F,V,O,w,ht),O.side=Ie):_.renderBufferDirect(k,F,V,O,w,ht),w.onAfterRender(_,F,k,V,O,ht)}function Gr(w,F,k){F.isScene!==!0&&(F=Tt);const V=q.get(w),O=p.state.lights,ht=p.state.shadowsArray,vt=O.state.version,Ct=X.getParameters(w,O.state,ht,F,k),bt=X.getProgramCacheKey(Ct);let Vt=V.programs;V.environment=w.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(w.isMeshStandardMaterial?Bt:Rt).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Vt===void 0&&(w.addEventListener("dispose",et),Vt=new Map,V.programs=Vt);let Wt=Vt.get(bt);if(Wt!==void 0){if(V.currentProgram===Wt&&V.lightsStateVersion===vt)return Ja(w,Ct),Wt}else Ct.uniforms=X.getUniforms(w),w.onBeforeCompile(Ct,_),Wt=X.acquireProgram(Ct,bt),Vt.set(bt,Wt),V.uniforms=Ct.uniforms;const zt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(zt.clippingPlanes=ft.uniform),Ja(w,Ct),V.needsLights=dh(w),V.lightsStateVersion=vt,V.needsLights&&(zt.ambientLightColor.value=O.state.ambient,zt.lightProbe.value=O.state.probe,zt.directionalLights.value=O.state.directional,zt.directionalLightShadows.value=O.state.directionalShadow,zt.spotLights.value=O.state.spot,zt.spotLightShadows.value=O.state.spotShadow,zt.rectAreaLights.value=O.state.rectArea,zt.ltc_1.value=O.state.rectAreaLTC1,zt.ltc_2.value=O.state.rectAreaLTC2,zt.pointLights.value=O.state.point,zt.pointLightShadows.value=O.state.pointShadow,zt.hemisphereLights.value=O.state.hemi,zt.directionalShadowMap.value=O.state.directionalShadowMap,zt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,zt.spotShadowMap.value=O.state.spotShadowMap,zt.spotLightMatrix.value=O.state.spotLightMatrix,zt.spotLightMap.value=O.state.spotLightMap,zt.pointShadowMap.value=O.state.pointShadowMap,zt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Wt,V.uniformsList=null,Wt}function Za(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=As.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Ja(w,F){const k=q.get(w);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function uh(w,F,k,V,O){F.isScene!==!0&&(F=Tt),nt.resetTextureUnits();const ht=F.fog,vt=V.isMeshStandardMaterial?F.environment:null,Ct=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ir,bt=(V.isMeshStandardMaterial?Bt:Rt).get(V.envMap||vt),Vt=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Wt=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),zt=!!k.morphAttributes.position,re=!!k.morphAttributes.normal,pe=!!k.morphAttributes.color;let be=Qn;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(be=_.toneMapping);const ve=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_e=ve!==void 0?ve.length:0,Ht=q.get(V),ye=p.state.lights;if(oe===!0&&(K===!0||w!==v)){const Ve=w===v&&V.id===E;ft.setState(V,w,Ve)}let ce=!1;V.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==ye.state.version||Ht.outputColorSpace!==Ct||O.isBatchedMesh&&Ht.batching===!1||!O.isBatchedMesh&&Ht.batching===!0||O.isBatchedMesh&&Ht.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ht.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ht.instancing===!1||!O.isInstancedMesh&&Ht.instancing===!0||O.isSkinnedMesh&&Ht.skinning===!1||!O.isSkinnedMesh&&Ht.skinning===!0||O.isInstancedMesh&&Ht.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ht.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ht.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ht.instancingMorph===!1&&O.morphTexture!==null||Ht.envMap!==bt||V.fog===!0&&Ht.fog!==ht||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ft.numPlanes||Ht.numIntersection!==ft.numIntersection)||Ht.vertexAlphas!==Vt||Ht.vertexTangents!==Wt||Ht.morphTargets!==zt||Ht.morphNormals!==re||Ht.morphColors!==pe||Ht.toneMapping!==be||Ht.morphTargetsCount!==_e)&&(ce=!0):(ce=!0,Ht.__version=V.version);let Je=Ht.currentProgram;ce===!0&&(Je=Gr(V,F,O));let Ai=!1,Ke=!1,hr=!1;const Se=Je.getUniforms(),rn=Ht.uniforms;if(N.useProgram(Je.program)&&(Ai=!0,Ke=!0,hr=!0),V.id!==E&&(E=V.id,Ke=!0),Ai||v!==w){N.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Se.setValue(L,"projectionMatrix",w.projectionMatrix),Se.setValue(L,"viewMatrix",w.matrixWorldInverse);const qe=Se.map.cameraPosition;qe!==void 0&&qe.setValue(L,St.setFromMatrixPosition(w.matrixWorld)),j.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Se.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,Ke=!0,hr=!0)}if(O.isSkinnedMesh){Se.setOptional(L,O,"bindMatrix"),Se.setOptional(L,O,"bindMatrixInverse");const Ve=O.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Se.setValue(L,"boneTexture",Ve.boneTexture,nt))}O.isBatchedMesh&&(Se.setOptional(L,O,"batchingTexture"),Se.setValue(L,"batchingTexture",O._matricesTexture,nt),Se.setOptional(L,O,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",O._indirectTexture,nt),Se.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",O._colorsTexture,nt));const sn=k.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&ct.update(O,k,Je),(Ke||Ht.receiveShadow!==O.receiveShadow)&&(Ht.receiveShadow=O.receiveShadow,Se.setValue(L,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(rn.envMap.value=bt,rn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(rn.envMapIntensity.value=F.environmentIntensity),Ke&&(Se.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ht.needsLights&&fh(rn,hr),ht&&V.fog===!0&&st.refreshFogUniforms(rn,ht),st.refreshMaterialUniforms(rn,V,W,tt,p.state.transmissionRenderTarget[w.id]),As.upload(L,Za(Ht),rn,nt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(As.upload(L,Za(Ht),rn,nt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Se.setValue(L,"center",O.center),Se.setValue(L,"modelViewMatrix",O.modelViewMatrix),Se.setValue(L,"normalMatrix",O.normalMatrix),Se.setValue(L,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ve=V.uniformsGroups;for(let qe=0,Xs=Ve.length;qe<Xs;qe++){const si=Ve[qe];Kt.update(si,Je),Kt.bind(si,Je)}}return Je}function fh(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function dh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,F,k){const V=q.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=F,q.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const k=q.get(w);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0};const ph=L.createFramebuffer();this.setRenderTarget=function(w,F=0,k=0){D=w,b=F,C=k;let V=!0,O=null,ht=!1,vt=!1;if(w){const bt=q.get(w);if(bt.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(bt.__webglFramebuffer===void 0)nt.setupRenderTarget(w);else if(bt.__hasExternalTextures)nt.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const zt=w.depthTexture;if(bt.__boundDepthTexture!==zt){if(zt!==null&&q.has(zt)&&(w.width!==zt.image.width||w.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(w)}}const Vt=w.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(vt=!0);const Wt=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[F])?O=Wt[F][k]:O=Wt[F],ht=!0):w.samples>0&&nt.useMultisampledRTT(w)===!1?O=q.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?O=Wt[k]:O=Wt,P.copy(w.viewport),U.copy(w.scissor),z=w.scissorTest}else P.copy(wt).multiplyScalar(W).floor(),U.copy(qt).multiplyScalar(W).floor(),z=ie;if(k!==0&&(O=ph),N.bindFramebuffer(L.FRAMEBUFFER,O)&&V&&N.drawBuffers(w,O),N.viewport(P),N.scissor(U),N.setScissorTest(z),ht){const bt=q.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,bt.__webglTexture,k)}else if(vt){const bt=F;for(let Vt=0;Vt<w.textures.length;Vt++){const Wt=q.get(w.textures[Vt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,k,bt)}}else if(w!==null&&k!==0){const bt=q.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,k)}E=-1},this.readRenderTargetPixels=function(w,F,k,V,O,ht,vt,Ct=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){N.bindFramebuffer(L.FRAMEBUFFER,bt);try{const Vt=w.textures[Ct],Wt=Vt.format,zt=Vt.type;if(!j.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-V&&k>=0&&k<=w.height-O&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ct),L.readPixels(F,k,V,O,Nt.convert(Wt),Nt.convert(zt),ht))}finally{const Vt=D!==null?q.get(D).__webglFramebuffer:null;N.bindFramebuffer(L.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(w,F,k,V,O,ht,vt,Ct=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt)if(F>=0&&F<=w.width-V&&k>=0&&k<=w.height-O){N.bindFramebuffer(L.FRAMEBUFFER,bt);const Vt=w.textures[Ct],Wt=Vt.format,zt=Vt.type;if(!j.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const re=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,re),L.bufferData(L.PIXEL_PACK_BUFFER,ht.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ct),L.readPixels(F,k,V,O,Nt.convert(Wt),Nt.convert(zt),0);const pe=D!==null?q.get(D).__webglFramebuffer:null;N.bindFramebuffer(L.FRAMEBUFFER,pe);const be=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await vu(L,be,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,re),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ht),L.deleteBuffer(re),L.deleteSync(be),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,k=0){const V=Math.pow(2,-k),O=Math.floor(w.image.width*V),ht=Math.floor(w.image.height*V),vt=F!==null?F.x:0,Ct=F!==null?F.y:0;nt.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,vt,Ct,O,ht),N.unbindTexture()};const mh=L.createFramebuffer(),gh=L.createFramebuffer();this.copyTextureToTexture=function(w,F,k=null,V=null,O=0,ht=null){ht===null&&(O!==0?(Dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=O,O=0):ht=0);let vt,Ct,bt,Vt,Wt,zt,re,pe,be;const ve=w.isCompressedTexture?w.mipmaps[ht]:w.image;if(k!==null)vt=k.max.x-k.min.x,Ct=k.max.y-k.min.y,bt=k.isBox3?k.max.z-k.min.z:1,Vt=k.min.x,Wt=k.min.y,zt=k.isBox3?k.min.z:0;else{const sn=Math.pow(2,-O);vt=Math.floor(ve.width*sn),Ct=Math.floor(ve.height*sn),w.isDataArrayTexture?bt=ve.depth:w.isData3DTexture?bt=Math.floor(ve.depth*sn):bt=1,Vt=0,Wt=0,zt=0}V!==null?(re=V.x,pe=V.y,be=V.z):(re=0,pe=0,be=0);const _e=Nt.convert(F.format),Ht=Nt.convert(F.type);let ye;F.isData3DTexture?(nt.setTexture3D(F,0),ye=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(nt.setTexture2DArray(F,0),ye=L.TEXTURE_2D_ARRAY):(nt.setTexture2D(F,0),ye=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const ce=L.getParameter(L.UNPACK_ROW_LENGTH),Je=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ai=L.getParameter(L.UNPACK_SKIP_PIXELS),Ke=L.getParameter(L.UNPACK_SKIP_ROWS),hr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ve.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ve.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Vt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,zt);const Se=w.isDataArrayTexture||w.isData3DTexture,rn=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const sn=q.get(w),Ve=q.get(F),qe=q.get(sn.__renderTarget),Xs=q.get(Ve.__renderTarget);N.bindFramebuffer(L.READ_FRAMEBUFFER,qe.__webglFramebuffer),N.bindFramebuffer(L.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let si=0;si<bt;si++)Se&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(w).__webglTexture,O,zt+si),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(F).__webglTexture,ht,be+si)),L.blitFramebuffer(Vt,Wt,vt,Ct,re,pe,vt,Ct,L.DEPTH_BUFFER_BIT,L.NEAREST);N.bindFramebuffer(L.READ_FRAMEBUFFER,null),N.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||q.has(w)){const sn=q.get(w),Ve=q.get(F);N.bindFramebuffer(L.READ_FRAMEBUFFER,mh),N.bindFramebuffer(L.DRAW_FRAMEBUFFER,gh);for(let qe=0;qe<bt;qe++)Se?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,sn.__webglTexture,O,zt+qe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,sn.__webglTexture,O),rn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ve.__webglTexture,ht,be+qe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ve.__webglTexture,ht),O!==0?L.blitFramebuffer(Vt,Wt,vt,Ct,re,pe,vt,Ct,L.COLOR_BUFFER_BIT,L.NEAREST):rn?L.copyTexSubImage3D(ye,ht,re,pe,be+qe,Vt,Wt,vt,Ct):L.copyTexSubImage2D(ye,ht,re,pe,Vt,Wt,vt,Ct);N.bindFramebuffer(L.READ_FRAMEBUFFER,null),N.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else rn?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(ye,ht,re,pe,be,vt,Ct,bt,_e,Ht,ve.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(ye,ht,re,pe,be,vt,Ct,bt,_e,ve.data):L.texSubImage3D(ye,ht,re,pe,be,vt,Ct,bt,_e,Ht,ve):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ht,re,pe,vt,Ct,_e,Ht,ve.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ht,re,pe,ve.width,ve.height,_e,ve.data):L.texSubImage2D(L.TEXTURE_2D,ht,re,pe,vt,Ct,_e,Ht,ve);L.pixelStorei(L.UNPACK_ROW_LENGTH,ce),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ai),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,hr),ht===0&&F.generateMipmaps&&L.generateMipmap(ye),N.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&nt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?nt.setTextureCube(w,0):w.isData3DTexture?nt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?nt.setTexture2DArray(w,0):nt.setTexture2D(w,0),N.unbindTexture()},this.resetState=function(){b=0,C=0,D=null,N.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}let kn=91731;function gt(){return kn=kn*1664525+1013904223>>>0,kn/4294967296}function Hn(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,e}function Vn(i,{repeat:t=[1,1],srgb:e=!0}={}){const n=new ni(i);return n.wrapS=nr,n.wrapT=nr,n.repeat.set(t[0],t[1]),n.anisotropy=8,e&&(n.colorSpace=Pe),n.needsUpdate=!0,n}function vg(){kn=91731;const i=1024,t=Hn(i,i),e=t.getContext("2d"),n=e.createLinearGradient(0,0,i,i);n.addColorStop(0,"#ffb457"),n.addColorStop(.32,"#f7982f"),n.addColorStop(.68,"#ef811c"),n.addColorStop(1,"#d9610d"),e.fillStyle=n,e.fillRect(0,0,i,i);for(let a=0;a<34;a++){const l=gt()*i,c=gt()*i,h=60+gt()*230,u=e.createRadialGradient(l,c,0,l,c,h),f=gt()>.45;u.addColorStop(0,f?"rgba(255,206,116,0.17)":"rgba(178,58,2,0.15)"),u.addColorStop(1,"rgba(255,180,80,0)"),e.fillStyle=u,e.beginPath(),e.arc(l,c,h,0,Math.PI*2),e.fill()}for(let a=0;a<5400;a++){const l=gt()*i,c=gt()*i,h=gt()*2.3+.25;e.fillStyle=gt()>.52?`rgba(127,45,4,${.07+gt()*.25})`:`rgba(255,222,151,${.06+gt()*.2})`,e.beginPath(),e.arc(l,c,h,0,Math.PI*2),e.fill()}for(let a=0;a<490;a++){const l=gt()*i,c=gt()*i,h=1.2+gt()*4.2;e.strokeStyle=`rgba(117,39,3,${.1+gt()*.18})`,e.lineWidth=.8+gt()*1.4,e.beginPath(),e.arc(l,c,h,0,Math.PI*2),e.stroke()}for(let a=0;a<1400;a++){const l=gt()*i,c=gt()*i,h=1.5+gt()*4;e.strokeStyle=`rgba(255,239,205,${.03+gt()*.08})`,e.lineWidth=.7,e.beginPath(),e.moveTo(l,c),e.lineTo(l+(gt()-.5)*3,c-h),e.stroke()}const r=Hn(512,512),s=r.getContext("2d"),o=s.createImageData(512,512);for(let a=0;a<o.data.length;a+=4){const l=100+Math.floor(gt()*70);o.data[a]=o.data[a+1]=o.data[a+2]=l,o.data[a+3]=255}s.putImageData(o,0,0);for(let a=0;a<900;a++)s.fillStyle=`rgba(30,30,30,${.16+gt()*.34})`,s.beginPath(),s.arc(gt()*512,gt()*512,.5+gt()*2.4,0,Math.PI*2),s.fill();return{map:Vn(t),bump:Vn(r,{srgb:!1})}}function Mg(){kn=41123;const i=1024,t=Hn(i,i),e=t.getContext("2d");e.fillStyle="#353b3a",e.fillRect(0,0,i,i);for(let n=0;n<230;n++){const r=gt()*i,s=gt()*i,o=20+gt()*160,a=e.createRadialGradient(r,s,0,r,s,o);a.addColorStop(0,`rgba(${gt()>.5?"16,20,19":"82,85,78"},${.05+gt()*.1})`),a.addColorStop(1,"rgba(30,34,33,0)"),e.fillStyle=a,e.beginPath(),e.arc(r,s,o,0,Math.PI*2),e.fill()}for(let n=0;n<12e3;n++){const r=35+Math.floor(gt()*40);e.fillStyle=`rgba(${r},${r+3},${r+1},${.15+gt()*.4})`,e.fillRect(gt()*i,gt()*i,1+gt()*2.2,1+gt()*2.2)}e.strokeStyle="rgba(12,15,15,0.55)";for(let n=0;n<14;n++){let r=gt()*i,s=gt()*i;e.lineWidth=.6+gt()*1.8,e.beginPath(),e.moveTo(r,s);for(let o=0;o<9;o++)r+=(gt()-.5)*90,s+=(gt()-.5)*90,e.lineTo(r,s);e.stroke()}for(let n=0;n<24;n++){const r=gt()*i,s=gt()*i,o=e.createRadialGradient(r,s,1,r,s,30+gt()*80);o.addColorStop(0,`rgba(10,12,11,${.12+gt()*.2})`),o.addColorStop(1,"rgba(10,12,11,0)"),e.fillStyle=o,e.beginPath(),e.arc(r,s,80,0,Math.PI*2),e.fill()}return Vn(t,{repeat:[7,7]})}function yg(){kn=771;const i=Hn(1024,1024),t=i.getContext("2d");t.fillStyle="#242c2d",t.fillRect(0,0,1024,1024);for(let e=0;e<7e3;e++){const n=24+gt()*26;t.fillStyle=`rgba(${n},${n+4},${n+4},${.2+gt()*.35})`,t.fillRect(gt()*1024,gt()*1024,1+gt()*4,1+gt()*4)}t.strokeStyle="rgba(9,13,14,0.28)",t.lineWidth=2;for(let e=0;e<1024;e+=86){t.beginPath(),t.moveTo(0,e),t.lineTo(1024,e),t.stroke();for(let n=e/86%2*70;n<1024;n+=140)t.beginPath(),t.moveTo(n,e),t.lineTo(n,e+86),t.stroke()}for(let e=0;e<40;e++){const n=gt()*1024,r=2+gt()*16,s=t.createLinearGradient(0,0,0,1024);s.addColorStop(0,"rgba(8,12,13,0.28)"),s.addColorStop(.7,"rgba(8,12,13,0.1)"),s.addColorStop(1,"rgba(8,12,13,0)"),t.fillStyle=s,t.fillRect(n,0,r,1024)}return Vn(i,{repeat:[3,1]})}function nh(){kn=112;const i=Hn(512,512),t=i.getContext("2d");t.fillStyle="#5e3e24",t.fillRect(0,0,512,512);for(let e=0;e<5e3;e++){const n=40+gt()*70;t.fillStyle=`rgba(${n+40},${n+10},${Math.max(8,n-18)},${.1+gt()*.3})`,t.fillRect(gt()*512,gt()*512,2+gt()*22,.6+gt()*1.4)}for(let e=0;e<34;e++){const n=gt()*512;t.strokeStyle=`rgba(28,14,6,${.12+gt()*.26})`,t.lineWidth=1+gt()*2,t.beginPath(),t.moveTo(0,n);for(let r=0;r<=512;r+=16)t.lineTo(r,n+Math.sin(r*.035+e)*(2+gt()*4));t.stroke()}return Vn(i,{repeat:[1,1]})}function Ha(i,t,e,n,r="900"){let s=n;do{if(i.font=`${r} ${s}px "Arial Black", "DejaVu Sans", Impact, sans-serif`,i.measureText(t).width<=e)return s;s-=2}while(s>10);return s}function Sg(i,t,e,n){i.beginPath(),i.moveTo(t,e+n*.3),i.bezierCurveTo(t-n*.54,e-n*.16,t-n*.52,e-n*.62,t-n*.22,e-n*.62),i.bezierCurveTo(t-n*.08,e-n*.62,t,e-n*.52,t,e-n*.4),i.bezierCurveTo(t,e-n*.52,t+n*.08,e-n*.62,t+n*.22,e-n*.62),i.bezierCurveTo(t+n*.52,e-n*.62,t+n*.54,e-n*.16,t,e+n*.3),i.closePath()}function Eg(){kn=4242;const i=1024,t=512,e=Hn(i,t),n=e.getContext("2d");n.clearRect(0,0,i,t);const r="I LOVE 2016",s=Ha(n,r,700,152,"900");n.font=`900 ${s}px "Arial Black", "DejaVu Sans", Impact, sans-serif`,n.textAlign="left",n.textBaseline="middle";const o=s*.92,a=s*.16,l=n.measureText(r).width,c=l+a+o,h=(i-c)/2,u=t*.52;n.save(),n.filter="blur(5px)",n.fillStyle="rgba(48, 39, 28, 0.28)",n.textAlign="left",n.font=`900 ${s}px "Arial Black", "DejaVu Sans", Impact, sans-serif`,n.fillText(r,h+3,u+5),n.restore(),n.fillStyle="#151514",n.fillText(r,h,u);const f=h+l+a+o/2;n.save(),n.translate(f,u+o*.16),Sg(n,0,0,o);const d=n.createLinearGradient(0,-o*.6,0,o*.35);return d.addColorStop(0,"#ef5b54"),d.addColorStop(1,"#a81218"),n.fillStyle=d,n.fill(),n.lineWidth=6,n.strokeStyle="#171716",n.stroke(),n.restore(),Vn(e)}function wg(){kn=7301;const i=1024,t=512,e=Hn(i,t),n=e.getContext("2d"),r=n.createLinearGradient(0,0,0,t);r.addColorStop(0,"#c99a5b"),r.addColorStop(.5,"#b58449"),r.addColorStop(1,"#986631"),n.fillStyle=r,n.fillRect(0,0,i,t);for(let a=0;a<3600;a++){const l=60+gt()*100;n.fillStyle=`rgba(${l+45},${l+18},${l-18},${.08+gt()*.2})`,n.fillRect(gt()*i,gt()*t,4+gt()*44,1+gt()*1.7)}for(let a=0;a<22;a++){const l=gt()*t;n.strokeStyle=`rgba(67,39,17,${.1+gt()*.28})`,n.lineWidth=1+gt()*2,n.beginPath(),n.moveTo(0,l);for(let c=0;c<=i;c+=22)n.lineTo(c,l+Math.sin(c*.02+a)*(2+gt()*5));n.stroke()}n.fillStyle="rgba(248, 232, 198, 0.92)",n.fillRect(44,66,i-88,t-132),n.strokeStyle="rgba(83, 48, 19, 0.55)",n.lineWidth=6,n.strokeRect(44,66,i-88,t-132),n.strokeStyle="rgba(67,36,13,0.8)",n.lineWidth=18,n.strokeRect(9,9,i-18,t-18),n.fillStyle="rgba(60,32,11,0.55)";for(const[a,l]of[[34,34],[i-34,34],[34,t-34],[i-34,t-34]])n.beginPath(),n.arc(a,l,7,0,Math.PI*2),n.fill();const s="Aciz bir dilsizim",o=Ha(n,s,840,150,"800");return n.font=`800 ${o}px "Arial Black", "DejaVu Sans", Impact, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillStyle="rgba(54, 38, 22, 0.2)",n.fillText(s,i/2+2,t/2+4),n.fillStyle="#231a10",n.fillText(s,i/2,t/2),n.strokeStyle="rgba(35, 26, 16, 0.8)",n.lineWidth=5,n.beginPath(),n.moveTo(i*.19,t*.71),n.quadraticCurveTo(i*.5,t*.75,i*.81,t*.7),n.stroke(),Vn(e)}function il(i,t="#ff9138"){const e=Hn(1024,320),n=e.getContext("2d");n.clearRect(0,0,1024,320),n.textAlign="center",n.textBaseline="middle";const r=Ha(n,i,900,210,"900");return n.font=`900 ${r}px "Arial Black", "DejaVu Sans", Impact, sans-serif`,n.shadowColor=t,n.shadowBlur=46,n.fillStyle=t,n.fillText(i,512,162),n.shadowBlur=18,n.fillStyle="#ffe3b3",n.fillText(i,512,162),n.shadowBlur=0,Vn(e)}function rl(i,t,e="#e8dfc9"){const n=Hn(512,768),r=n.getContext("2d");r.fillStyle="#c9c1ad",r.fillRect(0,0,512,768),r.fillStyle="rgba(35,38,36,0.08)";for(let o=0;o<3e3;o++)r.fillRect(gt()*512,gt()*768,2,2);return r.fillStyle=e,r.fillRect(28,28,456,712),r.fillStyle="#1c2222",r.textAlign="center",r.font='900 70px "Arial Black", "DejaVu Sans", sans-serif',i.split(" ").forEach((o,a)=>r.fillText(o,256,260+a*76)),r.font='700 25px "DejaVu Sans", sans-serif',r.fillStyle="#7c2418",r.fillText(t,256,560),r.strokeStyle="rgba(28,34,34,0.5)",r.lineWidth=6,r.strokeRect(60,610,392,80),r.font='700 22px "DejaVu Sans", sans-serif',r.fillStyle="#1c2222",r.fillText("FIGHT NIGHT · ALL WELCOME",256,660),Vn(n)}const vr=Math.PI*2;function Yt(i,t,e,n=[0,0,0],r=[0,0,0],s=[1,1,1]){const o=new nn(t,e);return o.position.set(...n),o.rotation.set(...r),o.scale.set(...s),i.add(o),o}function Tg(){const i=document.createElement("canvas");i.width=128,i.height=128;const t=i.getContext("2d");t.clearRect(0,0,128,128),t.strokeStyle="rgba(185, 202, 196, 0.72)",t.lineWidth=2;for(let n=-128;n<256;n+=18)t.beginPath(),t.moveTo(n,0),t.lineTo(n+128,128),t.stroke(),t.beginPath(),t.moveTo(n+128,0),t.lineTo(n,128),t.stroke();const e=new ni(i);return e.wrapS=e.wrapT=nr,e.repeat.set(8,2),e.colorSpace=Pe,e}function bg(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,240,1)"),e.addColorStop(.18,"rgba(255,238,200,0.8)"),e.addColorStop(.55,"rgba(255,200,120,0.18)"),e.addColorStop(1,"rgba(255,190,100,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ni(i)}function sl(i,t){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d");n.clearRect(0,0,1024,512),n.save(),n.translate(512,256),n.rotate(-.06),n.font='900 190px "Arial Black", Impact, "DejaVu Sans", sans-serif',n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.lineWidth=18,n.strokeStyle="rgba(8,12,12,0.55)",n.strokeText(i,0,0),n.fillStyle=t,n.fillText(i,0,0),n.globalAlpha=.32,n.strokeStyle="rgba(255,255,255,0.3)",n.lineWidth=4,n.strokeText(i,0,0),n.restore();const r=new ni(e);return r.colorSpace=Pe,r}function Ag(i){const t=Mg(),e=yg(),n=nh(),r=[];i.background=new Zt("#071013"),i.fog=new Da("#071013",.031);const s=new Pf("#5a7c86","#1a0f08",1.1);i.add(s),i.add(new If("#223338",.7));const o=new Eo("#ffc48c",2.8);o.position.set(5,10,7),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.left=-9,o.shadow.camera.right=9,o.shadow.camera.top=9,o.shadow.camera.bottom=-7,o.shadow.camera.near=1,o.shadow.camera.far=30,o.shadow.bias=-7e-4,o.shadow.normalBias=.025,i.add(o);const a=new Eo("#55d8d1",1.65);a.position.set(-8,6,-8),i.add(a);const l=new Eo("#ff7c3d",1.2);l.position.set(8,4,-5),i.add(l);const c=Yt(i,new Re(64,64),new yt({map:t,color:"#b9c2bd",roughness:.78,metalness:.12}),[0,0,0],[-Math.PI/2,0,0]);c.receiveShadow=!0;const h=Yt(i,new Is(4.85,5.02,96),new Ce({color:"#ded5ba",transparent:!0,opacity:.2,side:Ie}),[.2,.012,-.3],[-Math.PI/2,0,0]);h.renderOrder=1,Yt(i,new Is(.55,.62,48),new Ce({color:"#d7c8a4",transparent:!0,opacity:.1,side:Ie}),[.2,.013,-.3],[-Math.PI/2,0,0]);const u=new bs({color:"#10181a",roughness:.09,metalness:.62,clearcoat:.8,transparent:!0,opacity:.68,side:Ie});for(const[N,$,q,nt]of[[-3.1,3.2,1.3,.3],[2.3,4.3,.9,-.4],[5.1,.8,1.4,.8],[-5.8,-1.7,1.1,.2],[.7,-3.5,.75,.6]]){const Rt=Yt(i,new Bs(1,28),u,[N,.015,$],[-Math.PI/2,0,nt],[q,q*.55,1]);Rt.renderOrder=2}const f=Yt(i,new Re(44,13),new yt({map:e,color:"#929b98",roughness:.94}),[0,6.5,-9.5]);f.receiveShadow=!0;const d=Yt(i,new Re(30,12),new yt({map:e,color:"#87908d",roughness:.95}),[-12.5,6,2],[0,Math.PI/2,0]);d.receiveShadow=!0;const g=Yt(i,new Re(30,12),new yt({map:e,color:"#7d8784",roughness:.95}),[12.5,6,2],[0,-Math.PI/2,0]);g.receiveShadow=!0;for(const N of[-10.8,10.8]){const $=Yt(i,new ne(1.05,12,1.05),new yt({map:e,color:"#757e7b",roughness:.96}),[N,6,-7.7]);$.castShadow=!0,$.receiveShadow=!0,Yt(i,new ne(1.35,.3,1.35),new yt({color:"#3a4140",roughness:.9}),[N,.15,-7.7])}const M=new yt({color:"#303a3b",roughness:.74,metalness:.55});for(let N=0;N<5;N++)Yt(i,new ne(26,.34,.4),M,[0,8.7-N*.08,-7.2+N*3.3],[0,0,0]);for(const N of[-8.1,-2.9,2.5,7.9])Yt(i,new ne(.26,.26,20),M,[N,8.35,1.2]);Yt(i,new Ot(.32,.32,19,12),new yt({color:"#4a5352",roughness:.72,metalness:.5}),[-9.3,7.9,.5],[Math.PI/2,0,0]);const m=new yt({color:"#6f7774",metalness:.85,roughness:.45}),p=new sr([new R(6.8,8.5,-4.8),new R(6.8,5.6,-4.6),new R(6.5,3.8,-4.1)]);Yt(i,new wi(p,16,.035,6,!1),m),Yt(i,new _n(.16,.035,5,12),m,[6.5,3.6,-4.1],[.4,.2,0]);const S=new Ce({color:"#ffd9a2"}),y=new yt({color:"#28302f",roughness:.62,metalness:.7,side:Ie}),_=[[-4.7,6.7,2.2,1],[4.4,6.9,-2.2,.85],[.1,7.5,-5.6,.7]],A=new Ce({color:"#ffc077",transparent:!0,opacity:.055,blending:yn,depthWrite:!1,side:Ie});for(const[N,$,q,nt]of _){const Rt=new Le;Rt.position.set(N,$,q),i.add(Rt),Yt(Rt,new Ot(.035,.035,1.2,6),m,[0,.7,0]),Yt(Rt,new zn(.48,.44,18,1,!0),y,[0,.15,0],[0,0,0]),Yt(Rt,new ii(.12,12,8),S,[0,.02,0]);const Bt=new So("#ffb267",22,13,1.8);Bt.position.set(0,-.15,0),Rt.add(Bt),Yt(Rt,new zn(2.15,5.5,28,1,!0),A.clone(),[0,-2.75,0],[Math.PI,0,0]),r.push(T=>{Bt.intensity=18+Math.sin(T*3.1+nt*7)*1.2+Math.sin(T*13.7+nt)*.5})}const b=new Ce({map:il("KAYISI","#ff8e2f"),transparent:!0,blending:yn,depthWrite:!1,opacity:.95}),C=Yt(i,new Re(6.4,2),b,[.3,4.95,-9.43]);C.renderOrder=3;const D=new So("#ff791c",34,17,2);D.position.set(.3,4.6,-8.2),i.add(D),r.push(N=>{const $=Math.sin(N*8.3)>.96?.25:1;b.opacity=(.78+Math.sin(N*1.3)*.05)*$,D.intensity=30*$});const E=new Ce({map:il("DÖVÜŞ","#55ded4"),transparent:!0,blending:yn,depthWrite:!1,opacity:.7});Yt(i,new Re(3.6,1.12),E,[-11.9,5.9,-1.6],[0,Math.PI/2,0]);const v=new So("#3bd6cc",18,12,2);v.position.set(-10.8,5.2,-1.6),i.add(v);const P=new yt({map:rl("KAYISI","RIPE FURY","#e6dcc4"),roughness:.95});Yt(i,new Re(1.8,2.7),P,[-7.3,4.4,-9.42]);const U=new yt({map:rl("FIGHT","NO REFUNDS","#d3cab2"),roughness:.95});Yt(i,new Re(1.6,2.4),U,[8.9,4.6,-9.42],[0,0,.03]);const z=new Ce({map:sl("ACIZ","#d3a04a"),transparent:!0,opacity:.42,depthWrite:!1});Yt(i,new Re(4.6,2.3),z,[5.4,2.7,-9.4]);const J=new Ce({map:sl("2016","#be4b3c"),transparent:!0,opacity:.3,depthWrite:!1});Yt(i,new Re(3.8,1.9),J,[-4.6,2.3,-9.4]);const G=new yt({color:"#525d5b",roughness:.66,metalness:.62});Yt(i,new Ot(.14,.14,12,10),G,[-9.9,5.2,-9.2],[0,0,0]),Yt(i,new Ot(.19,.19,5,10),G,[9.6,3.6,-9.1],[0,0,Math.PI/2]),Yt(i,new ne(1.5,1.1,.2),new yt({color:"#3b4544",roughness:.7,metalness:.5}),[5.6,7.2,-9.3]);for(let N=0;N<6;N++)Yt(i,new ne(1.3,.045,.04),new yt({color:"#151c1c"}),[5.6,6.8+N*.14,-9.18]);const Z=Tg(),tt=new Ce({map:Z,transparent:!0,opacity:.4,alphaTest:.14,side:Ie,color:"#9ca8a3",depthWrite:!1}),W=new yt({color:"#38413f",metalness:.8,roughness:.55});for(const[N,$]of[[-7.6,7.2],[7.6,7.2]]){const q=Yt(i,new Re($,3.1),tt,[N,1.55,-7.3],[0,0,0]);q.renderOrder=2;for(const nt of[-$/2,$/2])Yt(i,new Ot(.055,.055,3.3,8),W,[N+nt,1.65,-7.3]);Yt(i,new Ot(.04,.04,$,8),W,[N,3.13,-7.3],[0,0,Math.PI/2])}const dt=new yt({color:"#151d1e",roughness:.96}),_t=[];for(let N=0;N<20;N++){const $=new Le,q=N%2===0?-1:1;$.position.set(q*(3.6+Math.random()*5.3),0,-8.2+Math.random()*.55),$.rotation.y=Math.PI+(Math.random()-.5)*.5;const nt=.78+Math.random()*.45;$.scale.setScalar(nt),i.add($),Yt($,new Tn(.24,.72,5,10),dt,[0,1,0]),Rg($,.16,dt,[0,1.6,0]),Math.random()>.55&&Yt($,new Re(.09,.16),new Ce({color:Math.random()>.5?"#a7e5de":"#ffe1a6"}),[.18,1.18,.2],[0,.3,0]),$.userData.phase=Math.random()*vr,_t.push($)}const wt=bg(),qt=[];for(let N=0;N<8;N++){const $=new ji({map:wt,transparent:!0,blending:yn,depthWrite:!1,opacity:0}),q=new wr($);q.position.set(-8+Math.random()*16,1.5+Math.random()*1.4,-7.6+Math.random()*.6),q.scale.setScalar(1.2),i.add(q),q.userData={phase:Math.random()*vr,speed:.6+Math.random()*1.4},qt.push(q)}r.push(N=>{for(const $ of qt){const q=$.userData.phase,nt=Math.max(0,Math.sin(N*$.userData.speed*2.1+q)-.94)/.06;$.material.opacity=nt*.8}});const ie=["#5e2a1f","#223d47","#5d4a1e"];for(const[N,$,q,nt]of[[-5.3,-3.9,0,.2],[5.9,-4.4,1,-.1],[-6.1,3.8,2,.5],[4.5,4.3,0,.9]]){const Rt=new Le;Rt.position.set(N,0,$),Rt.rotation.y=nt,i.add(Rt);const Bt=new yt({color:ie[q],roughness:.68,metalness:.42});Yt(Rt,new Ot(.34,.34,.86,16),Bt,[0,.43,0]);for(const T of[.12,.43,.75])Yt(Rt,new _n(.345,.023,5,18),new yt({color:"#262e2e",metalness:.8,roughness:.4}),[0,T,0],[Math.PI/2,0,0])}const he=new yt({map:n,color:"#8e795a",roughness:.9});for(const[N,$,q,nt,Rt]of[[6.6,.38,2.7,.76,.2],[5.9,.38,3.2,.66,-.15],[6.25,1.12,2.95,.6,.5],[-7.4,.42,1.9,.84,-.3],[-6.7,.3,1.2,.6,.1]]){const Bt=Yt(i,new ne(nt,nt,nt),he,[N,$,q],[0,Rt,0]);Bt.castShadow=!0,Bt.receiveShadow=!0;for(const T of[-1,1])Yt(i,new ne(nt*1.02,nt*.1,.02),new yt({color:"#3c2d1d",roughness:.9}),[N,$+T*nt*.32,q+nt/2+.005],[0,Rt,0])}const oe=new yt({color:"#d85c1f",roughness:.7}),K=new Le;K.position.set(-4.2,0,4.7),K.rotation.y=.4,i.add(K),Yt(K,new zn(.23,.7,12),oe,[0,.38,0]),Yt(K,new Ot(.12,.16,.1,12),new yt({color:"#eee5cf",roughness:.7}),[0,.42,0]),Yt(K,new ne(.48,.06,.48),new yt({color:"#1b2220",roughness:.9}),[0,.03,0]);const rt=new yt({color:"#c1b9a3",roughness:1,side:Ie});for(let N=0;N<15;N++){const $=Yt(i,new Re(.26+Math.random()*.22,.34+Math.random()*.2),rt,[(Math.random()-.5)*11,.018,(Math.random()-.5)*9],[-Math.PI/2,0,Math.random()*vr]);$.renderOrder=1}const St=new yt({color:"#161a19",roughness:.92});for(let N=0;N<3;N++)Yt(i,new _n(.42,.15,10,20),St,[-8.4,.16+N*.3,-2.4],[Math.PI/2,0,0]);const Ut=new Ce({color:"#9de8df",transparent:!0,opacity:.4});for(let N=0;N<24;N++)Yt(i,new Re(.02+Math.random()*.03,.02+Math.random()*.03),Ut,[(Math.random()-.5)*10,.02,(Math.random()-.5)*8],[-Math.PI/2,0,Math.random()*vr]);const Tt=700,Jt=new Float32Array(Tt*3),fe=new Float32Array(Tt);for(let N=0;N<Tt;N++)Jt[N*3]=(Math.random()-.5)*22,Jt[N*3+1]=Math.random()*7,Jt[N*3+2]=(Math.random()-.5)*17,fe[N]=Math.random()*vr;const L=new De;L.setAttribute("position",new cn(Jt,3));const it=new Fl({color:"#ffd6a0",size:.025,transparent:!0,opacity:.55,depthWrite:!1,blending:yn,sizeAttenuation:!0}),Q=new Zu(L,it);i.add(Q);const j=Jt.slice();return r.push(N=>{const $=L.attributes.position.array;for(let q=0;q<Tt;q++){const nt=fe[q];$[q*3]=j[q*3]+Math.sin(N*.24+nt)*.6,$[q*3+1]=.15+(j[q*3+1]+N*.06+nt*.1)%7,$[q*3+2]=j[q*3+2]+Math.cos(N*.2+nt)*.5}L.attributes.position.needsUpdate=!0;for(const q of _t)q.position.y=Math.sin(N*1.5+q.userData.phase)*.025,q.rotation.z=Math.sin(N*.8+q.userData.phase)*.018}),{update(N){for(const $ of r)$(N)},key:o,neonLight:D}}function Rg(i,t,e,n,r=12){return Yt(i,new ii(t,r,Math.max(6,Math.round(r*.7))),e,n)}const Ye=(i=0,t=0,e=0)=>new R(i,t,e);function ot(i,t,e,n=[0,0,0],r=[0,0,0],s=[1,1,1]){const o=new nn(t,e);return o.position.set(...n),o.rotation.set(...r),o.scale.set(...s),i.add(o),o}function ae(i,t=[0,0,0]){const e=new Le;return e.position.set(...t),i.add(e),e}function vs(i,t,e,n,r=[0,0,0],s=[1,1,1]){return ot(n,new Tn(i,t,6,14),e,r,[0,0,0],s)}function Et(i,t,e,n=[0,0,0],r=[1,1,1],s=20){return ot(e,new ii(i,s,Math.max(8,Math.round(s*.7))),t,n,[0,0,0],r)}function Hs(i){return i.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),i}function Po(i,t,e){const n=Math.min(1,Math.max(0,(i-t)/(e-t)));return n*n*(3-2*n)}function Cg(){const{map:i,bump:t}=vg(),e={map:i,bumpMap:t,bumpScale:.018,roughness:.48,metalness:0,clearcoat:.16,clearcoatRoughness:.62,sheen:.34,sheenColor:new Zt("#ffc789"),sheenRoughness:.75};return{skin:new bs({...e}),skinShade:new bs({...e,color:new Zt("#d5803a"),roughness:.56}),skinLight:new bs({...e,color:new Zt("#ffe0b9")}),vein:new yt({color:"#b95012",roughness:.62}),stem:new yt({color:"#5b371d",roughness:.92}),leaf:new yt({color:"#5c8d36",roughness:.72,side:Ie}),leafLight:new yt({color:"#86b853",roughness:.7,side:Ie}),gold:new yt({color:"#d8a234",metalness:.9,roughness:.29}),leather:new yt({color:"#241a16",roughness:.82}),eyeWhite:new yt({color:"#fff4dc",roughness:.32}),iris:new yt({color:"#c95a12",emissive:new Zt("#ff7a14"),emissiveIntensity:.58,roughness:.28}),pupil:new yt({color:"#160b04",roughness:.24}),highlight:new Ce({color:"#ffffff"}),brow:new yt({color:"#45200d",roughness:.8}),mouth:new yt({color:"#3a1509",roughness:.8}),teeth:new yt({color:"#fff7e8",roughness:.36}),blush:new Ce({color:"#db5c15",transparent:!0,opacity:.24,depthWrite:!1}),seam:new yt({color:"#a7490e",roughness:.84})}}function Pg(i=.42){const t=new ii(i,56,40),e=t.attributes.position,n=new R;for(let r=0;r<e.count;r++){n.fromBufferAttribute(e,r);let{x:s,y:o,z:a}=n;const l=o/i,c=1-.26*Math.pow(Math.max(0,l),2.6);s*=c,a*=c*.96,o*=1.07;const h=Po(o/i,.72,1);o-=i*.09*h;const u=Po(-a/i,-.05,.55),f=Math.exp(-Math.pow(s/(i*.16),2))*(.38+u*.62);s*=1-.19*f,a+=.045*f*Math.sign(a||1)*Po(Math.abs(a)/i,.1,.8),e.setXYZ(r,s,o,a)}return t.computeVertexNormals(),t}function Lg(i,t,e={}){const n=e.eyeScale||1;for(const r of[-1,1]){const s=ae(i,[.145*r,.045,.352]);Et(.083*n,t.eyeWhite,s,[0,0,0],[1,1.12,.46],16);const o=Et(.041*n,t.iris,s,[0,-.002,.035],[1,1,.42],14);o.rotation.z=r*-.08,Et(.02*n,t.pupil,s,[.004*r,0,.052],[1,1.1,.4],10),Et(.011*n,t.highlight,s,[-.016*r,.016,.062],[1,1,.5],8),ot(s.parent,new ne(.145*n,.034*n,.035),t.brow,[.145*r,.148,.36],[0,0,r*.25]).geometry.translate(0,.01,0)}}function Dg(i,t){Lg(i,t),Et(.052,t.skinShade,i,[0,-.045,.402],[1.15,.88,.8],12),Et(.012,t.mouth,i,[.028,-.062,.438],[1,.7,.6],8),Et(.012,t.mouth,i,[-.028,-.062,.438],[1,.7,.6],8);for(const r of[-1,1])Et(.105,t.blush,i,[.225*r,-.065,.334],[1,.8,.35],12),Et(.13,t.skinLight,i,[.235*r,-.075,.305],[1,.84,.66],14);ot(i,new ne(.255,.09,.03),t.mouth,[0,-.205,.37],[.06,0,-.02]),ot(i,new ne(.218,.043,.022),t.teeth,[0,-.196,.389],[.06,0,-.02]);for(let r=-1;r<=1;r++)ot(i,new ne(.007,.044,.025),t.mouth,[r*.062,-.197,.394],[.06,0,0]);Et(.095,t.skin,i,[0,-.34,.3],[1,.85,.85],14);const e=new sr([Ye(0,.435,-.03),Ye(0,.33,-.255),Ye(0,.08,-.39),Ye(0,-.18,-.345),Ye(0,-.34,-.2)]);ot(i,new wi(e,24,.009,4,!1),t.seam);const n=new sr([Ye(.018,.45,.02),Ye(.28,.34,.16),Ye(.405,.12,.06),Ye(.38,-.12,-.09),Ye(.24,-.32,-.16)]);ot(i,new wi(n,24,.008,4,!1),t.seam),Et(.24,t.blush,i,[.22,-.08,.2],[.75,1.1,.5],16)}function Ig(i,t){const e=ae(i,[0,.445,-.03]);e.rotation.z=-.22,ot(e,new Ot(.028,.04,.2,8),t.stem,[0,.08,0]),ot(e,new ii(.042,8,6),t.stem,[0,.18,0],[1,.55,1]);const n=new Wl;n.moveTo(0,0),n.bezierCurveTo(.17,.08,.21,.28,0,.48),n.bezierCurveTo(-.21,.28,-.17,.08,0,0);const r=new Oa(n,{depth:.014,bevelEnabled:!1,curveSegments:14}),s=ae(e,[0,.18,0]);s.rotation.set(.18,.35,-.72),ot(s,r,t.leaf,[0,.02,-.007]),ot(s,new Ot(.0045,.006,.38,4),t.leafLight,[0,.22,.012]);for(let a=0;a<3;a++)ot(s,new Ot(.0025,.0025,.11,3),t.leafLight,[(a-1)*.085,.18+a*.04,.012],[0,0,(a-1)*.7]);const o=ae(e,[0,.16,0]);o.rotation.set(-.25,-.5,.95),o.scale.setScalar(.7),ot(o,r,t.leafLight,[0,.02,-.007]),ot(o,new Ot(.0035,.004,.32,4),t.leaf,[0,.19,.012])}function Ug(){const i=Cg(),t=new Le,e=ae(t),n={root:t,body:e,mats:i};for(const c of[-1,1]){const h=ae(e,[.285*c,1.1,0]);h.rotation.z=c*.055;const u=vs(.185,.2,i.skin,h,[0,-.27,0],[1.06,1,1.06]);Et(.235,i.skin,h,[.018*c,-.23,.06],[.92,1.5,1.02],18),Et(.185,i.skinShade,h,[.01*c,-.3,.13],[.78,1.55,.56],14);const f=ae(h,[0,-.56,0]);Et(.165,i.skin,f,[0,0,.02],[1,1,1],14),vs(.145,.19,i.skin,f,[0,-.26,0],[1,1,.98]),Et(.18,i.skin,f,[0,-.23,-.06],[.95,1.25,.75],14);const d=ae(f,[0,-.52,.015]);ot(d,new ne(.25,.13,.43),i.skin,[0,-.03,.12],[0,0,0]),Et(.09,i.skinShade,d,[0,-.02,.35],[1.2,.8,1.2],10),n[c<0?"hipL":"hipR"]=h,n[c<0?"kneeL":"kneeR"]=f,n[c<0?"thighL":"thighR"]=u}Et(.39,i.skin,e,[0,1.27,0],[1.06,.8,.78],22);const r=new Le;r.position.set(0,1.34,0),e.add(r),ot(r,new _n(.365,.052,8,40),i.leather,[0,0,0],[Math.PI/2,0,0],[1.08,1,.8]),ot(r,new ne(.19,.145,.05),i.gold,[0,-.01,.335]),Et(.06,i.skin,r,[0,.002,.368],[1,1.06,.28],12),ot(r,new zn(.045,.11,5),i.leaf,[.04,.09,.366],[0,0,-.7],[1,1,.4]);const s=ae(e,[0,1.26,0]);n.torso=s;const o=[[.29,0],[.34,.08],[.37,.2],[.44,.36],[.52,.5],[.57,.62],[.56,.72],[.48,.82],[.35,.9],[.22,.95]].map(([c,h])=>new at(c,h));ot(s,new Ba(o,32),i.skin,[0,0,0],[0,0,0],[1,1,.72]).geometry.computeVertexNormals();for(const c of[-1,1])Et(.275,i.skin,s,[.235*c,.585,.26],[1.12,.82,.68],22),Et(.16,i.skinShade,s,[.28*c,.56,.205],[1,.75,.5],14),Et(.24,i.skin,s,[.43*c,.38,-.035],[.66,1.48,.72],16),Et(.2,i.skin,s,[.23*c,.86,-.035],[.92,.6,.95],16),Et(.15,i.skinShade,s,[.29*c,.22,.09],[.76,1.3,.62],14);for(let c=0;c<3;c++)for(const h of[-1,1]){const u=.17+c*.145;Et(.105,i.skin,s,[.105*h,u,.285],[1,.86,.56],14),Et(.09,i.skinLight,s,[.105*h,u+.015,.315],[.9,.62,.28],12)}ot(s,new ne(.016,.43,.012),i.seam,[0,.3,.318],[0,0,0]),ot(s,new ne(.018,.18,.012),i.seam,[0,.62,.322],[0,0,0]);for(const c of[-1,1])ot(s,new Tn(.017,.24,3,6),i.skinLight,[.2*c,.77,.24],[0,0,Math.PI/2+c*.17]);ot(s,new Ot(.19,.24,.24,16),i.skin,[0,.98,.01]);const l=ae(s,[0,1.16,.055]);l.rotation.x=-.03,n.head=l,ot(l,Pg(.42),i.skin),Dg(l,i),Ig(l,i);for(const c of[-1,1]){const h=ae(s,[.6*c,.8,0]);n[c<0?"shoulderL":"shoulderR"]=h,Et(.255,i.skin,h,[0,0,0],[1.05,1,.94],20),Et(.15,i.skinShade,h,[.05*c,-.03,-.11],[1,1.1,.8],14),vs(.16,.24,i.skin,h,[0,-.27,0],[1.05,1,1]),Et(.165,i.skin,h,[.025*c,-.27,.06],[1.05,1.32,.98],16),Et(.13,i.skinShade,h,[-.016*c,-.31,-.07],[.94,1.32,.9],14);const u=new sr([Ye(.06*c,-.12,.1),Ye(.075*c,-.23,.12),Ye(.045*c,-.35,.08)]);ot(h,new wi(u,10,.0075,4,!1),i.vein);const f=ae(h,[0,-.53,0]);n[c<0?"elbowL":"elbowR"]=f,Et(.135,i.skin,f,[0,0,-.01],[1,.9,.95],14),vs(.14,.19,i.skin,f,[0,-.24,0],[1,1,1]),Et(.15,i.skin,f,[0,-.31,.035],[.9,1.1,.9],16);const d=ae(f,[0,-.51,0]);n[c<0?"handL":"handR"]=d,Et(.15,i.skin,d,[0,0,.015],[1.02,1.15,1],16);for(let g=-1;g<=1;g++)Et(.055,i.skin,d,[g*.07,.065,.075],[1,1.05,.9],8);if(ot(d,new Ot(.142,.142,.09,12),i.leather,[0,.14,0],[0,0,0],[1,1,1]),c>0){const g=ae(d,[0,.01,.06]);g.rotation.x=-1.28,n.weaponMount=g}}return Hs(t),t.scale.setScalar(1),{group:t,rig:n,materials:i,height:2.82}}let Lo=null;function ih(){return Lo||(Lo=nh()),Lo}const ol=["NAIL BAT","KATANA","METAL PIPE","SLEDGEHAMMER","FOLDING CHAIR","FRYING PAN"],Ng=["BAT","KATANA","PIPE","SLEDGE","CHAIR","PAN"];function Fg(){return new yt({color:"#aeb9be",metalness:.96,roughness:.28,envMapIntensity:1.1})}function Og(){const i=new yt({map:ih(),color:"#d6b07e",roughness:.72}),t=new yt({color:"#211b18",roughness:.88}),e=Fg(),n=new yt({color:"#5a666a",metalness:.86,roughness:.42}),r=new yt({color:"#d4a33c",metalness:.9,roughness:.3}),s=new yt({color:"#151515",roughness:.72}),o=new yt({color:"#91231e",roughness:.6}),a=[];{const l=new Le;ot(l,new Ot(.037,.043,.38,10),t,[0,.19,0],[0,0,0]),ot(l,new Ot(.09,.04,.78,14),i,[0,.75,0],[0,0,0]);for(let c=0;c<4;c++)ot(l,new Ot(.045,.045,.032,10),t,[0,.15+c*.07,0],[0,0,0]);for(const[c,h,u,f,d]of[[.075,.94,0,0,.3],[-.07,1,.02,.2,-.3],[.02,1.08,-.07,-.3,.1]])ot(l,new Ot(.006,.014,.16,5),e,[c,h,u],[f,0,d]),ot(l,new Ot(.018,.018,.015,8),e,[c*1.8,h-.07,u*1.8],[f,0,d]);l.userData.tip=1.1,a.push(l)}{const l=new Le;ot(l,new Ot(.032,.036,.32,8),s,[0,.12,0]);for(let c=0;c<5;c++)ot(l,new _n(.035,.006,4,8),o,[0,.05+c*.055,0],[Math.PI/2,0,0],[1,1,1]);ot(l,new Ot(.115,.115,.018,20),r,[0,.29,0]),ot(l,new ne(.06,1,.014),e,[0,.8,0],[0,0,0]),ot(l,new zn(.043,.15,4),e,[0,1.37,0],[0,0,0],[.9,1,.25]),ot(l,new ne(.009,.95,.016),new Ce({color:"#e8fbff"}),[.026,.8,.002]),l.userData.tip=1.45,a.push(l)}{const l=new Le;ot(l,new Ot(.043,.043,1.15,12),n,[0,.55,0]),ot(l,new Ot(.062,.062,.07,12),e,[0,.18,0]),ot(l,new Ot(.062,.062,.07,12),e,[0,.94,0]),ot(l,new Ot(.075,.06,.1,12),e,[0,1.13,0]),ot(l,new ii(.055,8,6),n,[.035,.66,.02],[1,1,1],[.4,1,1]),l.userData.tip=1.2,a.push(l)}{const l=new Le;ot(l,new Ot(.043,.052,.95,10),i,[0,.47,0]),ot(l,new Ot(.056,.056,.09,10),t,[0,.12,0]),ot(l,new ne(.42,.17,.17),e,[0,1.01,0]),ot(l,new ne(.05,.19,.19),n,[-.2,1.01,0]),ot(l,new ne(.05,.19,.19),n,[.2,1.01,0]),ot(l,new Ot(.025,.025,.09,8),r,[.28,1.01,0],[0,0,Math.PI/2]),l.userData.tip=1.12,a.push(l)}{const l=new Le,c=n;ot(l,new ne(.46,.055,.4),c,[0,.52,0]),ot(l,new ne(.46,.48,.05),c,[0,.83,-.19],[-.1,0,0]);for(const[h,u]of[[-.2,-.17],[.2,-.17],[-.2,.17],[.2,.17]])ot(l,new Ot(.018,.018,.48,6),c,[h,.27,u],[0,0,0],[1,1,1]);ot(l,new ne(.36,.04,.3),o,[0,.545,.01]),l.userData.tip=.9,a.push(l)}{const l=new Le;ot(l,new Ot(.035,.042,.55,8),s,[0,.27,0]),ot(l,new Ot(.055,.055,.06,10),t,[0,.05,0]),ot(l,new Ot(.235,.21,.055,24),s,[0,.62,0],[Math.PI/2,0,0]),ot(l,new _n(.225,.018,6,24),n,[0,.62,0],[Math.PI/2,0,0]),ot(l,new Ot(.022,.022,.1,6),e,[0,.56,0]),l.userData.tip=.86,a.push(l)}for(const l of a)Hs(l);return a}function rh(){return{skin:new yt({color:"#9dab97",roughness:.82}),skinDark:new yt({color:"#7b8a77",roughness:.86}),skinLight:new yt({color:"#b9c4a9",roughness:.78}),cloth:new yt({color:"#565b49",roughness:.98}),shorts:new yt({color:"#3c3a30",roughness:.98}),dirt:new yt({color:"#4a3a2a",roughness:1}),eyeWhite:new yt({color:"#f3f0db",roughness:.36}),iris:new yt({color:"#6f8c7a",roughness:.4}),pupil:new yt({color:"#101511",roughness:.3}),hair:new yt({color:"#4a3e31",roughness:.98}),mouth:new yt({color:"#3b1c19",roughness:.8}),signWood:new yt({map:ih(),color:"#c9a273",roughness:.9}),rope:new yt({color:"#7d6742",roughness:1}),stink:new Ce({color:"#9fdf5f",transparent:!0,opacity:.24,depthWrite:!1,blending:yn}),fly:new yt({color:"#151710",roughness:.8})}}function Bg(){const i=rh(),t=new Le,e=ae(t),n={root:t,body:e,mats:i};for(const c of[-1,1]){const h=ae(e,[.105*c,.83,0]);h.rotation.z=c*.06,ot(h,new Ot(.043,.036,.39,8),i.skin,[0,-.19,0]),Et(.058,i.skinDark,h,[0,-.39,0],[1,1,1],10);const u=ae(h,[0,-.4,0]);ot(u,new Ot(.036,.027,.38,8),i.skin,[0,-.19,0]),ot(u,new ne(.12,.07,.3),i.skinDark,[0,-.4,.07]),n[c<0?"hipL":"hipR"]=h,n[c<0?"kneeL":"kneeR"]=u}Et(.14,i.skin,e,[0,.88,0],[1,.7,.8],12),ot(e,new Ot(.15,.17,.26,12),i.shorts,[0,.8,0]);const r=ae(e,[0,.94,0]);r.rotation.x=.1,n.torso=r,ot(r,new Ot(.145,.17,.58,12),i.skin,[0,.29,0],[0,0,0],[1,.74,.8]);for(let c=0;c<3;c++)for(const h of[-1,1])ot(r,new Tn(.012,.12,2,5),i.skinDark,[.07*h,.19+c*.075,.105],[0,0,Math.PI/2+h*.32]);for(const c of[-1,1])ot(r,new Tn(.013,.15,2,5),i.skinLight,[.08*c,.48,.09],[0,0,Math.PI/2+c*.23]);Et(.115,i.skinDark,r,[0,.17,.01],[1,1.3,.82],12),ot(r,new Ot(.052,.075,.14,8),i.skin,[0,.62,.01],[.1,0,0]);const s=ae(r,[0,.76,.03]);n.head=s,Et(.17,i.skin,s,[0,.02,0],[.84,1.13,.92],18),Et(.075,i.skinDark,s,[0,-.11,.075],[1,1.1,.8],10);for(const c of[-1,1])Et(.055,i.skinLight,s,[.085*c,-.015,.105],[1,1.2,.8],10),Et(.045,i.skinDark,s,[.1*c,.06,.085],[1,1,.5],8),Et(.055,i.eyeWhite,s,[.069*c,.065,.13],[1,1.14,.45],12),Et(.023,i.iris,s,[.069*c,.06,.16],[1,1,.5],10),Et(.011,i.pupil,s,[.069*c,.06,.173],[1,1,.5],8),ot(s,new Tn(.006,.055,2,5),i.skinDark,[.069*c,.015,.148],[0,0,Math.PI/2]),ot(s,new ne(.08,.016,.018),i.hair,[.069*c,.13,.14],[0,0,c*-.34]),Et(.043,i.skin,s,[.155*c,.015,.01],[.42,1.1,.8],10),Et(.045,i.hair,s,[.13*c,.1,-.06],[.5,.5,.8],8);ot(s,new zn(.026,.12,6),i.skinDark,[0,-.005,.17],[Math.PI/2,0,0],[1,1,.8]),ot(s,new ne(.075,.024,.02),i.mouth,[0,-.105,.14],[.1,0,-.05]),ot(s,new ne(.06,.01,.012),i.teeth||i.eyeWhite,[0,-.101,.152]);for(let c=0;c<5;c++)ot(s,new Ot(.002,.003,.09,3),i.hair,[(c-2)*.018,.19,-.012],[.15+c*.05,0,.2]);for(const c of[-1,1]){const h=ae(r,[.18*c,.48,.01]);n[c<0?"shoulderL":"shoulderR"]=h,Et(.06,i.skin,h,[0,0,0],[1,1,1],10),ot(h,new Ot(.033,.028,.32,8),i.skin,[0,-.16,0]),Et(.044,i.skinDark,h,[0,-.32,0],[1,1,1],8);const u=ae(h,[0,-.33,0]);n[c<0?"elbowL":"elbowR"]=u,ot(u,new Ot(.026,.021,.31,8),i.skin,[0,-.15,0]);const f=ae(u,[0,-.32,0]);n[c<0?"handL":"handR"]=f,Et(.05,i.skinDark,f,[0,-.01,.01],[.8,1.2,.8],8);for(let d=-1;d<=1;d++)ot(f,new Ot(.006,.004,.1,4),i.skin,[d*.02,-.08,.01],[.1,0,d*.1])}const o=ae(r,[0,.35,.19]);n.sign=o;const a=new Le;o.add(a);const l=wg();ot(a,new ne(1.18,.56,.03),i.signWood,[0,0,0]),ot(a,new Re(1.15,.535),new yt({map:l,roughness:.82}),[0,0,.0175]);for(const c of[-1,1])ot(o,new Ot(.009,.009,.38,5),i.rope,[.27*c,.28,-.08],[.18,0,c*.16]).geometry.translate(0,-.02,0);ot(o,new _n(.028,.007,4,8),i.signWood,[.53,.22,0],[0,0,0]),ot(o,new _n(.028,.007,4,8),i.signWood,[-.53,.22,0],[0,0,0]),n.stink=[];for(let c=0;c<4;c++){const h=[];for(let d=0;d<5;d++)h.push(Ye(Math.sin(d*1.7+c)*.16+(c-1.5)*.12,d*.3,Math.cos(d*1.2+c)*.08));const u=new sr(h),f=ot(t,new wi(u,20,.012,4,!1),i.stink.clone(),[0,1.05,0]);f.userData.phase=c*1.3,n.stink.push(f)}n.flies=[];for(let c=0;c<5;c++){const h=ae(t,[0,1.5,0]);Et(.019,i.fly,h,[0,0,0],[1,.7,1.2],6);const u=new Ce({color:"#c9d9d0",transparent:!0,opacity:.34,side:Ie});for(const f of[-1,1])ot(h,new Bs(.028,6),u,[.026*f,.014,0],[.5,0,f*.5],[1,1,1]);h.userData.phase=c*1.1,h.userData.radius=.28+c*.09,n.flies.push(h)}return Hs(t),{group:t,rig:n,materials:i,height:1.95,update(c){for(const h of n.stink){const u=h.userData.phase;h.material.opacity=.11+(Math.sin(c*1.7+u)*.5+.5)*.16,h.scale.x=h.scale.z=.85+Math.sin(c*1.2+u)*.18,h.position.y=1.04+Math.sin(c*1.1+u)*.04}for(const h of n.flies){const u=h.userData.phase,f=h.userData.radius;h.position.set(Math.cos(c*2.6+u)*f,1.35+Math.sin(c*3.3+u*2)*.28,Math.sin(c*2.2+u)*f+.06),h.rotation.y=c*5+u}}}}function zg(){const i=Eg(),t=new Re(1.2,.6,24,10),e=t.attributes.position;for(let n=0;n<e.count;n++){const r=e.getX(n),s=e.getY(n);e.setZ(n,-(r*r)*.28-s*s*.11)}return t.computeVertexNormals(),new nn(t,new yt({map:i,roughness:.9,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,alphaTest:.02}))}function kg(){const i=rh();i.skin=new yt({color:"#b87a5e",roughness:.8}),i.skinDark=new yt({color:"#956049",roughness:.86}),i.skinLight=new yt({color:"#cd9070",roughness:.78}),i.shirt=new yt({color:"#efe9da",roughness:.92}),i.initials=new yt({color:"#1c1b1a",roughness:.8});const t=new Le,e=ae(t),n={root:t,body:e,mats:i};for(const h of[-1,1]){const u=ae(e,[.3*h,.66,0]);u.rotation.z=h*.13,ot(u,new Ot(.17,.135,.35,10),i.skin,[0,-.18,0]);const f=ae(u,[0,-.37,0]);ot(f,new Ot(.13,.105,.3,10),i.skin,[0,-.14,0]),ot(f,new ne(.22,.09,.34),i.skinDark,[0,-.31,.07]),ot(f,new ne(.24,.035,.36),i.dirt,[0,-.35,.07]),n[h<0?"hipL":"hipR"]=u,n[h<0?"kneeL":"kneeR"]=f}ot(e,new Ot(.43,.38,.34,16),i.shorts,[0,.7,0]),ot(e,new Ot(.44,.44,.07,16),i.dirt,[0,.55,0]);const r=ae(e,[0,.82,0]);n.torso=r,Et(1,i.shirt,r,[0,.34,.02],[.7,.68,.63],28),Et(.9,i.shirt,r,[0,.74,-.01],[.61,.52,.5],24),Et(.5,i.shirt,r,[0,.85,.02],[.78,.48,.62],20),ot(r,new _n(.19,.03,6,20),i.shirt,[0,1.02,.03],[Math.PI/2,0,0],[1,1,.7]);for(const h of[-1,1])ot(r,new Ot(.23,.2,.24,12),i.shirt,[.51*h,.78,0],[0,0,h*-.4]);const s=zg();s.position.set(0,.32,.646),s.rotation.x=-.1,s.castShadow=!1,s.receiveShadow=!1,r.add(s),n.shirtDecal=s;for(const h of[-1,1]){const u=ae(r,[.55*h,.76,0]);u.rotation.z=h*-.34,n[h<0?"shoulderL":"shoulderR"]=u,Et(.21,i.skin,u,[0,0,0],[1,1,1],14),ot(u,new Ot(.145,.12,.28,10),i.skin,[0,-.18,0]);const f=ae(u,[0,-.33,0]);n[h<0?"elbowL":"elbowR"]=f,ot(f,new Ot(.115,.1,.27,10),i.skin,[0,-.13,0]);const d=ae(f,[0,-.29,0]);n[h<0?"handL":"handR"]=d,Et(.145,i.skin,d,[0,-.02,.015],[1,1.12,1],14);for(let g=-1;g<=1;g++)Et(.045,i.skin,d,[g*.06,.08,.08],[1,1,.9],8);for(let g=0;g<4;g++)ot(u,new Ot(.002,.003,.05,3),i.hair||i.skinDark,[.02*(g%2?1:-1),-.1-g*.04,.035],[.2,0,.1*g])}ot(r,new Ot(.17,.21,.13,12),i.skin,[0,1.07,.01]);const o=ae(r,[0,1.23,.03]);n.head=o,Et(.265,i.skin,o,[0,.02,0],[.92,1.02,.94],22),Et(.1,i.skinLight,o,[.02,.2,.09],[1,.45,.9],12);for(const h of[-1,1])Et(.065,i.skinDark,o,[.235*h,.02,0],[.45,1.05,.75],10),Et(.048,i.eyeWhite,o,[.09*h,.08,.22],[1,1.05,.45],10),Et(.022,i.iris,o,[.09*h,.075,.247],[1,1,.5],8),Et(.011,i.pupil,o,[.09*h,.075,.258],[1,1,.5],6),ot(o,new ne(.13,.035,.035),i.hair||i.skinDark,[.09*h,.145,.225],[0,0,h*.18]),ot(o,new Tn(.006,.06,2,5),i.skinDark,[.09*h,.035,.235],[0,0,Math.PI/2]);Et(.07,i.skinDark,o,[0,-.01,.25],[1.15,.9,.9],12);for(const h of[-1,1])Et(.06,new Ce({color:"#c8442c",transparent:!0,opacity:.18,depthWrite:!1}),o,[.14*h,-.055,.22],[1,.7,.4],10);for(const h of[-1,1])ot(o,new Tn(.018,.1,3,6),i.hair||i.skinDark,[.05*h,-.1,.245],[.2,0,Math.PI/2+h*.25],[1,1,1]);const a=ae(o,[0,-.1,.02]);n.beard=a;const l=new yt({color:"#3a2922",roughness:.96}),c=new yt({color:"#291b16",roughness:1});for(let h=0;h<44;h++){const u=h/44*Math.PI*2;if(Math.sin(u)>.5)continue;const f=.21+Math.random()*.035,d=Math.cos(u)*f,g=Math.sin(u)*f*.82+.04,M=.12+Math.random()*.16,m=ot(a,new zn(.04+Math.random()*.025,M,6),Math.random()>.35?l:c,[d,-.06+Math.random()*.03,g],[Math.PI+Math.cos(u)*.45,0,-Math.sin(u)*.45]);m.rotation.z+=(Math.random()-.5)*.35}Et(.24,l,a,[0,-.1,.06],[1.05,.9,.85],16),Et(.12,c,a,[0,-.22,.12],[1.4,1,.6],12),ot(o,new ne(.1,.03,.02),i.mouth,[0,-.16,.265],[.1,0,0]);for(let h=0;h<3;h++)Et(.018,new yt({color:"#b7e1d9",roughness:.2,metalness:.1}),o,[-.12+h*.07,.18-h*.02,.17],[1,1.2,.8],8);return Hs(t),{group:t,rig:n,materials:i,height:2.36,update(h){const u=n.torso.children[0];u.scale.y=.68+Math.sin(h*2.2)*.008,u.scale.z=.63+Math.sin(h*2.2)*.006}}}function Hg(i=""){const t=document.createElement("canvas");t.width=320,t.height=48;const e=t.getContext("2d"),n=new ni(t);n.colorSpace=Pe;const r=new ji({map:n,transparent:!0,depthTest:!1,depthWrite:!1}),s=new wr(r);s.scale.set(1.55,.2325,1),s.renderOrder=5;function o(a){e.clearRect(0,0,320,48),e.fillStyle="rgba(4,10,11,0.82)",e.fillRect(2,2,316,44),e.strokeStyle="rgba(255,232,199,0.5)",e.lineWidth=2,e.strokeRect(2,2,316,44);const l=e.createLinearGradient(8,0,312,0);l.addColorStop(0,"#a62a22"),l.addColorStop(.55,"#e1493c"),l.addColorStop(1,"#ff9b77"),e.fillStyle=l,e.fillRect(8,8,304*Math.max(0,Math.min(1,a)),32),e.fillStyle="rgba(255,255,255,0.18)",e.fillRect(8,8,304*Math.max(0,Math.min(1,a)),9),e.font='900 15px "Arial Black", "DejaVu Sans", sans-serif',e.fillStyle="#ffebcd",e.textAlign="center",e.textBaseline="middle",e.fillText(i,160,24),n.needsUpdate=!0}return o(1),{sprite:s,draw:o}}function Vg(){const i=document.createElement("canvas");i.width=256,i.height=256;const t=i.getContext("2d");t.clearRect(0,0,256,256);const e=t.createRadialGradient(128,128,76,128,128,128);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.62,"rgba(255,255,255,0)"),e.addColorStop(.8,"rgba(255,255,255,0.95)"),e.addColorStop(.92,"rgba(255,190,110,0.2)"),e.addColorStop(1,"rgba(255,190,110,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const n=new ni(i);return n.colorSpace=Pe,n}function Gg(){const i=document.createElement("canvas");i.width=256,i.height=256;const t=i.getContext("2d");t.clearRect(0,0,256,256),t.translate(128,128),t.strokeStyle="rgba(255,245,220,0.95)",t.lineWidth=16,t.lineCap="round",t.shadowColor="rgba(255,180,80,0.9)",t.shadowBlur=25,t.beginPath(),t.arc(0,0,88,-1.05,1.05),t.stroke(),t.strokeStyle="rgba(255,170,70,0.5)",t.lineWidth=36,t.shadowBlur=40,t.beginPath(),t.arc(0,0,88,-.95,.95),t.stroke();const e=new ni(i);return e.colorSpace=Pe,e}const Wg={orange:"#ff9a37",gold:"#ffd37d",steel:"#d7e3e6",red:"#ff5b40",green:"#b8ed62",dust:"#b5a58a"};class Xg{constructor(t,e){this.scene=t,this.camera=e,this.time=0,this.particles=[],this.popups=[],this.rings=[],this.arcs=[],this.ringTexture=Vg(),this.arcTexture=Gg();const n=new za(.05),r={};for(const[s,o]of Object.entries(Wg))r[s]=new Ce({color:o,transparent:!0});for(let s=0;s<150;s++){const o=new nn(n,r.orange);o.visible=!1,o.frustumCulled=!1,t.add(o),this.particles.push({mesh:o,velocity:new R,life:0,maxLife:1,spin:new R,gravity:1,baseScale:1})}this.mats=r,this.ringPool=[];for(let s=0;s<8;s++){const o=new ji({map:this.ringTexture,transparent:!0,blending:yn,depthWrite:!1,opacity:0}),a=new wr(o);a.visible=!1,a.renderOrder=4,t.add(a),this.ringPool.push({sprite:a,life:0,maxLife:.4,maxScale:2})}this.arcPool=[];for(let s=0;s<6;s++){const o=new ji({map:this.arcTexture,transparent:!0,blending:yn,depthWrite:!1,opacity:0}),a=new wr(o);a.visible=!1,a.renderOrder=4,t.add(a),this.arcPool.push({sprite:a,life:0,maxLife:.3})}}burst(t,e="orange",n=18,r=1){let s=0;for(const o of this.particles){if(o.life>0)continue;const a=this.mats[e]||this.mats.orange;o.mesh.material=a,o.mesh.visible=!0,o.mesh.position.copy(t),o.mesh.position.x+=(Math.random()-.5)*.2,o.mesh.position.y+=(Math.random()-.5)*.2,o.mesh.position.z+=(Math.random()-.5)*.2;const l=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1),h=(2.5+Math.random()*7)*r;if(o.velocity.set(Math.sin(c)*Math.cos(l),Math.abs(Math.cos(c))*.9+.2,Math.sin(c)*Math.sin(l)).multiplyScalar(h),o.baseScale=.6+Math.random()*1.2,o.mesh.scale.setScalar(o.baseScale),o.spin.set(Math.random()*12,Math.random()*12,Math.random()*12),o.maxLife=.35+Math.random()*.55,o.life=o.maxLife,o.gravity=12+Math.random()*8,++s>=n)break}}shockwave(t,e="#ffb15a",n=2.2){const r=this.ringPool.find(s=>s.life<=0);r&&(r.sprite.visible=!0,r.sprite.position.copy(t),r.sprite.position.y+=.1,r.sprite.material.color.set(e),r.sprite.material.opacity=.85,r.sprite.scale.setScalar(.2),r.maxScale=n,r.maxLife=.42,r.life=r.maxLife)}slash(t,e="#ffe0af",n=0,r=1.6){const s=this.arcPool.find(o=>o.life<=0);s&&(s.sprite.visible=!0,s.sprite.position.copy(t),s.sprite.material.color.set(e),s.sprite.material.rotation=n,s.sprite.material.opacity=.95,s.sprite.scale.setScalar(r),s.maxLife=.28,s.life=s.maxLife)}popup(t,e,{color:n="#ffe9c7",outline:r="#2b0c01",size:s=1,life:o=.85,burst:a=!1,rotation:l=0}={}){const c=document.createElement("canvas"),h=c.getContext("2d"),u=900,f=90;h.font=`${u} ${f}px "Arial Black", Impact, "DejaVu Sans", sans-serif`;const d=Math.max(260,h.measureText(t).width+80);c.width=Math.ceil(d),c.height=190;const g=c.getContext("2d");if(a){g.save(),g.translate(c.width/2,100),g.fillStyle="rgba(255,154,55,0.18)",g.beginPath();for(let y=0;y<24;y++){const _=y/24*Math.PI*2,A=y%2===0?120:62;g.lineTo(Math.cos(_)*A*1.5,Math.sin(_)*A*.8)}g.closePath(),g.fill(),g.restore()}g.font=`${u} ${f}px "Arial Black", Impact, "DejaVu Sans", sans-serif`,g.textAlign="center",g.textBaseline="middle",g.lineJoin="round",g.lineWidth=18,g.strokeStyle=r,g.strokeText(t,c.width/2,100),g.lineWidth=8,g.strokeStyle=r,g.strokeText(t,c.width/2,100),g.fillStyle=n,g.fillText(t,c.width/2,100);const M=new ni(c);M.colorSpace=Pe;const m=new ji({map:M,transparent:!0,depthTest:!1,depthWrite:!1}),p=new wr(m);p.renderOrder=8;const S=.55*s;p.scale.set(c.width/c.height*S,S,1),p.position.copy(e),p.material.rotation=l,this.scene.add(p),this.popups.push({sprite:p,life:o,maxLife:o,velocity:new R((Math.random()-.5)*.5,2.1+Math.random()*.7,(Math.random()-.5)*.4),rotation:l})}update(t){this.time+=t;for(const e of this.particles){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}e.velocity.y-=e.gravity*t,e.mesh.position.addScaledVector(e.velocity,t),e.mesh.position.y<.03&&(e.mesh.position.y=.03,e.velocity.y*=-.32,e.velocity.x*=.75,e.velocity.z*=.75),e.mesh.rotation.x+=e.spin.x*t,e.mesh.rotation.y+=e.spin.y*t,e.mesh.rotation.z+=e.spin.z*t;const n=Math.max(0,e.life/e.maxLife);e.mesh.scale.setScalar(e.baseScale*(.45+n*.75)),e.mesh.material.opacity=Math.min(1,n*2.2)}for(const e of this.ringPool){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.sprite.visible=!1;continue}const n=1-e.life/e.maxLife;e.sprite.scale.setScalar(.2+n*e.maxScale),e.sprite.material.opacity=(1-n)*.85,e.sprite.position.y+=t*.15}for(const e of this.arcPool){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.sprite.visible=!1;continue}const n=1-e.life/e.maxLife;e.sprite.material.opacity=(1-n)*.95,e.sprite.scale.setScalar(e.sprite.scale.x+t*3.4)}for(let e=this.popups.length-1;e>=0;e--){const n=this.popups[e];if(n.life-=t,n.life<=0){this.scene.remove(n.sprite),n.sprite.material.map.dispose(),n.sprite.material.dispose(),this.popups.splice(e,1);continue}const r=n.life/n.maxLife;n.velocity.y-=3.4*t,n.sprite.position.addScaledVector(n.velocity,t),n.sprite.material.opacity=Math.min(1,r*2.6),n.sprite.scale.set(n.sprite.scale.x*.999,n.sprite.scale.y*.999,1),n.sprite.scale.multiplyScalar(1+(1-r)*.001),n.sprite.material.rotation=n.rotation+Math.sin(this.time*5+e)*.02}}}class qg{constructor(){this.ctx=null,this.master=null,this.noise=null,this.ambient=null,this.muted=!1}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.55,this.master.connect(this.ctx.destination);const e=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=n.getChannelData(0);for(let s=0;s<e;s++)r[s]=Math.random()*2-1;this.noise=n,this.startAmbience()}startAmbience(){if(!this.ctx||this.ambient)return;const t=this.ctx,e=t.createGain();e.gain.value=.035,e.connect(this.master);const n=t.createOscillator();n.type="sawtooth",n.frequency.value=43;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=120;const s=t.createGain();s.gain.value=.5,n.connect(r).connect(s).connect(e),n.start();const o=t.createOscillator();o.type="sine",o.frequency.value=86;const a=t.createGain();a.gain.value=.22,o.connect(a).connect(e),o.start();const l=t.createBufferSource();l.buffer=this.noise,l.loop=!0;const c=t.createBiquadFilter();c.type="bandpass",c.frequency.value=430,c.Q.value=.55;const h=t.createGain();h.gain.value=.26,l.connect(c).connect(h).connect(e),l.start(),this.ambient=e}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.55,this.ctx.currentTime,.04)}noiseBurst(t=.2,{type:e="bandpass",frequency:n=900,q:r=.8,gain:s=.2,slide:o=0}={}){if(!this.ctx||this.muted)return;const a=this.ctx,l=a.currentTime,c=a.createBufferSource();c.buffer=this.noise,c.playbackRate.value=.8+Math.random()*.4;const h=a.createBiquadFilter();h.type=e,h.frequency.setValueAtTime(n,l),o&&h.frequency.exponentialRampToValueAtTime(Math.max(60,n+o),l+t),h.Q.value=r;const u=a.createGain();u.gain.setValueAtTime(1e-4,l),u.gain.exponentialRampToValueAtTime(s,l+.012),u.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h).connect(u).connect(this.master),c.start(l),c.stop(l+t+.03)}tone(t,e,n,{type:r="sine",gain:s=.2,delay:o=0,filter:a=0}={}){if(!this.ctx||this.muted)return;const l=this.ctx,c=l.currentTime+o,h=l.createOscillator();h.type=r,h.frequency.setValueAtTime(t,c),h.frequency.exponentialRampToValueAtTime(Math.max(20,e),c+n);const u=l.createGain();u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(s,c+.01),u.gain.exponentialRampToValueAtTime(1e-4,c+n);let f=h;if(a){const d=l.createBiquadFilter();d.type="lowpass",d.frequency.value=a,f.connect(d),f=d}f.connect(u).connect(this.master),h.start(c),h.stop(c+n+.03)}whoosh(t=1){this.noiseBurst(.18+t*.06,{frequency:700+t*350,q:1.1,gain:.09+t*.03,slide:-450})}impact(t="fist",e=1){this.tone(120+Math.random()*30,38,.18+e*.05,{type:"sine",gain:.24+e*.07}),this.noiseBurst(.09,{type:"highpass",frequency:900,q:.5,gain:.16}),t==="metal"?(this.tone(1180,540,.22,{type:"triangle",gain:.12}),this.tone(780,310,.3,{type:"square",gain:.055,delay:.01})):t==="wood"?(this.tone(340,120,.16,{type:"square",gain:.09}),this.noiseBurst(.1,{frequency:420,q:.5,gain:.12})):t==="pan"&&(this.tone(940,740,.32,{type:"triangle",gain:.14}),this.tone(1320,960,.24,{type:"sine",gain:.08,delay:.005}))}oof(){this.tone(210+Math.random()*60,70,.28,{type:"sawtooth",gain:.12,filter:900}),this.noiseBurst(.14,{frequency:300,q:.6,gain:.08})}hurt(){this.tone(90,45,.3,{type:"square",gain:.16,filter:500}),this.noiseBurst(.2,{frequency:250,q:.4,gain:.12})}cheer(){!this.ctx||this.muted||(this.noiseBurst(.8,{type:"bandpass",frequency:800,q:.45,gain:.12}),this.tone(420,620,.5,{type:"sine",gain:.02}))}ko(){this.tone(220,55,.9,{type:"sawtooth",gain:.16,filter:700}),this.noiseBurst(.6,{frequency:260,q:.4,gain:.1})}start(){this.tone(70,150,.22,{type:"square",gain:.14,filter:500}),this.cheer()}}const Yg=document.getElementById("scene"),xn=new xg({canvas:Yg,antialias:!0,powerPreference:"high-performance",stencil:!1});xn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));xn.setSize(window.innerWidth,window.innerHeight);xn.shadowMap.enabled=!0;xn.shadowMap.type=ul;xn.outputColorSpace=Pe;xn.toneMapping=dl;xn.toneMappingExposure=1.12;const Ti=new Wu,Ee=new tn(47,window.innerWidth/window.innerHeight,.1,90);Ee.position.set(3.2,4.2,9.6);const $g=Ag(Ti),ze=new Xg(Ti,Ee),Ue=new qg,Ft=Ug(),Us=new R(-1.25,0,.45);Ft.group.position.copy(Us);Ti.add(Ft.group);const _i=Og();Ft.rig.weaponMount.rotation.x=Math.PI/2;for(const i of _i)i.visible=!1,i.scale.setScalar(.94),Ft.rig.weaponMount.add(i);const Zg=[{id:"skinny",model:Bg(),spawn:new R(1.45,0,1.65),maxHealth:95,barName:"ACIZ DILSIZ",card:document.getElementById("cardSkinny"),bar:document.getElementById("skinnyBar"),speed:.85,hurtPower:4},{id:"fat",model:kg(),spawn:new R(3.5,0,-.45),maxHealth:145,barName:"I LOVE 2016",card:document.getElementById("cardFat"),bar:document.getElementById("fatBar"),speed:.62,hurtPower:8}],Gn=Zg.map(i=>{i.model.group.position.copy(i.spawn),Ti.add(i.model.group);const t=Hg(i.barName);return t.sprite.position.set(i.spawn.x,i.model.height+.32,i.spawn.z),Ti.add(t.sprite),{...i,health:i.maxHealth,pos:i.spawn.clone(),velocity:new R,y:0,vy:0,dead:!1,downTimer:0,stagger:0,attacking:!1,attackT:0,attackStruck:!1,attackCooldown:3.2+Math.random()*2.4,healthBar:t,phase:Math.random()*Math.PI*2,hitFlash:0,fallDir:1}}),H={started:!1,ko:!1,health:100,maxHealth:100,combo:0,comboTimer:0,weaponIndex:0,attack:null,attackCooldown:0,shake:0,lastDamage:-99,tilt:!1,muted:!1,round:1,kills:0,time:0,hintShown:!1,tiltBase:null,tiltRaw:{x:0,y:0},tiltSmooth:{x:0,y:0}},Jg=[{label:"BAT SWING",duration:.56,hitTime:.26,damage:14,lunge:1.35,reach:3.35,kind:"wood",minPower:.55},{label:"KATANA SLASH",duration:.45,hitTime:.2,damage:16,lunge:1.65,reach:3.6,kind:"metal",minPower:.65},{label:"PIPE CRUSH",duration:.6,hitTime:.33,damage:18,lunge:1.2,reach:3.4,kind:"metal",minPower:.7},{label:"SLEDGE SLAM",duration:.82,hitTime:.48,damage:25,lunge:1,reach:3.5,kind:"metal",minPower:.95},{label:"CHAIR SWEEP",duration:.72,hitTime:.37,damage:21,lunge:1.25,reach:3.8,kind:"metal",minPower:.85,aoe:!0},{label:"PAN UPPERCUT",duration:.5,hitTime:.21,damage:13,lunge:1.5,reach:3.3,kind:"pan",minPower:.6,launch:!0}],al=["POW!","BONK!","THWACK!","CRUNCH!","SPLAT!","SMACK!","WHAM!","OOF!"],Kg={wood:"gold",metal:"steel",pan:"orange"},kt={intro:document.getElementById("intro"),ko:document.getElementById("ko"),startBtn:document.getElementById("startBtn"),rematchBtn:document.getElementById("rematchBtn"),attackBtn:document.getElementById("attackBtn"),swapBtn:document.getElementById("swapBtn"),swapWeapon:document.getElementById("swapWeapon"),weaponLabel:document.getElementById("weaponLabel"),weaponIndex:document.getElementById("weaponIndex"),heroBar:document.getElementById("heroBar"),hpNumber:document.getElementById("hpNumber"),combo:document.getElementById("combo"),comboNumber:document.getElementById("comboNumber"),comboWord:document.getElementById("comboWord"),roundLabel:document.getElementById("roundLabel"),damageFlash:document.getElementById("damageFlash"),speedLines:document.getElementById("speedLines"),tiltBtn:document.getElementById("tiltBtn"),soundBtn:document.getElementById("soundBtn"),toast:document.getElementById("toast"),joystick:document.getElementById("joystick"),knob:document.getElementById("stickKnob"),hint:document.getElementById("hint")};let cl=0;function xi(i,t=2200){kt.toast.textContent=i,kt.toast.classList.add("show"),clearTimeout(cl),cl=setTimeout(()=>kt.toast.classList.remove("show"),t)}new R(0,1,0);const Ns=new R,jg=new R;new R;function dn(i){let t=i;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function Fn(i,t){return Math.atan2(t.x-i.x,t.z-i.z)}function sh(i,t,e,n){return Xt.damp(i,i+dn(t-i),e,n)}function we(i,t,e){return Math.min(e,Math.max(t,i))}function te(i,t,e){return i+(t-i)*e}function $e(i){return i=we(i,0,1),i*i*(3-2*i)}function Jn(i){return i=we(i,0,1),1-Math.pow(1-i,3)}function oh(){let i=null,t=1/0;for(const e of Gn){if(e.dead)continue;const n=e.pos.distanceTo(Ft.group.position);n<t&&(t=n,i=e)}return i}function lr(i,t=!1){H.weaponIndex=(i%_i.length+_i.length)%_i.length,_i.forEach((e,n)=>{e.visible=n===H.weaponIndex}),kt.weaponLabel.textContent=ol[H.weaponIndex],kt.swapWeapon.textContent=Ng[H.weaponIndex],kt.weaponIndex.textContent=`${String(H.weaponIndex+1).padStart(2,"0")} / ${String(_i.length).padStart(2,"0")}`,t&&xi(ol[H.weaponIndex],900)}function kr(){const i=we(H.health/H.maxHealth,0,1);kt.heroBar.style.width=`${i*100}%`,kt.hpNumber.textContent=String(Math.max(0,Math.round(H.health)))}function Fr(i){const t=we(i.health/i.maxHealth,0,1);i.bar.style.width=`${t*100}%`,i.healthBar.draw(t),i.card.classList.toggle("down",i.dead)}function Hr(i=!1){kt.comboNumber.textContent=String(H.combo),kt.comboWord.textContent=H.combo>=8?"RIPE RAGE":"COMBO",kt.combo.classList.toggle("hot",H.combo>=2),i&&H.combo>=2&&(kt.combo.classList.remove("hit"),kt.combo.offsetWidth,kt.combo.classList.add("hit")),kt.speedLines.classList.toggle("on",H.combo>=5)}function Qg(){kt.damageFlash.classList.add("on"),setTimeout(()=>kt.damageFlash.classList.remove("on"),120)}function ll(i){if(i.beta==null||i.gamma==null)return;H.tiltBase||(H.tiltBase={beta:i.beta,gamma:i.gamma});const t=i.beta-H.tiltBase.beta,e=i.gamma-H.tiltBase.gamma;window.innerHeight>window.innerWidth?(H.tiltRaw.x=we(e/26,-1,1),H.tiltRaw.y=we(t/30,-1,1)):(H.tiltRaw.x=we(t/30,-1,1),H.tiltRaw.y=we(-e/26,-1,1))}async function ah(){if(H.tilt){H.tilt=!1,H.tiltBase=null,H.tiltRaw.x=H.tiltRaw.y=0,kt.tiltBtn.classList.remove("on"),kt.tiltBtn.setAttribute("aria-pressed","false"),kt.tiltBtn.innerHTML='<span class="dot"></span>TILT OFF',window.removeEventListener("deviceorientation",ll),xi("TILT OFF",1200);return}if(!window.DeviceOrientationEvent){xi("NO MOTION SENSOR ON THIS DEVICE",2200);return}try{if(typeof window.DeviceOrientationEvent.requestPermission=="function"&&await window.DeviceOrientationEvent.requestPermission()!=="granted"){xi("MOTION PERMISSION DENIED",2400);return}}catch{xi("MOTION PERMISSION NEEDS A TAP",2400);return}H.tilt=!0,H.tiltBase=null,window.addEventListener("deviceorientation",ll,{passive:!0}),kt.tiltBtn.classList.add("on"),kt.tiltBtn.setAttribute("aria-pressed","true"),kt.tiltBtn.innerHTML='<span class="dot"></span>TILT ON',xi("TILT ON — LEAN TO MOVE",2e3)}const fn=new Set,en={active:!1,id:null,x:0,y:0};function ch(i,t){const e=kt.joystick.getBoundingClientRect(),n=e.left+e.width/2,r=e.top+e.height/2;let s=i-n,o=t-r;const a=e.width*.33,l=Math.hypot(s,o);l>a&&(s=s/l*a,o=o/l*a),kt.knob.style.transform=`translate(${s}px, ${o}px)`,en.x=s/a,en.y=o/a}kt.joystick.addEventListener("pointerdown",i=>{!H.started||H.ko||(i.preventDefault(),en.active=!0,en.id=i.pointerId,kt.joystick.classList.add("active"),kt.joystick.setPointerCapture(i.pointerId),ch(i.clientX,i.clientY),Ue.init())});kt.joystick.addEventListener("pointermove",i=>{!en.active||i.pointerId!==en.id||(i.preventDefault(),ch(i.clientX,i.clientY))});function Va(i){i&&i.pointerId!==en.id||(en.active=!1,en.id=null,en.x=en.y=0,kt.knob.style.transform="translate(0, 0)",kt.joystick.classList.remove("active"))}kt.joystick.addEventListener("pointerup",Va);kt.joystick.addEventListener("pointercancel",Va);window.addEventListener("blur",()=>{fn.clear(),Va()});function Vs(i,t){i.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation(),t()}),i.addEventListener("click",e=>{e.preventDefault(),e.detail===0&&t()})}Vs(kt.attackBtn,()=>Ga());Vs(kt.swapBtn,()=>{H.attack||(lr(H.weaponIndex+1,!0),Ue.init(),Ue.whoosh(.4))});Vs(kt.tiltBtn,ah);Vs(kt.soundBtn,()=>{Ue.init(),H.muted=!H.muted,Ue.setMuted(H.muted),kt.soundBtn.classList.toggle("on",!H.muted),kt.soundBtn.setAttribute("aria-pressed",String(!H.muted)),kt.soundBtn.innerHTML=`<span class="dot"></span>SOUND ${H.muted?"OFF":"ON"}`});window.addEventListener("keydown",i=>{const t=i.code;["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t)&&i.preventDefault(),fn.add(t),!i.repeat&&((t==="Space"||t==="KeyJ"||t==="KeyF")&&Ga(),t==="KeyQ"&&(H.attack||(lr(H.weaponIndex+1,!0),Ue.init(),Ue.whoosh(.4))),t==="KeyR"&&Wa(!0),t==="KeyM"&&kt.soundBtn.click(),t==="KeyT"&&ah())});window.addEventListener("keyup",i=>fn.delete(i.code));function t_(){let i=en.x,t=en.y;(fn.has("KeyA")||fn.has("ArrowLeft"))&&(i-=1),(fn.has("KeyD")||fn.has("ArrowRight"))&&(i+=1),(fn.has("KeyW")||fn.has("ArrowUp"))&&(t-=1),(fn.has("KeyS")||fn.has("ArrowDown"))&&(t+=1),H.tilt&&(H.tiltSmooth.x=Xt.damp(H.tiltSmooth.x,H.tiltRaw.x,8,1/60),H.tiltSmooth.y=Xt.damp(H.tiltSmooth.y,H.tiltRaw.y,8,1/60),i+=H.tiltSmooth.x,t+=H.tiltSmooth.y);const e=Math.hypot(i,t);return e>1&&(i/=e,t/=e),{x:i,y:t,magnitude:Math.min(1,e)}}function Ga(){if(!H.started||H.ko||H.attack||H.attackCooldown>0)return;Ue.init();const i=Jg[H.weaponIndex],t=oh(),e=Ft.group.position.clone();let n=Ft.group.rotation.y;const r=new R;t?(Ns.set(t.pos.x,0,t.pos.z),r.copy(Ns).sub(e).setY(0),r.lengthSq()<.001&&r.set(0,0,-1),r.normalize(),n=Math.atan2(r.x,r.z)):r.set(Math.sin(n),0,Math.cos(n)),H.attack={index:H.weaponIndex,spec:i,t:0,duration:i.duration,target:t,dir:r,yaw:n,hit:!1,base:Ft.group.position.clone(),lunge:t?Math.min(i.lunge,Math.max(.35,t.pos.distanceTo(e)-1.5)):0},H.attackCooldown=i.duration+.06,Ft.rig.torso.rotation.y=0,Ue.whoosh(.7+i.minPower),kt.attackBtn.classList.remove("flash"),kt.attackBtn.offsetWidth,kt.attackBtn.classList.add("flash")}function e_(i,t,e,n){if(i.dead)return;i.health=Math.max(0,i.health-t),i.stagger=.55+(e.launch?.25:0),i.attacking=!1,i.attackT=0,i.attackCooldown=Math.max(i.attackCooldown,2.2),i.hitFlash=.14;const r=Ns.set(i.pos.x-Ft.group.position.x,0,i.pos.z-Ft.group.position.z);r.lengthSq()<.001&&r.set(Math.random()-.5,0,Math.random()-.5),r.normalize();const s=e.minPower;i.velocity.addScaledVector(r,2.6+s*4.4),i.velocity.x+=(Math.random()-.5)*1.2,i.velocity.z+=(Math.random()-.5)*1.2,e.launch?(i.vy=4.7,i.velocity.y=0):i.vy=Math.max(i.vy,1.1+s*1.3),Fr(i),i.card.classList.remove("beingHit"),i.card.offsetWidth,i.card.classList.add("beingHit");const o=new R(i.pos.x,i.model.height*.68+i.y,i.pos.z);ze.burst(o,Kg[e.kind]||"gold",22,.9+s*.9),ze.shockwave(o,e.kind==="metal"?"#dfe9eb":"#ffb15a",1.5+s),ze.popup(String(Math.round(t)),o.clone().add(new R(0,.65,0)),{color:e.launch?"#b9ff79":"#ffd05e",size:.95+s*.28,rotation:(Math.random()-.5)*.16,burst:t>=20}),(Math.random()>.56||t>=20)&&ze.popup(al[Math.floor(Math.random()*al.length)],o.clone().add(new R((Math.random()-.5)*.7,1.2,.2)),{color:"#fff3d5",size:.7,rotation:(Math.random()-.5)*.35,life:.65}),ze.slash(o,e.kind==="metal"?"#f3feff":"#ffd7a1",Math.random()*Math.PI,2.4+s*2.2),H.shake=Math.min(.44,H.shake+.08+s*.12),H.combo+=1,H.comboTimer=2.5,Hr(!0),Ue.impact(e.kind,s),Ue.oof(),(H.combo===5||H.combo===10||H.combo===15)&&Ue.cheer(),i.health<=0&&(i.dead=!0,i.downTimer=4.8,i.healthBar.sprite.visible=!1,i.fallDir=Math.random()>.5?1:-1,i.velocity.multiplyScalar(1.25),i.vy=4.2,H.kills+=1,Fr(i),ze.popup("K.O.!",new R(i.pos.x,2.5+i.y,i.pos.z),{color:"#ff7b4d",size:1.75,burst:!0,life:1.1,rotation:-.05}),ze.burst(o,"red",32,1.5),ze.shockwave(o,"#ff5a3a",3.4),H.shake=.5,Ue.ko(),Ue.cheer(),setTimeout(()=>{Gn.every(a=>a.dead)&&!H.ko&&(H.round+=1,kt.roundLabel.textContent=`ROUND ${H.round}`)},600))}function n_(i){const t=i.spec,e=[];if(t.aoe)for(const n of Gn)n.dead||n.pos.distanceTo(Ft.group.position)<=t.reach+.45&&e.push(n);else i.target&&!i.target.dead&&i.target.pos.distanceTo(Ft.group.position)<=t.reach&&e.push(i.target);if(!e.length){const n=Ft.group.position.clone().addScaledVector(i.dir,1.9);n.y=1.45,ze.slash(n,"#ffd59d",Math.random()*Math.PI,1.4),H.shake=Math.max(H.shake,.03);return}for(const n of e){const r=.9+Math.random()*.22;e_(n,t.damage*r,t)}}function i_(){const i=H.attack;i&&(H.attack=null,Ft.group.position.copy(i.base),i.target&&i.target.dead,lr(H.weaponIndex+1,!1))}function r_(i,t){const e={x:-.2,y:0,z:.28},n={x:-.8,y:0,z:0},r={x:-.2,y:0,z:-.3},s={x:-.6,y:0,z:0};let o=0,a=0,l=0,c=0;if(i===0){const h=t<.34?t/.34:1,u=t<.34?0:(t-.34)/.66;o=t<.34?te(0,1.05,$e(h)):te(1.05,-1.25,Jn(u)),e.x=te(-.1,-1.25,$e(t<.34?h:1)),e.z=t<.34?te(.25,.95,$e(h)):te(.95,-.55,Jn(u)),n.x=-.35,r.x=-.8,r.z=-.75,s.x=-1.3,a=t<.34?-.05:.14,l=t<.34?.04:-.06}else if(i===1){const h=t<.24?t/.24:1,u=t<.24?0:(t-.24)/.76;o=t<.24?te(0,.9,$e(h)):te(.9,-1.35,Jn(u)),e.x=-1.45,e.z=t<.24?te(.3,.7,$e(h)):te(.7,-.9,Jn(u)),n.x=-.25,r.x=-.9,r.z=-1.05,s.x=-.9,a=.18+Math.sin(t*Math.PI)*.12,l=-.06}else if(i===2){const h=$e(t<.42?t/.42:1),u=t<.42?0:Jn((t-.42)/.58);e.x=t<.42?te(-.1,-2.85,h):te(-2.85,1,u),e.z=t<.42?.35:te(.35,.1,u),n.x=t<.42?-.5:te(-.9,-.2,u),r.x=t<.42?te(-.2,-2.5,h):te(-2.5,.6,u),r.z=-.5,s.x=-1.1,o=t<.42?.25:-.55,a=t<.42?-.18:.38,l=t<.42?.12:-.18}else if(i===3){const h=$e(t<.5?t/.5:1),u=t<.5?0:Jn((t-.5)/.5);e.x=t<.5?te(-.2,-3,h):te(-3,1.05,u),e.z=t<.5?te(.3,.05,h):te(.05,-.1,u),n.x=t<.5?te(-.8,-.2,h):te(-.2,-.4,u),r.x=t<.5?te(-.2,-2.8,h):te(-2.8,.8,u),r.z=-.25,s.x=-.9,o=t<.5?.35:-.65,a=t<.5?-.24:.5,l=t<.5?.14:-.22,c=Math.sin(we(t/.5,0,1)*Math.PI)*.28}else if(i===4){const h=$e(t<.4?t/.4:1),u=t<.4?0:Jn((t-.4)/.6);o=t<.4?te(0,1.25,h):te(1.25,-1.4,u),e.x=-1.2,e.z=t<.4?te(.4,1.4,h):te(1.4,-.8,u),n.x=-.3,r.x=-1.25,r.z=t<.4?te(-.4,-1.5,h):te(-1.5,.6,u),s.x=-.4,a=t<.4?-.08:.2,c=Math.sin(t*Math.PI)*.12}else{const h=$e(t<.36?t/.36:1),u=t<.36?0:Jn((t-.36)/.64);e.x=t<.36?te(.4,-1,h):te(-1,-3,u),e.z=t<.36?te(.2,-.1,h):te(-.1,.25,u),n.x=t<.36?-1.2:te(-1.2,-.2,u),r.x=t<.36?.3:-.9,r.z=-.6,s.x=-1.25,o=t<.36?-.15:.35,a=t<.36?.12:-.3,l=t<.36?-.14:.18,c=Math.sin(we(t/.8,0,1)*Math.PI)*.3}return{shR:e,elR:n,shL:r,elL:s,twist:o,lean:a,headPitch:l,lift:c}}function s_(i,t){const e=t_(),n=Ft.rig,r=H.attack,s=!!r,o=3.25,a=H.started&&!H.ko&&!s&&e.magnitude>.12;if(a){const S=e.x*o*i,y=e.y*o*i;Ft.group.position.x=we(Ft.group.position.x+S,-6.2,5.6),Ft.group.position.z=we(Ft.group.position.z+y,-4.2,4.4)}const l=oh();let c=Ft.group.rotation.y;if(r){const S=Fn(Ft.group.position,Ee.position);c=r.yaw+dn(S-r.yaw)*.2}else if(a)c=Math.atan2(e.x,e.y);else if(l){c=Fn(Ft.group.position,l.pos);const S=Fn(Ft.group.position,Ee.position);c+=dn(S-c)*.18}else c=Fn(Ft.group.position,Ee.position);Ft.group.rotation.y=sh(Ft.group.rotation.y,c,s?18:9,i);const h=Fn(Ft.group.position,Ee.position),u=dn(h-Ft.group.rotation.y),f=we(u*.56,-.62,.62);let d,g=0,M=0;if(r){const S=we(r.t/r.duration,0,1);d=r_(r.index,S),M=d.lift,r.t+=i;const y=we(S/.78,0,1),_=Math.sin(y*Math.PI);Ft.group.position.copy(r.base).addScaledVector(r.dir,r.lunge*_),!r.hit&&r.t>=r.spec.hitTime&&(r.hit=!0,n_(r))}else{const S=Math.sin(t*2.3),y=a?Math.sin(t*10):0;g=a?Math.abs(Math.sin(t*9.5))*.045:S*.008,M=0,d={shR:{x:-.22+S*.02,y:0,z:.3},elR:{x:-.95,y:0,z:0},shL:{x:-.2+S*.02,y:0,z:-.32},elL:{x:-.62,y:0,z:0},twist:f+(a?Math.sin(t*9.5)*.04:S*.015),lean:a?.08:-.015+S*.006},a&&(d.shR.x=-.45+y*.6,d.shL.x=-.45-y*.6,d.elR.x=-1,d.elL.x=-.8),d.headPitch=a?.02:-.02}let m;r&&r.target?(m=Fn(Ft.group.position,r.target.pos),m+=dn(h-m)*.2):l?(m=Fn(Ft.group.position,l.pos),m+=dn(h-m)*.26):m=c;const p=we(dn(m-(Ft.group.rotation.y+n.torso.rotation.y)),-.95,.95);if(n.head.rotation.y=Xt.damp(n.head.rotation.y,p*(s?.62:.32),13,i),n.head.rotation.x=Xt.damp(n.head.rotation.x,(d.headPitch||0)+.03*Math.sin(t*1.7),10,i),n.head.rotation.z=Xt.damp(n.head.rotation.z,s?-.04:Math.sin(t*1.1)*.02,8,i),n.torso.rotation.y=Xt.damp(n.torso.rotation.y,d.twist+f*(s?.25:1),18,i),n.torso.rotation.x=Xt.damp(n.torso.rotation.x,d.lean,15,i),n.torso.rotation.z=Xt.damp(n.torso.rotation.z,a?Math.sin(t*9.5)*.035:Math.sin(t*1.6)*.012,10,i),n.shoulderR.rotation.x=Xt.damp(n.shoulderR.rotation.x,d.shR.x,24,i),n.shoulderR.rotation.y=Xt.damp(n.shoulderR.rotation.y,d.shR.y,20,i),n.shoulderR.rotation.z=Xt.damp(n.shoulderR.rotation.z,d.shR.z,24,i),n.elbowR.rotation.x=Xt.damp(n.elbowR.rotation.x,d.elR.x,22,i),n.elbowR.rotation.z=Xt.damp(n.elbowR.rotation.z,d.elR.z,20,i),n.shoulderL.rotation.x=Xt.damp(n.shoulderL.rotation.x,d.shL.x,20,i),n.shoulderL.rotation.y=Xt.damp(n.shoulderL.rotation.y,d.shL.y,18,i),n.shoulderL.rotation.z=Xt.damp(n.shoulderL.rotation.z,d.shL.z,20,i),n.elbowL.rotation.x=Xt.damp(n.elbowL.rotation.x,d.elL.x,18,i),n.elbowL.rotation.z=Xt.damp(n.elbowL.rotation.z,d.elL.z,18,i),a){const S=t*9.5;n.hipL.rotation.x=Math.sin(S)*.6,n.hipR.rotation.x=-Math.sin(S)*.6,n.kneeL.rotation.x=Math.max(0,-Math.sin(S))*.75,n.kneeR.rotation.x=Math.max(0,Math.sin(S))*.75,n.hipL.rotation.z=-.03,n.hipR.rotation.z=.03}else{const S=s?1.4:1,y=Math.sin(t*1.6)*.02;n.hipL.rotation.x=Xt.damp(n.hipL.rotation.x,s?-.18:0,12,i),n.hipR.rotation.x=Xt.damp(n.hipR.rotation.x,s?.16:0,12,i),n.hipL.rotation.z=Xt.damp(n.hipL.rotation.z,-.1*S+y,10,i),n.hipR.rotation.z=Xt.damp(n.hipR.rotation.z,.1*S-y,10,i),n.kneeL.rotation.x=Xt.damp(n.kneeL.rotation.x,.12+(s?.18:0),12,i),n.kneeR.rotation.x=Xt.damp(n.kneeR.rotation.x,.12+(s?.18:0),12,i)}s?Ft.group.position.y=M+g:(Ft.group.position.y=0,Ft.group.position.y+=g),H.ko?(Ft.group.rotation.z=Xt.damp(Ft.group.rotation.z,1.45,4,i),Ft.group.position.y=Xt.damp(Ft.group.position.y,.25,4,i)):Ft.group.rotation.z=Xt.damp(Ft.group.rotation.z,0,8,i),r&&r.t>=r.duration&&i_()}function o_(i,t){for(const e of Gn){const n=e.model.rig,r=e.model,s=Ft.group.position;if(e.hitFlash>0&&(e.hitFlash-=i),e.dead){e.downTimer-=i,e.vy-=16*i,e.y=Math.max(0,e.y+e.vy*i),e.pos.x+=e.velocity.x*i,e.pos.z+=e.velocity.z*i,e.velocity.multiplyScalar(Math.max(0,1-i*2.8)),e.model.group.position.set(e.pos.x,e.y,e.pos.z),e.model.group.rotation.z=Xt.damp(e.model.group.rotation.z,e.fallDir*1.5,4,i),e.model.group.rotation.x=Xt.damp(e.model.group.rotation.x,.1,3,i),e.downTimer<=0&&a_(e);continue}e.model.group.rotation.z=Xt.damp(e.model.group.rotation.z,0,5,i),e.model.group.rotation.x=Xt.damp(e.model.group.rotation.x,0,5,i),e.vy-=16*i,e.y+=e.vy*i,e.y<0&&(e.y=0,e.vy=0,e.velocity.y=0),e.pos.x+=e.velocity.x*i,e.pos.z+=e.velocity.z*i,e.velocity.x=Xt.damp(e.velocity.x,0,3.5,i),e.velocity.z=Xt.damp(e.velocity.z,0,3.5,i),e.stagger>0&&(e.stagger-=i);const o=Math.hypot(s.x-e.pos.x,s.z-e.pos.z),a=Ns.set(s.x-e.pos.x,0,s.z-e.pos.z);a.lengthSq()<1e-4&&a.set(0,0,1),a.normalize();const l=Math.atan2(a.x,a.z),c=Fn(e.pos,Ee.position),h=e.id==="fat"?.42:.3,u=l+dn(c-l)*h;if(e.model.group.rotation.y=sh(e.model.group.rotation.y,u,6,i),!e.attacking&&e.stagger<=0&&H.started&&!H.ko){if(e.attackCooldown-=i,o>3.1)e.pos.x+=a.x*e.speed*i,e.pos.z+=a.z*e.speed*i;else if(o<2.15)e.pos.x-=a.x*e.speed*.55*i,e.pos.z-=a.z*e.speed*.55*i;else{const v=Math.sin(t*1.3+e.phase)*.28;e.pos.x+=-a.z*v*i,e.pos.z+=a.x*v*i}e.attackCooldown<=0&&o<3.2&&(e.attacking=!0,e.attackT=0,e.attackStruck=!1,Ue.oof())}if(e.attacking){e.attackT+=i;const v=e.id==="skinny"?.62:.78;if(!(e.attackT<v)){if(!e.attackStruck)if(e.attackStruck=!0,o<3.3&&H.started&&!H.ko){const P=e.hurtPower+Math.floor(Math.random()*3);c_(P)}else ze.popup("WHIFF",new R(e.pos.x,1.8,e.pos.z),{color:"#9fd4cf",size:.55,life:.55,rotation:.1})}e.attackT>v+.5&&(e.attacking=!1,e.attackCooldown=3.4+Math.random()*3.2)}e.pos.x=we(e.pos.x,-5.5,6.3),e.pos.z=we(e.pos.z,-4,4.4),r.group.position.set(e.pos.x,e.y,e.pos.z);const f=Gn.find(v=>v!==e&&!v.dead);if(f){const v=e.pos.x-f.pos.x,P=e.pos.z-f.pos.z,U=Math.hypot(v,P);if(U<2.9&&U>1e-4){const z=(2.9-U)*.5;e.pos.x+=v/U*z,e.pos.z+=P/U*z}}const d=dn(c-e.model.group.rotation.y),g=we(d*.78,-.92,.92),M=Fn(e.pos,s),m=we(dn(M-(e.model.group.rotation.y+g)),-.85,.85),p=e.id==="skinny"?Math.sin(t*22+e.phase)*.02:0,S=Math.sin(t*(e.id==="skinny"?3.4:2.1)+e.phase);let y=0,_={x:.05,z:-.15},A={x:.05,z:.15},b=-.2,C=-.2,D=0;if(e.id==="skinny"?(_={x:-.8+Math.sin(t*1.8)*.12,z:-.6-Math.sin(t*1.5)*.1},A={x:-.5-Math.sin(t*1.8+1)*.16,z:.65+Math.sin(t*1.4)*.12},b=-1.3,C=-1,y=.12+p,D=Math.max(0,Math.sin(t*2.2+e.phase))*.03):(_={x:.05+S*.02,z:-.42},A={x:.05+S*.02,z:.42},b=-.4,C=-.4,y=-.05+S*.008),e.attacking){const v=e.id==="skinny"?.62:.78,P=we(e.attackT/v,0,1),U=we((e.attackT-v)/.5,0,1);e.attackT<v?(y=-.18-$e(P)*.25,_.x=te(_.x,-1.9,$e(P)),A.x=te(A.x,-1.7,$e(P)),_.z-=$e(P)*.35,A.z+=$e(P)*.35,b=-.7,C=-.7):e.attackStruck?(y=.22*(1-U)-.05,_.x=te(.4,.05,U),A.x=te(.5,.05,U)):(y=.22,_.x=.4,A.x=.5)}e.stagger>0&&(y-=e.stagger*.9,_.x-=e.stagger*1.4,A.x-=e.stagger*1.1,_.z-=e.stagger*.8,A.z+=e.stagger*.8);const E=g+(e.attacking?Math.sin(e.attackT*6)*.06:0);if(n.torso.rotation.y=Xt.damp(n.torso.rotation.y,E,8,i),n.torso.rotation.x=Xt.damp(n.torso.rotation.x,y,9,i),n.head.rotation.y=Xt.damp(n.head.rotation.y,m*.36,9,i),n.head.rotation.x=Xt.damp(n.head.rotation.x,-.02+(e.attacking?-.08:0),7,i),n.torso.position.y=n.torso.userData.baseY??(n.torso.userData.baseY=n.torso.position.y),n.torso.position.y=(n.torso.userData.baseY??0)-D,n.shoulderL&&(n.shoulderL.rotation.x=Xt.damp(n.shoulderL.rotation.x,_.x,9,i),n.shoulderL.rotation.z=Xt.damp(n.shoulderL.rotation.z,_.z,9,i),n.shoulderR.rotation.x=Xt.damp(n.shoulderR.rotation.x,A.x,9,i),n.shoulderR.rotation.z=Xt.damp(n.shoulderR.rotation.z,A.z,9,i),n.elbowL.rotation.x=Xt.damp(n.elbowL.rotation.x,b,9,i),n.elbowR.rotation.x=Xt.damp(n.elbowR.rotation.x,C,9,i)),e.id==="skinny"){n.hipL.rotation.z=-.05+Math.sin(t*2.3)*.04,n.hipR.rotation.z=.05-Math.sin(t*2.3)*.04,n.sign.rotation.z=Math.sin(t*2.2+.5)*.045-y*.3;const v=n.sign.getWorldPosition(jg),P=Math.atan2(Ee.position.x-v.x,Ee.position.z-v.z),U=dn(P-(e.model.group.rotation.y+n.torso.rotation.y));n.sign.rotation.y=Xt.damp(n.sign.rotation.y,we(U,-1.2,1.2),6,i)}e.healthBar.sprite.position.set(e.pos.x,e.y+r.height+.28,e.pos.z),e.healthBar.sprite.visible=!e.dead,r.update?.(t)}}function a_(i){i.dead=!1,i.health=i.maxHealth,i.pos.copy(i.spawn),i.model.group.position.copy(i.spawn),i.model.group.rotation.set(0,0,0),i.velocity.set(0,0,0),i.y=0,i.vy=0,i.downTimer=0,i.stagger=0,i.attacking=!1,i.attackCooldown=3.2+Math.random()*2.4,i.healthBar.sprite.visible=!0,Fr(i),ze.burst(new R(i.pos.x,1.2,i.pos.z),"orange",22,.7),ze.popup("HE’S BACK",new R(i.pos.x,2.5,i.pos.z),{color:"#ffd08a",size:.7,life:.8}),i.card.classList.remove("down")}function c_(i,t){if(H.ko||!H.started)return;H.health=Math.max(0,H.health-i),H.lastDamage=H.time,H.shake=Math.min(.5,H.shake+.2),H.combo=0,H.comboTimer=0,Hr(),kr(),Qg(),Ue.hurt();const e=Ft.group.position.clone();e.y=1.9,ze.popup(`-${i}`,e,{color:"#ff7e62",size:.8,life:.7,rotation:.1}),ze.burst(e,"red",10,.7),H.health<=0&&l_()}function l_(){H.ko=!0,H.attack=null,H.combo=0,Hr(),Ue.ko(),H.shake=.55,ze.popup("TOO RIPE",new R(Us.x,2.7,Us.z),{color:"#ff8a5c",size:1.35,burst:!0,life:1.4}),setTimeout(()=>{H.ko&&kt.ko.classList.remove("hidden")},900)}function Wa(i=!1){H.health=H.maxHealth,H.ko=!1,H.combo=0,H.comboTimer=0,H.attack=null,H.attackCooldown=0,H.kills=0,H.round=1,H.lastDamage=-99,H.shake=0,kt.roundLabel.textContent="ROUND 1",kt.ko.classList.add("hidden"),kt.speedLines.classList.remove("on"),Ft.group.position.copy(Us),Ft.group.rotation.set(0,1.2,0),Ft.rig.head.rotation.set(0,0,0),Ft.rig.torso.rotation.set(0,0,0);for(const t of Gn)t.dead=!1,t.health=t.maxHealth,t.pos.copy(t.spawn),t.model.group.position.copy(t.spawn),t.model.group.rotation.set(0,0,0),t.model.rig.torso.rotation.set(0,0,0),t.velocity.set(0,0,0),t.y=0,t.vy=0,t.downTimer=0,t.stagger=0,t.attacking=!1,t.attackCooldown=4+Math.random()*3,t.healthBar.sprite.visible=!0,Fr(t),t.card.classList.remove("down");kr(),Hr(),lr(0),i&&Gs()}function Gs(){Ue.init(),Ue.start();const i=H.started;if(H.ko&&Wa(!1),H.started=!0,H.ko=!1,kt.intro.classList.add("hidden"),kt.ko.classList.add("hidden"),kr(),!i){const t=new R(-.1,1.55,.2);Ee.position.set(2.5,3.7,9.2),Ee.lookAt(t)}H.hintShown||(H.hintShown=!0,setTimeout(()=>xi("MASH SMASH — EVERY SWING AUTO-SWAPS",2600),2800))}kt.startBtn.addEventListener("click",i=>{i.preventDefault(),Gs()});kt.rematchBtn.addEventListener("click",i=>{i.preventDefault(),Gs()});const qi=new R(-.1,1.5,.2),Ms=new R,ys=new R,Yi=new R;function h_(i,t){if(!H.started){const f=.3+Math.sin(t*.11)*.16,d=window.innerHeight>window.innerWidth?12.4:9.5;Ms.set(.2+Math.sin(f)*d,4.15+Math.sin(t*.22)*.16,.1+Math.cos(f)*d),ys.set(.35,1.62,.15),Ee.position.lerp(Ms,1-Math.exp(-i*1.4)),qi.lerp(ys,1-Math.exp(-i*1.6)),Ee.lookAt(qi);return}const n=window.innerWidth/window.innerHeight<.85,r=window.innerHeight<520,s=Gn.filter(f=>!f.dead);Yi.set(0,0,0);for(const f of s)Yi.add(f.pos);s.length?Yi.multiplyScalar(1/s.length):Yi.copy(Ft.group.position),ys.set(te(Ft.group.position.x,Yi.x,n?.52:.36)+(n?.35:.1),n?2:r?1.22:1.55,te(Ft.group.position.z,Yi.z,n?.4:.36));const o=n?2.2:3,a=n?3.9:r?3.15:3.65,l=n?13.4:r?7.8:8.25;Ms.set(Ft.group.position.x+o,Ft.group.position.y+a,Ft.group.position.z+l);const c=1-Math.exp(-i*(H.ko?1.4:3.6)),h=1-Math.exp(-i*(H.ko?1.8:5.2));Ee.position.lerp(Ms,c),qi.lerp(ys,h);const u=H.shake;u>.001&&(Ee.position.x+=(Math.random()-.5)*u,Ee.position.y+=(Math.random()-.5)*u*.7,Ee.position.z+=(Math.random()-.5)*u*.5,qi.x+=(Math.random()-.5)*u*.4,qi.y+=(Math.random()-.5)*u*.3),Ee.lookAt(qi),H.shake=Xt.damp(H.shake,0,7,i),H.shake<.002&&(H.shake=0)}function lh(){const i=window.innerWidth,t=window.innerHeight;xn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),xn.setSize(i,t),Ee.aspect=i/t,Ee.fov=t>i?62:t<520?50:47,Ee.updateProjectionMatrix()}window.addEventListener("resize",lh);lh();const hh=new Nf;let fi=0;function u_(){const i=Math.min(hh.getDelta(),.05);fi+=i,H.time=fi,H.started&&!H.ko&&(H.attackCooldown=Math.max(0,H.attackCooldown-i),H.comboTimer>0&&(H.comboTimer-=i,H.comboTimer<=0&&(H.combo=0,Hr())),fi-H.lastDamage>8&&H.health<H.maxHealth&&(H.health=Math.min(H.maxHealth,H.health+i*1.4),kr())),s_(i,fi),o_(i,fi),h_(i,fi),$g.update(fi),ze.update(i),xn.render(Ti,Ee)}lr(0);kr();Gn.forEach(Fr);xn.setAnimationLoop(u_);document.body.dataset.ready="true";window.__kayisi={state:H,hero:Ft,enemies:Gn,camera:Ee,scene:Ti,weapons:_i,attack:Ga,startGame:Gs,resetFight:Wa,setWeapon:lr,fx:ze};window.addEventListener("visibilitychange",()=>{document.hidden||hh.getDelta()});
