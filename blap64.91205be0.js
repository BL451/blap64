import"./blap64.5071707b.js";function e(e,t,i,o){Object.defineProperty(e,t,{get:i,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i=globalThis,o={},n={},s=i.parcelRequire905d;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},i.parcelRequire905d=s);var a=s.register;a("drhU0",function(t,i){e(t.exports,"createBreadcrumbNav",()=>p),e(t.exports,"updateBreadcrumb",()=>h);var o=s("jJTNo"),n=s("JTwtx"),a=s("d9MMf"),r=s("fJjw1"),l=s("hbH95");function c(e,t){e.preventDefault(),t&&window.appRouter&&window.appRouter.navigate(t,"/"===t?{skipAnimations:!0}:{})}let p=e=>{let t=function(e){let t=e.replace(/^\/?#+\/?/,"")||"/";if("/"===t||""===t)return[{name:"~",path:null},{name:"home",path:"/"}];let i=t.match(/^\/interactive\/live\/(.+)$/);if(i){let e=i[1],o=(0,n.findProjectBySlug)(e);return[{name:"~",path:null},{name:"home",path:"/"},{name:"interactive",path:"/interactive"},{name:"live",path:"/interactive/live"},{name:o?o.name:e,path:t}]}let o=t.match(/^\/interactive\/web\/(.+)$/);if(o){let e=o[1],i=(0,r.findProjectBySlug)(e);return[{name:"~",path:null},{name:"home",path:"/"},{name:"interactive",path:"/interactive"},{name:"web",path:"/interactive/web"},{name:i?i.name:e,path:t}]}let s=t.match(/^\/photo\/(.+)$/);if(s){let e=s[1],i=(0,a.findCollectionBySlug)(e);return[{name:"~",path:null},{name:"home",path:"/"},{name:"photo",path:"/photo"},{name:i?i.name:e,path:t}]}let c=t.match(/^\/links\/(.+)$/);if(c){let e=c[1].split("/"),i=(0,l.findLinkGroupPath)(e[e.length-1]),o=[{name:"~",path:null},{name:"home",path:"/"},{name:"links",path:"/links"}];return i?i.forEach((e,t)=>{o.push({name:e.id,path:"/links/"+i.slice(0,t+1).map(e=>e.id).join("/")})}):o.push({name:e[e.length-1],path:t}),o}return"/interactive/live"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"interactive",path:"/interactive"},{name:"live",path:"/interactive/live"}]:"/interactive/web"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"interactive",path:"/interactive"},{name:"web",path:"/interactive/web"}]:"/about"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"about",path:"/about"}]:"/about/resume"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"about",path:"/about"},{name:"resume",path:"/about/resume"}]:"/interactive"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"interactive",path:"/interactive"}]:"/photo"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"photo",path:"/photo"}]:"/links"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"links",path:"/links"}]:"/oops"===t?[{name:"~",path:null},{name:"home",path:"/"},{name:"404",path:"/oops"}]:[{name:"~",path:null},{name:"home",path:"/"},{name:t.replace("/",""),path:t}]}(e);return(0,o.html)`
        <div class="breadcrumb-nav">
            <span class="breadcrumb-text">
                <span class="breadcrumb-segment" @click=${e=>c(e,"/")}>~/home</span>${t.length>2?t.slice(2).map(e=>(0,o.html)`<span class="breadcrumb-separator">/</span><span class="breadcrumb-segment" @click=${t=>c(t,e.path)}>${e.name}</span>`):""}
            </span>
        </div>
    `},h=e=>{let t=document.getElementById("breadcrumb-container");if(t){let i=e.replace(/^\/?#+\/?/,"")||"/";Promise.resolve(s("800sp")).then(({render:e})=>{e(p(i),t)})}}}),a("JTwtx",function(i,o){e(i.exports,"projects",()=>eI),e(i.exports,"findProjectBySlug",()=>eC),e(i.exports,"getProjectIndexBySlug",()=>eS);var n=s("dJEV6"),a=s("c5LMG"),r=s("ilSGt"),l=s("g2z6j"),c=s("gmZgJ"),p=s("TiOu3"),h=s("esqme"),d=s("8gCmT"),m=s("g3XVg"),u=s("1XSyB"),g=s("1TF2t"),v=s("hRvYT"),f=s("jWdsW"),b=s("4nMNA"),x=s("cq1Iv"),y=s("bGAJA"),w=s("jDyle"),k=s("h72pW"),A=s("hIPVA"),T=s("7L7uE"),I=s("9LFfG"),C=s("irja9"),S=s("6P57R"),P=s("2cSLL"),L=s("iW57Q"),j=s("6koWC"),E=s("bR8cm"),B=s("5ucxB"),M=s("4iFc5"),z=s("aSuHG"),W=s("4Ql3K"),D=s("eMzZn"),O=s("531oB"),R=s("gltKM"),$=s("33pXu"),U=s("ceGjv"),N=s("eVWVU"),V=s("1JVLn"),F=s("koobu"),H=s("l9oDf"),G=s("afSar"),q=s("gCbXs"),K=s("fXEgN"),J=s("FIkud"),Y=s("bo2HT"),_=s("l5kN4"),X=s("acjrk"),Z=s("2THVu"),Q=s("4YBPt"),ee=s("gLY8r"),et=s("92BNT"),ei=s("3bqeq"),eo=s("7mtBn"),en=s("03G7r"),es=s("Qn0pP"),ea=s("i3ZWc"),er=s("2ZZFq"),el=s("fWboo"),ec=s("59b9w"),ep=s("dZTdR"),eh=s("8EfBZ"),ed=s("hWpKg"),em=s("4TZaW"),eu=s("6sqIk"),eg=s("iYjFU"),ev=s("jPFVK"),ef=s("ab33d"),eb=s("2awQ6"),ex=s("hAQe1"),ey=s("gzHqD"),ew=s("4uhWq"),ek=s("3qphS"),eA=s("fQWGC"),eT=s("16p52");let eI=[{name:"Sketching Flock",slug:"sketching-flock",type:"Interactive Installation",location:"Toronto, Canada",year:"2025",description:'Sketching Flock is an interactive projection installation that uses hand-tracking technology to enable participants to direct the flight paths of digital "birds", causing them to paint abstractly on an ever-changing virtual canvas. The work explores the collaboration between natural movement and algorithmic motion design, while examining participants\' willingness to be perceived by computer vision systems in pursuit of playful creative expression.\n\nFirst exhibited on March 1st, 2025 at InterAccess\'s "Goodbye Dupont" Open HDMI show on the IA360 projection system (Toronto, Canada). Also exhibited on March 29th, 2025 at the UKAI Projects "Farewell to the Bridge" 24 hour art festival (Toronto, Canada).\n\nThis installation was built using the original Leap Motion hand-tracking controller for enabling interactivity, JavaScript with the p5.js creative coding library for realtime visuals, and Chataigne for the convenient mapping and routing of hand-tracking information between the two.',images:[t(c),t(d),t(p),t(h),t(m)],thumbnails:{[t(c)]:t(Z),[t(p)]:t(Q)},previewThumbnail:t(ev)},{name:"We Play In The World They Make",slug:"we-play",type:"Role-Playing Game",location:"Toronto, Canada",year:"2025",description:'We Play In The World They Make is an interactive role-playing game installation where five participants compete for resources while consulting AI companions that embody different ideological positions. Each player is paired with a distinct AI shrine representing power structures—DOGMA, ATTENTION, ACCUMULATION, PRIVILEGE, and POWER—that offer strategic advice aligned with their respective worldviews. An AI judge evaluates player pitches based on algorithmic criteria including movement stability, vocal clarity, and conformity. The work examines how algorithmic systems embed particular visions of the future while positioning participants as both collaborators with and subjects of machine intelligence.\n\nMultiple runs of the game prototype were played on March 29th, 2025 at the UKAI Projects "Farewell to the Bridge" 24 hour art festival (Toronto, Canada).\n\nThis installation incorporates multiple AI systems: the JUDGE uses computer vision and speech recognition to evaluate player performances, while AI companions like ACCUMULATION employ OCR to interpret handwritten communications, creating a complex ecosystem of human-AI interaction within structured competitive play.',images:[t(N),t($),t(U),t(V),t(F)],thumbnails:{[t(N)]:t(eu)},previewThumbnail:t(ef)},{name:"Blind Spots",slug:"blind-spots",type:"Interactive Installation",location:"Toronto, Canada",year:"2025",description:'Blind Spots is an interactive projection installation that vanishes when directly observed, revealing itself only in peripheral vision. Using gaze-tracking technology, the piece presents an amalgam of recordings from previous audience interactions, becoming visible only when viewers look away. Drawing on Derrida\'s concept of "hauntology," the work critiques pervasive surveillance systems by making visible our complicity within technological infrastructures that shape reality while remaining largely invisible.\n\nCreated as part of the Aberrant AI residency hosted by UKAI Projects. First prototype exhibited at The Bridge Open Studio event (Toronto, Canada) on January 17th, 2025.\n\nCollaboration with software artist Ryan Kelln under the ArtRemains Collective. This installation was built using computer vision and AI technologies for gaze detection, with custom software for real-time video processing and interactive response.',images:[t(v),t(g),t(u)],thumbnails:{[t(u)]:t(ee),[t(g)]:t(et)},previewThumbnail:t(eb)},{name:"The Reader",slug:"the-reader",type:"Perceptive Installation",location:"Toronto, Canada",year:"2025",description:"The Reader is an AI-driven installation that continuously observes its environment and generates evolving narratives from collected data. Using computer vision, audio recognition, and Bluetooth scanning, the system gathers environmental information and feeds it to a locally-run large language model that creates an ongoing story displayed alongside reactive visuals and audio. By mimicking surveillance systems while maintaining complete privacy through local processing, the work makes visible the normally opaque operations of data collection and algorithmic interpretation.\n\nWork-in-progress version exhibited at The Bridge Open Studio showcase (Toronto, Canada) on January 17th, 2025 as part of the Aberrant AI residency.\n\nThis installation was built using computer vision, speech recognition, Bluetooth scanning, a local LLM for narrative generation, and custom audio-visual systems that respond to environmental data streams.",images:[t(R),t(D),t(O)],thumbnails:{[t(R)]:t(em)},previewThumbnail:t(ex)},{name:"Long Winter 13.1",slug:"long-winter-13-1",type:"Live Visual Performance",location:"Toronto, Canada",year:"2024",description:"A live audio-visual performance that translates musical input into reactive projected visuals in real-time. Using direct audio feeds from performers, the system generates abstract animations that respond dynamically to frequency, amplitude, and rhythmic patterns. The performance explores the intersection of live musical improvisation and computational visualization, creating an immersive ceiling-projected environment.\n\nPerformed at Long Winter season 13 opener event (Toronto, Canada) on November 8th, 2024.\n\nThis performance utilized VDMX for video mixing and audio analysis, custom GLSL/ISF shaders, p5.js browser-based sketches, and TouchOSC for real-time parameter control via iPad Pro.",images:[t(H),t(G),t(q),t(K),t(J),t(Y),t(_)],thumbnails:{[t(H)]:t(eg)},previewThumbnail:t(ey)},{name:"Game, Set, Match",slug:"game-set-match",type:"Interactive Installation",location:"Toronto, Canada",year:"2024",description:"Game, Set, Match is an interactive projection installation that transforms viewers into players within a surreal tennis match. A procedurally generated crowd of cartoon spectators tracks audience movement while tennis balls bounce across the space in response to occupancy levels. Hand gestures trigger cheers and waves from the digital crowd. The work playfully examines human-computer interaction and the gamification of social spaces through embodied participation.\n\nExhibited on the IA360° projection system at InterAccess Gallery (Toronto, Canada) on May 24th, 2024 as part of the inaugural IA Gateway program.\n\nThis installation was built using computer vision for movement and gesture tracking, JavaScript with p5.js for procedural crowd generation and physics simulation, and custom projection mapping for the 360° environment.",images:[t(w),t(y),t(x),t(b),t(f)],thumbnails:{[t(b)]:t(ei),[t(x)]:t(eo),[t(y)]:t(en)},previewThumbnail:t(ew)},{name:"Live Coding",slug:"live-coding",type:"Live Visual Performance",location:"Toronto, Canada",year:"2024",description:"Live Coding is a real-time performance where code creation becomes the primary medium, generating evolving visuals through progressive algorithmic iteration. Using JavaScript and p5.js within the P5LIVE environment, the performance created abstract animations that responded to live DJ sets through repetition, trigonometric compositions, and framebuffer manipulations. The work positions programming as performative practice, exploring the intersection of computational improvisation and musical collaboration.\n\nPerformed on May 18th, 2024 and March 2nd, 2024 at Open HDMI events at InterAccess (Toronto, Canada).\n\nThis performance utilized the P5LIVE live coding environment by Ted Davis, JavaScript with p5.js creative coding library, and real-time audio input for responsive visual generation.",images:[t(A),t(T),t(I),t(k),t(S),t(C),t(P)],thumbnails:{[t(k)]:t(es),[t(A)]:t(ea),[t(T)]:t(er),[t(I)]:t(el),[t(S)]:t(ec)},previewThumbnail:t(ek)},{name:"Bird Conductor",slug:"bird-conductor",type:"Interactive Installation",location:"Toronto, Canada",year:"2024",description:"Bird Conductor is an interactive projection installation that enables participants to conduct flocks of digital birds through natural hand gestures captured via computer vision. The work examines how machine learning can facilitate intuitive human-computer interaction in playful contexts, exploring the translation of physical movement into algorithmic behavior.\n\nExhibited at The Bridge (Toronto, Canada) on March 29th, 2024 at Long Winter 12.3.\n\nThis installation was built using a standard webcam and the Mediapipe machine learning library for gesture recognition, JavaScript with the p5.js creative coding library for realtime visuals.",images:[t(n),t(l),t(r),t(a)],thumbnails:{[t(n)]:t(X)},previewThumbnail:t(eA)},{name:"Surveil Yourself",slug:"surveil-yourself",type:"Interactive Installation",location:"Toronto, Canada",year:"2023",description:"Surveil Yourself is a real-time interactive system that invites audience members to contribute their phone camera feeds to a collective projected display. Participants scan a QR code to stream their device cameras, which are integrated into a grid of feeds surrounding the space. The work questions voluntary surveillance and collective spectatorship, examining how willingly we contribute to systems of observation in exchange for participation.\n\nPremiered at P2P 2023 Open HDMI event at InterAccess (Toronto, Canada) using the IA 360 projection system.\n\nCollaboration with Asucena Di Giovanni. This installation was built using a custom web interface for video streaming, Python scripting with Syphon and OSC for data routing, VDMX for projection mapping, custom shaders for audio-reactive visuals, and TouchOSC for real-time control.",images:[t(L),t(j),t(E),t(B),t(M),t(z),t(W)],thumbnails:{[t(L)]:t(ep),[t(j)]:t(eh),[t(E)]:t(ed)},previewThumbnail:t(eT)}],eC=e=>eI.find(t=>t.slug===e),eS=e=>eI.findIndex(t=>t.slug===e)}),a("dJEV6",function(e,t){e.exports=import.meta.resolve("61yiA")}),a("c5LMG",function(e,t){e.exports=import.meta.resolve("hiX74")}),a("ilSGt",function(e,t){e.exports=import.meta.resolve("6fPml")}),a("g2z6j",function(e,t){e.exports=import.meta.resolve("bx7vM")}),a("gmZgJ",function(e,t){e.exports=import.meta.resolve("k5GIw")}),a("TiOu3",function(e,t){e.exports=import.meta.resolve("9PjXo")}),a("esqme",function(e,t){e.exports=import.meta.resolve("ieuda")}),a("8gCmT",function(e,t){e.exports=import.meta.resolve("9p6a3")}),a("g3XVg",function(e,t){e.exports=import.meta.resolve("gdhBZ")}),a("1XSyB",function(e,t){e.exports=import.meta.resolve("lILRV")}),a("1TF2t",function(e,t){e.exports=import.meta.resolve("lVMux")}),a("hRvYT",function(e,t){e.exports=import.meta.resolve("eKCEN")}),a("jWdsW",function(e,t){e.exports=import.meta.resolve("9r84j")}),a("4nMNA",function(e,t){e.exports=import.meta.resolve("dsJsU")}),a("cq1Iv",function(e,t){e.exports=import.meta.resolve("jOB9Q")}),a("bGAJA",function(e,t){e.exports=import.meta.resolve("f8qy1")}),a("jDyle",function(e,t){e.exports=import.meta.resolve("jpM1A")}),a("h72pW",function(e,t){e.exports=import.meta.resolve("9jBpA")}),a("hIPVA",function(e,t){e.exports=import.meta.resolve("jfK3I")}),a("7L7uE",function(e,t){e.exports=import.meta.resolve("6Obs0")}),a("9LFfG",function(e,t){e.exports=import.meta.resolve("dNZhq")}),a("irja9",function(e,t){e.exports=import.meta.resolve("ftOo8")}),a("6P57R",function(e,t){e.exports=import.meta.resolve("rDZfV")}),a("2cSLL",function(e,t){e.exports=import.meta.resolve("lnAOY")}),a("iW57Q",function(e,t){e.exports=import.meta.resolve("aeOvi")}),a("6koWC",function(e,t){e.exports=import.meta.resolve("aIq5g")}),a("bR8cm",function(e,t){e.exports=import.meta.resolve("cX3df")}),a("5ucxB",function(e,t){e.exports=import.meta.resolve("ju6uG")}),a("4iFc5",function(e,t){e.exports=import.meta.resolve("aWZ6Q")}),a("aSuHG",function(e,t){e.exports=import.meta.resolve("7uIUA")}),a("4Ql3K",function(e,t){e.exports=import.meta.resolve("hTzem")}),a("eMzZn",function(e,t){e.exports=import.meta.resolve("nMZN6")}),a("531oB",function(e,t){e.exports=import.meta.resolve("hd0NN")}),a("gltKM",function(e,t){e.exports=import.meta.resolve("lKlfo")}),a("33pXu",function(e,t){e.exports=import.meta.resolve("jDaHr")}),a("ceGjv",function(e,t){e.exports=import.meta.resolve("j7HHM")}),a("eVWVU",function(e,t){e.exports=import.meta.resolve("1AANJ")}),a("1JVLn",function(e,t){e.exports=import.meta.resolve("cQaVd")}),a("koobu",function(e,t){e.exports=import.meta.resolve("lHKxw")}),a("l9oDf",function(e,t){e.exports=import.meta.resolve("3BUz0")}),a("afSar",function(e,t){e.exports=import.meta.resolve("eGs3K")}),a("gCbXs",function(e,t){e.exports=import.meta.resolve("kFi1l")}),a("fXEgN",function(e,t){e.exports=import.meta.resolve("e3AvI")}),a("FIkud",function(e,t){e.exports=import.meta.resolve("79xzi")}),a("bo2HT",function(e,t){e.exports=import.meta.resolve("ksc9N")}),a("l5kN4",function(e,t){e.exports=import.meta.resolve("b2PsY")}),a("acjrk",function(e,t){e.exports=import.meta.resolve("5QaRW")}),a("2THVu",function(e,t){e.exports=import.meta.resolve("3xLTR")}),a("4YBPt",function(e,t){e.exports=import.meta.resolve("5lVSh")}),a("gLY8r",function(e,t){e.exports=import.meta.resolve("fsqJv")}),a("92BNT",function(e,t){e.exports=import.meta.resolve("P8nWU")}),a("3bqeq",function(e,t){e.exports=import.meta.resolve("9MJTv")}),a("7mtBn",function(e,t){e.exports=import.meta.resolve("MutnP")}),a("03G7r",function(e,t){e.exports=import.meta.resolve("2HxCI")}),a("Qn0pP",function(e,t){e.exports=import.meta.resolve("4GOyk")}),a("i3ZWc",function(e,t){e.exports=import.meta.resolve("gcwms")}),a("2ZZFq",function(e,t){e.exports=import.meta.resolve("3CRnX")}),a("fWboo",function(e,t){e.exports=import.meta.resolve("a8xY2")}),a("59b9w",function(e,t){e.exports=import.meta.resolve("1G7sL")}),a("dZTdR",function(e,t){e.exports=import.meta.resolve("2GD8V")}),a("8EfBZ",function(e,t){e.exports=import.meta.resolve("hMA1V")}),a("hWpKg",function(e,t){e.exports=import.meta.resolve("cfSF5")}),a("4TZaW",function(e,t){e.exports=import.meta.resolve("efxFT")}),a("6sqIk",function(e,t){e.exports=import.meta.resolve("6YSCt")}),a("iYjFU",function(e,t){e.exports=import.meta.resolve("gLLWl")}),a("jPFVK",function(e,t){e.exports=import.meta.resolve("dnteb")}),a("ab33d",function(e,t){e.exports=import.meta.resolve("igwc7")}),a("2awQ6",function(e,t){e.exports=import.meta.resolve("6LXAC")}),a("hAQe1",function(e,t){e.exports=import.meta.resolve("gP6Sr")}),a("gzHqD",function(e,t){e.exports=import.meta.resolve("6yOHH")}),a("4uhWq",function(e,t){e.exports=import.meta.resolve("jMFxP")}),a("3qphS",function(e,t){e.exports=import.meta.resolve("lczQU")}),a("fQWGC",function(e,t){e.exports=import.meta.resolve("dt9Ey")}),a("16p52",function(e,t){e.exports=import.meta.resolve("h984A")}),a("d9MMf",function(i,o){e(i.exports,"photoCollections",()=>eL),e(i.exports,"findCollectionBySlug",()=>ej);var n=s("lbshW"),a=s("1hq0x"),r=s("g4o4J"),l=s("cDb9Y"),c=s("aJKbo"),p=s("1hyRS"),h=s("fKYCR"),d=s("5kGZk"),m=s("7UHx3"),u=s("5b7n3"),g=s("8xRFU"),v=s("7QfKQ"),f=s("eICss"),b=s("6b5pK"),x=s("8VLsg"),y=s("ayjtq"),w=s("bspOz"),k=s("aqCTl"),A=s("iyWk3"),T=s("7ggft"),I=s("fwoO5"),C=s("1BwqA"),S=s("2no5u"),P=s("bXzCI"),L=s("h7eH7"),j=s("5f3iS"),E=s("2L1SO"),B=s("go6TW"),M=s("HSzpq"),z=s("6wjvK"),W=s("byjUF"),D=s("31ib9"),O=s("fMuPC"),R=s("9jhET"),$=s("iyBa8"),U=s("avobq"),N=s("ajGd1"),V=s("d1zYl"),F=s("i7b18"),H=s("8g0Ee"),G=s("fdYZS"),q=s("2o1hn"),K=s("h6khA"),J=s("fvP1I");s("iwcMJ");var Y=s("7M7Bu"),_=s("1mPFF");s("1ZoX8");var X=s("OmH9S"),Z=s("9bl1p"),Q=s("1enG9"),ee=s("gqkoo"),et=s("1Es4e"),ei=s("fJVov"),eo=s("gVHyx"),en=s("bpgRb"),es=s("lilVY"),ea=s("iIXAI"),er=s("bxBzM"),el=s("e2cGk"),ec=s("32SAE"),ep=s("8cGKE"),eh=s("6KePK"),ed=s("9EasB"),em=s("5rbIv"),eu=s("5b7MZ"),eg=s("6Bl0R"),ev=s("4dr2z"),ef=s("lOpt3"),eb=s("9YEDR"),ex=s("e1vqF"),ey=s("exjQh"),ew=s("2xymK"),ek=s("78CkL"),eA=s("ez1UD"),eT=s("fibgA"),eI=s("bH86D");s("3VHmK");var eC=s("bQX0W"),eS=s("8Px2O"),eP=s("hhCct");let eL=[{id:"portrait",name:"PORTRAIT",slug:"portrait",description:"Subjects in controlled and natural environments",heroImage:t(n),heroImageThumb:t(a),images:[t(n),t(W),t(z),t(p),t(C),t(S),t(T),t(L),t(D),t(P),t(x),t(g),t(B),t(M),t(y),t(I),t(m),t(u),t(v),t(j),t(f),t(E),t(b),t(w),t(k),t(A),t(h),t(d)]},{id:"aberrant",name:"ABERRANT",slug:"aberrant",description:"Experimental and conceptual photographic explorations",heroImage:t(ei),heroImageThumb:t(l),images:[t(ei),t(ef),t(eg),t(eo),t(en),t(ec),t(ep),t(es),t(ea),t(er),t(el),t(eh),t(ed),t(em),t(eu),t(ev)]},{id:"performance",name:"PERFORMANCE",slug:"performance",description:"Concerts, live events, and artistic performances",heroImage:t(O),heroImageThumb:t(r),images:[t(O),t(ee),t(Z),t(H),t(G),t(X),t(R),t(J),t(Y),t(_),t(K),t(U),t(q),t($),t(Q),t(V),t(F),t(N),t(et)]},{id:"astro",name:"ASTRO",slug:"astro",description:"Celestial objects and astronomical phenomena",heroImage:t(eb),heroImageThumb:t(c),images:[t(eb),t(ex),t(ey),t(eC),t(ew),t(ek),t(eA),t(eT),t(eI),t(eS),t(eP)]}],ej=e=>eL.find(t=>t.slug===e)}),a("lbshW",function(e,t){e.exports=import.meta.resolve("j7R11")}),a("1hq0x",function(e,t){e.exports=import.meta.resolve("9OReD")}),a("g4o4J",function(e,t){e.exports=import.meta.resolve("k08MK")}),a("cDb9Y",function(e,t){e.exports=import.meta.resolve("a8CS4")}),a("aJKbo",function(e,t){e.exports=import.meta.resolve("kvyi2")}),a("1hyRS",function(e,t){e.exports=import.meta.resolve("dXupA")}),a("fKYCR",function(e,t){e.exports=import.meta.resolve("fbskd")}),a("5kGZk",function(e,t){e.exports=import.meta.resolve("3wx5U")}),a("7UHx3",function(e,t){e.exports=import.meta.resolve("5mrr4")}),a("5b7n3",function(e,t){e.exports=import.meta.resolve("bUQvt")}),a("8xRFU",function(e,t){e.exports=import.meta.resolve("lXtsm")}),a("7QfKQ",function(e,t){e.exports=import.meta.resolve("5oJOJ")}),a("eICss",function(e,t){e.exports=import.meta.resolve("64CU3")}),a("6b5pK",function(e,t){e.exports=import.meta.resolve("6RAWO")}),a("8VLsg",function(e,t){e.exports=import.meta.resolve("iyzri")}),a("ayjtq",function(e,t){e.exports=import.meta.resolve("xDxPT")}),a("bspOz",function(e,t){e.exports=import.meta.resolve("gvkKR")}),a("aqCTl",function(e,t){e.exports=import.meta.resolve("jFiAb")}),a("iyWk3",function(e,t){e.exports=import.meta.resolve("75Vjz")}),a("7ggft",function(e,t){e.exports=import.meta.resolve("aGGNu")}),a("fwoO5",function(e,t){e.exports=import.meta.resolve("1muV5")}),a("1BwqA",function(e,t){e.exports=import.meta.resolve("f0hNP")}),a("2no5u",function(e,t){e.exports=import.meta.resolve("l7LWz")}),a("bXzCI",function(e,t){e.exports=import.meta.resolve("dFBmc")}),a("h7eH7",function(e,t){e.exports=import.meta.resolve("LAHME")}),a("5f3iS",function(e,t){e.exports=import.meta.resolve("alYfv")}),a("2L1SO",function(e,t){e.exports=import.meta.resolve("en5TQ")}),a("go6TW",function(e,t){e.exports=import.meta.resolve("qRVUf")}),a("HSzpq",function(e,t){e.exports=import.meta.resolve("c7iFK")}),a("6wjvK",function(e,t){e.exports=import.meta.resolve("6o1zj")}),a("byjUF",function(e,t){e.exports=import.meta.resolve("94c6Y")}),a("31ib9",function(e,t){e.exports=import.meta.resolve("3NhmW")}),a("fMuPC",function(e,t){e.exports=import.meta.resolve("jNivA")}),a("9jhET",function(e,t){e.exports=import.meta.resolve("7dmJT")}),a("iyBa8",function(e,t){e.exports=import.meta.resolve("a2XL5")}),a("avobq",function(e,t){e.exports=import.meta.resolve("45suf")}),a("ajGd1",function(e,t){e.exports=import.meta.resolve("lJhE6")}),a("d1zYl",function(e,t){e.exports=import.meta.resolve("gtSkb")}),a("i7b18",function(e,t){e.exports=import.meta.resolve("edPW0")}),a("8g0Ee",function(e,t){e.exports=import.meta.resolve("9YVh1")}),a("fdYZS",function(e,t){e.exports=import.meta.resolve("6miqK")}),a("2o1hn",function(e,t){e.exports=import.meta.resolve("gyPJA")}),a("h6khA",function(e,t){e.exports=import.meta.resolve("4dr8N")}),a("fvP1I",function(e,t){e.exports=import.meta.resolve("6ol1N")}),a("iwcMJ",function(e,t){e.exports=import.meta.resolve("gCarM")}),a("7M7Bu",function(e,t){e.exports=import.meta.resolve("bc38V")}),a("1mPFF",function(e,t){e.exports=import.meta.resolve("cNJzk")}),a("1ZoX8",function(e,t){e.exports=import.meta.resolve("ih7I1")}),a("OmH9S",function(e,t){e.exports=import.meta.resolve("6aImD")}),a("9bl1p",function(e,t){e.exports=import.meta.resolve("ktD3O")}),a("1enG9",function(e,t){e.exports=import.meta.resolve("kMtJp")}),a("gqkoo",function(e,t){e.exports=import.meta.resolve("f4G9Y")}),a("1Es4e",function(e,t){e.exports=import.meta.resolve("kxeul")}),a("fJVov",function(e,t){e.exports=import.meta.resolve("dIf09")}),a("gVHyx",function(e,t){e.exports=import.meta.resolve("aJJMK")}),a("bpgRb",function(e,t){e.exports=import.meta.resolve("horGt")}),a("lilVY",function(e,t){e.exports=import.meta.resolve("7bRpX")}),a("iIXAI",function(e,t){e.exports=import.meta.resolve("ioUUy")}),a("bxBzM",function(e,t){e.exports=import.meta.resolve("lNGM8")}),a("e2cGk",function(e,t){e.exports=import.meta.resolve("83YQJ")}),a("32SAE",function(e,t){e.exports=import.meta.resolve("441t3")}),a("8cGKE",function(e,t){e.exports=import.meta.resolve("1hK9M")}),a("6KePK",function(e,t){e.exports=import.meta.resolve("khs9F")}),a("9EasB",function(e,t){e.exports=import.meta.resolve("37A4l")}),a("5rbIv",function(e,t){e.exports=import.meta.resolve("6vVSv")}),a("5b7MZ",function(e,t){e.exports=import.meta.resolve("kTs2T")}),a("6Bl0R",function(e,t){e.exports=import.meta.resolve("2LcCM")}),a("4dr2z",function(e,t){e.exports=import.meta.resolve("5A2vk")}),a("lOpt3",function(e,t){e.exports=import.meta.resolve("3JZ2n")}),a("9YEDR",function(e,t){e.exports=import.meta.resolve("e0hQ6")}),a("e1vqF",function(e,t){e.exports=import.meta.resolve("hRgaW")}),a("exjQh",function(e,t){e.exports=import.meta.resolve("dc7mt")}),a("2xymK",function(e,t){e.exports=import.meta.resolve("jrVZY")}),a("78CkL",function(e,t){e.exports=import.meta.resolve("iZ7tz")}),a("ez1UD",function(e,t){e.exports=import.meta.resolve("cuA6I")}),a("fibgA",function(e,t){e.exports=import.meta.resolve("3K3dZ")}),a("bH86D",function(e,t){e.exports=import.meta.resolve("8MwhF")}),a("3VHmK",function(e,t){e.exports=import.meta.resolve("i4SDT")}),a("bQX0W",function(e,t){e.exports=import.meta.resolve("e11Sf")}),a("8Px2O",function(e,t){e.exports=import.meta.resolve("hUimd")}),a("hhCct",function(e,t){e.exports=import.meta.resolve("i3epz")}),a("fJjw1",function(i,o){e(i.exports,"projects",()=>u),e(i.exports,"findProjectBySlug",()=>g);var n=s("i4ygW"),a=s("7y3mw"),r=s("eQxbx"),l=s("bycJP"),c=s("lGFEw"),p=s("jbYZy"),h=s("garYl"),d=s("409Cz"),m=s("cDp4M");let u=[{name:"Dimension Door",slug:"dimension-door",year:"2024",description:"A swirling psychedelic vortex of multicoloured squares twists aggressively back and forth, seemingly descending into the black background.",subtitle:"SKETCH",image:t(a),type:"local",url:null},{name:"Strange Ink",slug:"strange-ink",year:"2025",description:"An extremely simple program that produces a fascinating, liquid-like output using no physics or simulation algorithms.",subtitle:"INTERACTIVE",image:t(m),type:"local",url:null},{name:"Koi Pond",slug:"koi-pond",year:"2024",description:"Fishy :)",subtitle:"SKETCH",image:t(p),type:"local",url:null},{name:"Lava Lamp",slug:"lava-lamp",year:"2023",description:"Groovy.",subtitle:"SKETCH",image:t(h),type:"local",url:null},{name:"Infinite Bauhaus",slug:"infinite-bauhaus",year:"2023",description:"Bauhaus, infinitely.",subtitle:"SKETCH",image:t(c),type:"local",url:null},{name:"Galaxy Collision",slug:"galaxy-collision",year:"2024",description:"Oop.",subtitle:"SKETCH",image:t(l),type:"local",url:null},{name:"Flow Fields",slug:"flow-fields",year:"2023",description:"Configurable perlin noise field driving particle velocity.",subtitle:"INTERACTIVE",image:t(r),type:"local",url:null},{name:"Asteroids",slug:"asteroids",year:"2024",description:"Asteroids!",subtitle:"GAME",image:t(n),type:"local",url:null},{name:"Nissan 300ZX",slug:"nissan-300zx",year:"2023",description:"A close digital clone of the speedometer and tachometer from the 1987 Nizzan 300ZX Z31",subtitle:"INTERACTIVE",image:t(d),type:"local",url:null}];function g(e){return u.find(t=>t.slug===e)}}),a("i4ygW",function(e,t){e.exports=import.meta.resolve("leBhW")}),a("7y3mw",function(e,t){e.exports=import.meta.resolve("akyM9")}),a("eQxbx",function(e,t){e.exports=import.meta.resolve("l6hfJ")}),a("bycJP",function(e,t){e.exports=import.meta.resolve("cDsc0")}),a("lGFEw",function(e,t){e.exports=import.meta.resolve("1sPXw")}),a("jbYZy",function(e,t){e.exports=import.meta.resolve("gE6qw")}),a("garYl",function(e,t){e.exports=import.meta.resolve("jkUUY")}),a("409Cz",function(e,t){e.exports=import.meta.resolve("jWbBg")}),a("cDp4M",function(e,t){e.exports=import.meta.resolve("5Fa8v")}),a("hbH95",function(t,i){e(t.exports,"links",()=>o),e(t.exports,"findLinkGroupPath",()=>n);let o=[{id:"zcal",title:"BOOK ME",url:"https://zcal.co/blap64",icon:"CALL",description:"Tell me your project"},{id:"learn",title:"LEARN",icon:"LERN",description:"Workshops and resources",links:[{id:"workshops",title:"WORKSHOPS",icon:"WKSP",description:"Live sessions",links:[]},{id:"tube",title:"YOUTUBE",url:"https://www.youtube.com/@blapcode",icon:"YTBE",description:"TouchDesigner tutorials"},{id:"patreon",title:"PATREON",url:"https://www.patreon.com/blapcode",icon:"PTRN",description:"TouchDesigner files"}]},{id:"instagram",title:"INSTAGRAM",url:"https://instagram.com/blapcode",icon:"INST",description:"Upcoming projects"},{id:"ukai",title:"UKAI PROJECTS",url:"https://ukaiprojects.com",icon:"UKAI",description:"Live events"},{id:"discord",title:"DISCORD",url:"https://discord.gg/pYPvzCMwFY",icon:"DSCD",description:"Join the community"},{id:"home",title:"PORTFOLIO",url:"https://blap64.com",icon:"SITE",description:"Works / contact"}],n=(e,t=o)=>{for(let i of t){if(!i.links)continue;if(i.id===e)return[i];let t=n(e,i.links);if(t)return[i,...t]}return null}}),a("baa6D",function(t,i){e(t.exports,"mobileCheck",()=>o),e(t.exports,"smoothFollow",()=>n),e(t.exports,"easeInCubic",()=>s),e(t.exports,"getFontSizes",()=>a),e(t.exports,"widthCheck",()=>r),e(t.exports,"isDesktopOnly",()=>l),e(t.exports,"getMediaPath",()=>c),e(t.exports,"isVideoFile",()=>p),e(t.exports,"calculateCropDimensions",()=>h),e(t.exports,"getViewportSize",()=>d),e(t.exports,"updateCursor",()=>m),e(t.exports,"AnimationManager",()=>u),e(t.exports,"UICornerBoxButton",()=>v),e(t.exports,"TextWriter",()=>A),e(t.exports,"UIPlanetButton",()=>f),e(t.exports,"radialToCartesian",()=>k),e(t.exports,"UIArcButton",()=>b),e(t.exports,"UITriangleButton",()=>x),e(t.exports,"UIHexButton",()=>y),e(t.exports,"daysSince",()=>w),e(t.exports,"UIWebButton",()=>T);let o=()=>{let e=/iPhone|iPad|Android/i.test(navigator.userAgent),t=/iPad/i.test(navigator.userAgent)||/Android/i.test(navigator.userAgent)&&!/Chrome/i.test(navigator.userAgent);return!!(e||t)},n=(e,t,i,o=100)=>t+Math.min(i*(e-t),o),s=e=>e*e*e,a=(e,t)=>r(e)&&o()?{small:13,medium:20,large:48}:{small:24,medium:32,large:64},r=e=>e<768,l=()=>{let e=navigator.userAgent,t=/Macintosh/i.test(e)&&navigator.maxTouchPoints>1,i=/iPhone|iPad|Android/i.test(e),o=/iPad/i.test(e)||t||/Android/i.test(e)&&!/Chrome/i.test(e);return!(i||o)},c=e=>"string"==typeof e?e:e&&"object"==typeof e?e.default||e.src||e.href||e.toString():String(e),p=e=>e.toLowerCase().match(/\.(mp4|mov|webm|avi)(\?.*)?$/i),h=(e,t,i,o)=>{let n=i/o,s=0,a=0,r=e,l=t;return e/t>n?s=(e-(r=t*n))/2:a=(t-(l=e/n))/2,{sourceX:s,sourceY:a,sourceWidth:r,sourceHeight:l}},d=()=>({width:Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)}),m=(e,t,i,...o)=>{let n=!1;for(let e of o){if(Array.isArray(e)){for(let o of e)if(o&&o.contains&&o.contains(t,i)){n=!0;break}}else"function"==typeof e?e(t,i)&&(n=!0):e&&e.contains&&e.contains(t,i)&&(n=!0);if(n)break}n?e.cursor("pointer"):e.cursor("default")};class u{constructor(e){this.states=e,this.to_render={},this.t=0}execute(e){this.t+=e.deltaTime;let t=this.t;this.to_render={},this.states.every((e,i)=>(t>=e.start_time&&t<e.start_time+e.duration?this.to_render[e.idx]=i:t>=e.start_time+e.duration&&e.persist&&(this.to_render[e.idx]=i),!0)),Object.values(this.to_render).forEach(e=>{let i=Math.min((t-this.states[e].start_time)/this.states[e].duration,1);this.states[e].fn(i,...this.states[e].args)})}}class g{constructor(e,t,i,o,n){this.p5=e,this.p=e.createVector(t,i),this.s=e.createVector(o,n)}dist(e,t){let i=this.p5.createVector(e,t);return p5.Vector.dist(this.p,i)}}class v extends g{constructor(e,t,i,o,n,s,a,r,l){super(e,t,i,o,n),this.cs=e.createVector(s,a),this.textWriter=new A(e,t,i,void 0,void 0,r,l)}contains(e,t){return this.insideBox(e,t,this.p.x,this.p.y,this.s.x,this.s.y)}insideBox(e,t,i,o,n,s){return e>=i-n/2&&e<=i+n/2&&t>=o-s/2&&t<=o+s/2}render(){let e=this.p5.constrain(this.s.x*(this.cs.x-.5),-.1*this.s.x,this.s.x),t=this.p5.constrain(this.s.y*(this.cs.y-.5),-.1*this.s.y,this.s.y);this.corners(this.p.x,this.p.y,this.s.x,this.s.y,e,t)}corners(e,t,i,o,n,s){let a={x:e-.5*i,y:t-.5*o},r={x:e+.5*i,y:t-.5*o},l={x:e-.5*i,y:t+.5*o},c={x:e+.5*i,y:t+.5*o};this.corner(a.x,a.y,n,s),this.corner(r.x,r.y,-n,s),this.corner(l.x,l.y,n,-s),this.corner(c.x,c.y,-n,-s)}corner(e,t,i,o){this.p5.line(e,t,e+i,t),this.p5.line(e,t,e,t+o)}}class f extends g{constructor(e,t,i,o,n,s,a,r,l="",c=12,p=0,h=0){super(e,t,i,2*o,2*o),this.radius=o,this.orbitRadius=n,this.angle=s,this.speed=a,this.color=r,this.originalAngle=s,this.textOffsetX=p,this.textOffsetY=h,this.textWriter=new A(e,t+p,i+h,void 0,void 0,l,c),this.active=!1}contains(e,t){return this.p5.dist(e,t,this.p.x,this.p.y)<=1.5*this.radius}updatePosition(e,t,i){this.angle+=-this.speed*i;let o=k(this.orbitRadius,this.angle,this.p5);this.p.x=e+o.x,this.p.y=t+o.y,this.textWriter.p.x=this.p.x+this.textOffsetX,this.textWriter.p.y=this.p.y+this.textOffsetY}render(e,t){let i=this.p5.map(e.dist(this.p5.createVector(this.p.x,this.p.y)),0,.1*t,1,0,!0),o=this.radius;this.p5.stroke(this.color,128+127*i),this.p5.strokeWeight(2),this.p5.noFill();let n=-this.angle+this.p5.PI/2;this.p5.arc(this.p.x,this.p.y,o,o,n+.1-i,n+this.p5.PI-.1+i),this.p5.strokeWeight(1),this.p5.arc(this.p.x,this.p.y,.8*o,.8*o,n+this.p5.PI+.1-i,n-.1+i),this.renderUITriangles(o,i),this.renderText(i)}renderUITriangles(e,t){let i=e*(1.5+.2*this.p5.sin(.05*this.p.x+.05*this.p.y+.001*this.p5.millis())),o=.2*e;this.p5.fill(128+127*t,20,20,128+127*t),this.p5.noStroke(),[{x:this.p.x-i/2,y:this.p.y-i/2,angle:5*this.p5.PI/4},{x:this.p.x+i/2,y:this.p.y-i/2,angle:7*this.p5.PI/4},{x:this.p.x+i/2,y:this.p.y+i/2,angle:this.p5.PI/4},{x:this.p.x-i/2,y:this.p.y+i/2,angle:3*this.p5.PI/4}].forEach(e=>{this.p5.push(),this.p5.translate(e.x,e.y),this.p5.rotate(e.angle+this.p5.PI/2),this.p5.triangle(0,-o*(.5-2*t),-(.8*o),.5*o,.8*o,.5*o),this.p5.pop()})}renderText(e){if(this.textWriter&&this.textWriter.t&&this.textWriter.t.length>0){let t,i;if(this.p5.push(),this.p5.fill(74,144+80*e,230),this.p5.noStroke(),this.p5.textAlign(this.p5.LEFT,this.p5.CENTER),this.p5.textFont("BPdotsSquareVF",{fontVariationSettings:"wght 900"}),this.p5.textSize(this.textWriter.size),"undefined"!=typeof window&&window.textCache&&window.textCache.has(this.textWriter.t)){let e=window.textCache.get(this.textWriter.t);t=e.lines,i=e.lineHeight}else{let e=this.textWriter.t.split(" ");t=[];let o="";for(let i of e)(o+i).length>16&&o.length>0?(t.push(o.trim()),o=i+" "):o+=i+" ";o.length>0&&t.push(o.trim()),i=1.2*this.textWriter.size}t.forEach((e,o)=>{let n=this.textWriter.p.y+(o-(t.length-1)/2)*i;this.p5.text(e,this.textWriter.p.x,n)}),this.p5.pop()}}setTextOffset(e,t){this.textOffsetX=e,this.textOffsetY=t,this.textWriter.p.x=this.p.x+this.textOffsetX,this.textWriter.p.y=this.p.y+this.textOffsetY}toggle(){this.active=!this.active}setActive(e){this.active=e}isActive(){return this.active}}class b extends g{constructor(e,t,i,o,n,s,a,r,l){super(e,t,i,o,n),this.cs=e.createVector(s,a),this.textWriter=new A(e,t,i,void 0,void 0,r,l)}contains(e,t){return this.dist(e,t)<=this.s.x/2}insideBox(e,t,i,o,n,s){return e>=i-n/2&&e<=i+n/2&&t>=o-s/2&&t<=o+s/2}render(){this.p5.arc(this.p.x,this.p.y,this.s.x,this.s.y,this.p5.TWO_PI*this.cs.x,this.p5.TWO_PI*this.cs.x-this.p5.min(1.5*this.p5.PI*(1-this.cs.x),1.5*this.p5.PI))}}class x extends g{constructor(e,t,i,o,n,s,a,r,l,c,p=[230],h=[230,20,20]){super(e,t,i,o,n),this.cs=e.createVector(s,a,r),this.top=e.createVector(this.p.x+this.s.x*e.cos(this.cs.z),this.p.y+this.s.y*e.sin(this.cs.z)),this.left=e.createVector(this.p.x+this.s.x*e.cos(this.cs.z+2*e.PI/3),this.p.y+this.s.y*e.sin(this.cs.z+2*e.PI/3)),this.right=e.createVector(this.p.x+this.s.x*e.cos(this.cs.z+4*e.PI/3),this.p.y+this.s.y*e.sin(this.cs.z+4*e.PI/3)),this.textWriter=new A(e,t,i,void 0,void 0,l,c),this.unhoveredColor=p,this.hoveredColor=h}render(){this.top=this.p5.createVector(this.p.x+this.s.x*this.p5.cos(this.cs.z),this.p.y+this.s.y*this.p5.sin(this.cs.z)),this.left=this.p5.createVector(this.p.x+this.s.x*this.p5.cos(this.cs.z+2*this.p5.PI/3),this.p.y+this.s.y*this.p5.sin(this.cs.z+2*this.p5.PI/3)),this.right=this.p5.createVector(this.p.x+this.s.x*this.p5.cos(this.cs.z+4*this.p5.PI/3),this.p.y+this.s.y*this.p5.sin(this.cs.z+4*this.p5.PI/3)),this.cs.x=this.p5.map(this.cs.x,0,1,.25,.08,!0);let e=p5.Vector.lerp(this.top,this.right,this.cs.x),t=p5.Vector.lerp(this.left,this.top,this.cs.x),i=p5.Vector.lerp(this.right,this.left,this.cs.x),o=p5.Vector.lerp(this.top,this.right,1-this.cs.x),n=p5.Vector.lerp(this.left,this.top,1-this.cs.x),s=p5.Vector.lerp(this.right,this.left,1-this.cs.x);this.p5.line(o.x,o.y,e.x,e.y),this.p5.line(n.x,n.y,t.x,t.y),this.p5.line(s.x,s.y,i.x,i.y)}renderTriangle(){this.top=this.p5.createVector(this.p.x+this.s.x*this.p5.cos(this.cs.z),this.p.y+this.s.y*this.p5.sin(this.cs.z)),this.left=this.p5.createVector(this.p.x+this.s.x*this.p5.cos(this.cs.z+2*this.p5.PI/3),this.p.y+this.s.y*this.p5.sin(this.cs.z+2*this.p5.PI/3)),this.right=this.p5.createVector(this.p.x+this.s.x*this.p5.cos(this.cs.z+4*this.p5.PI/3),this.p.y+this.s.y*this.p5.sin(this.cs.z+4*this.p5.PI/3)),this.p5.triangle(this.top.x,this.top.y,this.left.x,this.left.y,this.right.x,this.right.y);for(let e=1;e<=3;e++){let t=this.p5.map(this.cs.x,(e-1)/3,e/3,0,1,!0);if(t>0){let i=1-.25*e*t,o=this.p5.createVector(this.p.x+this.s.x*i*this.p5.cos(this.cs.z),this.p.y+this.s.y*i*this.p5.sin(this.cs.z)),n=this.p5.createVector(this.p.x+this.s.x*i*this.p5.cos(this.cs.z+2*this.p5.PI/3),this.p.y+this.s.y*i*this.p5.sin(this.cs.z+2*this.p5.PI/3)),s=this.p5.createVector(this.p.x+this.s.x*i*this.p5.cos(this.cs.z+4*this.p5.PI/3),this.p.y+this.s.y*i*this.p5.sin(this.cs.z+4*this.p5.PI/3));this.p5.triangle(o.x,o.y,n.x,n.y,s.x,s.y)}}}contains(e,t){return this.isPointInTriangleFast(e,t,this.top.x,this.top.y,this.left.x,this.left.y,this.right.x,this.right.y)}isPointInTriangleFast(e,t,i,o,n,s,a,r){let l=this.sign(e,t,i,o,n,s),c=this.sign(e,t,n,s,a,r),p=this.sign(e,t,a,r,i,o);return!((l<0||c<0||p<0)&&(l>0||c>0||p>0))}sign(e,t,i,o,n,s){return(e-n)*(o-s)-(i-n)*(t-s)}setTextOffset(e,t){this.textWriter.p.x=this.p.x+e,this.textWriter.p.y=this.p.y+t}getColor(e){return e?this.hoveredColor:this.unhoveredColor}}class y extends g{constructor(e,t,i,o,n,s,a,r,l){super(e,t,i,o,n),this.cs=e.createVector(s,a),this.vertices=this.calculateHexVertices(),this.textWriter=new A(e,t,i,void 0,void 0,r,l)}calculateHexVertices(){let e=[];for(let t=0;t<6;t++){let i=t*this.p5.PI/3,o=this.p.x+this.radius*this.p5.cos(i),n=this.p.y+this.radius*this.p5.sin(i);e.push({x:o,y:n})}return e}contains(e,t){return this.isPointInHexagon(e,t)}isPointInHexagon(e,t){return this.p5.dist(e,t,this.p.x,this.p.y)<=this.radius}render(){this.radius=Math.min(this.s.x,this.s.y)/2,this.vertices=this.calculateHexVertices();for(let e=0;e<6;e++){let t=this.vertices[e],i=this.vertices[(e+1)%6],o=this.vertices[(e-1+6)%6],n=this.p5.map(this.cs.x,0,1,.2,.9,!0),s=this.p5.lerp(t.x,i.x,.1),a=this.p5.lerp(t.y,i.y,.1),r=this.p5.lerp(t.x,i.x,.1+.9*n),l=this.p5.lerp(t.y,i.y,.1+.9*n);this.p5.line(s,a,r,l);let c=this.p5.lerp(t.x,o.x,.1),p=this.p5.lerp(t.y,o.y,.1),h=this.p5.lerp(t.x,o.x,.1+.9*n),d=this.p5.lerp(t.y,o.y,.1+.9*n);this.p5.line(c,p,h,d)}}}let w=e=>{let t=new Date(e);return Math.floor((new Date-t)/864e5)},k=(e,t,i)=>({x:e*i.cos(t),y:-e*i.sin(t)});class A extends g{constructor(e,t,i,o,n,s,a=32,r){super(e,t,i,o,n),this.t=s,this.size=a,this.weight=r,this.alphabet="~!@#$%&*_+=/<>?",this.progress=0}render(){this.p5.textSize(this.size),this.p5.text(this.t,this.p.x,this.p.y,this.s.x)}renderRandom(e){void 0==e&&(e=this.progress);let t=this.t.length,i="";for(let o=0;o<t;o++)this.p5.random()>e?i+=this.alphabet[this.p5.floor(this.p5.random(0,this.alphabet.length))]:i+=this.t[o];this.p5.textSize(this.size),this.p5.text(i,this.p.x,this.p.y)}renderSequential(e){void 0==e&&(e=this.progress);let t=this.t.length,i=this.p5.round(e*t),o=this.t.slice(0,i);this.p5.textSize(this.size),this.p5.text(o,this.p.x,this.p.y)}renderSequentialRandom(e){void 0==e&&(e=this.progress),e=this.p5.constrain(e,0,1);let t=this.t.length,i=this.p5.round(e*t),o=this.t.slice(0,i);this.p5.randomSeed(12345*e*t+this.p5.millis()),i!=t&&(o+=this.alphabet[this.p5.floor(this.p5.random(0,this.alphabet.length))]),this.p5.randomSeed(),this.p5.textSize(this.size),this.s.x?this.p5.text(o,this.p.x,this.p.y,this.s.x):this.p5.text(o,this.p.x,this.p.y)}renderTransition(e,t,i,o=.15){if(void 0==e&&(e=this.progress),this.p5.textSize(this.size),0==e)return void(this.s.x?this.p5.text(t,this.p.x,this.p.y,this.s.x):this.p5.text(t,this.p.x,this.p.y));1==e&&(this.s.x?this.p5.text(i,this.p.x,this.p.y,this.s.x):this.p5.text(i,this.p.x,this.p.y)),e=this.p5.map(e,0,1,0,1+o,!0);let n=Math.max(t.length,i.length),s="";for(let a=0;a<n;a++){let n=a<t.length?t[a]:"",r=a<i.length?i[a]:"";this.p5.randomSeed(12345*a+Math.floor(this.p5.millis()/30));let l=this.p5.random();l<e-o||"\n"==n?s+=r:l<e+o?(""!==n||""!==r)&&(s+=this.alphabet[this.p5.floor(this.p5.random(0,this.alphabet.length))]):s+=n}this.p5.randomSeed(),this.t=s,this.s.x?this.p5.text(s,this.p.x,this.p.y,this.s.x):this.p5.text(s,this.p.x,this.p.y)}}class T extends g{constructor(e,t,i,o,n,s){if(super(e,t,i,2*o,2*o),this.radius=o,this.scale=n,this.project=s,this.hoverAlpha=0,this.targetHoverAlpha=0,this.image=null,this.imageLoaded=!1,this.imageAlpha=0,this.targetImageAlpha=0,s.image)try{let t=c(s.image);e.loadImage(t,e=>{e&&e.width>0&&e.height>0?(this.image=e,this.imageLoaded=!0,this.targetImageAlpha=255):(console.error("Invalid image loaded for",s.name,"- no dimensions"),this.imageLoaded=!1)},e=>{console.error("Image load failed for",s.name,":",e),this.imageLoaded=!1})}catch(e){console.error("Error calling loadImage for",s.name,":",e),this.imageLoaded=!1}}renderFallback(e=null){let t=this.p5.map(this.p.x,0,this.p5.width,0,255),i=this.p5.map(this.p.y,0,this.p5.height,0,255),o=255-50*this.hoverAlpha,n=null!==e?e:o;this.p5.fill(t,i,255,n),this.p5.strokeWeight(1),this.p5.stroke(240,n),this.p5.square(this.p.x,this.p.y,this.scale)}contains(e,t){let i=.5*this.scale;return e>=this.p.x-i&&e<=this.p.x+i&&t>=this.p.y-i&&t<=this.p.y+i}render(){this.p5.push();let e=this.scale/2,t=.15*this.scale,i=120+135*this.hoverAlpha;if(!this.imageLoaded||!this.image||this.imageAlpha<255){let e=this.imageLoaded&&this.image?255-this.imageAlpha:255;this.renderFallback(e)}if(this.imageLoaded&&this.image&&this.imageAlpha>0){let t=this.imageAlpha*(255-30*this.hoverAlpha)/255;this.p5.tint(255,t);try{this.p5.image(this.image,this.p.x-e,this.p.y-e,this.scale,this.scale)}catch(e){console.error("Error rendering image for project",this.project.name,":",e)}this.p5.noTint()}if(this.p5.stroke(74,144,230,i),this.p5.strokeWeight(2),this.p5.strokeCap(this.p5.SQUARE),this.p5.noFill(),[[-e,-e],[e,-e],[e,e],[-e,e]].forEach(([e,i],o)=>{let n=this.p.x+e,s=this.p.y+i;this.p5.line(n,s,n+(0===o||3===o?1:-1)*t,s),this.p5.line(n,s,n,s+(0===o||1===o?1:-1)*t)}),this.hoverAlpha>.1){this.p5.fill(74,144,230,.8*i),this.p5.noStroke();for(let t=0;t<3;t++){let i=this.p.x+e-15-8*t,o=this.p.y-e+6;this.p5.circle(i,o,3)}}if(this.hoverAlpha>.2){this.p5.stroke(74,144,230,.3*i),this.p5.strokeWeight(1);let t=this.p.y-e+.05*this.p5.millis()%this.scale;this.p5.line(this.p.x-e,t,this.p.x+e,t)}this.p5.stroke(74,144,230,.6*i),this.p5.strokeWeight(1),this.p5.noFill(),this.p5.square(this.p.x,this.p.y,this.scale),this.p5.pop(),this.p5.push();let o=120+135*this.hoverAlpha;this.p5.fill(255,o),this.p5.noStroke(),this.p5.textAlign(this.p5.CENTER,this.p5.CENTER);let n=this.p5.width<768?16:20;this.p5.textSize(n),this.p5.text(this.project.name,this.p.x,this.p.y+e+25),this.hoverAlpha>.3&&this.project.subtitle&&(this.p5.fill(74,144,230,.7*i),this.p5.textAlign(this.p5.CENTER,this.p5.CENTER),this.p5.textSize(.75*n),this.p5.text(this.project.subtitle,this.p.x,this.p.y+e+45)),this.p5.pop(),this.hoverAlpha=this.p5.lerp(this.hoverAlpha,this.targetHoverAlpha,.1),this.imageAlpha=this.p5.lerp(this.imageAlpha,this.targetImageAlpha,.03)}}});var r=s("800sp"),l=s("drhU0");function c(e){let t={"/":{title:"Benjamin Lappalainen - BLAP64",description:"Portfolio site of Creative Technologist, Educator, and Artist Benjamin Lappalainen. Interactive media installations, photography collections, and creative coding projects.",canonical:"https://blap64.com/"},"/about":{title:"About - Benjamin Lappalainen",description:"Biography and CV of Benjamin Lappalainen, Creative Technologist and Interactive Media Artist based in Toronto.",canonical:"https://blap64.com/about"},"/about/resume":{title:"Technical Resume - Benjamin Lappalainen",description:"Technical resume of Benjamin Lappalainen, Creative Technologist and Software Developer specializing in networked systems, interactive media, and computer vision.",canonical:"https://blap64.com/about/resume"},"/interactive":{title:"Interactive Projects - Benjamin Lappalainen",description:"Interactive media installations and web experiences by Benjamin Lappalainen. Creative coding, digital art, and live performance technology.",canonical:"https://blap64.com/interactive"},"/interactive/live":{title:"Live Installations - Benjamin Lappalainen",description:"Live interactive media installations and performance projects by Benjamin Lappalainen. Real-time visuals, sensor-driven art, and audience participation.",canonical:"https://blap64.com/interactive/live"},"/interactive/web":{title:"Web Experiences - Benjamin Lappalainen",description:"Interactive web experiences and creative coding projects by Benjamin Lappalainen. Browser-based generative art, simulations, and visual experiments.",canonical:"https://blap64.com/interactive/web"},"/photo":{title:"Photography - Benjamin Lappalainen",description:"Photography collections by Benjamin Lappalainen including portrait, performance, experimental, and astrophotography.",canonical:"https://blap64.com/photo"},"/links":{title:"Links - Benjamin Lappalainen",description:"Contact information, social links, and newsletter signup for Benjamin Lappalainen.",canonical:"https://blap64.com/links"},"/links/learn":{title:"Learn - Benjamin Lappalainen",description:"Workshops, TouchDesigner tutorials, and project files from Benjamin Lappalainen.",canonical:"https://blap64.com/links/learn"},"/links/learn/workshops":{title:"Workshops - Benjamin Lappalainen",description:"Creative technology and TouchDesigner workshops led by Benjamin Lappalainen.",canonical:"https://blap64.com/links/learn/workshops"},"/links/workshops":{title:"Workshops - Benjamin Lappalainen",description:"Creative technology and TouchDesigner workshops led by Benjamin Lappalainen.",canonical:"https://blap64.com/links/learn/workshops"},"/oops":{title:"Page Not Found - Benjamin Lappalainen",description:"The page you were looking for could not be found.",canonical:"https://blap64.com/"}},i=t[e]||t["/"];document.title=i.title;let o=document.querySelector('meta[name="description"]');o&&(o.content=i.description);let n=document.querySelector('meta[property="og:title"]');n&&(n.content=i.title);let s=document.querySelector('meta[property="og:description"]');s&&(s.content=i.description);let a=document.querySelector('meta[property="og:url"]');a&&(a.content=i.canonical);let r=document.querySelector('meta[name="twitter:title"]');r&&(r.content=i.title);let l=document.querySelector('meta[name="twitter:description"]');l&&(l.content=i.description);let c=document.querySelector('link[rel="canonical"]');c&&(c.href=i.canonical)}class p{constructor(e=[],t){this.routes=e,this.render_node=t,this.path="",this.is_navigating=!1;let i=location.hash.substr(1),o=i&&""!==i?i.startsWith("/")?i:"/"+i:"/";this.navigate(o)}match(e,t){let i=[],o="^"+e.path.replace(/([:*])(\w+)/g,(e,t,o)=>(i.push(o),"([^/]+)"))+"$",n={},s=t.match(new RegExp(o));return null!==s&&(n=s.slice(1).reduce((e,t,o)=>(null===e&&(e={}),e[i[o]]=t,e),null)),e.setProps(n),s}navigate(e,t={}){if("/contact"===e){window.location.hash="#"+(this.path||"/"),document.dispatchEvent(new CustomEvent("open-contact-popup"));return}if(e==this.path||this.is_navigating)return;"true"!==new URLSearchParams(window.location.search).get("skipAnimations")||t.hasOwnProperty("skipAnimations")||(t.skipAnimations=!0),this.path=e;let i=this.routes.filter(t=>this.match(t,e))[0];if(document.querySelectorAll("[route]").forEach(e=>e.classList.remove("route-active")),i){this.is_navigating=!0,t.instant||(document.getElementById("app").style.opacity=0);let o=document.querySelector(`[route=${CSS.escape(i.path)}]`);null!==o&&o.classList.add("route-active");let n=(function(){let o=e.startsWith("/")?e:"/"+e;window.location.hash!=="#"+o&&(window.location.hash="#"+o);let n=i.props||{};t.skipAnimations&&(n.skipAnimations=!0),i.setProps(n),(0,r.render)(i.renderView(),this.render_node),document.getElementById("app").style.opacity=1,this.is_navigating=!1,(0,l.updateBreadcrumb)(o),c(o)}).bind(this);t.instant?n():setTimeout(n,250)}else{let e=this.routes.find(e=>"/oops"===e.path);e&&(this.is_navigating=!0,document.getElementById("app").style.opacity=0,setTimeout(()=>{(0,r.render)(e.renderView(),this.render_node),document.getElementById("app").style.opacity=1,this.is_navigating=!1,(0,l.updateBreadcrumb)("/oops"),c("/oops")},250));return}}addRoutes(e){this.routes=[...this.routes,...e]}navigateBack(e){this.navigate(e,{skipAnimations:!0})}}class h{constructor(e,t,i){this.name=e,this.path=t,this.view=i}setProps(e){this.props=e}renderView(){return this.view(this.props)}}var d=s("baa6D"),r=s("800sp"),l=s("drhU0"),m=(s("jJTNo"),s("jJTNo"));class u{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class g extends u{constructor(e){if(super(e),this.it=m.nothing,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m.nothing||null==e)return this._t=void 0,this.it=e;if(e===m.noChange)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}g.directiveName="unsafeHTML",g.resultType=1;let v=(...e)=>({_$litDirective$:g,values:e}),f=!1;function b(e){e.preventDefault(),e.stopPropagation();let t=document.getElementById("help-popup"),i=document.getElementById("help-overlay");if(t&&i)if(f){t.classList.remove("help-popup-open"),i.classList.remove("help-overlay-open"),document.body.classList.remove("help-active"),window.helpPopupOpen=!1,f=!1;let e=document.querySelector('meta[name="theme-color"]');e&&(e.content="#171717")}else{t.classList.add("help-popup-open"),i.classList.add("help-overlay-open"),document.body.classList.add("help-active"),window.helpPopupOpen=!0,f=!0;let e=document.querySelector('meta[name="theme-color"]');e&&(e.content="#000000")}}var m=s("jJTNo");let x=[{title:"Contact",content:`
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
        `}],y=!1;function w(e){e.preventDefault(),e.stopPropagation();let t=document.getElementById("contact-popup"),i=document.getElementById("contact-overlay");if(t&&i)if(y){t.classList.remove("contact-popup-open"),i.classList.remove("contact-overlay-open"),document.body.classList.remove("contact-active"),window.contactPopupOpen=!1,y=!1;let e=document.querySelector('meta[name="theme-color"]');e&&(e.content="#171717")}else{t.classList.add("contact-popup-open"),i.classList.add("contact-overlay-open"),document.body.classList.add("contact-active"),window.contactPopupOpen=!0,y=!0;let e=document.querySelector('meta[name="theme-color"]');e&&(e.content="#000000")}}function k(){let e=document.getElementById("contact-popup"),t=document.getElementById("contact-overlay");if(!e||!t||y)return;e.classList.add("contact-popup-open"),t.classList.add("contact-overlay-open"),document.body.classList.add("contact-active"),window.contactPopupOpen=!0,y=!0;let i=document.querySelector('meta[name="theme-color"]');i&&(i.content="#000000")}var r=(s("800sp"),s("800sp")),A=s("iAIzO"),r=(s("800sp"),s("800sp"));let T="0x4AAAAAACeFh_PLBS7wUUKA",I=null;class C extends r.LitElement{static properties={status:{state:!0},statusType:{state:!0},loading:{state:!0},hovered:{state:!0},focused:{state:!0}};static styles=(0,r.css)`
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
    `;constructor(){super(),this.status="",this.statusType="",this.loading=!1,this.hovered=!1,this.focused=!1,this.token="",this.widgetId=null,this.turnstileContainer=null}firstUpdated(){this.turnstileContainer=this.renderRoot.querySelector(".turnstile"),this.mountTurnstile();let e=this.renderRoot.querySelector(".card");this.resizeObserver=new ResizeObserver(()=>{e.style.setProperty("--card-height",`${e.offsetHeight}px`),e.style.setProperty("--scan-duration",`${10*e.offsetHeight}ms`)}),this.resizeObserver.observe(e)}disconnectedCallback(){if(super.disconnectedCallback(),this.resizeObserver?.disconnect(),null!==this.widgetId&&window.turnstile)try{window.turnstile.remove(this.widgetId)}catch{this.widgetId=null}this.widgetId=null}async mountTurnstile(){if(this.turnstileContainer&&T)try{let e=await (window.turnstile?Promise.resolve(window.turnstile):(!I&&(I=new Promise((e,t)=>{let i=document.querySelector("script[data-turnstile-api]");if(i){i.addEventListener("load",()=>e(window.turnstile),{once:!0}),i.addEventListener("error",t,{once:!0});return}let o=document.createElement("script");o.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",o.async=!0,o.defer=!0,o.dataset.turnstileApi="true",o.addEventListener("load",()=>e(window.turnstile),{once:!0}),o.addEventListener("error",t,{once:!0}),document.head.appendChild(o)})),I));if(!this.isConnected||!this.turnstileContainer)return;this.widgetId=e.render(this.turnstileContainer,{sitekey:T,theme:"dark",size:"compact",appearance:"interaction-only",callback:e=>{this.token=e},"expired-callback":()=>{this.token=""},"error-callback":()=>{this.token=""}})}catch{this.setStatus("Scanner offline. Refresh to reboot.","error")}}setStatus(e,t=""){this.status=e,this.statusType=t}resetTurnstile(){if(this.token="",null!==this.widgetId&&window.turnstile)try{window.turnstile.reset(this.widgetId)}catch{this.token=""}}async handleSubmit(e){if(e.preventDefault(),this.loading)return;let t=this.renderRoot.querySelector('input[type="email"]'),i=t.value.trim();if(!i){this.setStatus("No address, no uplink.","error"),t.focus();return}if(!this.token)return void this.setStatus("Scanning: cyber or meat...");this.loading=!0,this.setStatus("");try{let e=await fetch("https://newsletter-subscribe.b-m-lappalainen.workers.dev",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,token:this.token})}),o=await e.json().catch(()=>({}));if(e.ok){let e=(o.message||"").toLowerCase();this.setStatus(e.includes("already")?"Already jacked in.":"Uplink established.","success"),t.value="",this.resetTurnstile()}else this.setStatus(o.error||"Uplink rejected. Try again.","error"),this.resetTurnstile()}catch{this.setStatus("Signal lost. Try again in a bit.","error")}finally{this.loading=!1}}render(){return(0,r.html)`
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
    `},m=s("jJTNo"),P={};P=import.meta.resolve("9tbca");var L={};L=import.meta.resolve("jvQwJ");var j={};j=import.meta.resolve("3G2Gi");var E={};E=import.meta.resolve("do8hG");let B=e=>(0,m.html)`<svg class="cv-icon" viewBox="0 0 5 5" aria-hidden="true">${e.flatMap((e,t)=>[...e].map((e,i)=>"#"===e?(0,m.svg)`<rect x="${i+.1}" y="${t+.1}" width="0.8" height="0.8" />`:null))}</svg>`,M=B(["..#..","..#..","#.#.#",".###.","..#.."]),z=B(["..###","...##","..#.#",".#...","#...."]),W=(e,t)=>(0,m.html)`<a href="${e}" target="_blank" rel="noopener">${t}</a>`;var D=e=>{let i;return(0,m.html)`
    <div class="about-container">
        <div class="about-bio">
            <h1 class="about-header">Benjamin Lappalainen</h1>
            <h3 class="about-header">(he/him)</h3>
            <div class="profile-image-container">
                <img src="${t(P)}" alt="Benjamin Lappalainen" class="profile-image" onload="this.classList.add('loaded')">
            </div>
            <p class="main-paragraph">
                <br>
                Benjamin Lappalainen is a Toronto-based creative technologist, artist, and educator whose practice spans interactive installations, kinetic sculpture, and creative code. He interrogates and misuses technologies like computer vision and machine learning to expose their limits, breaking points, and creative potential. Through exhibitions, workshops, and mentorship programs at institutions including InterAccess, OCAD University, and the Centre for Art Tapes, his educational practice bridges technical skill-building with experimental arts practices.
                <br><br>
                As XR Development Lead with UKAI Projects, Benjamin collaborates with artists and organizations to execute research, exhibitions, immersive and interactive installations, publishing, and workshops. UKAI Projects imagines and produces “culture for what’s coming”. Most recently, the organization worked with the Accton Arts Foundation in Hsinchu, Taiwan for research into arts policy, delivering workshops and immersive experiences, and activating a city block with the first international iteration of Goblin Market, a collectively imagined alternative arts marketplace.
                <br><br>
                Benjamin holds a Bachelor of Applied Science in Engineering Science from the University of Toronto. His current research focuses on developing software and hardware for interactive media, working across tools like p5.js, TouchDesigner, and custom electronics to create accessible resources that support artist communities in realizing technically ambitious projects.
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
                <a class="cv-download" href="https://www.linkedin.com/in/benjamin-lappalainen/" target="_blank" rel="noopener">${z}LINKEDIN</a>
            </div>
            <p class="main-paragraph">Creative Technologist & Software Developer: Networked Systems, Interactive Media & Computer Vision</p>

            <div class="cv-section">
                <h2>Technical Skills</h2>
                <p class="main-paragraph">
                    <strong>Networking & Infrastructure</strong> - Tailscale, TCP/UDP, IPv4/IPv6, LAN configuration & administration, Cloudflare (Tunnels, DNS, Turnstile), AWS, Thread, Matter protocol, self-hosted Git, NAS/homelab administration<br>
                    <strong>Languages</strong> - Python, JavaScript, C++, Lua, GLSL, C, Bash<br>
                    <strong>Real-Time & Creative Coding</strong> - TouchDesigner, OSC, MIDI, WebGL, p5.js, shader/GLSL pipelines, Godot<br>
                    <strong>Computer Vision & ML</strong> - OpenCV, MediaPipe, ONNX, MoveNet pose estimation, PyTorch, TFLearn<br>
                    <strong>Sensors & Hardware</strong> - ArtNet & DMX (lighting/show control), depth & CV cameras (Microsoft Kinect, Orbbec Femto Bolt, Luxonis OAK-D), LIDAR and ultrasonic distance sensors<br>
                    <strong>AI-Assisted Coding</strong> - Claude Code, LM Studio, agentic coding workflows, technical review of AI-generated code<br>
                    <strong>Tools & Platforms</strong> - Git, Jira, Confluence, Bitbucket, Adobe Creative Suite, Obsidian
                </p>
            </div>

            <div class="cv-section">
                <h2>Experience</h2>
                <p class="main-paragraph">
                    <strong>2024-Present</strong> - Creative Technologist & Software Developer, Independent<br>
                        &nbsp;&nbsp;- Provided technical support for a client installation at Toronto Metropolitan University, reverse-engineering an undocumented lighting controller to deliver a working DMX and ArtNet integration<br>
                        &nbsp;&nbsp;- Contract software development on ${W("https://aaaseed.org/","AAASeed")}, a real-time 2D/3D engine for interactive installations, in C++, Lua, and GLSL — architected HTTP networking (via the open-source cpr library) for web API communication, plus other foundational architecture and feature work en route to open-source release<br>
                        &nbsp;&nbsp;- Co-creator and technical lead of Peripherous, an open-source machine perception toolkit — directed architecture and AI-assisted implementation (via Claude Code) of its runtime, local message bus, lifecycle supervisor, and OSC output, using MoveNet Multipose (ONNX) for real-time pose estimation<br>
                        &nbsp;&nbsp;- Built and distributed TouchDesigner components including a SPAN super-resolution upscaler and macOS-optimized real-time diffusion image generator<br>
                        &nbsp;&nbsp;- Research in real-time 3D scene reconstruction pipelines (depth estimation, shared-memory integration) for TouchDesigner, and diffusion-based real-time image pipelines across macOS and Windows<br>
                    <br>
                    <strong>2025-Present</strong> - XR Development Lead, ${W("https://www.ukaiprojects.com/","UKAI Projects")}<br>
                        &nbsp;&nbsp;- Develop and lead Digital Bridges, a peer-to-peer networking program teaching researchers and artists to build collaborative systems using Tailscale and OSC<br>
                        &nbsp;&nbsp;- Software development and AI system behaviour direction for AI-driven interactive game systems<br>
                        &nbsp;&nbsp;- Designed and delivered technical workshops on machine perception and computer vision (MediaPipe) for artist and technologist audiences, including an international iteration in Hsinchu, Taiwan<br>
                    <br>
                    <strong>2025-Present</strong> - Program Lead, ${W("https://softlaunch.net/","soft_launch")}<br>
                        &nbsp;&nbsp;- Co-design and lead a creative technology education program in partnership with InterAccess; design and teach intensives on TouchDesigner ('Reactive Space') and creative coding ('Internet Canvas')<br>
                    <br>
                    <strong>2020-2024</strong> - Product Manager, Nanoleaf (plus 2018-2019 internship)<br>
                        &nbsp;&nbsp;- Managed technical partnerships and software integrations with Apple (Thread & Matter), Google (Matter), Amazon (Matter), Samsung (Matter), Razer (Razer Chroma), and Corsair (iCUE)<br>
                        &nbsp;&nbsp;- Led certification and technical integration for the Matter smart-home protocol, successfully certifying the first Matter-compliant smart lights; developed working expertise in Thread mesh networking<br>
                        &nbsp;&nbsp;- Creator and lead developer of Nanoleaf Screen Mirror, a real-time screen-to-light rendering feature shipped across the product line and central to the flagship Nanoleaf 4D hardware product<br>
                        &nbsp;&nbsp;- Built the Nanoleaf Orchestrator music visualizer; developed cross-functional technical documentation for engineering, marketing, and support teams
                </p>
            </div>

            <div class="cv-section">
                <h2>Education</h2>
                <p class="main-paragraph">
                    <strong>2015-2020</strong> - BASc, Engineering Science (Aerospace Specialization), University of Toronto
                </p>
            </div>
`:(0,m.html)`
            <a class="cv-download" href="${t(j)}" download="Benjamin Lappalainen Artist CV - 2026-10.pdf">${M}DOWNLOAD PDF</a>

            <div class="cv-section">
                <h2>Selected New Media Exhibitions & Performances</h2>
                <p class="main-paragraph">
                    <strong>2026</strong> - <em>SWANS</em>, MULTIfest 2026, Noxte.app x Sky Fine Foods, STACKT (Toronto, Canada)<br>
                    <strong>2026</strong> - <em>RGBoids</em>, ${W("https://www.interaccess.org/exhibitions/flashdrive-fundraiser-2026","flashDRIVE Digital Arts Fundraiser Exhibition")}, InterAccess (Toronto, Canada)<br>
                        &nbsp;&nbsp;- Curated by Miriam Arbus<br>
                    <strong>2026</strong> - <em>ATTN_0</em>, Open HDMI x Long Winter x Geary Art Crawl, Geary Factory Lofts (Toronto, Canada)<br>
                    <strong>2026</strong> - ${W("https://youtu.be/0ivtij7zndM",(0,m.html)`<em>OSCMOTO</em>`)}, Cool New Instruments Night #7, Tranzac Club (Toronto, Canada)<br>
                    <strong>2025</strong> - <em>IA Flow Fields</em>, ${W("https://www.interaccess.org/exhibitions/flashdrive-digital-arts-fundraiser-exhibition","flashDRIVE Digital Arts Fundraiser Exhibition")}, InterAccess (Toronto, Canada)<br>
                        &nbsp;&nbsp;- Curated by Miriam Arbus<br>
                    <strong>2025</strong> - <a href="#/interactive/live/sketching-flock"><em>Sketching Flock</em></a>, Farewell to The Bridge, UKAI Projects, The Bridge (Toronto, Canada)<br>
                    <strong>2025</strong> - <em>Zen Flock</em>, LW13.5 x Open HDMI, Long Winter x InterAccess, St. Anne's Parish Hall (Toronto, Canada)<br>
                    <strong>2025</strong> - <a href="#/interactive/live/sketching-flock"><em>Sketching Flock</em></a>, "Goodbye Dupont" Open HDMI, InterAccess (Toronto, Canada)<br>
                    <strong>2025</strong> - <a href="#/interactive/live/blind-spots"><em>Blind Spots</em></a>, Aberrant AI Open Studio, UKAI Projects, The Bridge (Toronto, Canada)<br>
                        &nbsp;&nbsp;- Collaboration with ${W("https://www.ryankelln.com/","Ryan Kelln")}<br>
                    <strong>2025</strong> - <a href="#/interactive/live/the-reader"><em>The Reader</em></a>, Aberrant AI Open Studio, UKAI Projects, The Bridge (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/long-winter-13-1">Live VJ Set</a>, LW13.1, Long Winter, Allan Gardens Children's Conservatory (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/game-set-match"><em>Game, Set, Match</em></a>, ${W("https://www.interaccess.org/news/ia-gateway-2024-selected-artists","IA Gateway 2024")}, InterAccess (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/bird-conductor"><em>Bird Conductor</em></a>, LW12.3, Long Winter, The Bridge (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/live-coding">Open HDMI: Spring 2024</a>, InterAccess (Toronto, Canada)<br>
                    <strong>2023</strong> - <a href="#/interactive/live/surveil-yourself"><em>Surveil Yourself</em></a>, P2P 2023 InterAccess Member Showcase, InterAccess (Toronto, Canada)<br>
                        &nbsp;&nbsp;- Collaboration with ${W("https://circle-4.net/","Asucena Di Giovanni")}
                </p>
            </div>

            <div class="cv-section">
                <h2>Teaching & Lectures</h2>
                <p class="main-paragraph">
                    <strong>2026</strong> - "Sensor to Screen" TouchDesigner and OSC workshop, independent, Andrew Sun's Discord server (online)<br>
                    <strong>2026</strong> - "TouchDesigner 101", "Reactive Space", "Internet Canvas", and "Synthetic Worlds" workshops, ${W("https://softlaunch.net/","soft_launch")} (Program Lead), New Stadium and InterAccess (Toronto, Canada)<br>
                    <strong>2026</strong> - "Cultural Fermentation & Other Messy Practices of Illegibility" workshop, OCAD University, Onsite Gallery (Toronto, Canada)<br>
                    <strong>2026</strong> - CTRL+SHIFT Vol. 11 Canvas & Code speaker, CTRL+SHIFT, FITC, Canvas & Code Gallery (Toronto, Canada)<br>
                    <strong>2026</strong> - "Views from the Machine" computer perception workshop, UKAI Projects, Remote Gallery (Toronto, Canada)<br>
                    <strong>2026</strong> - "Wayfinding: Art" panelist with ${W("https://sundogg.substack.com/","Michelle Jia")}, moderated by ${W("https://www.sholis.com/","Brian Sholis")}, 1RG (Toronto, Canada)<br>
                    <strong>2026</strong> - "The Art of Building Tiny Infrastructures" presentation and facilitated conversation, UKAI Projects (online)<br>
                    <strong>2025</strong> - ${W("https://www.interaccess.org/workshop/digital-bridges-networking-tools-for-collaborative-creation",'"Digital Bridges" new media workshop')}, UKAI Projects, InterAccess (Toronto, Canada)<br>
                    <strong>2025</strong> - ${W("https://www.interaccess.org/workshop/we-have-ai-at-home-building-our-creative-ai-ecosystem",'"We Have AI At Home" workshop')}, UKAI Projects, Cultural Technologies Lab, InterAccess (Toronto, Canada)<br>
                    <strong>2025</strong> - "Digital Bridges" new media workshop, UKAI Projects, Cultural Technologies Lab, Accton Arts Foundation, Art Site of Railway Warehouse (Hsinchu, Taiwan)<br>
                    <strong>2025</strong> - ${W("https://lu.ma/voey52i4","PROGRAM09: MEDIAPIPE workshop")}, ${W("https://www.youtube.com/@programislive","PROGRAM")}, New Stadium (Toronto, Canada)<br>
                    <strong>2025</strong> - 1:1 Code Art Mentorship program (online)<br>
                    <strong>2025</strong> - "We Have AI At Home" workshop, UKAI Projects, The Bridge (Toronto, Canada)<br>
                    <strong>2017</strong> - ${W("https://outreach.engineering.utoronto.ca/files/2016/12/DEEP-Leadership-Camp-2017-Instructor-Job-Description.pdf","Da Vinci Engineering Enrichment Program Camp Instructor")}, University of Toronto (Minden, Canada)<br>
                    <strong>2014-2016</strong> - Astrophotography workshops and lectures, Royal Astronomical Society of Canada (${W("https://rascto.ca/content/recreational-astronomy-night-16","Toronto")}, ${W("https://rascto.ca/news/astrophoto-editing-lightroom-and-photoshop","Richmond Hill")}, ${W("https://www.youtube.com/watch?v=hzHWC9LJT8U","The Blue Mountains")}, Canada)
                </p>
            </div>

            <div class="cv-section">
                <h2>Organizing & Facilitation</h2>
                <p class="main-paragraph">
                    <strong>2026</strong> - "Parallel Playground" artist research residency, UKAI Projects, World Creation Studio (Montreal, Canada)<br>
                    <strong>2026</strong> - soft_launch Spring Intensives Student Showcase, Doors Open Toronto, InterAccess (Toronto, Canada)<br>
                    <strong>2026</strong> - "Digital Bridges" artist research residency, UKAI Projects, New Stadium (Toronto, Canada)<br>
                    <strong>2026</strong> - "Goblin Market", UKAI Projects, Centre For Art Tapes (Halifax, Canada)<br>
                    <strong>2026</strong> - "The Funeral", UKAI Projects, Unit 2 Community Space (Toronto, Canada)<br>
                    <strong>2025</strong> - "Goblin Market", UKAI Projects, Art Site of Railway Warehouse in Hsinchu, General Village (Hsinchu, Taiwan)
                </p>
            </div>

            <div class="cv-section">
                <h2>Grants & Funding</h2>
                <p class="main-paragraph">
                    <strong>2025</strong> - Multi and Inter Arts Projects, Ontario Arts Council - "Distributed Shapeshifters"
                </p>
            </div>

            <div class="cv-section">
                <h2>Work Experience</h2>
                <p class="main-paragraph">
                    <strong>2025-Present</strong> - Program Lead, ${W("https://softlaunch.net/","soft_launch")}<br>
                        &nbsp;&nbsp;- Teaching creative technology skills through hands-on educational intensives<br>
                    <strong>2025-Present</strong> - XR Development Lead, ${W("https://www.ukaiprojects.com/","UKAI Projects")}<br>
                        &nbsp;&nbsp;- Cultural research, exhibitions, immersive installations, publishing, and workshops<br>
                    <strong>2024-2025</strong> - ${W("https://www.artcast4d.eu/","AAASeed Software and Installation Development, Artcast4D")}<br>
                        &nbsp;&nbsp;- Building installations for showcase in Europe and contributing to software development for ${W("https://aaaseed.org/","AAASeed")}, a realtime engine for 2D/3D graphics and interactive installations. Contributing to foundational architecture, core feature development, and UX design, progressing towards taking the software open source for use by artists, developers, and businesses.<br>
                    <strong>2020-2024</strong> - Product Manager, ${W("https://us-shop.nanoleaf.me/","Nanoleaf")}<br>
                        &nbsp;&nbsp;- Creator and lead developer of Nanoleaf Screen Mirror technology
                </p>
            </div>

            <div class="cv-section">
                <h2>Residencies</h2>
                <p class="main-paragraph">
                    <strong>2025</strong> - ${W("https://aafoundation.tw/","Art Site of Railway Warehouse in Hsinchu")}, Accton Arts Foundation (Hsinchu, Taiwan)<br>
                    <strong>2024</strong> - Aberrant AI - AI through the lens of Horror, UKAI Projects (Toronto, Canada)
                </p>
            </div>

            <div class="cv-section">
                <h2>Independent Projects</h2>
                <p class="main-paragraph">
                    <strong>2026</strong> - "Peripherous" - open source machine perception toolkit<br>
                    <strong>2025</strong> - ${W("/newsletter/","Code Art Corner educational newsletter")}<br>
                    <strong>2023-Present</strong> - ${W("https://openprocessing.org/user/424615/?o=40&view=sketches","Open Source Code Art Sketches")}
                </p>
            </div>

            <div class="cv-section">
                <h2>Education & Training</h2>
                <p class="main-paragraph">
                    <strong>2024</strong> - Mentored by digital artist, designer, and technologist Priam Givord<br>
                    <strong>2024</strong> - ${W("https://www.aimetaphorsworkshop.com/",'"AI Metaphors" Workshop')}, University of Toronto, UKAI Projects, InterAccess<br>
                    <strong>2024</strong> - ${W("https://ukaiprojects.com/pages/festival",'"Carnival of Shipwreck"')} Cultural Philosophy and New Media workshop series, UKAI Projects<br>
                    <strong>2024</strong> - ${W("https://labs.hxouse.com/",'"Habitats"')} Unreal Engine 5 & Cultural Philosophy Workshop, HXOUSE LABS<br>
                    <strong>2015-2020</strong> - BASc., Engineering Science, University of Toronto
                </p>
            </div>

            <div class="cv-section">
                <h2>Publications</h2>
                <p class="main-paragraph">
                    <strong>2025</strong> - ${W("https://museum.eecs.yorku.ca/anielewicz","Interview with Will Anielewicz")}, Zbigniew Stachniak and Mark Hayward, York University Computer Museum website<br>
                    <strong>2020</strong> - ${W(t(L),"eCAADe Conference Proceedings Volume 1")}, Education and research in Computer Aided Architectural Design in Europe
                </p>
            </div>
`}
        </div>
    </div>
`},r=s("800sp"),O=e=>(0,r.html)`
    <!-- p5-element is a custom element that allows us to easily put a p5 sketch as the background of this page -->
    <!-- The custom element itself handles choosing the sketch based on the page property provided below -->
    <p5-element id="bg" sketch="installations" .options=${e||{}}></p5-element>
`,m=s("jJTNo"),R=s("d9MMf"),$=e=>{let t={};e&&e.collection&&(t.collection=e.collection),e&&e.skipAnimations&&(t.skipAnimations=e.skipAnimations);let i=e?.collection,o=i?(0,R.findCollectionBySlug)(e.collection):null;return(0,m.html)`
        <!-- p5-element handles decorations, title, and lightbox -->
        <p5-element id="bg" sketch="photo" .options=${t} .skipAnimations=${e?.skipAnimations}></p5-element>
        
        ${i&&o?(0,m.html)`
            <!-- HTML-native gallery grid -->
            <div class="photo-gallery-container">
                <div class="photo-gallery-grid">
                    ${o.images.map((e,t)=>(0,m.html)`
                        <div class="photo-gallery-item" data-index="${t}">
                            <img 
                                src="${e}" 
                                alt="${o.name} ${t+1}"
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
    `},m=s("jJTNo");let U=window.location.hash.substr(1),N="/contact"===(U.startsWith("/")?U:"/"+U);N&&window.history.replaceState(null,"",window.location.pathname+"#/");let V=(e=>{let t=new p(e,document.getElementById("app"));return document.addEventListener("DOMContentLoaded",e=>{document.querySelectorAll("[route]").forEach(e=>e.addEventListener("click",e=>{e.preventDefault(),t.navigate(e.target.getAttribute("route"))},!1))}),window.addEventListener("hashchange",e=>{let i=!t.is_navigating,o=e.target.location.hash.substr(1),n=o&&""!==o?o.startsWith("/")?o:"/"+o:"/";if("/contact"===n){window.history.replaceState(null,"",window.location.pathname+(t.path?"#"+t.path:"")),document.dispatchEvent(new CustomEvent("open-contact-popup"));return}i&&t.navigate(n,{skipAnimations:!0})}),t})([new h("project","/interactive/live/:project",O),new h("installations","/interactive/live",O),new h("codeart","/interactive",e=>(0,r.html)`
    <!-- p5-element is a custom element that allows us to easily put a p5 sketch as the background of this page -->
    <!-- The custom element itself handles choosing the sketch based on the page property provided below -->
    <p5-element id="bg" sketch="codeart"></p5-element>
`),new h("webexperiences","/interactive/web",A.default),new h("links-subgroup","/links/:parent/:group",S),new h("links-group","/links/:group",S),new h("links","/links",S),new h("photo-collection","/photo/:collection",$),new h("photo","/photo",$),new h("about-resume","/about/resume",e=>D({...e,resume:!0})),new h("about","/about",D),new h("oops","/oops",e=>(0,m.html)`
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
`)]);window.appRouter=V;let F=document.getElementById("breadcrumb-container");if(F){let e=window.location.hash.substr(1),t=e&&""!==e?e.startsWith("/")?e:"/"+e:"/";(0,r.render)((0,l.createBreadcrumbNav)(t),F)}let H=document.getElementById("contact-container");H&&(0,r.render)((window.contactButtonInitialized||(document.addEventListener("keydown",function(e){"Escape"===e.key&&y&&w(e)}),window.contactButtonInitialized=!0),(0,m.html)`
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
                    ${x.map(e=>(0,m.html)`
                        <div class="contact-section">
                            <div class="contact-section-title">${e.title}</div>
                            <div class="contact-section-content">${v(e.content)}</div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `),H);let G=document.getElementById("help-container");G&&(0,r.render)((window.helpButtonInitialized||(document.addEventListener("keydown",function(e){"Escape"===e.key&&f&&b(e)}),window.helpButtonInitialized=!0),(0,m.html)`
        <div class="help-button" @click=${b}>
            <span class="help-button-icon">?</span>
        </div>

        <!-- Popup overlay -->
        <div id="help-overlay" class="help-overlay" @click=${function(e){"help-overlay"===e.target.id&&b(e)}}>
            <div id="help-popup" class="help-popup">
                <div class="help-popup-header">
                    <h2>SITE GUIDE</h2>
                    <button class="help-popup-close" @click=${b}>×</button>
                </div>
                <div class="help-popup-content">
                    ${[{question:"Navigation",answer:"Click on the desired 'path' in the bottom left corner to navigate back to a previous view.<br><br>Orange exclamation mark button (left of the one you just clicked) for contact info & services."},{question:"About",answer:"Benjamin Lappalainen -> B. Lappalainen -> BLAP. Years ago when I first made an Instagram account for my photography, I decided on @blapphoto as a username. 'blap' stuck ever since, and some of my friends have adopted it as a nickname for me.<br><br>As for '64':<br>We are in the era of 64-bit computers (generally, computers with size 2^64 integer and addressing registers).<br><br>64 is 8^2. 8 in Cantonese (and other Chinese-speaking cultures) is considered a lucky number because it bears homophonic similarity to the word for 'wealth' or 'prosperity'.<br><br>64 is 2^6. I was 26 when I made the decision to choose a different path through life, which has since led me to some extraordinary people, places, ideas, and opportunities."},{question:"Technology (for the nerds)",answer:'The dynamic pages on this site are constructed using a creative coding library called <a href="https://p5js.org" target="_blank">p5.js</a>. I\'m a big advocate for this library and teach people how to make art with it, as well as teach programming using it as a starting point. Otherwise, the site was built in HTML, CSS, and vanilla JavaScript. <a href="https://parceljs.org/">Parcel</a> is the bundler, and the site is deployed to <a href="https://pages.github.com/">GitHub Pages</a> so that my only expense is the domain.'}].map(e=>(0,m.html)`
                        <div class="faq-item">
                            <div class="faq-question">${e.question}</div>
                            <div class="faq-answer">${v(e.answer)}</div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `),G),document.addEventListener("navigate-to",e=>{V&&e.detail&&e.detail.path&&V.navigate(e.detail.path)}),document.addEventListener("open-contact-popup",()=>{k()}),N&&setTimeout(()=>k(),400),(0,d.mobileCheck)()&&(document.getElementById("mainNav").className="nav-mobile",document.querySelectorAll("[route]").forEach(e=>e.classList.add("route-mobile")));
//# sourceMappingURL=blap64.91205be0.js.map
