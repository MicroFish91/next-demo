## Prerendering

### What?

- Pre-rendering refers to the process of generating HTML with the necessary data for a page in our application (page source code)
- By default, NextJS pre-renders every page in the application
- NextJS generates HTML for each page in advance instead of having it all done by client-side JavaScript

### Why?

1. Pre-rendering improves performance

- In a react app, you need to wait for the JS to be executed
- Perhaps fetch data from an external API and then render the UI
- There is a wait time for the user
- With a pre-rendered page, the HTML is already generated and loads faster

2. Pre-rendering helps with SEO

- If you're building a blog or e-commerce site, you want search engines to index your content
- If search engine hits a pre-rendered page, all the content is present in the source code which will help search engines index that page and contribute to better search rankings

### How?

- NextJS supports two forms of pre-rendering
  1. Static Generation
  2. Server-side Rendering

## Static Generation

### What?

- A method of pre-rendering where the HTML pages are generated at build time
- The HTML with all the data that makes up the content of the web page are generated in advance when you build your application
- Recommended method to pre-render pages whenever possible
- Page can be built once, cached by a CDN and served to the client almost instantly
  Ex. Blog pages, documentation and marketing pages

## getStaticProps()

1.

- Runs only on the server-side
- The function will never run client-side
- The code you write inside getStaticProps won't even be included in the JS bundle that is sent to the browser

2.

- You can write server-side code directly in getStaticProps
- Accessing the file system using the fs module or querying a database can be done inside getStaticProps
- You don't have to worry about about including API keys in getStaticProps as that won't make it to the browser

3.

- getStaticProps can only be run from a page and not a normal component file
- It is used for pre-rendering only and not for client-side data fetching

4.

- getStaticProps should return an object and object should contain a props key which is an object

5.

- getStaticProps will run at build time
- During development, getStaticProps runs on every request

## Dev vs. Prod

- Prod Server: An optimized build is created once and you deploy that build. You don't make code changes on the go once it is deployed. For production builds a page will be pre-rendered once when we run the build command.
- Dev Server: We should be able to make changes in our code and we want that code to immediately reflect in the browser. In development mode, the page is pre-rendered for every request you make.
