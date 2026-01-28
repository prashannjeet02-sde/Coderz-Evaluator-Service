## Setup Typescript+Express Project

# Install Typescript

npm install typescript --save-dev

# Create typescript config file

tsc --init

# Settings inside config file wher should compile output go

emit>"outdir: /dist"
npx tsc: This command will compile the typescript code and convert to js code in a dist folder.

Type-Checking>
"strict": true
"noImplicitAny": true
"strictNullChecks": true
"strictFunctionTypes": true

# Package.json

"build":"npx tsc",
"prewatch":"npm run build",
"start":"npx nodemon dist/index.js",
"dev":"npx concurrently
