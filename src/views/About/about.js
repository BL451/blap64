import { html, svg } from "lit-html";
import profileImage from 'url:../../assets/about/2025-07-27_BL.webp';
import ecaadePdf from 'url:../../../public/publications/ecaade2020_393.pdf';
import artistCvPdf from 'url:../../../public/cv/Benjamin Lappalainen Artist CV - 2026-10.pdf';
import technicalResumePdf from 'url:../../../public/cv/Benjamin Lappalainen Technical Resume - 2026-10.pdf';

const dotIcon = (rows) => html`<svg class="cv-icon" viewBox="0 0 5 5" aria-hidden="true">${rows.flatMap((row, y) => [...row].map((cell, x) => cell === '#' ? svg`<rect x="${x + 0.1}" y="${y + 0.1}" width="0.8" height="0.8" />` : null))}</svg>`;
const downArrow = dotIcon(["..#..", "..#..", "#.#.#", ".###.", "..#.."]);
const externalArrow = dotIcon(["..###", "...##", "..#.#", ".#...", "#...."]);

const ext = (href, text) => html`<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const cvToggle = (showResume) => html`
    <div class="cv-toggle">
        <button class="cv-toggle-button ${showResume ? '' : 'active'}" @click=${() => window.appRouter.navigate('/about', { instant: true })}>ARTIST CV</button>
        <button class="cv-toggle-button ${showResume ? 'active' : ''}" @click=${() => window.appRouter.navigate('/about/resume', { instant: true })}>TECHNICAL RESUME</button>
    </div>
