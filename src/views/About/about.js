import { html, svg } from "lit-html";
import profileImage from 'url:../../assets/about/2026-04-27_BL.webp';
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
                <dl class="main-paragraph cv-grid cv-grid--years">
                    <dt class="cv-year-start">2026</dt><dd><em>SWANS</em>, MULTIfest 2026, Noxte.app x Sky Fine Foods, STACKT (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd><em>RGBoids</em>, ${ext("https://www.interaccess.org/exhibitions/flashdrive-fundraiser-2026", "flashDRIVE Digital Arts Fundraiser Exhibition")}, InterAccess (Toronto, Canada)<span class="cv-note">Curated by Miriam Arbus</span></dd>
                    <dt class="cv-year-cont">2026</dt><dd><em>ATTN_0</em>, Open HDMI x Long Winter x Geary Art Crawl, Geary Factory Lofts (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>${ext("https://youtu.be/0ivtij7zndM", html`<em>OSCMOTO</em>`)}, Cool New Instruments Night #7, Tranzac Club (Toronto, Canada)</dd>
                    <dt class="cv-year-start">2025</dt><dd><em>IA Flow Fields</em>, ${ext("https://www.interaccess.org/exhibitions/flashdrive-digital-arts-fundraiser-exhibition", "flashDRIVE Digital Arts Fundraiser Exhibition")}, InterAccess (Toronto, Canada)<span class="cv-note">Curated by Miriam Arbus</span></dd>
                    <dt class="cv-year-cont">2025</dt><dd><a href="#/interactive/live/sketching-flock"><em>Sketching Flock</em></a>, Farewell to The Bridge, UKAI Projects, The Bridge (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2025</dt><dd><em>Zen Flock</em>, LW13.5 x Open HDMI, Long Winter x InterAccess, St. Anne's Parish Hall (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2025</dt><dd><a href="#/interactive/live/sketching-flock"><em>Sketching Flock</em></a>, "Goodbye Dupont" Open HDMI, InterAccess (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2025</dt><dd><a href="#/interactive/live/blind-spots"><em>Blind Spots</em></a>, Aberrant AI Open Studio, UKAI Projects, The Bridge (Toronto, Canada)<span class="cv-note">Collaboration with ${ext("https://www.ryankelln.com/", "Ryan Kelln")}</span></dd>
                    <dt class="cv-year-cont">2025</dt><dd><a href="#/interactive/live/the-reader"><em>The Reader</em></a>, Aberrant AI Open Studio, UKAI Projects, The Bridge (Toronto, Canada)</dd>
                    <dt class="cv-year-start">2024</dt><dd><a href="#/interactive/live/long-winter-13-1">Live VJ Set</a>, LW13.1, Long Winter, Allan Gardens Children's Conservatory (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2024</dt><dd><a href="#/interactive/live/game-set-match"><em>Game, Set, Match</em></a>, ${ext("https://www.interaccess.org/news/ia-gateway-2024-selected-artists", "IA Gateway 2024")}, InterAccess (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2024</dt><dd><a href="#/interactive/live/bird-conductor"><em>Bird Conductor</em></a>, LW12.3, Long Winter, The Bridge (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2024</dt><dd><a href="#/interactive/live/live-coding">Open HDMI: Spring 2024</a>, InterAccess (Toronto, Canada)</dd>
                    <dt>2023</dt><dd><a href="#/interactive/live/surveil-yourself"><em>Surveil Yourself</em></a>, P2P 2023 InterAccess Member Showcase, InterAccess (Toronto, Canada)<span class="cv-note">Collaboration with ${ext("https://circle-4.net/", "Asucena Di Giovanni")}</span></dd>
                </dl>
            </div>

            <div class="cv-section">
                <h2>Teaching & Lectures</h2>
                <dl class="main-paragraph cv-grid cv-grid--years">
                    <dt class="cv-year-start">2026</dt><dd>"Sensor to Screen" TouchDesigner and OSC workshop, independent, Andrew Sun's Discord server (online)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>"TouchDesigner 101", "Reactive Space", "Internet Canvas", and "Synthetic Worlds" workshops, ${ext("https://softlaunch.net/", "soft_launch")} (Program Lead), New Stadium and InterAccess (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>"Cultural Fermentation & Other Messy Practices of Illegibility" workshop, OCAD University, Onsite Gallery (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>CTRL+SHIFT Vol. 11 Canvas & Code speaker, CTRL+SHIFT, FITC, Canvas & Code Gallery (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>"Views from the Machine" computer perception workshop, UKAI Projects, Remote Gallery (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>"Wayfinding: Art" panelist with ${ext("https://sundogg.substack.com/", "Michelle Jia")}, moderated by ${ext("https://www.sholis.com/", "Brian Sholis")}, 1RG (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2026</dt><dd>"The Art of Building Tiny Infrastructures" presentation and facilitated conversation, UKAI Projects (online)</dd>
                    <dt class="cv-year-start">2025</dt><dd>${ext("https://www.interaccess.org/workshop/digital-bridges-networking-tools-for-collaborative-creation", '"Digital Bridges" new media workshop')}, UKAI Projects, InterAccess (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2025</dt><dd>${ext("https://www.interaccess.org/workshop/we-have-ai-at-home-building-our-creative-ai-ecosystem", '"We Have AI At Home" workshop')}, UKAI Projects, Cultural Technologies Lab, InterAccess (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2025</dt><dd>"Digital Bridges" new media workshop, UKAI Projects, Cultural Technologies Lab, Accton Arts Foundation, Art Site of Railway Warehouse (Hsinchu, Taiwan)</dd>
                    <dt class="cv-year-cont">2025</dt><dd>${ext("https://lu.ma/voey52i4", "PROGRAM09: MEDIAPIPE workshop")}, ${ext("https://www.youtube.com/@programislive", "PROGRAM")}, New Stadium (Toronto, Canada)</dd>
                    <dt class="cv-year-cont">2025</dt><dd>1:1 Code Art Mentorship program (online)</dd>
                    <dt class="cv-year-cont">2025</dt><dd>"We Have AI At Home" workshop, UKAI Projects, The Bridge (Toronto, Canada)</dd>
                    <dt>2017</dt><dd>${ext("https://outreach.engineering.utoronto.ca/files/2016/12/DEEP-Leadership-Camp-2017-Instructor-Job-Description.pdf", "Da Vinci Engineering Enrichment Program Camp Instructor")}, University of Toronto (Minden, Canada)</dd>
                    <dt>2014-2016</dt><dd>Astrophotography workshops and lectures, Royal Astronomical Society of Canada (${ext("https://rascto.ca/content/recreational-astronomy-night-16", "Toronto")}, ${ext("https://rascto.ca/news/astrophoto-editing-lightroom-and-photoshop", "Richmond Hill")}, ${ext("https://www.youtube.com/watch?v=hzHWC9LJT8U", "The Blue Mountains")}, Canada)</dd>
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
                    <div class="cv-meta">${ext("https://softlaunch.net/", "soft_launch")} · 2025-Present</div>
                    <ul class="cv-bullets">
                        <li>Teaching creative technology skills through hands-on educational intensives</li>
                    </ul>
                </div>
                <div class="main-paragraph cv-entry">
                    <div class="cv-role">XR Development Lead</div>
                    <div class="cv-meta">${ext("https://www.ukaiprojects.com/", "UKAI Projects")} · 2025-Present</div>
                    <ul class="cv-bullets">
                        <li>Cultural research, exhibitions, immersive installations, publishing, and workshops</li>
                    </ul>
                </div>
                <div class="main-paragraph cv-entry">
                    <div class="cv-role">AAASeed Software and Installation Development</div>
                    <div class="cv-meta">${ext("https://www.artcast4d.eu/", "Artcast4D")} · 2024-2025</div>
                    <ul class="cv-bullets">
                        <li>Building installations for showcase in Europe and contributing to software development for ${ext("https://aaaseed.org/", "AAASeed")}, a realtime engine for 2D/3D graphics and interactive installations. Contributing to foundational architecture, core feature development, and UX design, progressing towards taking the software open source for use by artists, developers, and businesses.</li>
                    </ul>
                </div>
                <div class="main-paragraph cv-entry">
                    <div class="cv-role">Product Manager</div>
                    <div class="cv-meta">${ext("https://us-shop.nanoleaf.me/", "Nanoleaf")} · 2020-2024</div>
                    <ul class="cv-bullets">
                        <li>Creator and lead developer of Nanoleaf Screen Mirror technology</li>
                    </ul>
                </div>
            </div>

            <div class="cv-section">
                <h2>Residencies</h2>
                <dl class="main-paragraph cv-grid cv-grid--years">
                    <dt>2025</dt><dd>${ext("https://aafoundation.tw/", "Art Site of Railway Warehouse in Hsinchu")}, Accton Arts Foundation (Hsinchu, Taiwan)</dd>
                    <dt>2024</dt><dd>Aberrant AI - AI through the lens of Horror, UKAI Projects (Toronto, Canada)</dd>
                </dl>
            </div>

            <div class="cv-section">
                <h2>Independent Projects</h2>
                <dl class="main-paragraph cv-grid cv-grid--years">
                    <dt>2026</dt><dd>"Peripherous" - open source machine perception toolkit</dd>
                    <dt>2025</dt><dd>${ext("/newsletter/", "Code Art Corner educational newsletter")}</dd>
                    <dt>2023-Present</dt><dd>${ext("https://openprocessing.org/user/424615/?o=40&view=sketches", "Open Source Code Art Sketches")}</dd>
                </dl>
            </div>

            <div class="cv-section">
                <h2>Education & Training</h2>
                <dl class="main-paragraph cv-grid cv-grid--years">
                    <dt class="cv-year-start">2024</dt><dd>Mentored by digital artist, designer, and technologist Priam Givord</dd>
                    <dt class="cv-year-cont">2024</dt><dd>${ext("https://www.aimetaphorsworkshop.com/", '"AI Metaphors" Workshop')}, University of Toronto, UKAI Projects, InterAccess</dd>
                    <dt class="cv-year-cont">2024</dt><dd>${ext("https://ukaiprojects.com/pages/festival", '"Carnival of Shipwreck"')} Cultural Philosophy and New Media workshop series, UKAI Projects</dd>
                    <dt class="cv-year-cont">2024</dt><dd>${ext("https://labs.hxouse.com/", '"Habitats"')} Unreal Engine 5 & Cultural Philosophy Workshop, HXOUSE LABS</dd>
                    <dt>2015-2020</dt><dd>BASc., Engineering Science, University of Toronto</dd>
                </dl>
            </div>

            <div class="cv-section">
                <h2>Publications</h2>
                <dl class="main-paragraph cv-grid cv-grid--years">
                    <dt>2025</dt><dd>${ext("https://museum.eecs.yorku.ca/anielewicz", "Interview with Will Anielewicz")}, Zbigniew Stachniak and Mark Hayward, York University Computer Museum website</dd>
                    <dt>2020</dt><dd>${ext(ecaadePdf, "eCAADe Conference Proceedings Volume 1")}, Education and research in Computer Aided Architectural Design in Europe</dd>
                </dl>
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
                        <li>Contract software development on ${ext("https://aaaseed.org/", "AAASeed")}, a real-time 2D/3D engine for interactive installations, in C++, Lua, and GLSL — architected HTTP networking (via the open-source cpr library) for web API communication, plus other foundational architecture and feature work en route to open-source release</li>
                        <li>Co-creator and technical lead of Peripherous, an open-source machine perception toolkit — directed architecture and AI-assisted implementation (via Claude Code) of its runtime, local message bus, lifecycle supervisor, and OSC output, using MoveNet Multipose (ONNX) for real-time pose estimation</li>
                        <li>Built and distributed TouchDesigner components including a SPAN super-resolution upscaler and macOS-optimized real-time diffusion image generator</li>
                        <li>Research in real-time 3D scene reconstruction pipelines (depth estimation, shared-memory integration) for TouchDesigner, and diffusion-based real-time image pipelines across macOS and Windows</li>
                    </ul>
                </div>
                <div class="main-paragraph cv-entry">
                    <div class="cv-role">XR Development Lead</div>
                    <div class="cv-meta">${ext("https://www.ukaiprojects.com/", "UKAI Projects")} · 2025-Present</div>
                    <ul class="cv-bullets">
                        <li>Develop and lead Digital Bridges, a peer-to-peer networking program teaching researchers and artists to build collaborative systems using Tailscale and OSC</li>
                        <li>Software development and AI system behaviour direction for AI-driven interactive game systems</li>
                        <li>Designed and delivered technical workshops on machine perception and computer vision (MediaPipe) for artist and technologist audiences, including an international iteration in Hsinchu, Taiwan</li>
                    </ul>
                </div>
                <div class="main-paragraph cv-entry">
                    <div class="cv-role">Program Lead</div>
                    <div class="cv-meta">${ext("https://softlaunch.net/", "soft_launch")} · 2025-Present</div>
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
            ${cvToggle(props && props.resume)}
            ${props && props.resume ? technicalResume() : artistCv()}
        </div>
    </div>
`;
