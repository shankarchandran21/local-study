# Check Catching
    Build the project using pnpm run build it will shows log like below in log of build file
    in that we can see dynamic (ƒ  (Dynamic)) and static (○  (Static)) folders using that symbol   

    In that we can clearly see that how catching is working and time difference 
    the static page and generateMetadata call parallel and the time is 650ms and 429.61ms
    but in ProductCount Component and TotalPrice Component time is 47.25ms 45.87ms these two
    is nested components when  static page and generateMetadata time it's self catching is executed
    so that in ProductCount Component and TotalPrice Component comes from catch not from server
    
```powershell
    [generateMetadata()]: fetching /products started
    [Static Page]: fetching /products started
```

```powershell
[generateMetadata()]: fetching /products completed in 650.43ms
[Static Page]: fetching /products completed in 429.61ms
```

```powershell
[ProductCount Component]: fetching /products started
[TotalPrice Component]: fetching /products started
```

```powershell
[ProductCount Component]: fetching /products completed in 47.25ms
[TotalPrice Component]: fetching /products completed in 45.87ms
```
For ProductCount Component and TotalPrice Component time is less because data is coming from catch not from server

# Log of build file

```powershell

   Creating an optimized production build ...
 ✓ Compiled successfully in 50s
 ✓ Linting and checking validity of types    
 ✓ Collecting page data    
[Page]: fetching /products started
[generateMetadata()]: fetching /products started
[opt-out page]: fetching /products started
[Static Page]: fetching /products started
[Page]: fetching /products completed in 629.08ms
[ProductCount Component]: fetching /products started
[TotalPrice Component]: fetching /products started
[generateMetadata()]: fetching /products completed in 650.43ms
[Static Page]: fetching /products completed in 429.61ms
[ProductCount Component]: fetching /products completed in 47.25ms
[TotalPrice Component]: fetching /products completed in 45.87ms
[time-based-revalidation page]: fetching /products started
[time-based-revalidation page]: fetching /products completed in 7.36ms
[Static Page]: fetching /products started
[Static Page]: fetching /products completed in 6.25ms
 ✓ Generating static pages (10/10)
 ✓ Collecting build traces    
 ✓ Finalizing page optimization

Route (app)                                 Size  First Load JS  Revalidate  Expire
┌ ○ /                                      145 B         102 kB
├ ○ /_not-found                            976 B         103 kB
├ ○ /data-cache                            173 B         105 kB
├ ƒ /data-cache/[id]                       145 B         102 kB
├ ƒ /data-cache/opt-out                    145 B         102 kB
├ ○ /data-cache/time-based-revalidation    145 B         102 kB         10s      1y
├ ○ /full-route-cache                      173 B         105 kB
└ ○ /request-memoization                   145 B         102 kB
+ First Load JS shared by all             102 kB
  ├ chunks/97-03f0f3bf9b331d30.js        46.6 kB
  ├ chunks/fdc226ae-1cbcfbd488b920e2.js  53.2 kB
  └ other shared chunks (total)          1.96 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand


```
# Explanation How working in SSR page

It proves that request memorization works not just on static pages but on dynamic SSR pages as well. The key idea is whenever
 a page is rendering and the same data is required in the multiple places, NexJS doesn't repeat the request instead it keeps 
 the first request promise in an in-memory cache and resolve the data from that same promise in all the other places. But 
 remember this cache is not permanent. It's an in-memory temporary cache. Once the render cycle ends, it gets cleared. 
 For example, you visit a page, data is fetched on the server, then you navigate away. At that point, the cache is wiped. 
 When you come back again, a fresh request is made and a new promise is created. Now, some of you might ask, if the request 
 is only made once, then why do we see higher latency at both the page level and the generate metadata level? Good question. 
 That is because NextJS performs both fetch requests concurrently. In other words, to improve performance, NextJS starts 
 both fetches at the same time. This is called concurrent fetching. So both spots show some latency. But once the promise is 
 created, after it gets resolved, the rest of the app just receives the result from that result promise. And here's the most 
 beautiful part of request memorization. It doesn't store the entire phase data in memory. Instead, it only caches the promise 
 returned from the fetch call. Why is that smart? Well, imagine you accidentally fetch something with 10,000 records and the 
 entire data set gets stored in memory. That would cause serious performance issues. That's why Next.js cleverly keeps just the 
 fetch promise in memory. And since once a promise is resolved, anyone awaiting it gets the same result. The same resolved data 
 is shared across the entire tree without triggering extra fetches. That's how request memorization works

It's stored in memory(RAM) only during the render cycle and it's gone once the cycle ends.

# Using 3W&3H method:

| Strategy              | What                                              | Where                                  | Why                                         | How long     | How to refresh                     | How to cancel                          |
|-----------------------|---------------------------------------------------|----------------------------------------|---------------------------------------------|--------------|------------------------------------|----------------------------------------|
| Request Memoization   | Memoize identical requests in a single render pass| Server-side in memory (build & runtime)| Duplicate requests and avoid props drilling | Short-lived  | Not needed                         | Automatic (only GET requests)          |


# Points to remember

**Not a next.js feature, core react.js feature**

**Memoization applies only to GET requests only - not POST, PUT,Patch DELETE requests**

**Works inside React tree only - generateMetadata(), generateStaticParams(), layout.js, page.js, other server components -not inside route handlers (API routes, middleware, etc)**

**fetch caching not supported in middleware**