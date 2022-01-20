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
- Static content is fast and better for SEO as they are immediately indexed by search engines
- Static generation with getStaticProps for data fetching and getStaticPaths for dynamic pages

Issues:

- The build time is proportional to the number of pages in the application
- A page, once generated, can contain stale data till the time you rebuild the application

Solution => Incremental Static Regeneration (ISR)

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

Also see getStaticPaths() for SSG when using router id params

## getStaticPaths()

1. getStaticPaths fallback: false

- The paths returned by getStaticPaths will be rendered to HTML at build time by getStaticProps
- If fallback is set to false, then any paths not returned by getStaticPaths will result in a 404 error

2. getStaticPaths fallback: true

- The paths returned by getStaticPaths will be rendered to HTML at build time by getStaticProps
- The paths that have not been generated at build time will not result in a 404 page. Instead, NextJS will serve a "fallback" version of the page on the first request to such a path.
- In the background, NextJS will statically generate the requested path HTML and JSON. This includes running getStaticProps.
- When that's done, the browser receives the JSON for the generated path. This will be used to automatically render the page with the required props. From the user's perspective, the page will be swapped from the fallback page to the full page.
- At the same time, NextJS keeps track of the new list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time
- The true value is most suitable if your app has a very large number of static pages that depend on data.
- You may statically generate a small subset of products that are popular and use fallback: true for the rest to reduce build times.
- When someone requests a page that's not generated yet, the user will see the page with a loading indicator.
- Shortly after, getStaticProps finishes and the page will be rendered with the requested data. From then onwards, everyone who requests the same page will get the statically pre-rendered page

Example done in "posts"

3. getStaticPaths fallback: 'blocking'

- The paths returned by getStaticPaths will be rendered to HTML at build time by getStaticProps
- The paths that have not been generated at build time will not result in a 404 page. Instead, on the first request, NextJS will render the page on the server and return the generated HTML
- Very similar to setting to true. When that's done, the browser receives the HTML for the generated path. From the user's perspective, it will transition from "the browser is request the page" to "the full page is loaded". There is no flash of loading/fallback state.
- On a UX level, sometimes people prefer the page to be loaded without a loading indicator if the wait time is a few milliseconds.
- Some crawlers did not support JS. The loading page would be rendered and then the full page would be loaded which was causing a problem.
- The NextJS team prefers setting to true unless you have a specific problem with it in which case set to blocking.

4. Incremental Static Generation (ISR)

- With ISR, NextJS allows you to update your static pages after you've built your application
- You can statically generate individual pages without needing to rebuild the entire site, effectively solving the issue of dealing with stale data.
- In the getStaticProps function, apart from the props key, we can specify a revalidate key
- The value for revalidate is the number of seconds after which a page regeneration can occur

## Dev vs. Prod

- Prod Server: An optimized build is created once and you deploy that build. You don't make code changes on the go once it is deployed. For production builds a page will be pre-rendered once when we run the build command.
- Dev Server: We should be able to make changes in our code and we want that code to immediately reflect in the browser. In development mode, the page is pre-rendered for every request you make.
