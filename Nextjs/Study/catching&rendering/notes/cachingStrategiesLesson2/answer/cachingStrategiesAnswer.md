[19:53] And if we follow these questions we will
[19:55] actually start to understand how each of
[19:57] these caching strategies work. Let's
[20:00] begin with the first point in the
[20:01] journey. Whenever the browser sends a
[20:04] request to the server, the very first
[20:06] question NestJS asks itself is do I even
[20:09] need to go to the server or is the
[20:12] content of this page already loaded in
[20:14] the browser? Maybe the user has already
[20:16] visited this page and it's stored
[20:18] somewhere. That's the first caching
[20:21] layer. And the strategy NexJS uses to
[20:23] answer that question is called ROUTER
[20:26] CACHE. Now this cache exists entirely on
[20:29] the client side inside the browser. That
[20:32] means there's no need to even hit the
[20:34] server if the page is already stored in
[20:36] memory. Let's say I have visited a page
[20:39] before. NextJS stores that page content
[20:42] in the routers in memory cache on the
[20:44] browser. So if I navigate to the same
[20:47] page again, I get the page directly from
[20:49] that memory cache without making a new
[20:52] server request at all. Cool. Right now
[20:56] let's move on to the next step. Let's
[20:58] say the answer to that first question
[20:59] was yes. Meaning the root wasn't found
[21:02] in the browser's in-memory cache. So now
[21:05] we do have to go to the server. But once
[21:07] we are already on the server the next
[21:10] question is what do we do now? Well our
[21:13] job is to render the react tree.
[21:15] Basically generate the entire page and
[21:17] send it back to the client. But here
[21:20] comes another important question. Do you
[21:22] really need to render it from scratch
[21:24] every single time? Because rendering
[21:27] also comes with a performance cost right
[21:30] now. Imagine a situation where the exact
[21:32] same page was already requested and
[21:35] rendered before by another user. In that
[21:37] case, does it really make sense to
[21:40] render it all over again? Probably not.
[21:43] And that's where NexJS asks another
[21:45] caching layer for help. This one is
[21:48] called full root cache. Here's how it
[21:51] works. On the server side, when NexJS
[21:54] detects that a certain page might get
[21:56] rendered frequently, it caches the full
[21:59] rendered version of that page to make
[22:01] things faster. So next time someone
[22:04] requests the same page, NextJS doesn't
[22:07] have to render it again from scratch. It
[22:10] just serves the cached version
[22:12] instantly. That entire process is known
[22:15] as full root caching. Clear? Now, now
[22:18] imagine the answer to that last question
[22:20] was yes. Meaning yes, we do need to
[22:24] render the React components. Why?
[22:26] Because this page hasn't been
[22:28] pre-rendered or generated on the server
[22:30] yet. So at this point, rendering begins
[22:34] and we dive deep into the React tree.
[22:37] Inside this tree, different components
[22:39] may be performing data fetching. Some might
[22:41] be using the fetch API and others might
[22:44] be quering a database directly. Now here
[22:47] comes the next question. Do you really
[22:49] need to perform all these fetch requests
[22:52] or is there a chance the result of these
[22:54] requests are already cached? This time
[22:58] nextJ turns to a different caching
[23:00] strategy for the answer and it's called
[23:02] request memorization. So what does this
[23:05] strategy actually do? Let's say you have
[23:08] a page with five React components.
[23:11] They're nested parent child style and
[23:13] maybe three of them are doing data
[23:16] fetching. Now, here's the thing. If two
[23:19] or more of those components are making
[23:21] similar or identical requests, then
[23:23] there's no point hitting the server over
[23:25] and over again for the same data. Right?
[23:29] Instead, nextJS will remember the result
[23:31] of the first fetch and reuse that result
[23:33] for the other components. That's exactly
[23:36] what request memorization does. It keeps
[23:39] track of previously made fetch requests
[23:41] and their responses. So, nextJS
[23:44] basically asks the request memorization
[23:46] cache layer, hey, do you already have
[23:49] the result for this request? If yes,
[23:52] just give it to me right now. If not, I
[23:54] will go ahead and make the request from
[23:56] scratch. And if the answer is no,
[23:59] meaning it's a cash miss, then yes,
[24:02] Nex.js has no choice but to hit the
[24:04] server, query the database, or call an
[24:06] external API to fetch fresh data. Now,
[24:09] here comes another super important
[24:11] question. Does NexJS immediately hit the
[24:14] database or external API or does it
[24:17] check one more time before doing that
[24:19] just to be sure the network call or
[24:21] query is even necessary? Well, NexJS
[24:24] asks this question to yet another
[24:26] caching layer and it's called data
[24:28] cache. So, what does data cache do?
[24:31] Let's say a piece of data was already
[24:34] fetched earlier and the result of that
[24:36] fetch was stored or memorized somewhere
[24:38] on the server. Now if we request that
[24:41] same exact data again, there's really no
[24:44] need to make another API call or
[24:46] database query. Right? We can just reuse
[24:49] the cache result and that's exactly what
[24:52] the data cache handles at this point.
[24:55] NextJS goes to the data cache and asks
[24:58] hey do you already have the result of
[25:00] this query or API call. If the answer is
[25:03] yes then boom the cached result is
[25:06] returned directly. This boosts
[25:08] performance a lot. No need for another
[25:11] fetch. But if the answer is no meaning
[25:14] it's a data cache miss.NextJS has no
[25:17] choice but to go to the original data
[25:19] source, maybe a MySQL database, MongoDB
[25:22] or an external API and fetch fresh data
[25:25] from there. Once the data is fetched,
[25:28] NextJS then saves that result back into
[25:30] the data cache. So that next time if
[25:33] someone asks for the same data, it
[25:35] doesn't have to hit the source again. I
[25:37] hope by now you have got a clear picture
[25:40] of how this entire flow works.

