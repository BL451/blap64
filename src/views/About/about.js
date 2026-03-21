import { html } from "lit-html";
import profileImage from 'url:../../assets/about/2025-07-27_BL.webp';
import ecaadePdf from 'url:../../../public/publications/ecaade2020_393.pdf';

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
                Benjamin Lappalainen is a Toronto-based creative technologist, artist, and educator whose practice spans interactive installations, kinetic sculpture, and experimental instruments. His work reveals how perceptive and generative technologies actually work and invites audiences to engage with them on their own terms. His educational practice includes leading workshops and mentorship programs that bridge technical skill-building with experimental arts practices.
                <br><br>
                As XR Development Lead with UKAI Projects, Benjamin collaborates with artists and organizations to execute research, exhibitions, immersive and interactive installations, publishing, and workshops. UKAI Projects imagines and produces “culture for what’s coming”, most recently working with the Accton Arts Foundation in Hsinchu, Taiwan for research into arts policy, delivering workshops and immersive experiences, and activating a city block with the first international iteration of Goblin Market, a collectively imagined alternative arts marketplace.
                <br><br>
                Benjamin holds a Bachelor of Applied Science in Engineering Science from the University of Toronto. His current research focuses on developing software and hardware for interactive media — working across tools like p5.js, TouchDesigner, and custom electronics — creating accessible tools that support artist communities in realizing technically ambitious projects.
                <br><br>
            </p>

            <h2>Artist Statement</h2>
            <p class="main-paragraph">
                I create interactive art that reveals how perceptive and generative technologies actually work and what they mean for the people who use them. I see my work as both art and education — demonstrating the capabilities and inner workings of technologies that are often dressed up in minimal, clean interfaces, or only running behind the scenes. As an artist and creative technologist, I feel a deep-rooted sense of responsibility to share my knowledge of complex systems and concepts in an accessible and practical manner that empowers my audience to make informed decisions about the technology they choose to use and the systems they choose to participate in.
                <br><br>
                This approach has deep roots in art history. Conceptual and instruction-based art from the 1900s has had a large influence on my artistic process. Artists such as Vera Molnár (1924–2023) and Sol LeWitt (1928–2007) created paintings and wall drawings based on rules and sets of instructions, even before digital computers were available. Creating art with code is hardly any different — the work of the "code artist" is to come up with an algorithm (a set of instructions) for the creative vision which another entity (the computer) then executes.
                <br><br>
                Science fiction media and video games play a large role in the themes, aesthetic direction, and interaction mechanisms that I implement throughout my work. While I'm a big fan of dystopian sci-fi and cyberpunk aesthetics, I also hope to demonstrate the flip side: visions of brighter futures, healthier relationships between humans and computers, and the subversive and unintended use cases of emerging technologies that provide genuine benefit to people and communities rather than a corporation's bottom line.
                <br><br>
                The choice of how people physically engage with my work is just as intentional. I believe that learning through play is a fun and effective yet underutilized avenue for teaching. Using the movement of the physical body to understand how a system behaves creates a sense of tangible investigation regardless of participant background, bringing an innate degree of understanding which transcends language and technical jargon.
                <br><br>
                <em>My message to you, reader:</em><br>
                We have the ability to build a better world than the one we live in.<br>
                Technology is not just for ruthless optimization.<br>
                Number does not always need to go up.<br>
                Find people you trust and create things that help people.<br>
                Do good, have fun.
                <br><br>
            </p>
        </div>
        <div class="about-cv">
            <h1 class="about-header">Curriculum Vitae</h1>

            <div class="cv-section">
                <h2>Selected New Media Exhibitions & Performances</h2>
                <p class="main-paragraph">
                    <strong>2026</strong> - <em>ATTN_0</em>, Open HDMI x Long Winter x Geary Art Crawl, Geary Factory Lofts (Toronto, Canada)<br>
                    <strong>2026</strong> - <em>OSCMOTO</em>, Cool New Instruments Night #7, Tranzac Club (Toronto, Canada)<br>
                    <strong>2025</strong> - <em>Goblin Wishing Well</em>, Goblin Market, General Village (Hsinchu, Taiwan)<br>
                    <strong>2025</strong> - <em>IA Flow Fields</em>, flashDRIVE Digital Arts Fundraiser Exhibition, InterAccess (Toronto, Canada)<br>
                    <strong>2025</strong> - <a href="#/interactive/live/sketching-flock"><em>Sketching Flock</em></a>, Farewell to The Bridge, UKAI Projects, The Bridge (Toronto, Canada)<br>
                    <strong>2025</strong> - <em>Zen Flock</em>, LW13.5 x Open HDMI, Long Winter x InterAccess, St. Anne's Parish Hall (Toronto, Canada)<br>
                    <strong>2025</strong> - <a href="#/interactive/live/sketching-flock"><em>Sketching Flock</em></a>, "Goodbye Dupont" Open HDMI, InterAccess (Toronto, Canada)<br>
                    <strong>2025</strong> - <a href="#/interactive/live/blind-spots"><em>Blind Spots</em></a>, Aberrant AI Open Studio, UKAI Projects, The Bridge (Toronto, Canada)<br>
                    <strong>2025</strong> - <a href="#/interactive/live/the-reader"><em>The Reader</em></a>, Aberrant AI Open Studio, UKAI Projects, The Bridge (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/long-winter-13-1">Live VJ Set</a>, LW13.1, Long Winter, Allan Gardens Children's Conservatory (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/game-set-match"><em>Game, Set, Match</em></a>, <a href="https://www.interaccess.org/news/ia-gateway-2024-selected-artists" target="_blank" rel="noopener">IA Gateway 2024</a>, InterAccess (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/live-coding">Open HDMI: Spring 2024</a>, InterAccess (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/bird-conductor"><em>Bird Conductor</em></a>, LW12.3, Long Winter, The Bridge (Toronto, Canada)<br>
                    <strong>2023</strong> - <a href="#/interactive/live/surveil-yourself"><em>Surveil Yourself</em></a>, P2P 2023 InterAccess Member Showcase, InterAccess (Toronto, Canada)
                </p>
            </div>

            <div class="cv-section">
                <h2>Teaching & Speaking</h2>
                <p class="main-paragraph">
                    <strong>2026</strong> - "Views from the Machine" computer perception workshop, UKAI Projects, Remote Gallery (Toronto, Canada)<br>
                    <strong>2026</strong> - "The Art of Building Tiny Infrastructures" presentation and facilitated conversation, UKAI Projects, Cultural Technologies Lab (online)<br>
                    <strong>2026</strong> - "Internet Canvas" creative coding workshop, <a href="https://softlaunch.net/" target="_blank" rel="noopener">soft_launch</a> weekend intensive, InterAccess (Toronto, Canada)<br>
                    <strong>2025</strong> - <a href="https://www.interaccess.org/workshop/digital-bridges-networking-tools-for-collaborative-creation" target="_blank" rel="noopener">"Digital Bridges" new media workshop</a>, UKAI Projects, Cultural Technologies Lab, InterAccess (Toronto, Canada)<br>
                    <strong>2025</strong> - <a href="https://www.interaccess.org/workshop/we-have-ai-at-home-building-our-creative-ai-ecosystem" target="_blank" rel="noopener">"We Have AI At Home" workshop</a>, UKAI Projects, Cultural Technologies Lab, InterAccess (Toronto, Canada)<br>
                    <strong>2025</strong> - "Digital Bridges" new media workshop, UKAI Projects, Cultural Technologies Lab, Accton Arts Foundation, Art Site of Railway Warehouse (Hsinchu, Taiwan)<br>
                    <strong>2025</strong> - PROGRAM09: MEDIAPIPE Workshop, <a href="https://www.youtube.com/@programislive" target="_blank" rel="noopener">PROGRAM</a>, New Stadium (Toronto, Canada)<br>
                    <strong>2025</strong> - 1:1 Code Art Mentorship program<br>
                    <strong>2025</strong> - "We Have AI At Home" workshop, UKAI Projects, The Bridge (Toronto, Canada)<br>
                    <strong>2017</strong> - <a href="https://outreach.engineering.utoronto.ca/files/2016/12/DEEP-Leadership-Camp-2017-Instructor-Job-Description.pdf" target="_blank" rel="noopener">Da Vinci Engineering Enrichment Program Leadership Camp Instructor</a>, University of Toronto (Minden, Canada)<br>
                    <strong>2016</strong> - <a href="https://youtu.be/hzHWC9LJT8U" target="_blank" rel="noopener">Carr Astronomical Observatory Astrophotography Workshop #1</a>, Royal Astronomical Society of Canada, Carr Astronomical Observatory (The Blue Mountains, Canada)<br>
                    <strong>2016</strong> - <a href="https://rascto.ca/content/rascto-astrophotography-session-5" target="_blank" rel="noopener">RASCTO Astrophotography Session #5 at the David Dunlap Observatory</a>, Royal Astronomical Society of Canada, Carr Astronomical Observatory (The Blue Mountains, Canada)<br>
                    <strong>2015</strong> - Recreational Astronomy Night meetings (2) at the Ontario Science Centre, Royal Astronomical Society of Canada, Ontario Science Centre (North York, Canada)<br>
                    <strong>2014</strong> - <a href="https://rascto.ca/content/recreational-astronomy-night-16" target="_blank" rel="noopener">RASCTO Members' Night at the University of Toronto</a>, Royal Astronomical Society of Canada, University of Toronto (Toronto, Canada)<br>
                    <strong>2014</strong> - <a href="https://rascto.ca/news/astrophoto-editing-lightroom-and-photoshop" target="_blank" rel="noopener">RASCTO Members' Night at the David Dunlap Observatory</a>, Royal Astronomical Society of Canada, David Dunlap Observatory (Richmond Hill, Canada)
                </p>
            </div>

            <div class="cv-section">
                <h2>Work Experience</h2>
                <p class="main-paragraph">
                    <strong>2025-Present</strong> - XR Development Lead, UKAI Projects<br>
                    <strong>2025</strong> - <em>We Play in the World They Make</em> Role-Playing Game, UKAI Projects<br>
                        &nbsp;&nbsp;- Software development, art direction, and prompt engineering for AI game components<br>
                    <strong>2024-2025</strong> - AAASeed Software and Installation Development, Artcast4D<br>
                        &nbsp;&nbsp;- Building interactive and networked installations for showcase in Europe<br>
                        &nbsp;&nbsp;- Software development in C++ and Lua<br>
                        &nbsp;&nbsp;- Artcast4D is funded by the European Union's Horizon Europe research and innovation program<br>
                    <strong>2020-2024</strong> - Product Manager, Nanoleaf<br>
                        &nbsp;&nbsp;- Creator and lead developer of Nanoleaf Screen Mirror technology<br>
                        &nbsp;&nbsp;- Developed expertise in Thread mesh networking protocol and Matter smart home protocol<br>
                        &nbsp;&nbsp;- Managed successful certification of the first smart lights on Matter<br>
                        &nbsp;&nbsp;- Creator of Nanoleaf Orchestrator advanced music visualizer
                </p>
            </div>

            <div class="cv-section">
                <h2>Residencies</h2>
                <p class="main-paragraph">
                    <strong>2025</strong> - Art Site of Railway Warehouse in Hsinchu, Accton Arts Foundation (Hsinchu, Taiwan)<br>
                    <strong>2024</strong> - Aberrant AI, UKAI Projects (Toronto, Canada)
                </p>
            </div>

            <div class="cv-section">
                <h2>Independent Projects</h2>
                <p class="main-paragraph">
                    <strong>2025-Present</strong> - <a href="https://blap64.substack.com/" target="_blank" rel="noopener">"Code Art Corner" educational newsletter</a><br>
                    <strong>2024</strong> - <a href="https://editor.p5js.org/blapcode/collections/ZbpMINM3u" target="_blank" rel="noopener">Genuary Generative Art Prompt Series</a><br>
                    <strong>2024</strong> - <a href="https://youtu.be/AohJn0CFkYY" target="_blank" rel="noopener">Cipher Fault</a><br>
                    <strong>2023-Present</strong> - <a href="https://openprocessing.org/user/424615/?o=40&view=sketches" target="_blank" rel="noopener">Open Source Code Art Sketches</a><br>
                    <strong>2023-Present</strong> - "Stoat" Discord Bot
                </p>
            </div>

            <div class="cv-section">
                <h2>Education & Training</h2>
                <p class="main-paragraph">
                    <strong>2024</strong> - Mentored by digital artist, designer, and technologist Priam Givord<br>
                    <strong>2024</strong> - <a href="https://www.aimetaphorsworkshop.com/" target="_blank" rel="noopener">"AI Metaphors" Workshop</a>, University of Toronto, UKAI Projects, InterAccess<br>
                    <strong>2024</strong> - <a href="https://ukaiprojects.com/pages/festival" target="_blank" rel="noopener">"Carnival of Shipwreck"</a> Cultural Philosophy and New Media workshop series, UKAI Projects<br>
                    <strong>2024</strong> - <a href="https://labs.hxouse.com/" target="_blank" rel="noopener">"Habitats"</a> Unreal Engine 5 & Cultural Philosophy Workshop, HXOUSE LABS<br>
                    <strong>2019-Present</strong> - Self-taught interactive media, programming, and AI techniques and technologies<br>
                    <strong>2015-2020</strong> - BASc., Engineering Science, University of Toronto
                </p>
            </div>

            <div class="cv-section">
                <h2>Publications</h2>
                <p class="main-paragraph">
                    <strong>2025</strong> - <a href="https://museum.eecs.yorku.ca/anielewicz" target="_blank" rel="noopener">Interview with Will Anielewicz</a>, Zbigniew Stachniak and Mark Hayward, York University Computer Museum website<br>
                    <strong>2020</strong> - <a href="${ecaadePdf}" target="_blank" rel="noopener">eCAADe Conference Proceedings Volume 1</a>, Education and research in Computer Aided Architectural Design in Europe
                </p>
            </div>
        </div>
    </div>
`;
