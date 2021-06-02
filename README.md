# About 🏄
My personal portfolio repository. This project helped me improve my coding practices in much fruitful way than i had thought. I got change chance to explore Material UI's theming ie for dark mode, on how to properly make use of react-router-dom package, properly intgrate Material-table for server side rendering data-table and finally make use of Axios's global header parameter, thanks to this i dont have to send auth token on every request.


## Installation Guidelines
In case i migrate from my current server.

- clone repo (Both BE and FE).

- Install dipendencies by running command inside project directory: 
``` yarn install ```
why yarn ? Because the node_modules s is much smaller compared to that of npm and has extra commands `yarn why <query>` which identify why a package has been installed, detailing which other packages depend upon it. 

- Copy .env.example file to .env , fill the required details.

- Make a build by running command :
``` yarn run build ```

- Finally make a virtual host for your apache or nginx server.

## Requirements

- Node, npm and yarn installed globally.
