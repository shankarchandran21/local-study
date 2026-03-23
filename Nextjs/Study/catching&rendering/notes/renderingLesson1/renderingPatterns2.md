# Rendering Patterns
## LINK:>
    https://www.youtube.com/watch?v=qYk_BqGHXEg
     
     #### Time:11:03

**React Client Components**
**React Server Components**
**React Server Components Payload (RSC Payload)**



[11:05] working with a website or web
[11:07] application built using React or NexJS,
[11:10] the programming language working on the
[11:11] server side is JavaScript, more
[11:14] specifically NodeJS. That means in React
[11:17] or NextJS apps, all rendering on the
[11:20] server is handled using JavaScript.
[11:23] So when a request comes into a React or
[11:26] NexJS app, NodeJS does the server side
[11:29] work like fetching data from APIs or
[11:32] database and then generate the HTML. As
[11:35] you already know in React apps, we build
[11:38] small reusable components using JSX. On
[11:41] the server, all these components
[11:43] together form a React tree. Now in that
[11:46] react tree some components may contain
[11:49] interactivity like a button you can
[11:51] click or a slider that moves. These
[11:54] interactive components are called client
[11:57] components because they only work on the
[11:59] client or browser. They don't do
[12:02] anything on the server. On the other
[12:04] hand, there are components that simply
[12:06] display data or generate HTML or CSS and
[12:11] don't require any interactivity. These
[12:13] are called server components because
[12:16] they can be rendered directly on the
[12:17] server and don't need to be downloaded
[12:19] to the client. When the react tree is
[12:22] rendered on the server, we end up with
[12:24] HTML generated from our JSX. But here's
[12:28] the catch. Client components must still
[12:31] be sent to the browser because they need
[12:33] to run there. Rendering them on the
[12:35] server wouldn't make any sense. So when
[12:38] NexJS is rendering the React tree on the
[12:40] server, it scans through the tree and
[12:42] figures out which components are server
[12:44] components and renders only those. And
[12:48] when it encounters a client component,
[12:50] it doesn't render it. Instead, it just
[12:53] leaves a blank placeholder there. It
[12:56] basically tells the browser, hey, I am
[12:58] leaving this spot blank. You go ahead
[13:01] and render this when it gets to the
[13:03] client. That means for any webpage
[13:05] request in a nextjs app, the server
[13:07] sends back a response that contains
[13:10] number one the render HTML, number two
[13:13] CSS, number three the JavaScript
[13:15] required to hydrate the client
[13:16] components. This is the usual JS you
[13:18] need for interactivity and number four
[13:21] if needed parts of the React or Nex.js
[13:24] libraries because otherwise who would
[13:26] take the JSX and turn it into HTML
[13:29] inside the browser? But here's the
[13:31] issue. React and NexJS are both huge
[13:34] packages. Sending the entire React and
[13:36] NextJS bundles to the browser just to
[13:39] render some components would be
[13:41] extremely inefficient. So what has NexJS
[13:44] done to solve this? Well, it's smart. It
[13:48] knows that it already rendered about 80%
[13:51] of the components on the server, the
[13:53] server components. That HTML is already
[13:56] sent to the browser and showing up fine.
[13:59] So to avoid sending the entire React and
[14:01] NexJS libraries, it sends just a tiny
[14:04] file, a smart compact piece of data that
[14:08] helps the browser reconstruct the full
[14:10] React tree without React or Next.js.
[14:13] That little file is called React server
[14:16] component payload or simply RSC payload.
[14:20] When the server components are rendered
[14:21] on the server and HTML is generated,
[14:24] this RSC payload is also created. What
[14:27] does it contain? It's like a log book
[14:30] written in a very specific format. It
[14:32] contains all the key details like which
[14:35] components is a child of which, which
[14:38] one is the parent, their internal
[14:40] relationships and so on. So the client
[14:42] can use that to rebuild the full React
[14:45] tree even without reading React or
[14:47] NextJS.
[14:49] Also, if a server component is passing
[14:51] any props down to a client, those props
[14:54] are also written into this tiny log
[14:57] book. This RSC payload is then sent
[15:00] along with the server response. Once it
[15:02] reaches the client, the browser can use
[15:05] this RSC payload to regenerate the tree.
[15:07] And since all the information is already
[15:10] there, it doesn't need to download the
[15:12] full React or Next.js libraries. Inside
[15:14] the next package that we installed,
[15:16] there are both server and client parts.
[15:19] All written in JavaScript. Same for
[15:21] React 19. It now has both client and
[15:24] server parts inside the same library.
[15:26] Also JavaScript if the browser had to
[15:29] download all of that just to rebuild the
[15:32] React tree. Imagine how huge the
[15:34] JavaScript bundle would get. But thanks
[15:36] to the React server component payload,
[15:38] this small efficient log file, the whole
[15:41] process becomes super optimized. Now in
[15:44] the browser only the small client part
[15:46] of the React library is loaded just
[15:48] enough to render the client components
[15:50] and use the RSC payload to connect
[15:52] everything together and build the full
[15:54] tree. Same with NexJS only the small
[15:58] client sidejs is downloaded like the
[16:00] tiny bits needed for rooting or page
[16:03] transitions. The log book that NexJS
[16:05] wrote on the server during the server uh
[16:08] component rendering also comes along the
[16:10] response. It's not quite JSON, but it
[16:12] looks like a serializable format. And
[16:15] this is what we call the React server
[16:17] component payload, the RSC payload. So
[16:21] to summarize, whenever a client requests
[16:24] a page from a NexJS app, the server
[16:27] components are rendered on the server.
[16:29] The client components are left as
[16:31] placeholders. A small log of how the
[16:34] full react tree was built is created. This
[16:37] is the RSC payload. The client receives
[16:40] number one HTML, number two CSS, minimal
[16:44] JavaScript needed to hydrate the client
[16:46] components, only the client side parts
[16:48] of React and Nex.js library and the RSC
[16:51] payload. This helps keep the JavaScript
[16:53] bundle size super small. I hope now you
[16:57] clearly understand what server
[16:58] components are, what client components
[17:00] are, how the rendering process works in
[17:03] React or Nex.js, and most importantly,
[17:06] what this RSC payload is, and why it's
[17:09] so powerful. Now that we understand how
[17:12] rendering works in NexJS, including the
[17:14] different rendering strategies, client
[17:16] and server components, and the RSC
[17:18] payload, it's finally going to be much
[17:20] easier for us to understand Next.js
[17:23] caching flow.