`;

const artistCv = () => html`
            <a class="cv-download" href="${artistCvPdf}" download="Benjamin Lappalainen Artist CV - 2026-10.pdf">${downArrow}DOWNLOAD PDF</a>

            <div class="cv-section">
                <h2>Selected New Media Exhibitions & Performances</h2>
                <p class="main-paragraph">
                    <strong>2026</strong> - <em>SWANS</em>, MULTIfest 2026, Noxte.app x Sky Fine Foods, STACKT (Toronto, Canada)<br>
                    <strong>2026</strong> - <em>RGBoids</em>, ${ext("https://www.interaccess.org/exhibitions/flashdrive-fundraiser-2026", "flashDRIVE Digital Arts Fundraiser Exhibition")}, InterAccess (Toronto, Canada)<br>
                        &nbsp;&nbsp;- Curated by Miriam Arbus<br>
                    <strong>2026</strong> - <em>ATTN_0</em>, Open HDMI x Long Winter x Geary Art Crawl, Geary Factory Lofts (Toronto, Canada)<br>
                    <strong>2026</strong> - ${ext("https://youtu.be/0ivtij7zndM", html`<em>OSCMOTO</em>`)}, Cool New Instruments Night #7, Tranzac Club (Toronto, Canada)<br>
                    <strong>2025</strong> - <em>IA Flow Fields</em>, ${ext("https://www.interaccess.org/exhibitions/flashdrive-digital-arts-fundraiser-exhibition", "flashDRIVE Digital Arts Fundraiser Exhibition")}, InterAccess (Toronto, Canada)<br>
                        &nbsp;&nbsp;- Curated by Miriam Arbus<br>
                    <strong>2025</strong> - <a href="#/interactive/live/sketching-flock"><em>Sketching Flock</em></a>, Farewell to The Bridge, UKAI Projects, The Bridge (Toronto, Canada)<br>
                    <strong>2025</strong> - <em>Zen Flock</em>, LW13.5 x Open HDMI, Long Winter x InterAccess, St. Anne's Parish Hall (Toronto, Canada)<br>
                    <strong>2025</strong> - <a href="#/interactive/live/sketching-flock"><em>Sketching Flock</em></a>, "Goodbye Dupont" Open HDMI, InterAccess (Toronto, Canada)<br>
                    <strong>2025</strong> - <a href="#/interactive/live/blind-spots"><em>Blind Spots</em></a>, Aberrant AI Open Studio, UKAI Projects, The Bridge (Toronto, Canada)<br>
                        &nbsp;&nbsp;- Collaboration with ${ext("https://www.ryankelln.com/", "Ryan Kelln")}<br>
                    <strong>2025</strong> - <a href="#/interactive/live/the-reader"><em>The Reader</em></a>, Aberrant AI Open Studio, UKAI Projects, The Bridge (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/long-winter-13-1">Live VJ Set</a>, LW13.1, Long Winter, Allan Gardens Children's Conservatory (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/game-set-match"><em>Game, Set, Match</em></a>, ${ext("https://www.interaccess.org/news/ia-gateway-2024-selected-artists", "IA Gateway 2024")}, InterAccess (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/bird-conductor"><em>Bird Conductor</em></a>, LW12.3, Long Winter, The Bridge (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/live-coding">Open HDMI: Spring 2024</a>, InterAccess (Toronto, Canada)<br>
                    <strong>2023</strong> - <a href="#/interactive/live/surveil-yourself"><em>Surveil Yourself</em></a>, P2P 2023 InterAccess Member Showcase, InterAccess (Toronto, Canada)<br>
                        &nbsp;&nbsp;- Collaboration with ${ext("https://circle-4.net/", "Asucena Di Giovanni")}
                </p>
            </div>

            <div class="cv-section">
                <h2>Teaching & Lectures</h2>
                <p class="main-paragraph">
                    <strong>2026</strong> - "Sensor to Screen" TouchDesigner and OSC workshop, independent, Andrew Sun's Discord server (online)<br>
                    <strong>2026</strong> - "TouchDesigner 101", "Reactive Space", "Internet Canvas", and "Synthetic Worlds" workshops, ${ext("https://softlaunch.net/", "soft_launch")} (Program Lead), New Stadium and InterAccess (Toronto, Canada)<br>
                    <strong>2026</strong> - "Cultural Fermentation & Other Messy Practices of Illegibility" workshop, OCAD University, Onsite Gallery (Toronto, Canada)<br>
                    <strong>2026</strong> - CTRL+SHIFT Vol. 11 Canvas & Code speaker, CTRL+SHIFT, FITC, Canvas & Code Gallery (Toronto, Canada)<br>
                    <strong>2026</strong> - "Views from the Machine" computer perception workshop, UKAI Projects, Remote Gallery (Toronto, Canada)<br>
                    <strong>2026</strong> - "Wayfinding: Art" panelist with ${ext("https://sundogg.substack.com/", "Michelle Jia")}, moderated by ${ext("https://www.sholis.com/", "Brian Sholis")}, 1RG (Toronto, Canada)<br>
                    <strong>2026</strong> - "The Art of Building Tiny Infrastructures" presentation and facilitated conversation, UKAI Projects (online)<br>
                    <strong>2025</strong> - ${ext("https://www.interaccess.org/workshop/digital-bridges-networking-tools-for-collaborative-creation", '"Digital Bridges" new media workshop')}, UKAI Projects, InterAccess (Toronto, Canada)<br>
                    <strong>2025</strong> - ${ext("https://www.interaccess.org/workshop/we-have-ai-at-home-building-our-creative-ai-ecosystem", '"We Have AI At Home" workshop')}, UKAI Projects, Cultural Technologies Lab, InterAccess (Toronto, Canada)<br>
                    <strong>2025</strong> - "Digital Bridges" new media workshop, UKAI Projects, Cultural Technologies Lab, Accton Arts Foundation, Art Site of Railway Warehouse (Hsinchu, Taiwan)<br>
                    <strong>2025</strong> - ${ext("https://lu.ma/voey52i4", "PROGRAM09: MEDIAPIPE workshop")}, ${ext("https://www.youtube.com/@programislive", "PROGRAM")}, New Stadium (Toronto, Canada)<br>
                    <strong>2025</strong> - 1:1 Code Art Mentorship program (online)<br>
                    <strong>2025</strong> - "We Have AI At Home" workshop, UKAI Projects, The Bridge (Toronto, Canada)<br>
                    <strong>2017</strong> - ${ext("https://outreach.engineering.utoronto.ca/files/2016/12/DEEP-Leadership-Camp-2017-Instructor-Job-Description.pdf", "Da Vinci Engineering Enrichment Program Camp Instructor")}, University of Toronto (Minden, Canada)<br>
                    <strong>2014-2016</strong> - Astrophotography workshops and lectures, Royal Astronomical Society of Canada (${ext("https://rascto.ca/content/recreational-astronomy-night-16", "Toronto")}, ${ext("https://rascto.ca/news/astrophoto-editing-lightroom-and-photoshop", "Richmond Hill")}, ${ext("https://www.youtube.com/watch?v=hzHWC9LJT8U", "The Blue Mountains")}, Canada)
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
                    <strong>2025-Present</strong> - Program Lead, ${ext("https://softlaunch.net/", "soft_launch")}<br>
                        &nbsp;&nbsp;- Teaching creative technology skills through hands-on educational intensives<br>
                    <strong>2025-Present</strong> - XR Development Lead, ${ext("https://www.ukaiprojects.com/", "UKAI Projects")}<br>
                        &nbsp;&nbsp;- Cultural research, exhibitions, immersive installations, publishing, and workshops<br>
                    <strong>2024-2025</strong> - ${ext("https://www.artcast4d.eu/", "AAASeed Software and Installation Development, Artcast4D")}<br>
                        &nbsp;&nbsp;- Building installations for showcase in Europe and contributing to software development for ${ext("https://aaaseed.org/", "AAASeed")}, a realtime engine for 2D/3D graphics and interactive installations. Contributing to foundational architecture, core feature development, and UX design, progressing towards taking the software open source for use by artists, developers, and businesses.<br>
                    <strong>2020-2024</strong> - Product Manager, ${ext("https://us-shop.nanoleaf.me/", "Nanoleaf")}<br>
                        &nbsp;&nbsp;- Creator and lead developer of Nanoleaf Screen Mirror technology
                </p>
            </div>

            <div class="cv-section">
                <h2>Residencies</h2>
                <p class="main-paragraph">
                    <strong>2025</strong> - ${ext("https://aafoundation.tw/", "Art Site of Railway Warehouse in Hsinchu")}, Accton Arts Foundation (Hsinchu, Taiwan)<br>
                    <strong>2024</strong> - Aberrant AI - AI through the lens of Horror, UKAI Projects (Toronto, Canada)
                </p>
            </div>

            <div class="cv-section">
                <h2>Independent Projects</h2>
                <p class="main-paragraph">
                    <strong>2026</strong> - "Peripherous" - open source machine perception toolkit<br>
                    <strong>2025</strong> - ${ext("/newsletter/", "Code Art Corner educational newsletter")}<br>
                    <strong>2023-Present</strong> - ${ext("https://openprocessing.org/user/424615/?o=40&view=sketches", "Open Source Code Art Sketches")}
                </p>
            </div>

            <div class="cv-section">
                <h2>Education & Training</h2>
                <p class="main-paragraph">
                    <strong>2024</strong> - Mentored by digital artist, designer, and technologist Priam Givord<br>
                    <strong>2024</strong> - ${ext("https://www.aimetaphorsworkshop.com/", '"AI Metaphors" Workshop')}, University of Toronto, UKAI Projects, InterAccess<br>
                    <strong>2024</strong> - ${ext("https://ukaiprojects.com/pages/festival", '"Carnival of Shipwreck"')} Cultural Philosophy and New Media workshop series, UKAI Projects<br>
                    <strong>2024</strong> - ${ext("https://labs.hxouse.com/", '"Habitats"')} Unreal Engine 5 & Cultural Philosophy Workshop, HXOUSE LABS<br>
                    <strong>2015-2020</strong> - BASc., Engineering Science, University of Toronto
                </p>
            </div>

            <div class="cv-section">
                <h2>Publications</h2>
                <p class="main-paragraph">
                    <strong>2025</strong> - ${ext("https://museum.eecs.yorku.ca/anielewicz", "Interview with Will Anielewicz")}, Zbigniew Stachniak and Mark Hayward, York University Computer Museum website<br>
                    <strong>2020</strong> - ${ext(ecaadePdf, "eCAADe Conference Proceedings Volume 1")}, Education and research in Computer Aided Architectural Design in Europe
                </p>
            </div>
`;

const technicalResume = () => html`
            <div class="cv-actions">
                <a class="cv-download" href="${technicalResumePdf}" download="Benjamin Lappalainen Technical Resume - 2026-10.pdf">${downArrow}DOWNLOAD PDF</a>
                <a class="cv-download" href="https://www.linkedin.com/in/benjamin-lappalainen/" target="_blank" rel="noopener">${externalArrow}LINKEDIN</a>
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
                        &nbsp;&nbsp;- Contract software development on ${ext("https://aaaseed.org/", "AAASeed")}, a real-time 2D/3D engine for interactive installations, in C++, Lua, and GLSL — architected HTTP networking (via the open-source cpr library) for web API communication, plus other foundational architecture and feature work en route to open-source release<br>
                        &nbsp;&nbsp;- Co-creator and technical lead of Peripherous, an open-source machine perception toolkit — directed architecture and AI-assisted implementation (via Claude Code) of its runtime, local message bus, lifecycle supervisor, and OSC output, using MoveNet Multipose (ONNX) for real-time pose estimation<br>
                        &nbsp;&nbsp;- Built and distributed TouchDesigner components including a SPAN super-resolution upscaler and macOS-optimized real-time diffusion image generator<br>
                        &nbsp;&nbsp;- Research in real-time 3D scene reconstruction pipelines (depth estimation, shared-memory integration) for TouchDesigner, and diffusion-based real-time image pipelines across macOS and Windows<br>
                    <br>
                    <strong>2025-Present</strong> - XR Development Lead, ${ext("https://www.ukaiprojects.com/", "UKAI Projects")}<br>
                        &nbsp;&nbsp;- Develop and lead Digital Bridges, a peer-to-peer networking program teaching researchers and artists to build collaborative systems using Tailscale and OSC<br>
                        &nbsp;&nbsp;- Software development and AI system behaviour direction for AI-driven interactive game systems<br>
                        &nbsp;&nbsp;- Designed and delivered technical workshops on machine perception and computer vision (MediaPipe) for artist and technologist audiences, including an international iteration in Hsinchu, Taiwan<br>
                    <br>
                    <strong>2025-Present</strong> - Program Lead, ${ext("https://softlaunch.net/", "soft_launch")}<br>
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
`;

export default (props) => html`
    <div class="about-container">
        <div class="about-bio">
            <h1 class="about-header">Benjamin Lappalainen</h1>
            <h3 class="about-header">(he/him)</h3>
            <div class="profile-image-container">
                <img src="${profileImage}" alt="Benjamin Lappalainen" class="profile-image" onload="this.classList.add('loaded')">
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
            ${cvToggle(props && props.resume)}
            ${props && props.resume ? technicalResume() : artistCv()}
        </div>
    </div>
`;
