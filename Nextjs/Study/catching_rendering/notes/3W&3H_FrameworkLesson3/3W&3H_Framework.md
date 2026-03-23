# we need to first understand something called the 3W and 3H framework.

So what is the 3W and 3H framework? This is a simple but powerful mental model that helps 
us break down any caching strategy in a structured way. According to this framework, we need 
to ask three questions starting with W and three more starting with H.

Now, here's the important part. Whenever you are designing any kind of caching system, whether 
it's for a small project or a massive enterprise architecture, you must follow this framework and 
try to answer these six questions. And guess what? NexJS also built their caching system by following 
this exact same thought process.

## Let's begin with the W questions:

    #### 1.what is the strategy?
        In other words, what type of caching are we using? Is it memory cache, file system cache, external CDN
        cache, or maybe database level caching?

    #### 2.where is the cache stored?
         Where exactly is the cache data being stored on the local file system, in the RAM, in radius or in a third party 
         storage service like S3 bucket or a CDN?

    #### 3.why caching or what's the benefit of this strategy?
         What do we gain by using this strategy? Is it better speed, optimize resources, reduce server costs, or maybe an 
         architectural advantage?

##  Now, let's move on to the H questions.

    #### 4.How long is the cache valid?

         This is also called the cache duration. For how long will the cache data remain valid? Is it for a few seconds, a 
         few minutes, hours or maybe indefinitely? 
    
    #### 5. how to refresh or revalidate the cache? 
         This is what we call cache revalidation. If the cache data becomes outdated, how can we refresh or revalidate it to 
         ensure the user sees the most up-to-date data content?

    #### 6.how to ignore, opt out, or invalidate this caching strategy?
         If in a certain situation or for a specific request, we want to bypass the cache, how do we do that? How can we manually skip 
         or invalidate the cash?



# Here is the exact full form:

## ✅ 3W = What, Where, Why

**What — What is the strategy?**

**Where — Where is the cache stored?**

**Why — Why are we using this caching strategy?**

## ✅ 3H = How long, How to refresh, How to ignore

**How long — How long is the cache valid?**

**How to refresh — How to revalidate or update the cache?**

**How to ignore — How to bypass or invalidate the cache?**