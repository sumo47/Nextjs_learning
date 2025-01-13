- create next app - `npx create-next=app@latest`
  -TypeScript - No, Tailwind - yes , src/directory - No , App Router - Yes, Turbopack - Yes , import alias - No
  - use `./` for root folder for app name
- run - `npm run dev` 
- error - if any error occurs than open in incognito mode
  - because some extension modify dom 
- difference between vite+react and next.js project
  - vite+react =  it send js bundle to browser and than browser render it 
    - if we will disable javascript into browser then all content will disappeare
  - next.js = it send html and css file to browser (server render)
    - if we will disable javascript into browser then nothing will happen
- ctrl+sift+p - to open search in inspect mode of browser
- page file of app folder runs on server by default
- use `use client` code in top of component to run it on client side 
- next js uses Turbopack bundler
- Routing - 
  - we use folder to route page 
  - use page.js file name inside folder
  - it is case sensitive
     - localhost:3000/about =  about/page.js  !=   localhost:3000/About =  About/page.js 
     - localhost:3000/services = services/page
- Nested Routing
  - use folder inside folder and page.js inside it
  - localhost:3000/services/seo = services/seo/page.js
- Dynamic route
  - folder name sould be wrapped inside square bracket [slug]
  - now inside square bracket page destructure params from props
    ```
    export default function page({params}) {
     console.log(params)
     const { blogID } = params;
     return (
       <div>
           <h1>blogID = {blogID}</h1>
       </div>
     )
    }
    ```
   - localhost:3000/slug/anything will capture inside props.params.slud = anything
