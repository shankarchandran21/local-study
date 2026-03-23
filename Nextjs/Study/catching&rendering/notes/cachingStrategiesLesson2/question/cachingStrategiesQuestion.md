[17:28] need to start by asking ourselves very
[17:30] few important questions. And while we
[17:33] explore the answers to those questions,
[17:35] we will naturally uncover how the entire
[17:38] caching system in NestJS actually works.
[17:42] So let's begin. First, imagine a user
[17:45] makes a request from their browser. They
[17:48] are trying to access a specific page or
[17:50] some data from the server. Now, here's
[17:53] the first question. Does that request
[17:55] actually need to go to the server at
[17:57] all? Because think about it. What if the
[18:01] user's desired page or data is already
[18:04] cached inside the browser? In that case,
[18:06] we don't even need to hit the server,
[18:09] right? Okay, fine. Let's say the request
[18:12] does go to the server. Next question.
[18:15] Does the server really need to render
[18:17] the page again? Because if the server
[18:20] already rendered that page earlier and
[18:22] stored it somewhere, maybe we can just
[18:25] reuse it. So again, no need to rerender.
[18:30] Now let's assume the page was not
[18:32] pre-rendered. So yes, we do need to
[18:35] render it on the server. But now the
[18:37] question is to render this page, do we
[18:41] really need to fetch new data from the
[18:43] database or an API again? What if we had
[18:45] fetched that same data earlier and the
[18:48] response was already saved or cached?
[18:51] Couldn't we just reuse it and avoid
[18:53] making an extra network call? And if we
[18:55] really do need to fetch the data again,
[18:58] here's one final question. Do we
[19:00] absolutely have to hit the data source
[19:02] again to get fresh data? Or maybe the
[19:04] data is already cached somewhere on the
[19:06] server side and we could just use that
[19:09] to render the page.