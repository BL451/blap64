# blap64
Personal website (currently under construction) of Benjamin Lappalainen.

[https://blap64.xyz/](https://blap64.xyz/)

I decided to build this from the ground up as a Single-Page Application (SPA) using only HTML, CSS, and JavaScript with a few libraries and no frameworks. The site uses a custom client-side routing mechanism based around hashbangs to navigate between pages.
The majority of the animated (and some static) graphics are created and rendered in real-time using [p5.js](https://github.com/processing/p5.js). The site is hosted on Github Pages, bundled and deployed to the [gh-pages branch](https://github.com/BL451/blap64/tree/gh-pages) using [Parcel](https://parceljs.org/). [Lit](https://lit.dev/) is used for HTML templating, mostly to avoid some security concerns of lower-level ways of switching out HTML in a SPA. [Porkbun](https://porkbun.com/) is the domain registrar I use currently, and I've had a great experience with them so far.

Note that I'm building this site without concern for scalability - I believe that the larger established frameworks have their place as sites and projects scale up to the needs of many users, but I also strongly believe in the value of building things from first principles and understanding how the core of any technology works before using things built on top of it.

The deployment mechanism for this site (Parcel -> GH Pages) was setup by following [this guide](https://www.matteogregoricchio.com/articles/github-pages-hosting-with-parcel.html) by [@followynne](https://github.com/followynne).
