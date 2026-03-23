# Next.js Rendering Methods

    **Static Site Generation (SSG)**
    **Server Side Rendering (SSR)**
    **Incremental Static Regeneration (ISR)**
    **Client Side Rendering (CSR)**

# Why Rendering is important

    **When data is fetched**
    **when the page is generated**
    **How long the data is stored in catch**
these all based on the Rendering Strategy

## Static Site Generation (SSG)

    **If the restaurant prepared dish advance if someone order dish restaurant served immediately that is called SSG**
    **The page is pre-render in the server if the user visit the site see the page instantly without any extra work**
### pros

    **Better Performance**
    **Server has less load**
    **Instance page load**
    **The only job is fetch the pre-render page from server and show it in browser**

### cons

   **If someone order the dish which does not prepared or ingredients changing all the time in this precooked version don't work it as to be made on the spot in this kind of situation we need SSR**
   **It will generate site at once in build time only so that it's not suitable for dynamic content(real-time-updates,live date,etc..)**

## Server Side Rendering (SSR)

For Every request it hit the server and send to the browser so that we get fresh content
In this performance is big issue , because of every request it's go the server it's make page slower in heavy traffic 

### 🔄 How SSR works technically

    **User requests a webpage**
    **Server takes data + HTML template**
    **Server creates the full HTML**
    **Server sends ready UI to the browser**
    **Browser just displays it**

### Workflow

    **HTML with data comes from the server →**
    **Browser receives the HTML →**
    **Browser then downloads CSS & JS →**
    **Browser applies CSS for styling and runs JS for functionality.**

# Incremental Static Regeneration (ISR)

It's combination of SSG + SSR

In restaurant some dish are precooked like SSG but sometimes no one is not order the dish it will stale(became old) or cold
so i decide every x minutes so they're always fresh but until then, customer will still be served the old one and mean while
kitchen will cook new version in the background once the new batch is ready the next customer gets the updated dish

that exactly what ISR does in next.js you pre-generate the page just like SSG, but you also define a time interval
after which the page will regenerate it in the background

# Client Side Rendering (CSR)

Imagine working in the live kitchen all the ingredients are delivered to your table and you cook the meal yourself that is CSR

The entire javascript bundle is loaded in the browser so a user navigate to a page no new HTML is fetched from the server.
once necessary data is fetched and the browser builds the page using javaScript.So essentially the cooking happens in the 
browser you fetched the ingredients that means the data and your browser does the rest

In this initial load can be slow and from an SEO perspective it has some drawbacks too because search engines often struggle to
crawl javaScript heavy pages properly 