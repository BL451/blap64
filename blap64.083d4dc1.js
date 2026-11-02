import"./blap64.5071707b.js";function e(e,t,i,a){Object.defineProperty(e,t,{get:i,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i=globalThis,a={},o={},s=i.parcelRequire905d;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},i.parcelRequire905d=s);var n=s.register;n("drhU0",function(t,i){e(t.exports,"createBreadcrumbNav",()=>p),e(t.exports,"updateBreadcrumb",()=>h);var a=s("jJTNo"),o=s("JTwtx"),n=s("d9MMf"),r=s("fJjw1"),l=s("hbH95");function c(e,t){e.preventDefault(),t&&window.appRouter&&window.appRouter.navigate(t,"/"===t?{skipAnimations:!0}:{})}let p=e=>{let t=function(e){let t=e.replace(/^\/?#+\/?/,"")||"/";if("/"===t||""===t)return[{name:"~",path:null},{name:"home",path:"/"}];let i=t.match(/^\/interactive\/live\/(.+)$/);if(i){let e=i[1],a=(0,o.findProjectBySlug)(e);return[{name:"~",path:null},{name:"home",path:"/"},{name:"interactive",path:"/interactive"},{name:"live",path:"/interactive/live"},{name:a?a.name:e,path:t}]}let a=t.match(/^\/interactive\/web\/(.+)$/);if(a){let e=a[1],i=(0,r.findProjectBySlug)(e);return[{name:"~",path:null},{name:"home",path:"/"},{name:"interactive",path:"/interactive"},{name:"web",path:"/interactive/web"},{name:i?i.name:e,path:t}]}let s=t.match(/^\/photo\/(.+)$/);if(s){let e=s[1],i=(0,n.findCollectionBySlug)(e);return[{name:"~",path:null},{name:"home",path:"/"},{name:"photo",path:"/photo"},{name:i?i.name:e,path:t}]}let c=t.match(/^\/links\/(.+)$/);if(c){let e=c[1].split("/"),i=(0,l.findLinkGroupPath)(e[e.length-1]),a=[{name:"~",path:null},{name:"home",path:"/"},{name:"links",path:"/links"}];return i?i.forEach((e,t)=>{a.push({name:e.id,path:"/links/"+i.slice(0,t+1).map(e=>e.id).join("/")})}):a.push({name:e[e.length-1],path:t}),a}return"/interactive/live"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"interactive",path:"/interactive"},{name:"live",path:"/interactive/live"}]:"/interactive/web"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"interactive",path:"/interactive"},{name:"web",path:"/interactive/web"}]:"/about"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"about",path:"/about"}]:"/about/resume"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"about",path:"/about"},{name:"resume",path:"/about/resume"}]:"/interactive"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"interactive",path:"/interactive"}]:"/photo"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"photo",path:"/photo"}]:"/links"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"links",path:"/links"}]:"/oops"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"404",path:"/oops"}]:[{name:"~",path:null},{name:"home",path:"/"},{name:t.replace("/",""),path:t}]}(e);return(0,a.html)`
        <div class="breadcrumb-nav">
            <span class="breadcrumb-text">
                <span class="breadcrumb-segment" @click=${e=>c(e,"/")}>~/home</span>${t.length>2?t.slice(2).map(e=>(0,a.html)`<span class="breadcrumb-separator">/</span><span class="breadcrumb-segment" @click=${t=>c(t,e.path)}>${e.name}</span>`):""}
            </span>
        </div>
    `},h=e=>{let t=document.getElementById("breadcrumb-container");if(t){let i=e.replace(/^\/?#+\/?/,"")||"/";Promise.resolve(s("800sp")).then(({render:e})=>{e(p(i),t)})}}}),n("JTwtx",function(i,a){e(i.exports,"projects",()=>eI),e(i.exports,"findProjectBySlug",()=>eC),e(i.exports,"getProjectIndexBySlug",()=>eS);var o=s("dJEV6"),n=s("c5LMG"),r=s("ilSGt"),l=s("g2z6j"),c=s("gmZgJ"),p=s("TiOu3"),h=s("esqme"),d=s("8gCmT"),m=s("g3XVg"),u=s("1XSyB"),v=s("1TF2t"),g=s("hRvYT"),f=s("jWdsW"),y=s("4nMNA"),b=s("cq1Iv"),x=s("bGAJA"),w=s("jDyle"),k=s("h72pW"),T=s("hIPVA"),A=s("7L7uE"),I=s("9LFfG"),C=s("irja9"),S=s("6P57R"),P=s("2cSLL"),L=s("iW57Q"),j=s("6koWC"),E=s("bR8cm"),B=s("5ucxB"),M=s("4iFc5"),W=s("aSuHG"),z=s("4Ql3K"),D=s("eMzZn"),O=s("531oB"),R=s("gltKM"),$=s("33pXu"),U=s("ceGjv"),N=s("eVWVU"),V=s("1JVLn"),F=s("koobu"),H=s("l9oDf"),G=s("afSar"),q=s("gCbXs"),K=s("fXEgN"),J=s("FIkud"),Y=s("bo2HT"),_=s("l5kN4"),X=s("acjrk"),Z=s("2THVu"),Q=s("4YBPt"),ee=s("gLY8r"),et=s("92BNT"),ei=s("3bqeq"),ea=s("7mtBn"),eo=s("03G7r"),es=s("Qn0pP"),en=s("i3ZWc"),er=s("2ZZFq"),el=s("fWboo"),ec=s("59b9w"),ep=s("dZTdR"),eh=s("8EfBZ"),ed=s("hWpKg"),em=s("4TZaW"),eu=s("6sqIk"),ev=s("iYjFU"),eg=s("jPFVK"),ef=s("ab33d"),ey=s("2awQ6"),eb=s("hAQe1"),ex=s("gzHqD"),ew=s("4uhWq"),ek=s("3qphS"),eT=s("fQWGC"),eA=s("16p52");let eI=[{name:"Sketching Flock",slug:"sketching-flock",type:"Interactive Installation",location:"Toronto, Canada",year:"2025",description:'Sketching Flock is an interactive projection installation that uses hand-tracking technology to enable participants to direct the flight paths of digital "birds", causing them to paint abstractly on an ever-changing virtual canvas. The work explores the collaboration between natural movement and algorithmic motion design, while examining participants\' willingness to be perceived by computer vision systems in pursuit of playful creative expression.\n\nFirst exhibited on March 1st, 2025 at InterAccess\'s "Goodbye Dupont" Open HDMI show on the IA360 projection system (Toronto, Canada). Also exhibited on March 29th, 2025 at the UKAI Projects "Farewell to the Bridge" 24 hour art festival (Toronto, Canada).\n\nThis installation was built using the original Leap Motion hand-tracking controller for enabling interactivity, JavaScript with the p5.js creative coding library for realtime visuals, and Chataigne for the convenient mapping and routing of hand-tracking information between the two.',images:[t(c),t(d),t(p),t(h),t(m)],thumbnails:{[t(c)]:t(Z),[t(p)]:t(Q)},previewThumbnail:t(eg)},{name:"We Play In The World They Make",slug:"we-play",type:"Role-Playing Game",location:"Toronto, Canada",year:"2025",description:'We Play In The World They Make is an interactive role-playing game installation where five participants compete for resources while consulting AI companions that embody different ideological positions. Each player is paired with a distinct AI shrine representing power structures—DOGMA, ATTENTION, ACCUMULATION, PRIVILEGE, and POWER—that offer strategic advice aligned with their respective worldviews. An AI judge evaluates player pitches based on algorithmic criteria including movement stability, vocal clarity, and conformity. The work examines how algorithmic systems embed particular visions of the future while positioning participants as both collaborators with and subjects of machine intelligence.\n\nMultiple runs of the game prototype were played on March 29th, 2025 at the UKAI Projects "Farewell to the Bridge" 24 hour art festival (Toronto, Canada).\n\nThis installation incorporates multiple AI systems: the JUDGE uses computer vision and speech recognition to evaluate player performances, while AI companions like ACCUMULATION employ OCR to interpret handwritten communications, creating a complex ecosystem of human-AI interaction within structured competitive play.',images:[t(N),t($),t(U),t(V),t(F)],thumbnails:{[t(N)]:t(eu)},previewThumbnail:t(ef)},{name:"Blind Spots",slug:"blind-spots",type:"Interactive Installation",location:"Toronto, Canada",year:"2025",description:'Blind Spots is an interactive projection installation that vanishes when directly observed, revealing itself only in peripheral vision. Using gaze-tracking technology, the piece presents an amalgam of recordings from previous audience interactions, becoming visible only when viewers look away. Drawing on Derrida\'s concept of "hauntology," the work critiques pervasive surveillance systems by making visible our complicity within technological infrastructures that shape reality while remaining largely invisible.\n\nCreated as part of the Aberrant AI residency hosted by UKAI Projects. First prototype exhibited at The Bridge Open Studio event (Toronto, Canada) on January 17th, 2025.\n\nCollaboration with software artist Ryan Kelln under the ArtRemains Collective. This installation was built using computer vision and AI technologies for gaze detection, with custom software for real-time video processing and interactive response.',images:[t(g),t(v),t(u)],thumbnails:{[t(u)]:t(ee),[t(v)]:t(et)},previewThumbnail:t(ey)},{name:"The Reader",slug:"the-reader",type:"Perceptive Installation",location:"Toronto, Canada",year:"2025",description:"The Reader is an AI-driven installation that continuously observes its environment and generates evolving narratives from collected data. Using computer vision, audio recognition, and Bluetooth scanning, the system gathers environmental information and feeds it to a locally-run large language model that creates an ongoing story displayed alongside reactive visuals and audio. By mimicking surveillance systems while maintaining complete privacy through local processing, the work makes visible the normally opaque operations of data collection and algorithmic interpretation.\n\nWork-in-progress version exhibited at The Bridge Open Studio showcase (Toronto, Canada) on January 17th, 2025 as part of the Aberrant AI residency.\n\nThis installation was built using computer vision, speech recognition, Bluetooth scanning, a local LLM for narrative generation, and custom audio-visual systems that respond to environmental data streams.",images:[t(R),t(D),t(O)],thumbnails:{[t(R)]:t(em)},previewThumbnail:t(eb)},{name:"Long Winter 13.1",slug:"long-winter-13-1",type:"Live Visual Performance",location:"Toronto, Canada",year:"2024",description:"A live audio-visual performance that translates musical input into reactive projected visuals in real-time. Using direct audio feeds from performers, the system generates abstract animations that respond dynamically to frequency, amplitude, and rhythmic patterns. The performance explores the intersection of live musical improvisation and computational visualization, creating an immersive ceiling-projected environment.\n\nPerformed at Long Winter season 13 opener event (Toronto, Canada) on November 8th, 2024.\n\nThis performance utilized VDMX for video mixing and audio analysis, custom GLSL/ISF shaders, p5.js browser-based sketches, and TouchOSC for real-time parameter control via iPad Pro.",images:[t(H),t(G),t(q),t(K),t(J),t(Y),t(_)],thumbnails:{[t(H)]:t(ev)},previewThumbnail:t(ex)},{name:"Game, Set, Match",slug:"game-set-match",type:"Interactive Installation",location:"Toronto, Canada",year:"2024",description:"Game, Set, Match is an interactive projection installation that transforms viewers into players within a surreal tennis match. A procedurally generated crowd of cartoon spectators tracks audience movement while tennis balls bounce across the space in response to occupancy levels. Hand gestures trigger cheers and waves from the digital crowd. The work playfully examines human-computer interaction and the gamification of social spaces through embodied participation.\n\nExhibited on the IA360° projection system at InterAccess Gallery (Toronto, Canada) on May 24th, 2024 as part of the inaugural IA Gateway program.\n\nThis installation was built using computer vision for movement and gesture tracking, JavaScript with p5.js for procedural crowd generation and physics simulation, and custom projection mapping for the 360° environment.",images:[t(w),t(x),t(b),t(y),t(f)],thumbnails:{[t(y)]:t(ei),[t(b)]:t(ea),[t(x)]:t(eo)},previewThumbnail:t(ew)},{name:"Live Coding",slug:"live-coding",type:"Live Visual Performance",location:"Toronto, Canada",year:"2024",description:"Live Coding is a real-time performance where code creation becomes the primary medium, generating evolving visuals through progressive algorithmic iteration. Using JavaScript and p5.js within the P5LIVE environment, the performance created abstract animations that responded to live DJ sets through repetition, trigonometric compositions, and framebuffer manipulations. The work positions programming as performative practice, exploring the intersection of computational improvisation and musical collaboration.\n\nPerformed on May 18th, 2024 and March 2nd, 2024 at Open HDMI events at InterAccess (Toronto, Canada).\n\nThis performance utilized the P5LIVE live coding environment by Ted Davis, JavaScript with p5.js creative coding library, and real-time audio input for responsive visual generation.",images:[t(T),t(A),t(I),t(k),t(S),t(C),t(P)],thumbnails:{[t(k)]:t(es),[t(T)]:t(en),[t(A)]:t(er),[t(I)]:t(el),[t(S)]:t(ec)},previewThumbnail:t(ek)},{name:"Bird Conductor",slug:"bird-conductor",type:"Interactive Installation",location:"Toronto, Canada",year:"2024",description:"Bird Conductor is an interactive projection installation that enables participants to conduct flocks of digital birds through natural hand gestures captured via computer vision. The work examines how machine learning can facilitate intuitive human-computer interaction in playful contexts, exploring the translation of physical movement into algorithmic behavior.\n\nExhibited at The Bridge (Toronto, Canada) on March 29th, 2024 at Long Winter 12.3.\n\nThis installation was built using a standard webcam and the Mediapipe machine learning library for gesture recognition, JavaScript with the p5.js creative coding library for realtime visuals.",images:[t(o),t(l),t(r),t(n)],thumbnails:{[t(o)]:t(X)},previewThumbnail:t(eT)},{name:"Surveil Yourself",slug:"surveil-yourself",type:"Interactive Installation",location:"Toronto, Canada",year:"2023",description:"Surveil Yourself is a real-time interactive system that invites audience members to contribute their phone camera feeds to a collective projected display. Participants scan a QR code to stream their device cameras, which are integrated into a grid of feeds surrounding the space. The work questions voluntary surveillance and collective spectatorship, examining how willingly we contribute to systems of observation in exchange for participation.\n\nPremiered at P2P 2023 Open HDMI event at InterAccess (Toronto, Canada) using the IA 360 projection system.\n\nCollaboration with Asucena Di Giovanni. This installation was built using a custom web interface for video streaming, Python scripting with Syphon and OSC for data routing, VDMX for projection mapping, custom shaders for audio-reactive visuals, and TouchOSC for real-time control.",images:[t(L),t(j),t(E),t(B),t(M),t(W),t(z)],thumbnails:{[t(L)]:t(ep),[t(j)]:t(eh),[t(E)]:t(ed)},previewThumbnail:t(eA)}],eC=e=>eI.find(t=>t.slug===e),eS=e=>eI.findIndex(t=>t.slug===e)}),n("dJEV6",function(e,t){e.exports=import.meta.resolve("61yiA")}),n("c5LMG",function(e,t){e.exports=import.meta.resolve("hiX74")}),n("ilSGt",function(e,t){e.exports=import.meta.resolve("6fPml")}),n("g2z6j",function(e,t){e.exports=import.meta.resolve("bx7vM")}),n("gmZgJ",function(e,t){e.exports=import.meta.resolve("k5GIw")}),n("TiOu3",function(e,t){e.exports=import.meta.resolve("9PjXo")}),n("esqme",function(e,t){e.exports=import.meta.resolve("ieuda")}),n("8gCmT",function(e,t){e.exports=import.meta.resolve("9p6a3")}),n("g3XVg",function(e,t){e.exports=import.meta.resolve("gdhBZ")}),n("1XSyB",function(e,t){e.exports=import.meta.resolve("lILRV")}),n("1TF2t",function(e,t){e.exports=import.meta.resolve("lVMux")}),n("hRvYT",function(e,t){e.exports=import.meta.resolve("eKCEN")}),n("jWdsW",function(e,t){e.exports=import.meta.resolve("9r84j")}),n("4nMNA",function(e,t){e.exports=import.meta.resolve("dsJsU")}),n("cq1Iv",function(e,t){e.exports=import.meta.resolve("jOB9Q")}),n("bGAJA",function(e,t){e.exports=import.meta.resolve("f8qy1")}),n("jDyle",function(e,t){e.exports=import.meta.resolve("jpM1A")}),n("h72pW",function(e,t){e.exports=import.meta.resolve("9jBpA")}),n("hIPVA",function(e,t){e.exports=import.meta.resolve("jfK3I")}),n("7L7uE",function(e,t){e.exports=import.meta.resolve("6Obs0")}),n("9LFfG",function(e,t){e.exports=import.meta.resolve("dNZhq")}),n("irja9",function(e,t){e.exports=import.meta.resolve("ftOo8")}),n("6P57R",function(e,t){e.exports=import.meta.resolve("rDZfV")}),n("2cSLL",function(e,t){e.exports=import.meta.resolve("lnAOY")}),n("iW57Q",function(e,t){e.exports=import.meta.resolve("aeOvi")}),n("6koWC",function(e,t){e.exports=import.meta.resolve("aIq5g")}),n("bR8cm",function(e,t){e.exports=import.meta.resolve("cX3df")}),n("5ucxB",function(e,t){e.exports=import.meta.resolve("ju6uG")}),n("4iFc5",function(e,t){e.exports=import.meta.resolve("aWZ6Q")}),n("aSuHG",function(e,t){e.exports=import.meta.resolve("7uIUA")}),n("4Ql3K",function(e,t){e.exports=import.meta.resolve("hTzem")}),n("eMzZn",function(e,t){e.exports=import.meta.resolve("nMZN6")}),n("531oB",function(e,t){e.exports=import.meta.resolve("hd0NN")}),n("gltKM",function(e,t){e.exports=import.meta.resolve("lKlfo")}),n("33pXu",function(e,t){e.exports=import.meta.resolve("jDaHr")}),n("ceGjv",function(e,t){e.exports=import.meta.resolve("j7HHM")}),n("eVWVU",function(e,t){e.exports=import.meta.resolve("1AANJ")}),n("1JVLn",function(e,t){e.exports=import.meta.resolve("cQaVd")}),n("koobu",function(e,t){e.exports=import.meta.resolve("lHKxw")}),n("l9oDf",function(e,t){e.exports=import.meta.resolve("3BUz0")}),n("afSar",function(e,t){e.exports=import.meta.resolve("eGs3K")}),n("gCbXs",function(e,t){e.exports=import.meta.resolve("kFi1l")}),n("fXEgN",function(e,t){e.exports=import.meta.resolve("e3AvI")}),n("FIkud",function(e,t){e.exports=import.meta.resolve("79xzi")}),n("bo2HT",function(e,t){e.exports=import.meta.resolve("ksc9N")}),n("l5kN4",function(e,t){e.exports=import.meta.resolve("b2PsY")}),n("acjrk",function(e,t){e.exports=import.meta.resolve("5QaRW")}),n("2THVu",function(e,t){e.exports=import.meta.resolve("3xLTR")}),n("4YBPt",function(e,t){e.exports=import.meta.resolve("5lVSh")}),n("gLY8r",function(e,t){e.exports=import.meta.resolve("fsqJv")}),n("92BNT",function(e,t){e.exports=import.meta.resolve("P8nWU")}),n("3bqeq",function(e,t){e.exports=import.meta.resolve("9MJTv")}),n("7mtBn",function(e,t){e.exports=import.meta.resolve("MutnP")}),n("03G7r",function(e,t){e.exports=import.meta.resolve("2HxCI")}),n("Qn0pP",function(e,t){e.exports=import.meta.resolve("4GOyk")}),n("i3ZWc",function(e,t){e.exports=import.meta.resolve("gcwms")}),n("2ZZFq",function(e,t){e.exports=import.meta.resolve("3CRnX")}),n("fWboo",function(e,t){e.exports=import.meta.resolve("a8xY2")}),n("59b9w",function(e,t){e.exports=import.meta.resolve("1G7sL")}),n("dZTdR",function(e,t){e.exports=import.meta.resolve("2GD8V")}),n("8EfBZ",function(e,t){e.exports=import.meta.resolve("hMA1V")}),n("hWpKg",function(e,t){e.exports=import.meta.resolve("cfSF5")}),n("4TZaW",function(e,t){e.exports=import.meta.resolve("efxFT")}),n("6sqIk",function(e,t){e.exports=import.meta.resolve("6YSCt")}),n("iYjFU",function(e,t){e.exports=import.meta.resolve("gLLWl")}),n("jPFVK",function(e,t){e.exports=import.meta.resolve("dnteb")}),n("ab33d",function(e,t){e.exports=import.meta.resolve("igwc7")}),n("2awQ6",function(e,t){e.exports=import.meta.resolve("6LXAC")}),n("hAQe1",function(e,t){e.exports=import.meta.resolve("gP6Sr")}),n("gzHqD",function(e,t){e.exports=import.meta.resolve("6yOHH")}),n("4uhWq",function(e,t){e.exports=import.meta.resolve("jMFxP")}),n("3qphS",function(e,t){e.exports=import.meta.resolve("lczQU")}),n("fQWGC",function(e,t){e.exports=import.meta.resolve("dt9Ey")}),n("16p52",function(e,t){e.exports=import.meta.resolve("h984A")}),n("d9MMf",function(i,a){e(i.exports,"photoCollections",()=>eL),e(i.exports,"findCollectionBySlug",()=>ej);var o=s("lbshW"),n=s("1hq0x"),r=s("g4o4J"),l=s("cDb9Y"),c=s("aJKbo"),p=s("1hyRS"),h=s("fKYCR"),d=s("5kGZk"),m=s("7UHx3"),u=s("5b7n3"),v=s("8xRFU"),g=s("7QfKQ"),f=s("eICss"),y=s("6b5pK"),b=s("8VLsg"),x=s("ayjtq"),w=s("bspOz"),k=s("aqCTl"),T=s("iyWk3"),A=s("7ggft"),I=s("fwoO5"),C=s("1BwqA"),S=s("2no5u"),P=s("bXzCI"),L=s("h7eH7"),j=s("5f3iS"),E=s("2L1SO"),B=s("go6TW"),M=s("HSzpq"),W=s("6wjvK"),z=s("byjUF"),D=s("31ib9"),O=s("fMuPC"),R=s("9jhET"),$=s("iyBa8"),U=s("avobq"),N=s("ajGd1"),V=s("d1zYl"),F=s("i7b18"),H=s("8g0Ee"),G=s("fdYZS"),q=s("2o1hn"),K=s("h6khA"),J=s("fvP1I");s("iwcMJ");var Y=s("7M7Bu"),_=s("1mPFF");s("1ZoX8");var X=s("OmH9S"),Z=s("9bl1p"),Q=s("1enG9"),ee=s("gqkoo"),et=s("1Es4e"),ei=s("fJVov"),ea=s("gVHyx"),eo=s("bpgRb"),es=s("lilVY"),en=s("iIXAI"),er=s("bxBzM"),el=s("e2cGk"),ec=s("32SAE"),ep=s("8cGKE"),eh=s("6KePK"),ed=s("9EasB"),em=s("5rbIv"),eu=s("5b7MZ"),ev=s("6Bl0R"),eg=s("4dr2z"),ef=s("lOpt3"),ey=s("9YEDR"),eb=s("e1vqF"),ex=s("exjQh"),ew=s("2xymK"),ek=s("78CkL"),eT=s("ez1UD"),eA=s("fibgA"),eI=s("bH86D");s("3VHmK");var eC=s("bQX0W"),eS=s("8Px2O"),eP=s("hhCct");let eL=[{id:"portrait",name:"PORTRAIT",slug:"portrait",description:"Subjects in controlled and natural environments",heroImage:t(o),heroImageThumb:t(n),images:[t(o),t(z),t(W),t(p),t(C),t(S),t(A),t(L),t(D),t(P),t(b),t(v),t(B),t(M),t(x),t(I),t(m),t(u),t(g),t(j),t(f),t(E),t(y),t(w),t(k),t(T),t(h),t(d)]},{id:"aberrant",name:"ABERRANT",slug:"aberrant",description:"Experimental and conceptual photographic explorations",heroImage:t(ei),heroImageThumb:t(l),images:[t(ei),t(ef),t(ev),t(ea),t(eo),t(ec),t(ep),t(es),t(en),t(er),t(el),t(eh),t(ed),t(em),t(eu),t(eg)]},{id:"performance",name:"PERFORMANCE",slug:"performance",description:"Concerts, live events, and artistic performances",heroImage:t(O),heroImageThumb:t(r),images:[t(O),t(ee),t(Z),t(H),t(G),t(X),t(R),t(J),t(Y),t(_),t(K),t(U),t(q),t($),t(Q),t(V),t(F),t(N),t(et)]},{id:"astro",name:"ASTRO",slug:"astro",description:"Celestial objects and astronomical phenomena",heroImage:t(ey),heroImageThumb:t(c),images:[t(ey),t(eb),t(ex),t(eC),t(ew),t(ek),t(eT),t(eA),t(eI),t(eS),t(eP)]}],ej=e=>eL.find(t=>t.slug===e)}),n("lbshW",function(e,t){e.exports=import.meta.resolve("j7R11")}),n("1hq0x",function(e,t){e.exports=import.meta.resolve("9OReD")}),n("g4o4J",function(e,t){e.exports=import.meta.resolve("k08MK")}),n("cDb9Y",function(e,t){e.exports=import.meta.resolve("a8CS4")}),n("aJKbo",function(e,t){e.exports=import.meta.resolve("kvyi2")}),n("1hyRS",function(e,t){e.exports=import.meta.resolve("dXupA")}),n("fKYCR",function(e,t){e.exports=import.meta.resolve("fbskd")}),n("5kGZk",function(e,t){e.exports=import.meta.resolve("3wx5U")}),n("7UHx3",function(e,t){e.exports=import.meta.resolve("5mrr4")}),n("5b7n3",function(e,t){e.exports=import.meta.resolve("bUQvt")}),n("8xRFU",function(e,t){e.exports=import.meta.resolve("lXtsm")}),n("7QfKQ",function(e,t){e.exports=import.meta.resolve("5oJOJ")}),n("eICss",function(e,t){e.exports=import.meta.resolve("64CU3")}),n("6b5pK",function(e,t){e.exports=import.meta.resolve("6RAWO")}),n("8VLsg",function(e,t){e.exports=import.meta.resolve("iyzri")}),n("ayjtq",function(e,t){e.exports=import.meta.resolve("xDxPT")}),n("bspOz",function(e,t){e.exports=import.meta.resolve("gvkKR")}),n("aqCTl",function(e,t){e.exports=import.meta.resolve("jFiAb")}),n("iyWk3",function(e,t){e.exports=import.meta.resolve("75Vjz")}),n("7ggft",function(e,t){e.exports=import.meta.resolve("aGGNu")}),n("fwoO5",function(e,t){e.exports=import.meta.resolve("1muV5")}),n("1BwqA",function(e,t){e.exports=import.meta.resolve("f0hNP")}),n("2no5u",function(e,t){e.exports=import.meta.resolve("l7LWz")}),n("bXzCI",function(e,t){e.exports=import.meta.resolve("dFBmc")}),n("h7eH7",function(e,t){e.exports=import.meta.resolve("LAHME")}),n("5f3iS",function(e,t){e.exports=import.meta.resolve("alYfv")}),n("2L1SO",function(e,t){e.exports=import.meta.resolve("en5TQ")}),n("go6TW",function(e,t){e.exports=import.meta.resolve("qRVUf")}),n("HSzpq",function(e,t){e.exports=import.meta.resolve("c7iFK")}),n("6wjvK",function(e,t){e.exports=import.meta.resolve("6o1zj")}),n("byjUF",function(e,t){e.exports=import.meta.resolve("94c6Y")}),n("31ib9",function(e,t){e.exports=import.meta.resolve("3NhmW")}),n("fMuPC",function(e,t){e.exports=import.meta.resolve("jNivA")}),n("9jhET",function(e,t){e.exports=import.meta.resolve("7dmJT")}),n("iyBa8",function(e,t){e.exports=import.meta.resolve("a2XL5")}),n("avobq",function(e,t){e.exports=import.meta.resolve("45suf")}),n("ajGd1",function(e,t){e.exports=import.meta.resolve("lJhE6")}),n("d1zYl",function(e,t){e.exports=import.meta.resolve("gtSkb")}),n("i7b18",function(e,t){e.exports=import.meta.resolve("edPW0")}),n("8g0Ee",function(e,t){e.exports=import.meta.resolve("9YVh1")}),n("fdYZS",function(e,t){e.exports=import.meta.resolve("6miqK")}),n("2o1hn",function(e,t){e.exports=import.meta.resolve("gyPJA")}),n("h6khA",function(e,t){e.exports=import.meta.resolve("4dr8N")}),n("fvP1I",function(e,t){e.exports=import.meta.resolve("6ol1N")}),n("iwcMJ",function(e,t){e.exports=import.meta.resolve("gCarM")}),n("7M7Bu",function(e,t){e.exports=import.meta.resolve("bc38V")}),n("1mPFF",function(e,t){e.exports=import.meta.resolve("cNJzk")}),n("1ZoX8",function(e,t){e.exports=import.meta.resolve("ih7I1")}),n("OmH9S",function(e,t){e.exports=import.meta.resolve("6aImD")}),n("9bl1p",function(e,t){e.exports=import.meta.resolve("ktD3O")}),n("1enG9",function(e,t){e.exports=import.meta.resolve("kMtJp")}),n("gqkoo",function(e,t){e.exports=import.meta.resolve("f4G9Y")}),n("1Es4e",function(e,t){e.exports=import.meta.resolve("kxeul")}),n("fJVov",function(e,t){e.exports=import.meta.resolve("dIf09")}),n("gVHyx",function(e,t){e.exports=import.meta.resolve("aJJMK")}),n("bpgRb",function(e,t){e.exports=import.meta.resolve("horGt")}),n("lilVY",function(e,t){e.exports=import.meta.resolve("7bRpX")}),n("iIXAI",function(e,t){e.exports=import.meta.resolve("ioUUy")}),n("bxBzM",function(e,t){e.exports=import.meta.resolve("lNGM8")}),n("e2cGk",function(e,t){e.exports=import.meta.resolve("83YQJ")}),n("32SAE",function(e,t){e.exports=import.meta.resolve("441t3")}),n("8cGKE",function(e,t){e.exports=import.meta.resolve("1hK9M")}),n("6KePK",function(e,t){e.exports=import.meta.resolve("khs9F")}),n("9EasB",function(e,t){e.exports=import.meta.resolve("37A4l")}),n("5rbIv",function(e,t){e.exports=import.meta.resolve("6vVSv")}),n("5b7MZ",function(e,t){e.exports=import.meta.resolve("kTs2T")}),n("6Bl0R",function(e,t){e.exports=import.meta.resolve("2LcCM")}),n("4dr2z",function(e,t){e.exports=import.meta.resolve("5A2vk")}),n("lOpt3",function(e,t){e.exports=import.meta.resolve("3JZ2n")}),n("9YEDR",function(e,t){e.exports=import.meta.resolve("e0hQ6")}),n("e1vqF",function(e,t){e.exports=import.meta.resolve("hRgaW")}),n("exjQh",function(e,t){e.exports=import.meta.resolve("dc7mt")}),n("2xymK",function(e,t){e.exports=import.meta.resolve("jrVZY")}),n("78CkL",function(e,t){e.exports=import.meta.resolve("iZ7tz")}),n("ez1UD",function(e,t){e.exports=import.meta.resolve("cuA6I")}),n("fibgA",function(e,t){e.exports=import.meta.resolve("3K3dZ")}),n("bH86D",function(e,t){e.exports=import.meta.resolve("8MwhF")}),n("3VHmK",function(e,t){e.exports=import.meta.resolve("i4SDT")}),n("bQX0W",function(e,t){e.exports=import.meta.resolve("e11Sf")}),n("8Px2O",function(e,t){e.exports=import.meta.resolve("hUimd")}),n("hhCct",function(e,t){e.exports=import.meta.resolve("i3epz")}),n("fJjw1",function(i,a){e(i.exports,"projects",()=>u),e(i.exports,"findProjectBySlug",()=>v);var o=s("i4ygW"),n=s("7y3mw"),r=s("eQxbx"),l=s("bycJP"),c=s("lGFEw"),p=s("jbYZy"),h=s("garYl"),d=s("409Cz"),m=s("cDp4M");let u=[{name:"Dimension Door",slug:"dimension-door",year:"2024",description:"A swirling psychedelic vortex of multicoloured squares twists aggressively back and forth, seemingly descending into the black background.",subtitle:"SKETCH",image:t(n),type:"local",url:null},{name:"Strange Ink",slug:"strange-ink",year:"2025",description:"An extremely simple program that produces a fascinating, liquid-like output using no physics or simulation algorithms.",subtitle:"INTERACTIVE",image:t(m),type:"local",url:null},{name:"Koi Pond",slug:"koi-pond",year:"2024",description:"Fishy :)",subtitle:"SKETCH",image:t(p),type:"local",url:null},{name:"Lava Lamp",slug:"lava-lamp",year:"2023",description:"Groovy.",subtitle:"SKETCH",image:t(h),type:"local",url:null},{name:"Infinite Bauhaus",slug:"infinite-bauhaus",year:"2023",description:"Bauhaus, infinitely.",subtitle:"SKETCH",image:t(c),type:"local",url:null},{name:"Galaxy Collision",slug:"galaxy-collision",year:"2024",description:"Oop.",subtitle:"SKETCH",image:t(l),type:"local",url:null},{name:"Flow Fields",slug:"flow-fields",year:"2023",description:"Configurable perlin noise field driving particle velocity.",subtitle:"INTERACTIVE",image:t(r),type:"local",url:null},{name:"Asteroids",slug:"asteroids",year:"2024",description:"Asteroids!",subtitle:"GAME",image:t(o),type:"local",url:null},{name:"Nissan 300ZX",slug:"nissan-300zx",year:"2023",description:"A close digital clone of the speedometer and tachometer from the 1987 Nizzan 300ZX Z31",subtitle:"INTERACTIVE",image:t(d),type:"local",url:null}];function v(e){return u.find(t=>t.slug===e)}}),n("i4ygW",function(e,t){e.exports=import.meta.resolve("leBhW")}),n("7y3mw",function(e,t){e.exports=import.meta.resolve("akyM9")}),n("eQxbx",function(e,t){e.exports=import.meta.resolve("l6hfJ")}),n("bycJP",function(e,t){e.exports=import.meta.resolve("cDsc0")}),n("lGFEw",function(e,t){e.exports=import.meta.resolve("1sPXw")}),n("jbYZy",function(e,t){e.exports=import.meta.resolve("gE6qw")}),n("garYl",function(e,t){e.exports=import.meta.resolve("jkUUY")}),n("409Cz",function(e,t){e.exports=import.meta.resolve("jWbBg")}),n("cDp4M",function(e,t){e.exports=import.meta.resolve("5Fa8v")}),n("hbH95",function(t,i){e(t.exports,"links",()=>a),e(t.exports,"findLinkGroupPath",()=>o);let a=[{id:"zcal",title:"BOOK ME",url:"https://zcal.co/blap64",icon:"CALL",description:"Tell me your project"},{id:"learn",title:"LEARN",icon:"LERN",description:"Workshops and resources",links:[{id:"workshops",title:"WORKSHOPS",icon:"WKSP",description:"Live sessions",links:[]},{id:"tube",title:"YOUTUBE",url:"https://www.youtube.com/@blapcode",icon:"YTBE",description:"TouchDesigner tutorials"},{id:"patreon",title:"PATREON",url:"https://www.patreon.com/blapcode",icon:"PTRN",description:"TouchDesigner files"}]},{id:"instagram",title:"INSTAGRAM",url:"https://instagram.com/blapcode",icon:"INST",description:"Upcoming projects"},{id:"ukai",title:"UKAI PROJECTS",url:"https://ukaiprojects.com",icon:"UKAI",description:"Live events"},{id:"discord",title:"DISCORD",url:"https://discord.gg/pYPvzCMwFY",icon:"DSCD",description:"Join the community"},{id:"home",title:"PORTFOLIO",url:"https://blap64.com",icon:"SITE",description:"Works / contact"}],o=(e,t=a)=>{for(let i of t){if(!i.links)continue;if(i.id===e)return[i];let t=o(e,i.links);if(t)return[i,...t]}return null}}),n("baa6D",function(t,i){e(t.exports,"mobileCheck",()=>a),e(t.exports,"smoothFollow",()=>o),e(t.exports,"easeInCubic",()=>s),e(t.exports,"getFontSizes",()=>n),e(t.exports,"widthCheck",()=>r),e(t.exports,"isDesktopOnly",()=>l),e(t.exports,"getMediaPath",()=>c),e(t.exports,"isVideoFile",()=>p),e(t.exports,"calculateCropDimensions",()=>h),e(t.exports,"getViewportSize",()=>d),e(t.exports,"updateCursor",()=>m),e(t.exports,"AnimationManager",()=>u),e(t.exports,"UICornerBoxButton",()=>g),e(t.exports,"TextWriter",()=>T),e(t.exports,"UIPlanetButton",()=>f),e(t.exports,"radialToCartesian",()=>k),e(t.exports,"UIArcButton",()=>y),e(t.exports,"UITriangleButton",()=>b),e(t.exports,"UIHexButton",()=>x),e(t.exports,"daysSince",()=>w),e(t.exports,"UIWebButton",()=>A);let a=()=>{let e=/iPhone|iPad|Android/i.test(navigator.userAgent),t=/iPad/i.test(navigator.userAgent)||/Android/i.test(navigator.userAgent)&&!/Chrome/i.test(navigator.userAgent);return!!(e||t)},o=(e,t,i,a=100)=>t+Math.min(i*(e-t),a),s=e=>e*e*e,n=(e,t)=>r(e)&&a()?{small:13,medium:20,large:48}:{small:24,medium:32,large:64},r=e=>e<768,l=()=>{let e=navigator.userAgent,t=/Macintosh/i.test(e)&&navigator.maxTouchPoints>1,i=/iPhone|iPad|Android/i.test(e),a=/iPad/i.test(e)||t||/Android/i.test(e)&&!/Chrome/i.test(e);return!(i||a)},c=e=>"string"==typeof e?e:e&&"object"==typeof e?e.default||e.src||e.href||e.toString():String(e),p=e=>e.toLowerCase().match(/\.(mp4|mov|webm|avi)(\?.*)?$/i),h=(e,t,i,a)=>{let o=i/a,s=0,n=0,r=e,l=t;return e/t>o?s=(e-(r=t*o))/2:n=(t-(l=e/o))/2,{sourceX:s,sourceY:n,sourceWidth:r,sourceHeight:l}},d=()=>({width:Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)}),m=(e,t,i,...a)=>{let o=!1;for(let e of a){if(Array.isArray(e)){for(let a of e)if(a&&a.contains&&a.contains(t,i)){o=!0;break}}else"function"==typeof e?e(t,i)&&(o=!0):e&&e.contains&&e.contains(t,i)&&(o=!0);if(o)break}o?e.cursor("pointer"):e.cursor("default")};class u{constructor(e){this.states=e,this.to_render={},this.t=0}execute(e){this.t+=e.deltaTime;let t=this.t;this.to_render={},this.states.every((e,i)=>(t>=e.start_time&&t<e.start_time+e.duration?this.to_render[e.idx]=i:t>=e.start_time+e.duration&&e.persist&&(this.to_render[e.idx]=i),!0)),Object.values(this.to_render).forEach(e=>{let i=Math.min((t-this.states[e].start_time)/this.states[e].duration,1);this.states[e].fn(i,...this.states[e].args)})}}class v{constructor(e,t,i,a,o){this.p5=e,this.p=e.createVector(t,i),this.s=e.createVector(a,o)}dist(e,t){let i=this.p5.createVector(e,t);return p5.Vector.dist(this.p,i)}}class g extends v{constructor(e,t,i,a,o,s,n,r,l){super(e,t,i,a,o),this.cs=e.createVector(s,n),this.textWriter=new T(e,t,i,void 0,void 0,r,l)}contains(e,t){return this.insideBox(e,t,this.p.x,this.p.y,this.s.x,this.s.y)}insideBox(e,t,i,a,o,s){return e>=i-o/2&&e<=i+o/2&&t>=a-s/2&&t<=a+s/2}render(){let e=this.p5.constrain(this.s.x*(this.cs.x-.5),-.1*this.s.x,this.s.x),t=this.p5.constrain(this.s.y*(this.cs.y-.5),-.1*this.s.y,this.s.y);this.corners(this.p.x,this.p.y,this.s.x,this.s.y,e,t)}corners(e,t,i,a,o,s){let n={x:e-.5*i,y:t-.5*a},r={x:e+.5*i,y:t-.5*a},l={x:e-.5*i,y:t+.5*a},c={x:e+.5*i,y:t+.5*a};this.corner(n.x,n.y,o,s),this.corner(r.x,r.y,-o,s),this.corner(l.x,l.y,o,-s),this.corner(c.x,c.y,-o,-s)}corner(e,t,i,a){this.p5.line(e,t,e+i,t),this.p5.line(e,t,e,t+a)}}class f extends v{constructor(e,t,i,a,o,s,n,r,l="",c=12,p=0,h=0){super(e,t,i,2*a,2*a),this.radius=a,this.orbitRadius=o,this.angle=s,this.speed=n,this.color=r,this.originalAngle=s,this.textOffsetX=p,this.textOffsetY=h,this.textWriter=new T(e,t+p,i+h,void 0,void 0,l,c),this.active=!1}contains(e,t){return this.p5.dist(e,t,this.p.x,this.p.y)<=1.5*this.radius}updatePosition(e,t,i){this.angle+=-this.speed*i;let a=k(this.orbitRadius,this.angle,this.p5);this.p.x=e+a.x,this.p.y=t+a.y,this.textWriter.p.x=this.p.x+this.textOffsetX,this.textWriter.p.y=this.p.y+this.textOffsetY}render(e,t){let i=this.p5.map(e.dist(this.p5.createVector(this.p.x,this.p.y)),0,.1*t,1,0,!0),a=this.radius;this.p5.stroke(this.color,128+127*i),this.p5.strokeWeight(2),this.p5.noFill();let o=-this.angle+this.p5.PI/2;this.p5.arc(this.p.x,this.p.y,a,a,o+.1-i,o+this.p5.PI-.1+i),this.p5.strokeWeight(1),this.p5.arc(this.p.x,this.p.y,.8*a,.8*a,o+this.p5.PI+.1-i,o-.1+i),this.renderUITriangles(a,i),this.renderText(i)}renderUITriangles(e,t){let i=e*(1.5+.2*this.p5.sin(.05*this.p.x+.05*this.p.y+.001*this.p5.millis())),a=.2*e;this.p5.fill(128+127*t,20,20,128+127*t),this.p5.noStroke(),[{x:this.p.x-i/2,y:this.p.y-i/2,angle:5*this.p5.PI/4},{x:this.p.x+i/2,y:this.p.y-i/2,angle:7*this.p5.PI/4},{x:this.p.x+i/2,y:this.p.y+i/2,angle:this.p5.PI/4},{x:this.p.x-i/2,y:this.p.y+i/2,angle:3*this.p5.PI/4}].forEach(e=>{this.p5.push(),this.p5.translate(e.x,e.y),this.p5.rotate(e.angle+this.p5.PI/2),this.p5.triangle(0,-a*(.5-2*t),-(.8*a),.5*a,.8*a,.5*a),this.p5.pop()})}renderText(e){if(this.textWriter&&this.textWriter.t&&this.textWriter.t.length>0){let t,i;if(this.p5.push(),this.p5.fill(74,144+80*e,230),this.p5.noStroke(),this.p5.textAlign(this.p5.LEFT,this.p5.CENTER),this.p5.textFont("BPdotsSquareVF",{fontVariationSettings:"wght 900"}),this.p5.textSize(this.textWriter.size),"undefined"!=typeof window&&window.textCache&&window.textCache.has(this.textWriter.t)){let e=window.textCache.get(this.textWriter.t);t=e.lines,i=e.lineHeight}else{let e=this.textWriter.t.split(" ");t=[];let a="";for(let i of e)(a+i).length>16&&a.length>0?(t.push(a.trim()),a=i+" "):a+=i+" ";a.length>0&&t.push(a.trim()),i=1.2*this.textWriter.size}t.forEach((e,a)=>{let o=this.textWriter.p.y+(a-(t.length-1)/2)*i;this.p5.text(e,this.textWriter.p.x,o)}),this.p5.pop()}}setTextOffset(e,t){this.textOffsetX=e,this.textOffsetY=t,this.textWriter.p.x=this.p.x+this.textOffsetX,this.textWriter.p.y=this.p.y+this.textOffsetY}toggle(){this.active=!this.active}setActive(e){this.active=e}isActive(){return this.active}}class y extends v{constructor(e,t,i,a,o,s,n,r,l){super(e,t,i,a,o),this.cs=e.createVector(s,n),this.textWriter=new T(e,t,i,void 0,void 0,r,l)}contains(e,t){return this.dist(e,t)<=this.s.x/2}insideBox(e,t,i,a,o,s){return e>=i-o/2&&e<=i+o/2&&t>=a-s/2&&t<=a+s/2}render(){this.p5.arc(this.p.x,this.p.y,this.s.x,this.s.y,this.p5.TWO_PI*this.cs.x,this.p5.TWO_PI*this.cs.x-this.p5.min(1.5*this.p5.PI*(1-this.cs.x),1.5*this.p5.PI))}}class b extends v{constructor(e,t,i,a,o,s,n,r,l,c,p=[230],h=[230,20,20]){super(e,t,i,a,o),this.cs=e.createVector(s,n,r),this.top=e.createVector(this.p.x+this.s.x*e.cos(this.cs.z),this.p.y+this.s.y*e.sin(this.cs.z)),this.left=e.createVector(this.p.x+this.s.x*e.cos(this.cs.z+2*e.PI/3),this.p.y+this.s.y*e.sin(this.cs.z+2*e.PI/3)),this.right=e.createVector(this.p.x+this.s.x*e.cos(this.cs.z+4*e.PI/3),this.p.y+this.s.y*e.sin(this.cs.z+4*e.PI/3)),this.textWriter=new T(e,t,i,void 0,void 0,l,c),this.unhoveredColor=p,this.hoveredColor=h}render(){this.top=this.p5.createVector(this.p.x+this.s.x*this.p5.cos(this.cs.z),this.p.y+this.s.y*this.p5.sin(this.cs.z)),this.left=this.p5.createVector(this.p.x+this.s.x*this.p5.cos(this.cs.z+2*this.p5.PI/3),this.p.y+this.s.y*this.p5.sin(this.cs.z+2*this.p5.PI/3)),this.right=this.p5.createVector(this.p.x+this.s.x*this.p5.cos(this.cs.z+4*this.p5.PI/3),this.p.y+this.s.y*this.p5.sin(this.cs.z+4*this.p5.PI/3)),this.cs.x=this.p5.map(this.cs.x,0,1,.25,.08,!0);let e=p5.Vector.lerp(this.top,this.right,this.cs.x),t=p5.Vector.lerp(this.left,this.top,this.cs.x),i=p5.Vector.lerp(this.right,this.left,this.cs.x),a=p5.Vector.lerp(this.top,this.right,1-this.cs.x),o=p5.Vector.lerp(this.left,this.top,1-this.cs.x),s=p5.Vector.lerp(this.right,this.left,1-this.cs.x);this.p5.line(a.x,a.y,e.x,e.y),this.p5.line(o.x,o.y,t.x,t.y),this.p5.line(s.x,s.y,i.x,i.y)}renderTriangle(){this.top=this.p5.createVector(this.p.x+this.s.x*this.p5.cos(this.cs.z),this.p.y+this.s.y*this.p5.sin(this.cs.z)),this.left=this.p5.createVector(this.p.x+this.s.x*this.p5.cos(this.cs.z+2*this.p5.PI/3),this.p.y+this.s.y*this.p5.sin(this.cs.z+2*this.p5.PI/3)),this.right=this.p5.createVector(this.p.x+this.s.x*this.p5.cos(this.cs.z+4*this.p5.PI/3),this.p.y+this.s.y*this.p5.sin(this.cs.z+4*this.p5.PI/3)),this.p5.triangle(this.top.x,this.top.y,this.left.x,this.left.y,this.right.x,this.right.y);for(let e=1;e<=3;e++){let t=this.p5.map(this.cs.x,(e-1)/3,e/3,0,1,!0);if(t>0){let i=1-.25*e*t,a=this.p5.createVector(this.p.x+this.s.x*i*this.p5.cos(this.cs.z),this.p.y+this.s.y*i*this.p5.sin(this.cs.z)),o=this.p5.createVector(this.p.x+this.s.x*i*this.p5.cos(this.cs.z+2*this.p5.PI/3),this.p.y+this.s.y*i*this.p5.sin(this.cs.z+2*this.p5.PI/3)),s=this.p5.createVector(this.p.x+this.s.x*i*this.p5.cos(this.cs.z+4*this.p5.PI/3),this.p.y+this.s.y*i*this.p5.sin(this.cs.z+4*this.p5.PI/3));this.p5.triangle(a.x,a.y,o.x,o.y,s.x,s.y)}}}contains(e,t){return this.isPointInTriangleFast(e,t,this.top.x,this.top.y,this.left.x,this.left.y,this.right.x,this.right.y)}isPointInTriangleFast(e,t,i,a,o,s,n,r){let l=this.sign(e,t,i,a,o,s),c=this.sign(e,t,o,s,n,r),p=this.sign(e,t,n,r,i,a);return!((l<0||c<0||p<0)&&(l>0||c>0||p>0))}sign(e,t,i,a,o,s){return(e-o)*(a-s)-(i-o)*(t-s)}setTextOffset(e,t){this.textWriter.p.x=this.p.x+e,this.textWriter.p.y=this.p.y+t}getColor(e){return e?this.hoveredColor:this.unhoveredColor}}class x extends v{constructor(e,t,i,a,o,s,n,r,l){super(e,t,i,a,o),this.cs=e.createVector(s,n),this.vertices=this.calculateHexVertices(),this.textWriter=new T(e,t,i,void 0,void 0,r,l)}calculateHexVertices(){let e=[];for(let t=0;t<6;t++){let i=t*this.p5.PI/3,a=this.p.x+this.radius*this.p5.cos(i),o=this.p.y+this.radius*this.p5.sin(i);e.push({x:a,y:o})}return e}contains(e,t){return this.isPointInHexagon(e,t)}isPointInHexagon(e,t){return this.p5.dist(e,t,this.p.x,this.p.y)<=this.radius}render(){this.radius=Math.min(this.s.x,this.s.y)/2,this.vertices=this.calculateHexVertices();for(let e=0;e<6;e++){let t=this.vertices[e],i=this.vertices[(e+1)%6],a=this.vertices[(e-1+6)%6],o=this.p5.map(this.cs.x,0,1,.2,.9,!0),s=this.p5.lerp(t.x,i.x,.1),n=this.p5.lerp(t.y,i.y,.1),r=this.p5.lerp(t.x,i.x,.1+.9*o),l=this.p5.lerp(t.y,i.y,.1+.9*o);this.p5.line(s,n,r,l);let c=this.p5.lerp(t.x,a.x,.1),p=this.p5.lerp(t.y,a.y,.1),h=this.p5.lerp(t.x,a.x,.1+.9*o),d=this.p5.lerp(t.y,a.y,.1+.9*o);this.p5.line(c,p,h,d)}}}let w=e=>{let t=new Date(e);return Math.floor((new Date-t)/864e5)},k=(e,t,i)=>({x:e*i.cos(t),y:-e*i.sin(t)});class T extends v{constructor(e,t,i,a,o,s,n=32,r){super(e,t,i,a,o),this.t=s,this.size=n,this.weight=r,this.alphabet="~!@#$%&*_+=/<>?",this.progress=0}render(){this.p5.textSize(this.size),this.p5.text(this.t,this.p.x,this.p.y,this.s.x)}renderRandom(e){void 0==e&&(e=this.progress);let t=this.t.length,i="";for(let a=0;a<t;a++)this.p5.random()>e?i+=this.alphabet[this.p5.floor(this.p5.random(0,this.alphabet.length))]:i+=this.t[a];this.p5.textSize(this.size),this.p5.text(i,this.p.x,this.p.y)}renderSequential(e){void 0==e&&(e=this.progress);let t=this.t.length,i=this.p5.round(e*t),a=this.t.slice(0,i);this.p5.textSize(this.size),this.p5.text(a,this.p.x,this.p.y)}renderSequentialRandom(e){void 0==e&&(e=this.progress),e=this.p5.constrain(e,0,1);let t=this.t.length,i=this.p5.round(e*t),a=this.t.slice(0,i);this.p5.randomSeed(12345*e*t+this.p5.millis()),i!=t&&(a+=this.alphabet[this.p5.floor(this.p5.random(0,this.alphabet.length))]),this.p5.randomSeed(),this.p5.textSize(this.size),this.s.x?this.p5.text(a,this.p.x,this.p.y,this.s.x):this.p5.text(a,this.p.x,this.p.y)}renderTransition(e,t,i,a=.15){if(void 0==e&&(e=this.progress),this.p5.textSize(this.size),0==e)return void(this.s.x?this.p5.text(t,this.p.x,this.p.y,this.s.x):this.p5.text(t,this.p.x,this.p.y));1==e&&(this.s.x?this.p5.text(i,this.p.x,this.p.y,this.s.x):this.p5.text(i,this.p.x,this.p.y)),e=this.p5.map(e,0,1,0,1+a,!0);let o=Math.max(t.length,i.length),s="";for(let n=0;n<o;n++){let o=n<t.length?t[n]:"",r=n<i.length?i[n]:"";this.p5.randomSeed(12345*n+Math.floor(this.p5.millis()/30));let l=this.p5.random();l<e-a||"\n"==o?s+=r:l<e+a?(""!==o||""!==r)&&(s+=this.alphabet[this.p5.floor(this.p5.random(0,this.alphabet.length))]):s+=o}this.p5.randomSeed(),this.t=s,this.s.x?this.p5.text(s,this.p.x,this.p.y,this.s.x):this.p5.text(s,this.p.x,this.p.y)}}class A extends v{constructor(e,t,i,a,o,s){if(super(e,t,i,2*a,2*a),this.radius=a,this.scale=o,this.project=s,this.hoverAlpha=0,this.targetHoverAlpha=0,this.image=null,this.imageLoaded=!1,this.imageAlpha=0,this.targetImageAlpha=0,s.image)try{let t=c(s.image);e.loadImage(t,e=>{e&&e.width>0&&e.height>0?(this.image=e,this.imageLoaded=!0,this.targetImageAlpha=255):(console.error("Invalid image loaded for",s.name,"- no dimensions"),this.imageLoaded=!1)},e=>{console.error("Image load failed for",s.name,":",e),this.imageLoaded=!1})}catch(e){console.error("Error calling loadImage for",s.name,":",e),this.imageLoaded=!1}}renderFallback(e=null){let t=this.p5.map(this.p.x,0,this.p5.width,0,255),i=this.p5.map(this.p.y,0,this.p5.height,0,255),a=255-50*this.hoverAlpha,o=null!==e?e:a;this.p5.fill(t,i,255,o),this.p5.strokeWeight(1),this.p5.stroke(240,o),this.p5.square(this.p.x,this.p.y,this.scale)}contains(e,t){let i=.5*this.scale;return e>=this.p.x-i&&e<=this.p.x+i&&t>=this.p.y-i&&t<=this.p.y+i}render(){this.p5.push();let e=this.scale/2,t=.15*this.scale,i=120+135*this.hoverAlpha;if(!this.imageLoaded||!this.image||this.imageAlpha<255){let e=this.imageLoaded&&this.image?255-this.imageAlpha:255;this.renderFallback(e)}if(this.imageLoaded&&this.image&&this.imageAlpha>0){let t=this.imageAlpha*(255-30*this.hoverAlpha)/255;this.p5.tint(255,t);try{this.p5.image(this.image,this.p.x-e,this.p.y-e,this.scale,this.scale)}catch(e){console.error("Error rendering image for project",this.project.name,":",e)}this.p5.noTint()}if(this.p5.stroke(74,144,230,i),this.p5.strokeWeight(2),this.p5.strokeCap(this.p5.SQUARE),this.p5.noFill(),[[-e,-e],[e,-e],[e,e],[-e,e]].forEach(([e,i],a)=>{let o=this.p.x+e,s=this.p.y+i;this.p5.line(o,s,o+(0===a||3===a?1:-1)*t,s),this.p5.line(o,s,o,s+(0===a||1===a?1:-1)*t)}),this.hoverAlpha>.1){this.p5.fill(74,144,230,.8*i),this.p5.noStroke();for(let t=0;t<3;t++){let i=this.p.x+e-15-8*t,a=this.p.y-e+6;this.p5.circle(i,a,3)}}if(this.hoverAlpha>.2){this.p5.stroke(74,144,230,.3*i),this.p5.strokeWeight(1);let t=this.p.y-e+.05*this.p5.millis()%this.scale;this.p5.line(this.p.x-e,t,this.p.x+e,t)}this.p5.stroke(74,144,230,.6*i),this.p5.strokeWeight(1),this.p5.noFill(),this.p5.square(this.p.x,this.p.y,this.scale),this.p5.pop(),this.p5.push();let a=120+135*this.hoverAlpha;this.p5.fill(255,a),this.p5.noStroke(),this.p5.textAlign(this.p5.CENTER,this.p5.CENTER);let o=this.p5.width<768?16:20;this.p5.textSize(o),this.p5.text(this.project.name,this.p.x,this.p.y+e+25),this.hoverAlpha>.3&&this.project.subtitle&&(this.p5.fill(74,144,230,.7*i),this.p5.textAlign(this.p5.CENTER,this.p5.CENTER),this.p5.textSize(.75*o),this.p5.text(this.project.subtitle,this.p.x,this.p.y+e+45)),this.p5.pop(),this.hoverAlpha=this.p5.lerp(this.hoverAlpha,this.targetHoverAlpha,.1),this.imageAlpha=this.p5.lerp(this.imageAlpha,this.targetImageAlpha,.03)}}});var r=s("800sp"),l=s("drhU0");function c(e){let t={"/":{title:"Benjamin Lappalainen - BLAP64",description:"Portfolio site of Creative Technologist, Educator, and Artist Benjamin Lappalainen. Interactive media installations, photography collections, and creative coding projects.",canonical:"https://blap64.com/"},"/about":{title:"About - Benjamin Lappalainen",description:"Biography and CV of Benjamin Lappalainen, Creative Technologist and Interactive Media Artist based in Toronto.",canonical:"https://blap64.com/about"},"/about/resume":{title:"Technical Resume - Benjamin Lappalainen",description:"Technical resume of Benjamin Lappalainen, Creative Technologist and Software Developer specializing in networked systems, interactive media, and computer vision.",canonical:"https://blap64.com/about/resume"},"/interactive":{title:"Interactive Projects - Benjamin Lappalainen",description:"Interactive media installations and web experiences by Benjamin Lappalainen. Creative coding, digital art, and live performance technology.",canonical:"https://blap64.com/interactive"},"/interactive/live":{title:"Live Installations - Benjamin Lappalainen",description:"Live interactive media installations and performance projects by Benjamin Lappalainen. Real-time visuals, sensor-driven art, and audience participation.",canonical:"https://blap64.com/interactive/live"},"/interactive/web":{title:"Web Experiences - Benjamin Lappalainen",description:"Interactive web experiences and creative coding projects by Benjamin Lappalainen. Browser-based generative art, simulations, and visual experiments.",canonical:"https://blap64.com/interactive/web"},"/photo":{title:"Photography - Benjamin Lappalainen",description:"Photography collections by Benjamin Lappalainen including portrait, performance, experimental, and astrophotography.",canonical:"https://blap64.com/photo"},"/links":{title:"Links - Benjamin Lappalainen",description:"Contact information, social links, and newsletter signup for Benjamin Lappalainen.",canonical:"https://blap64.com/links"},"/links/learn":{title:"Learn - Benjamin Lappalainen",description:"Workshops, TouchDesigner tutorials, and project files from Benjamin Lappalainen.",canonical:"https://blap64.com/links/learn"},"/links/learn/workshops":{title:"Workshops - Benjamin Lappalainen",description:"Creative technology and TouchDesigner workshops led by Benjamin Lappalainen.",canonical:"https://blap64.com/links/learn/workshops"},"/links/workshops":{title:"Workshops - Benjamin Lappalainen",description:"Creative technology and TouchDesigner workshops led by Benjamin Lappalainen.",canonical:"https://blap64.com/links/learn/workshops"},"/oops":{title:"Page Not Found - Benjamin Lappalainen",description:"The page you were looking for could not be found.",canonical:"https://blap64.com/"}},i=t[e]||t["/"];document.title=i.title;let a=document.querySelector('meta[name="description"]');a&&(a.content=i.description);let o=document.querySelector('meta[property="og:title"]');o&&(o.content=i.title);let s=document.querySelector('meta[property="og:description"]');s&&(s.content=i.description);let n=document.querySelector('meta[property="og:url"]');n&&(n.content=i.canonical);let r=document.querySelector('meta[name="twitter:title"]');r&&(r.content=i.title);let l=document.querySelector('meta[name="twitter:description"]');l&&(l.content=i.description);let c=document.querySelector('link[rel="canonical"]');c&&(c.href=i.canonical)}class p{constructor(e=[],t){this.routes=e,this.render_node=t,this.path="",this.is_navigating=!1;let i=location.hash.substr(1),a=i&&""!==i?i.startsWith("/")?i:"/"+i:"/";this.navigate(a)}match(e,t){let i=[],a="^"+e.path.replace(/([:*])(\w+)/g,(e,t,a)=>(i.push(a),"([^/]+)"))+"$",o={},s=t.match(new RegExp(a));return null!==s&&(o=s.slice(1).reduce((e,t,a)=>(null===e&&(e={}),e[i[a]]=t,e),null)),e.setProps(o),s}navigate(e,t={}){if("/contact"===e){window.location.hash="#"+(this.path||"/"),document.dispatchEvent(new CustomEvent("open-contact-popup"));return}if(e==this.path||this.is_navigating)return;"true"!==new URLSearchParams(window.location.search).get("skipAnimations")||t.hasOwnProperty("skipAnimations")||(t.skipAnimations=!0),this.path=e;let i=this.routes.filter(t=>this.match(t,e))[0];if(document.querySelectorAll("[route]").forEach(e=>e.classList.remove("route-active")),i){this.is_navigating=!0,t.instant||(document.getElementById("app").style.opacity=0);let a=document.querySelector(`[route=${CSS.escape(i.path)}]`);null!==a&&a.classList.add("route-active");let o=(function(){let a=e.startsWith("/")?e:"/"+e;window.location.hash!=="#"+a&&(window.location.hash="#"+a);let o=i.props||{};t.skipAnimations&&(o.skipAnimations=!0),i.setProps(o),(0,r.render)(i.renderView(),this.render_node),document.getElementById("app").style.opacity=1,this.is_navigating=!1,(0,l.updateBreadcrumb)(a),c(a)}).bind(this);t.instant?o():setTimeout(o,250)}else{let e=this.routes.find(e=>"/oops"===e.path);e&&(this.is_navigating=!0,document.getElementById("app").style.opacity=0,setTimeout(()=>{(0,r.render)(e.renderView(),this.render_node),document.getElementById("app").style.opacity=1,this.is_navigating=!1,(0,l.updateBreadcrumb)("/oops"),c("/oops")},250));return}}addRoutes(e){this.routes=[...this.routes,...e]}navigateBack(e){this.navigate(e,{skipAnimations:!0})}}class h{constructor(e,t,i){this.name=e,this.path=t,this.view=i}setProps(e){this.props=e}renderView(){return this.view(this.props)}}var d=s("baa6D"),r=s("800sp"),l=s("drhU0"),m=(s("jJTNo"),s("jJTNo"));class u{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class v extends u{constructor(e){if(super(e),this.it=m.nothing,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m.nothing||null==e)return this._t=void 0,this.it=e;if(e===m.noChange)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}v.directiveName="unsafeHTML",v.resultType=1;let g=(...e)=>({_$litDirective$:v,values:e}),f=!1;function y(e){e.preventDefault(),e.stopPropagation();let t=document.getElementById("help-popup"),i=document.getElementById("help-overlay");if(t&&i)if(f){t.classList.remove("help-popup-open"),i.classList.remove("help-overlay-open"),document.body.classList.remove("help-active"),window.helpPopupOpen=!1,f=!1;let e=document.querySelector('meta[name="theme-color"]');e&&(e.content="#171717")}else{t.classList.add("help-popup-open"),i.classList.add("help-overlay-open"),document.body.classList.add("help-active"),window.helpPopupOpen=!0,f=!0;let e=document.querySelector('meta[name="theme-color"]');e&&(e.content="#000000")}}var m=s("jJTNo");let b=[{title:"Contact",content:`
            <p>What can I do for you?</p>
            <p><strong>Email:</strong> <a href="mailto:null@blap64.com">null@blap64.com</a></p>
            <p><strong>Location:</strong> Toronto, Canada is home. Work is global. Will travel and collaborate across all timezones.</p>
            <p><strong>Response Time:</strong> Within 48 hours</p>
        `},{title:"Services",content:`
            <h3>Interactive Media & Installations</h3>
            <p>Custom interactive experiences for events, exhibitions, and permanent installations. Specializing in real-time visuals, TouchDesigner development, sensor integration, and audience participation.</p>

            <h3>Creative Technology Consulting</h3>
            <p>Technical guidance for artists, galleries, and cultural institutions. From concept development to implementation strategy.</p>

            <h3>Web Development</h3>
            <p>Custom websites and web applications with a focus on creative expression and unique user experiences.</p>

            <h3>Education & Workshops</h3>
            <p>Teaching creative coding, AI, and interactive media development for individuals and organizations.</p>

            <h3>Photography</h3>
            <p>Creative portrait photography and live performance documentation. Specializing in capturing authentic moments and dynamic energy in controlled and natural environments.</p>
        `},{title:"Process",content:`
            <h3>1. Initial Consultation</h3>
            <p>Free 30-minute discovery call to discuss your project goals, timeline, and budget.</p>

            <h3>2. Proposal & Planning</h3>
            <p>Detailed project proposal with timeline, deliverables, and technical specifications.</p>

            <h3>3. Development & Iteration</h3>
            <p>Collaborative development process with regular check-ins and feedback sessions.</p>

            <h3>4. Launch & Support</h3>
            <p>Deployment assistance and ongoing technical support as needed.</p>
        `}],x=!1;function w(e){e.preventDefault(),e.stopPropagation();let t=document.getElementById("contact-popup"),i=document.getElementById("contact-overlay");if(t&&i)if(x){t.classList.remove("contact-popup-open"),i.classList.remove("contact-overlay-open"),document.body.classList.remove("contact-active"),window.contactPopupOpen=!1,x=!1;let e=document.querySelector('meta[name="theme-color"]');e&&(e.content="#171717")}else{t.classList.add("contact-popup-open"),i.classList.add("contact-overlay-open"),document.body.classList.add("contact-active"),window.contactPopupOpen=!0,x=!0;let e=document.querySelector('meta[name="theme-color"]');e&&(e.content="#000000")}}function k(){let e=document.getElementById("contact-popup"),t=document.getElementById("contact-overlay");if(!e||!t||x)return;e.classList.add("contact-popup-open"),t.classList.add("contact-overlay-open"),document.body.classList.add("contact-active"),window.contactPopupOpen=!0,x=!0;let i=document.querySelector('meta[name="theme-color"]');i&&(i.content="#000000")}var r=(s("800sp"),s("800sp")),T=s("iAIzO"),r=(s("800sp"),s("800sp"));let A="0x4AAAAAACeFh_PLBS7wUUKA",I=null;class C extends r.LitElement{static properties={status:{state:!0},statusType:{state:!0},loading:{state:!0},hovered:{state:!0},focused:{state:!0}};static styles=(0,r.css)`
        :host {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 20;
            display: block;
            width: 400px;
            visibility: hidden;
            transform: translate3d(0, 0, 0);
            font-family: "BPdotsSquareVF", monospace;
            font-weight: 900;
            box-sizing: border-box;
            --blue: 74, 144, 230;
            --icon-size: 50px;
        }

        .card {
            position: relative;
            box-sizing: border-box;
            padding: 15px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            background: rgba(23, 23, 23, 0.196);
            border: 1px solid rgba(var(--blue), 0.31);
            transition: border-color 0.4s ease, background 0.4s ease;
        }

        .card::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            height: 1px;
            background: rgba(var(--blue), 0.235);
            opacity: 0;
            pointer-events: none;
            animation: scan var(--scan-duration, 1300ms) linear infinite;
            transition: opacity 0.4s ease;
        }

        @keyframes scan {
            from { transform: translateY(0); }
            to { transform: translateY(calc(var(--card-height, 130px) - 3px)); }
        }

        .dots {
            position: absolute;
            top: 12.5px;
            right: 9px;
            width: 24px;
            height: 3px;
            background: radial-gradient(circle, rgba(var(--blue), 0.59) 1.5px, transparent 1.6px) 0 0 / 8px 3px repeat-x;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
        }

        .header {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .icon {
            position: relative;
            flex: none;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            width: var(--icon-size);
            height: var(--icon-size);
            padding-left: 1px;
            border: 1px solid rgba(var(--blue), 0.31);
            background: rgba(23, 23, 23, 0.118);
            color: rgba(var(--blue), 0.47);
            font-size: 12px;
            font-weight: 600;
            font-variation-settings: "wght" 600;
            line-height: 1;
            transition: border-color 0.4s ease, background 0.4s ease, color 0.4s ease;
        }

        .icon::before,
        .icon::after {
            content: "";
            position: absolute;
            inset: -1px;
            background:
                linear-gradient(var(--bracket), var(--bracket)) top left / 10px 2px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) top left / 2px 10px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) top right / 10px 2px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) top right / 2px 10px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) bottom left / 10px 2px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) bottom left / 2px 10px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) bottom right / 10px 2px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) bottom right / 2px 10px no-repeat;
            pointer-events: none;
        }

        .icon::before {
            --bracket: rgba(var(--blue), 0.376);
        }

        .icon::after {
            --bracket: rgba(var(--blue), 0.847);
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .heading {
            display: flex;
            flex-direction: column;
            gap: 2.5px;
            min-width: 0;
        }

        .label {
            color: rgba(255, 255, 255, 0.63);
            font-size: 18px;
            line-height: 1;
            transition: color 0.4s ease;
        }

        .meta {
            color: rgba(150, 150, 150, 0.47);
            font-size: 13px;
            line-height: 1;
            transition: color 0.4s ease;
        }

        .card.active {
            border-color: rgba(var(--blue), 0.706);
            background: rgba(23, 23, 23, 0.353);
        }

        .card.active::after,
        .card.active .dots {
            opacity: 1;
        }

        .card.active .icon {
            border-color: rgba(var(--blue), 0.706);
            background: rgba(23, 23, 23, 0.275);
            color: rgb(var(--blue));
        }

        .card.active .icon::after {
            opacity: 1;
        }

        .card.active .label {
            color: #fff;
        }

        .card.active .meta {
            color: rgb(150, 150, 150);
        }

        .card.active,
        .card.active::after,
        .card.active .dots,
        .card.active .icon,
        .card.active .icon::after,
        .card.active .label,
        .card.active .meta {
            transition-duration: 0.2s;
        }

        form {
            display: flex;
            gap: 8px;
        }

        input {
            flex: 1;
            min-width: 0;
            height: 44px;
            padding: 0 12px;
            box-sizing: border-box;
            background: rgba(13, 13, 13, 0.8);
            border: 1px solid #404040;
            border-radius: 0;
            color: #fafafa;
            font-family: "ZxGamut", -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 16px;
            outline: none;
            transition: border-color 0.4s ease;
        }

        input::placeholder {
            color: #606060;
        }

        input:focus {
            border-color: rgb(var(--blue));
            transition-duration: 0.15s;
        }

        button {
            height: 44px;
            padding: 0 16px;
            background: rgba(23, 23, 23, 0.78);
            border: 2px solid rgb(var(--blue));
            border-radius: 0;
            color: rgb(230, 230, 230);
            font-family: "BPdotsSquareVF", monospace;
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.05em;
            cursor: pointer;
            white-space: nowrap;
            transition: background 0.4s ease, color 0.4s ease, opacity 0.2s ease;
        }

        button:disabled {
            opacity: 0.5;
            cursor: wait;
        }

        .status {
            min-height: 15px;
            font-size: 12px;
            line-height: 1.25;
            color: #808080;
        }

        .status:empty {
            display: none;
        }

        .status.success {
            color: rgb(var(--blue));
        }

        .status.error {
            color: #e25c4a;
        }

        .turnstile {
            position: absolute;
            right: 0;
            bottom: calc(100% + 6px);
            z-index: 2;
            display: flex;
            justify-content: flex-end;
        }

        .turnstile:empty {
            display: none;
        }

        @media (hover: hover) {
            button:hover:not(:disabled) {
                background: rgb(var(--blue));
                color: #fff;
                transition-duration: 0.15s;
            }
        }

        @media (max-width: 767px) {
            :host {
                --icon-size: 40px;
            }

            .icon {
                font-size: 10px;
            }

            button {
                padding: 0 12px;
            }
        }
    `;constructor(){super(),this.status="",this.statusType="",this.loading=!1,this.hovered=!1,this.focused=!1,this.token="",this.widgetId=null,this.turnstileContainer=null}firstUpdated(){this.turnstileContainer=this.renderRoot.querySelector(".turnstile"),this.mountTurnstile();let e=this.renderRoot.querySelector(".card");this.resizeObserver=new ResizeObserver(()=>{e.style.setProperty("--card-height",`${e.offsetHeight}px`),e.style.setProperty("--scan-duration",`${10*e.offsetHeight}ms`)}),this.resizeObserver.observe(e)}disconnectedCallback(){if(super.disconnectedCallback(),this.resizeObserver?.disconnect(),null!==this.widgetId&&window.turnstile)try{window.turnstile.remove(this.widgetId)}catch{this.widgetId=null}this.widgetId=null}async mountTurnstile(){if(this.turnstileContainer&&A)try{let e=await (window.turnstile?Promise.resolve(window.turnstile):(!I&&(I=new Promise((e,t)=>{let i=document.querySelector("script[data-turnstile-api]");if(i){i.addEventListener("load",()=>e(window.turnstile),{once:!0}),i.addEventListener("error",t,{once:!0});return}let a=document.createElement("script");a.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",a.async=!0,a.defer=!0,a.dataset.turnstileApi="true",a.addEventListener("load",()=>e(window.turnstile),{once:!0}),a.addEventListener("error",t,{once:!0}),document.head.appendChild(a)})),I));if(!this.isConnected||!this.turnstileContainer)return;this.widgetId=e.render(this.turnstileContainer,{sitekey:A,theme:"dark",size:"compact",appearance:"interaction-only",callback:e=>{this.token=e},"expired-callback":()=>{this.token=""},"error-callback":()=>{this.token=""}})}catch{this.setStatus("Scanner offline. Refresh to reboot.","error")}}setStatus(e,t=""){this.status=e,this.statusType=t}resetTurnstile(){if(this.token="",null!==this.widgetId&&window.turnstile)try{window.turnstile.reset(this.widgetId)}catch{this.token=""}}async handleSubmit(e){if(e.preventDefault(),this.loading)return;let t=this.renderRoot.querySelector('input[type="email"]'),i=t.value.trim();if(!i){this.setStatus("No address, no uplink.","error"),t.focus();return}if(!this.token)return void this.setStatus("Scanning: cyber or meat...");this.loading=!0,this.setStatus("");try{let e=await fetch("https://newsletter-subscribe.b-m-lappalainen.workers.dev",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,token:this.token})}),a=await e.json().catch(()=>({}));if(e.ok){let e=(a.message||"").toLowerCase();this.setStatus(e.includes("already")?"Already jacked in.":"Uplink established.","success"),t.value="",this.resetTurnstile()}else this.setStatus(a.error||"Uplink rejected. Try again.","error"),this.resetTurnstile()}catch{this.setStatus("Signal lost. Try again in a bit.","error")}finally{this.loading=!1}}render(){return(0,r.html)`
            <div
                class="card ${this.hovered||this.focused?"active":""}"
                @pointerenter=${e=>{"mouse"===e.pointerType&&(this.hovered=!0)}}
                @pointerleave=${()=>{this.hovered=!1}}
                @focusin=${()=>{this.focused=!0}}
                @focusout=${e=>{e.currentTarget.contains(e.relatedTarget)||(this.focused=!1)}}
            >
                <div class="dots"></div>
                <div class="header">
                    <div class="icon" aria-hidden="true">MAIL</div>
                    <div class="heading">
                        <span class="label">UPLINK</span>
                        <span class="meta">boot up, jack in</span>
                    </div>
                </div>
                <form @submit=${this.handleSubmit} aria-label="Newsletter signup">
                    <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        autocomplete="email"
                        aria-label="Email address"
                        ?disabled=${this.loading}
                        required
                    >
                    <button type="submit" ?disabled=${this.loading}>
                        ${this.loading?"SENDING...":"SUBSCRIBE"}
                    </button>
                </form>
                <div
                    class="status ${this.statusType}"
                    role="status"
                    aria-live="polite"
                >${this.status}</div>
                <div class="turnstile"></div>
            </div>
        `}}customElements.define("newsletter-form",C);var S=e=>{let t={};return e&&e.group&&(t.group=e.group),(0,r.html)`
        <p5-element id="bg" sketch="links" .options=${t}></p5-element>
        <newsletter-form></newsletter-form>
    `},m=s("jJTNo"),P={};P=import.meta.resolve("fmbkj");var L={};L=import.meta.resolve("jvQwJ");var j={};j=import.meta.resolve("3G2Gi");var E={};E=import.meta.resolve("do8hG");let B=e=>(0,m.html)`<svg class="cv-icon" viewBox="0 0 5 5" aria-hidden="true">${e.flatMap((e,t)=>[...e].map((e,i)=>"#"===e?(0,m.svg)`<rect x="${i+.1}" y="${t+.1}" width="0.8" height="0.8" />`:null))}</svg>`,M=B(["..#..","..#..","#.#.#",".###.","..#.."]),W=B(["..###","...##","..#.#",".#...","#...."]),z=(e,t)=>(0,m.html)`<a href="${e}" target="_blank" rel="noopener">${t}</a>`;var D=e=>{let i;return(0,m.html)`
    <div class="about-container">
        <div class="about-bio">
            <h1 class="about-header">Benjamin Lappalainen</h1>
            <h3 class="about-header">(he/him)</h3>
            <div class="profile-image-container">
                <img src="${t(P)}" alt="Benjamin Lappalainen" class="profile-image" onload="this.classList.add('loaded')">
            </div>
            <p class="main-paragraph">
                <br>
                Benjamin Lappalainen is a Toronto-based creative technologist, artist, and educator. Through interactive installations, live audiovisual performance, and kinetic sculpture, he interrogates and misuses technologies like computer vision and machine learning to expose their breaking points and expressive range. He has shown work and taught at venues and festivals including InterAccess, OCAD University, and Long Winter. His educational practice, spanning workshops, intensives, and one-on-one mentorship, bridges technical skill-building with experimental arts practice.
                <br><br>
                As XR Development Lead at UKAI Projects, a cultural research and development organization that imagines and produces “culture for what’s coming,”, Benjamin leads Digital Bridges, a peer-to-peer networking program for building collaborative artist systems, and has delivered machine perception workshops in Toronto and Hsinchu, Taiwan. He also co-leads soft_launch, a creative technology education collective, in partnership with InterAccess.
                <br><br>
                Trained as an engineer (Bachelor of Applied Science, Engineering Science, University of Toronto), Benjamin focuses his current research on developing software and hardware for interactive media. Working across TouchDesigner, networked systems, and custom electronics, he builds accessible tools that support artist communities in realizing technically ambitious projects.
                <br><br>
            </p>

            <h2>Artist Statement</h2>
            <p class="main-paragraph">
            	As an artist and creative technologist, I feel a deep-rooted sense of responsibility to share my knowledge of complex systems and concepts in an accessible and practical manner that empowers my audience to make informed decisions about the technology they choose to use and the systems they choose to participate in. I see my work as both art and education, demonstrating the capabilities and inner workings of technologies that are often dressed up in minimal, clean interfaces, or only running behind the scenes.
                <br><br>
                This approach has deep roots in art history. Conceptual and instruction-based art from the 1900s has had a large influence on my artistic process. Artists such as Vera Molnár (1924–2023) and Sol LeWitt (1928–2007) created paintings and wall drawings based on rules and sets of instructions, even before digital computers were available. Creating art with code is hardly any different: the work of the "code artist" is to come up with an algorithm (a set of instructions) for the creative vision which another entity (the computer) then executes.
                <br><br>
                Science fiction media and video games play a large role in the themes, aesthetic direction, and interaction mechanisms that I implement throughout my work. While I'm a big fan of dystopian sci-fi and cyberpunk aesthetics, I also hope to demonstrate the flip side: visions of brighter futures, healthier relationships between humans and computers, and the subversive and unintended use cases of emerging technologies that provide genuine benefit to people and communities rather than a corporation's bottom line.
                <br><br>
                The choice of how people physically engage with my work is just as intentional. I believe that learning through play is a fun and effective yet underutilized avenue for teaching. Using the movement of the physical body to understand how a system behaves creates a sense of tangible investigation regardless of participant background, bringing an innate degree of understanding which transcends language and technical jargon.
                <br><br>
            </p>
        </div>
        <div class="about-cv">
            ${i=e&&e.resume,(0,m.html)`
    <div class="cv-toggle">
        <button class="cv-toggle-button ${i?"":"active"}" @click=${()=>window.appRouter.navigate("/about",{instant:!0})}>ARTIST CV</button>
        <button class="cv-toggle-button ${i?"active":""}" @click=${()=>window.appRouter.navigate("/about/resume",{instant:!0})}>TECHNICAL RESUME</button>
    </div>
`}
            ${e&&e.resume?(0,m.html)`
            <div class="cv-actions">
                <a class="cv-download" href="${t(E)}" download="Benjamin Lappalainen Technical Resume - 2026-10.pdf">${M}DOWNLOAD PDF</a>
                <a class="cv-download" href="https://www.linkedin.com/in/benjamin-lappalainen/" target="_blank" rel="noopener">${W}LINKEDIN</a>
            </div>
            <p class="main-paragraph">Creative Technologist & Software Developer: Networked Systems, Interactive Media & Computer Vision</p>

            <div class="cv-section">
                <h2>Technical Skills</h2>
                <dl class="main-paragraph cv-grid">
                    <dt>Networking & Infrastructure</dt><dd>Tailscale, TCP/UDP, IPv4/IPv6, LAN configuration & administration, Cloudflare (Tunnels, DNS, Turnstile), AWS, Thread, Matter protocol, self-hosted Git, NAS/homelab administration</dd>
                    <dt>Languages</dt><dd>Python, JavaScript, C++, Lua, GLSL, C, Bash</dd>
                    <dt>Real-Time&nbsp;&amp; Creative&nbsp;Coding</dt><dd>TouchDesigner, OSC, MIDI, WebGL, p5.js, shader/GLSL pipelines, Godot</dd>
                    <dt>Computer Vision & ML</dt><dd>OpenCV, MediaPipe, ONNX, MoveNet pose estimation, PyTorch, TFLearn</dd>
                    <dt>Sensors & Hardware</dt><dd>ArtNet & DMX (lighting/show control), depth & CV cameras (Microsoft Kinect, Orbbec Femto Bolt, Luxonis OAK-D), LIDAR and ultrasonic distance sensors</dd>
                    <dt>AI-Assisted Coding</dt><dd>Claude Code, LM Studio, agentic coding workflows, technical review of AI-generated code</dd>
                    <dt>Tools & Platforms</dt><dd>Git, Jira, Confluence, Bitbucket, Adobe Creative Suite, Obsidian</dd>
                </dl>
            </div>

            <div class="cv-section">
                <h2>Experience</h2>
                <div class="main-paragraph cv-entry">
                    <div class="cv-role">Creative Technologist & Software Developer</div>
                    <div class="cv-meta">Independent · 2024-Present</div>
                    <ul class="cv-bullets">
                        <li>Provided technical support for a client installation at Toronto Metropolitan University, reverse-engineering an undocumented lighting controller to deliver a working DMX and ArtNet integration</li>
                        <li>Contract software development on ${z("https://aaaseed.org/","AAASeed")}, a real-time 2D/3D engine for interactive installations, in C++, Lua, and GLSL — architected HTTP networking (via the open-source cpr library) for web API communication, plus other foundational architecture and feature work en route to open-source release</li>
                        <li>Co-creator and technical lead of Peripherous, an open-source machine perception toolkit — directed architecture and AI-assisted implementation (via Claude Code) of its runtime, local message bus, lifecycle supervisor, and OSC output, using MoveNet Multipose (ONNX) for real-time pose estimation</li>
                        <li>Built and distributed TouchDesigner components including a SPAN super-resolution upscaler and macOS-optimized real-time diffusion image generator</li>
                        <li>Research in real-time 3D scene reconstruction pipelines (depth estimation, shared-memory integration) for TouchDesigner, and diffusion-based real-time image pipelines across macOS and Windows</li>
                    </ul>
                </div>
                <div class="main-paragraph cv-entry">
                    <div class="cv-role">XR Development Lead</div>
                    <div class="cv-meta">${z("https://www.ukaiprojects.com/","UKAI Projects")} · 2025-Present</div>
                    <ul class="cv-bullets">
                        <li>Develop and lead Digital Bridges, a peer-to-peer networking program teaching researchers and artists to build collaborative systems using Tailscale and OSC</li>
                        <li>Software development and AI system behaviour direction for AI-driven interactive game systems</li>
                        <li>Designed and delivered technical workshops on machine perception and computer vision (MediaPipe) for artist and technologist audiences, including an international iteration in Hsinchu, Taiwan</li>
                    </ul>
                </div>
                <div class="main-paragraph cv-entry">
                    <div class="cv-role">Program Lead</div>
                    <div class="cv-meta">${z("https://softlaunch.net/","soft_launch")} · 2025-Present</div>
                    <ul class="cv-bullets">
                        <li>Co-design and lead a creative technology education program in partnership with InterAccess; design and teach intensives on TouchDesigner ('Reactive Space') and creative coding ('Internet Canvas')</li>
                    </ul>
                </div>
                <div class="main-paragraph cv-entry">
                    <div class="cv-role">Product Manager</div>
                    <div class="cv-meta">Nanoleaf · 2020-2024 (plus 2018-2019 internship)</div>
                    <ul class="cv-bullets">
                        <li>Managed technical partnerships and software integrations with Apple (Thread & Matter), Google (Matter), Amazon (Matter), Samsung (Matter), Razer (Razer Chroma), and Corsair (iCUE)</li>
                        <li>Led certification and technical integration for the Matter smart-home protocol, successfully certifying the first Matter-compliant smart lights; developed working expertise in Thread mesh networking</li>
                        <li>Creator and lead developer of Nanoleaf Screen Mirror, a real-time screen-to-light rendering feature shipped across the product line and central to the flagship Nanoleaf 4D hardware product</li>
                        <li>Built the Nanoleaf Orchestrator music visualizer; developed cross-functional technical documentation for engineering, marketing, and support teams</li>
                    </ul>
                </div>
            </div>

            <div class="cv-section">
                <h2>Education</h2>
                <div class="main-paragraph cv-entry">
                    <div class="cv-role">BASc, Engineering Science (Aerospace Specialization)</div>
                    <div class="cv-meta">University of Toronto · 2015-2020</div>
                </div>
            </div>
`:(0,m.html)`
            <a class="cv-download" href="${t(j)}" download="Benjamin Lappalainen Artist CV - 2026-10.pdf">${M}DOWNLOAD PDF</a>

            <div class="cv-section">
                <h2>Selected New Media Exhibitions & Performances</h2>
                <dl class="main-paragraph cv-grid cv-grid--years">
                    <dt class="cv-year-start">2026</dt><dd><em>SWANS</em>, MULTIfest 2026, Noxte.app x Sky Fine Foods, STACKT (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd><em>RGBoids</em>, ${z("https://www.interaccess.org/exhibitions/flashdrive-fundraiser-2026","flashDRIVE Digital Arts Fundraiser Exhibition")}, InterAccess (Toronto, Canada)<span class="cv-note">Curated by Miriam Arbus</span></dd>
                    <dt class="cv-year-cont">2026</dt><dd><em>ATTN_0</em>, Open HDMI x Long Winter x Geary Art Crawl, Geary Factory Lofts (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>${z("https://youtu.be/0ivtij7zndM",(0,m.html)`<em>OSCMOTO</em>`)}, Cool New Instruments Night #7, Tranzac Club (Toronto, Canada)</dd>
                    <dt class="cv-year-start">2025</dt><dd><em>IA Flow Fields</em>, ${z("https://www.interaccess.org/exhibitions/flashdrive-digital-arts-fundraiser-exhibition","flashDRIVE Digital Arts Fundraiser Exhibition")}, InterAccess (Toronto, Canada)<span class="cv-note">Curated by Miriam Arbus</span></dd>
                    <dt class="cv-year-cont">2025</dt><dd><a href="#/interactive/live/sketching-flock"><em>Sketching Flock</em></a>, Farewell to The Bridge, UKAI Projects, The Bridge (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2025</dt><dd><em>Zen Flock</em>, LW13.5 x Open HDMI, Long Winter x InterAccess, St. Anne's Parish Hall (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2025</dt><dd><a href="#/interactive/live/sketching-flock"><em>Sketching Flock</em></a>, "Goodbye Dupont" Open HDMI, InterAccess (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2025</dt><dd><a href="#/interactive/live/blind-spots"><em>Blind Spots</em></a>, Aberrant AI Open Studio, UKAI Projects, The Bridge (Toronto, Canada)<span class="cv-note">Collaboration with ${z("https://www.ryankelln.com/","Ryan Kelln")}</span></dd>
                    <dt class="cv-year-cont">2025</dt><dd><a href="#/interactive/live/the-reader"><em>The Reader</em></a>, Aberrant AI Open Studio, UKAI Projects, The Bridge (Toronto, Canada)</dd>
                    <dt class="cv-year-start">2024</dt><dd><a href="#/interactive/live/long-winter-13-1">Live VJ Set</a>, LW13.1, Long Winter, Allan Gardens Children's Conservatory (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2024</dt><dd><a href="#/interactive/live/game-set-match"><em>Game, Set, Match</em></a>, ${z("https://www.interaccess.org/news/ia-gateway-2024-selected-artists","IA Gateway 2024")}, InterAccess (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2024</dt><dd><a href="#/interactive/live/bird-conductor"><em>Bird Conductor</em></a>, LW12.3, Long Winter, The Bridge (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2024</dt><dd><a href="#/interactive/live/live-coding">Open HDMI: Spring 2024</a>, InterAccess (Toronto, Canada)</dd>
                    <dt>2023</dt><dd><a href="#/interactive/live/surveil-yourself"><em>Surveil Yourself</em></a>, P2P 2023 InterAccess Member Showcase, InterAccess (Toronto, Canada)<span class="cv-note">Collaboration with ${z("https://circle-4.net/","Asucena Di Giovanni")}</span></dd>
                </dl>
            </div>

            <div class="cv-section">
                <h2>Teaching & Lectures</h2>
                <dl class="main-paragraph cv-grid cv-grid--years">
                    <dt class="cv-year-start">2026</dt><dd>"Sensor to Screen" TouchDesigner and OSC workshop, independent, Andrew Sun's Discord server (online)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>"TouchDesigner 101", "Reactive Space", "Internet Canvas", and "Synthetic Worlds" workshops, ${z("https://softlaunch.net/","soft_launch")} (Program Lead), New Stadium and InterAccess (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>"Cultural Fermentation & Other Messy Practices of Illegibility" workshop, OCAD University, Onsite Gallery (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>CTRL+SHIFT Vol. 11 Canvas & Code speaker, CTRL+SHIFT, FITC, Canvas & Code Gallery (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>"Views from the Machine" computer perception workshop, UKAI Projects, Remote Gallery (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>"Wayfinding: Art" panelist with ${z("https://sundogg.substack.com/","Michelle Jia")}, moderated by ${z("https://www.sholis.com/","Brian Sholis")}, 1RG (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>"The Art of Building Tiny Infrastructures" presentation and facilitated conversation, UKAI Projects (online)</dd>
                    <dt class="cv-year-start">2025</dt><dd>${z("https://www.interaccess.org/workshop/digital-bridges-networking-tools-for-collaborative-creation",'"Digital Bridges" new media workshop')}, UKAI Projects, InterAccess (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2025</dt><dd>${z("https://www.interaccess.org/workshop/we-have-ai-at-home-building-our-creative-ai-ecosystem",'"We Have AI At Home" workshop')}, UKAI Projects, Cultural Technologies Lab, InterAccess (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2025</dt><dd>"Digital Bridges" new media workshop, UKAI Projects, Cultural Technologies Lab, Accton Arts Foundation, Art Site of Railway Warehouse (Hsinchu, Taiwan)</dd>
                    <dt class="cv-year-cont">2025</dt><dd>${z("https://lu.ma/voey52i4","PROGRAM09: MEDIAPIPE workshop")}, ${z("https://www.youtube.com/@programislive","PROGRAM")}, New Stadium (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2025</dt><dd>1:1 Code Art Mentorship program (online)</dd>
                    <dt class="cv-year-cont">2025</dt><dd>"We Have AI At Home" workshop, UKAI Projects, The Bridge (Toronto, Canada)</dd>
                    <dt>2017</dt><dd>${z("https://outreach.engineering.utoronto.ca/files/2016/12/DEEP-Leadership-Camp-2017-Instructor-Job-Description.pdf","Da Vinci Engineering Enrichment Program Camp Instructor")}, University of Toronto (Minden, Canada)</dd>
                    <dt>2014-2016</dt><dd>Astrophotography workshops and lectures, Royal Astronomical Society of Canada (${z("https://rascto.ca/content/recreational-astronomy-night-16","Toronto")}, ${z("https://rascto.ca/news/astrophoto-editing-lightroom-and-photoshop","Richmond Hill")}, ${z("https://www.youtube.com/watch?v=hzHWC9LJT8U","The Blue Mountains")}, Canada)</dd>
                </dl>
            </div>

            <div class="cv-section">
                <h2>Organizing & Facilitation</h2>
                <dl class="main-paragraph cv-grid cv-grid--years">
                    <dt class="cv-year-start">2026</dt><dd>"Parallel Playground" artist research residency, UKAI Projects, World Creation Studio (Montreal, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>soft_launch Spring Intensives Student Showcase, Doors Open Toronto, InterAccess (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>"Digital Bridges" artist research residency, UKAI Projects, New Stadium (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>"Goblin Market", UKAI Projects, Centre For Art Tapes (Halifax, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>"The Funeral", UKAI Projects, Unit 2 Community Space (Toronto, Canada)</dd>
                    <dt>2025</dt><dd>"Goblin Market", UKAI Projects, Art Site of Railway Warehouse in Hsinchu, General Village (Hsinchu, Taiwan)</dd>
                </dl>
            </div>

            <div class="cv-section">
                <h2>Grants & Funding</h2>
                <dl class="main-paragraph cv-grid cv-grid--years">
                    <dt>2025</dt><dd>Multi and Inter Arts Projects, Ontario Arts Council - "Distributed Shapeshifters"</dd>
                </dl>
            </div>

            <div class="cv-section">
                <h2>Work Experience</h2>
                <div class="main-paragraph cv-entry">
                    <div class="cv-role">Program Lead</div>
                    <div class="cv-meta">${z("https://softlaunch.net/","soft_launch")} · 2025-Present</div>
                    <ul class="cv-bullets">
                        <li>Teaching creative technology skills through hands-on educational intensives</li>
                    </ul>
                </div>
                <div class="main-paragraph cv-entry">
                    <div class="cv-role">XR Development Lead</div>
                    <div class="cv-meta">${z("https://www.ukaiprojects.com/","UKAI Projects")} · 2025-Present</div>
                    <ul class="cv-bullets">
                        <li>Cultural research, exhibitions, immersive installations, publishing, and workshops</li>
                    </ul>
                </div>
                <div class="main-paragraph cv-entry">
                    <div class="cv-role">AAASeed Software and Installation Development</div>
                    <div class="cv-meta">${z("https://www.artcast4d.eu/","Artcast4D")} · 2024-2025</div>
                    <ul class="cv-bullets">
                        <li>Building installations for showcase in Europe and contributing to software development for ${z("https://aaaseed.org/","AAASeed")}, a realtime engine for 2D/3D graphics and interactive installations. Contributing to foundational architecture, core feature development, and UX design, progressing towards taking the software open source for use by artists, developers, and businesses.</li>
                    </ul>
                </div>
                <div class="main-paragraph cv-entry">
                    <div class="cv-role">Product Manager</div>
                    <div class="cv-meta">${z("https://us-shop.nanoleaf.me/","Nanoleaf")} · 2020-2024</div>
                    <ul class="cv-bullets">
                        <li>Creator and lead developer of Nanoleaf Screen Mirror technology</li>
                    </ul>
                </div>
            </div>

            <div class="cv-section">
                <h2>Residencies</h2>
                <dl class="main-paragraph cv-grid cv-grid--years">
                    <dt>2025</dt><dd>${z("https://aafoundation.tw/","Art Site of Railway Warehouse in Hsinchu")}, Accton Arts Foundation (Hsinchu, Taiwan)</dd>
                    <dt>2024</dt><dd>Aberrant AI - AI through the lens of Horror, UKAI Projects (Toronto, Canada)</dd>
                </dl>
            </div>

            <div class="cv-section">
                <h2>Independent Projects</h2>
                <dl class="main-paragraph cv-grid cv-grid--years">
                    <dt>2026</dt><dd>"Peripherous" - open source machine perception toolkit</dd>
                    <dt>2025</dt><dd>${z("/newsletter/","Code Art Corner educational newsletter")}</dd>
                    <dt>2023-Present</dt><dd>${z("https://openprocessing.org/user/424615/?o=40&view=sketches","Open Source Code Art Sketches")}</dd>
                </dl>
            </div>

            <div class="cv-section">
                <h2>Education & Training</h2>
                <dl class="main-paragraph cv-grid cv-grid--years">
                    <dt class="cv-year-start">2024</dt><dd>Mentored by digital artist, designer, and technologist Priam Givord</dd>
                    <dt class="cv-year-cont">2024</dt><dd>${z("https://www.aimetaphorsworkshop.com/",'"AI Metaphors" Workshop')}, University of Toronto, UKAI Projects, InterAccess</dd>
                    <dt class="cv-year-cont">2024</dt><dd>${z("https://ukaiprojects.com/pages/festival",'"Carnival of Shipwreck"')} Cultural Philosophy and New Media workshop series, UKAI Projects</dd>
                    <dt class="cv-year-cont">2024</dt><dd>${z("https://labs.hxouse.com/",'"Habitats"')} Unreal Engine 5 & Cultural Philosophy Workshop, HXOUSE LABS</dd>
                    <dt>2015-2020</dt><dd>BASc., Engineering Science, University of Toronto</dd>
                </dl>
            </div>

            <div class="cv-section">
                <h2>Publications</h2>
                <dl class="main-paragraph cv-grid cv-grid--years">
                    <dt>2025</dt><dd>${z("https://museum.eecs.yorku.ca/anielewicz","Interview with Will Anielewicz")}, Zbigniew Stachniak and Mark Hayward, York University Computer Museum website</dd>
                    <dt>2020</dt><dd>${z(t(L),"eCAADe Conference Proceedings Volume 1")}, Education and research in Computer Aided Architectural Design in Europe</dd>
                </dl>
            </div>
`}
        </div>
    </div>
`},r=s("800sp"),O=e=>(0,r.html)`
    <!-- p5-element is a custom element that allows us to easily put a p5 sketch as the background of this page -->
    <!-- The custom element itself handles choosing the sketch based on the page property provided below -->
    <p5-element id="bg" sketch="installations" .options=${e||{}}></p5-element>
`,m=s("jJTNo"),R=s("d9MMf"),$=e=>{let t={};e&&e.collection&&(t.collection=e.collection),e&&e.skipAnimations&&(t.skipAnimations=e.skipAnimations);let i=e?.collection,a=i?(0,R.findCollectionBySlug)(e.collection):null;return(0,m.html)`
        <!-- p5-element handles decorations, title, and lightbox -->
        <p5-element id="bg" sketch="photo" .options=${t} .skipAnimations=${e?.skipAnimations}></p5-element>
        
        ${i&&a?(0,m.html)`
            <!-- HTML-native gallery grid -->
            <div class="photo-gallery-container">
                <div class="photo-gallery-grid">
                    ${a.images.map((e,t)=>(0,m.html)`
                        <div class="photo-gallery-item" data-index="${t}">
                            <img 
                                src="${e}" 
                                alt="${a.name} ${t+1}"
                                class="photo-gallery-image"
                                data-lightbox-index="${t}"
                                loading="lazy"
                                onload="this.classList.add('loaded');"
                            />
                        </div>
                    `)}
                </div>
            </div>
        `:""}
    `},m=s("jJTNo");let U=window.location.hash.substr(1),N="/contact"===(U.startsWith("/")?U:"/"+U);N&&window.history.replaceState(null,"",window.location.pathname+"#/");let V=(e=>{let t=new p(e,document.getElementById("app"));return document.addEventListener("DOMContentLoaded",e=>{document.querySelectorAll("[route]").forEach(e=>e.addEventListener("click",e=>{e.preventDefault(),t.navigate(e.target.getAttribute("route"))},!1))}),window.addEventListener("hashchange",e=>{let i=!t.is_navigating,a=e.target.location.hash.substr(1),o=a&&""!==a?a.startsWith("/")?a:"/"+a:"/";if("/contact"===o){window.history.replaceState(null,"",window.location.pathname+(t.path?"#"+t.path:"")),document.dispatchEvent(new CustomEvent("open-contact-popup"));return}i&&t.navigate(o,{skipAnimations:!0})}),t})([new h("project","/interactive/live/:project",O),new h("installations","/interactive/live",O),new h("codeart","/interactive",e=>(0,r.html)`
    <!-- p5-element is a custom element that allows us to easily put a p5 sketch as the background of this page -->
    <!-- The custom element itself handles choosing the sketch based on the page property provided below -->
    <p5-element id="bg" sketch="codeart"></p5-element>
`),new h("webexperiences","/interactive/web",T.default),new h("links-subgroup","/links/:parent/:group",S),new h("links-group","/links/:group",S),new h("links","/links",S),new h("photo-collection","/photo/:collection",$),new h("photo","/photo",$),new h("about-resume","/about/resume",e=>D({...e,resume:!0})),new h("about","/about",D),new h("oops","/oops",e=>(0,m.html)`
    <div class="horizontal-center vertical-center">
        <h1 class="text-center">oops<br />How did you get here?</h1>
    </div>
    <!-- p5-element is a custom element that allows us to easily put a p5 sketch as the background of this page -->
    <!-- The custom element itself handles choosing the sketch based on the page property provided below -->
    <p5-element id="bg" sketch="oops"></p5-element>
`),new h("home","/",e=>(0,r.html)`
    <div class="vertical-center">
        <!-- <p class="main-paragraph unselectable">
            blap64<br />under construction <3
        </p> -->
    </div>
    <!-- p5-element is a custom element that allows us to easily put a p5 sketch as the background of this page -->
    <!-- The custom element itself handles choosing the sketch based on the page property provided below -->
    <p5-element id="bg" sketch="home" .skipAnimations=${e?.skipAnimations}></p5-element>
`)]);window.appRouter=V;let F=document.getElementById("breadcrumb-container");if(F){let e=window.location.hash.substr(1),t=e&&""!==e?e.startsWith("/")?e:"/"+e:"/";(0,r.render)((0,l.createBreadcrumbNav)(t),F)}let H=document.getElementById("contact-container");H&&(0,r.render)((window.contactButtonInitialized||(document.addEventListener("keydown",function(e){"Escape"===e.key&&x&&w(e)}),window.contactButtonInitialized=!0),(0,m.html)`
        <div class="contact-button" @click=${w}>
            <span class="contact-button-icon">!</span>
        </div>

        <!-- Popup overlay -->
        <div id="contact-overlay" class="contact-overlay" @click=${function(e){"contact-overlay"===e.target.id&&w(e)}}>
            <div id="contact-popup" class="contact-popup">
                <div class="contact-popup-header">
                    <h2>CONTACT & SERVICES</h2>
                    <button class="contact-popup-close" @click=${w}>×</button>
                </div>
                <div class="contact-popup-content">
                    ${b.map(e=>(0,m.html)`
                        <div class="contact-section">
                            <div class="contact-section-title">${e.title}</div>
                            <div class="contact-section-content">${g(e.content)}</div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `),H);let G=document.getElementById("help-container");G&&(0,r.render)((window.helpButtonInitialized||(document.addEventListener("keydown",function(e){"Escape"===e.key&&f&&y(e)}),window.helpButtonInitialized=!0),(0,m.html)`
        <div class="help-button" @click=${y}>
            <span class="help-button-icon">?</span>
        </div>

        <!-- Popup overlay -->
        <div id="help-overlay" class="help-overlay" @click=${function(e){"help-overlay"===e.target.id&&y(e)}}>
            <div id="help-popup" class="help-popup">
                <div class="help-popup-header">
                    <h2>SITE GUIDE</h2>
                    <button class="help-popup-close" @click=${y}>×</button>
                </div>
                <div class="help-popup-content">
                    ${[{question:"Navigation",answer:"Click on the desired 'path' in the bottom left corner to navigate back to a previous view.<br><br>Orange exclamation mark button (left of the one you just clicked) for contact info & services."},{question:"About",answer:"Benjamin Lappalainen -> B. Lappalainen -> BLAP. Years ago when I first made an Instagram account for my photography, I decided on @blapphoto as a username. 'blap' stuck ever since, and some of my friends have adopted it as a nickname for me.<br><br>As for '64':<br>We are in the era of 64-bit computers (generally, computers with size 2^64 integer and addressing registers).<br><br>64 is 8^2. 8 in Cantonese (and other Chinese-speaking cultures) is considered a lucky number because it bears homophonic similarity to the word for 'wealth' or 'prosperity'.<br><br>64 is 2^6. I was 26 when I made the decision to choose a different path through life, which has since led me to some extraordinary people, places, ideas, and opportunities."},{question:"Technology (for the nerds)",answer:'The dynamic pages on this site are constructed using a creative coding library called <a href="https://p5js.org" target="_blank">p5.js</a>. I\'m a big advocate for this library and teach people how to make art with it, as well as teach programming using it as a starting point. Otherwise, the site was built in HTML, CSS, and vanilla JavaScript. <a href="https://parceljs.org/">Parcel</a> is the bundler, and the site is deployed to <a href="https://pages.github.com/">GitHub Pages</a> so that my only expense is the domain.'}].map(e=>(0,m.html)`
                        <div class="faq-item">
                            <div class="faq-question">${e.question}</div>
                            <div class="faq-answer">${g(e.answer)}</div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `),G),document.addEventListener("navigate-to",e=>{V&&e.detail&&e.detail.path&&V.navigate(e.detail.path)}),document.addEventListener("open-contact-popup",()=>{k()}),N&&setTimeout(()=>k(),400),(0,d.mobileCheck)()&&(document.getElementById("mainNav").className="nav-mobile",document.querySelectorAll("[route]").forEach(e=>e.classList.add("route-mobile")));
//# sourceMappingURL=blap64.083d4dc1.js.map
