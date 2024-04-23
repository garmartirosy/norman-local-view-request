# local-view-request
 
Run initially to install all. Short for: npm install [package]

    npm i

This will start a new port number each time you run it.
You can use ctrl-C to quit first on macs.

    npm run dev

Send to dist folder (click + to start a new terminal):

    npm run build

View at:

[localhost:5173](http://localhost:5173/)

[localhost:8887/local-view-request/dist](http://localhost:8887/local-view-request/dist/)

[https://normansj.github.io/local-view-request/dist/#06513](https://normansj.github.io/local-view-request/dist/#06513)

TO DO: The localsite.js include seems to loaded twice in the first link above. Move it from index.html into a Vite-React way to include a file.

    <script type="text/javascript" src="https://model.earth/localsite/js/localsite.js?showheader=true"></script>

Instead, load the Vite-React way.

TO DO: Try converting to Yarn instead of npm.
Maybe delete the package-lock.json, package.json and node-moduals.
Install, dev and build will then be:

    yarn
    yarn dev
    yarn build

Yarn edges out npm because it supports simultaneous package installs.