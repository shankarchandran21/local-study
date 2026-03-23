# Next.js Interview Questions & Answers — Beginner to Advanced

> **A comprehensive technical interview preparation guide for frontend and fullstack developers**

---

## Table of Contents

1. [Introduction to Next.js](#1-introduction-to-nextjs)
2. [Beginner Questions](#2-beginner-questions)
3. [Intermediate Questions](#3-intermediate-questions)
4. [Advanced Questions](#4-advanced-questions)
5. [Scenario-Based / Real-World Interview Problems](#5-scenario-based--real-world-interview-problems)
6. [Coding Challenges with Solutions](#6-coding-challenges-with-solutions)
7. [System Design Questions](#7-system-design-questions)
8. [Performance Optimization & Best Practices](#8-performance-optimization--best-practices)
9. [Common Interview Mistakes & Tips](#9-common-interview-mistakes--tips)
10. [PDF Export Instructions](#10-pdf-export-instructions)

---

## 1. Introduction to Next.js

Next.js is a React-based fullstack framework developed and maintained by Vercel. It extends React with powerful features including server-side rendering, static site generation, file-based routing, API routes, middleware, and a rich optimization layer built on top of Webpack and Turbopack.

### Why Next.js Matters in Interviews

Next.js has become the dominant React meta-framework in enterprise and startup environments alike. Interviewers assess candidates not just on syntax familiarity but on their understanding of **when and why** to choose specific rendering strategies, how to architect scalable data-fetching patterns, and how to reason about performance trade-offs in production systems.

### Key Version Milestones

| Version | Key Feature Introduced |
|---------|----------------------|
| 9.x | API Routes, Dynamic Routing |
| 10.x | Image Optimization, Internationalization |
| 12.x | Middleware, React 18 support (partial) |
| 13.x | App Router (beta), Server Components, Layouts |
| 14.x | App Router (stable), Server Actions (stable), Partial Prerendering (beta) |
| 15.x | Partial Prerendering (stable improvements), enhanced caching controls |

### Pages Router vs App Router — At a Glance

| Feature | Pages Router | App Router |
|---------|-------------|------------|
| Directory | `/pages` | `/app` |
| Default component type | Client Component | Server Component |
| Layouts | `_app.js`, `_document.js` | Nested `layout.tsx` files |
| Data fetching | `getServerSideProps`, `getStaticProps` | `async` component functions, `fetch` with cache options |
| Streaming | Limited | Native with Suspense |
| Server Actions | Not supported | Supported |
| Middleware | Supported | Supported |
| Maturity | Production-stable (legacy) | Production-stable (current) |

---

## 2. Beginner Questions

---

### Q1. What is Next.js and how does it differ from plain React?

**Answer:**

React is a UI library focused solely on rendering components in the browser. It provides no opinions on routing, data fetching, or server rendering. Next.js is a framework built on React that provides:

- **File-based routing** — the file system defines URL structure
- **Multiple rendering modes** — SSR, SSG, ISR, and CSR
- **API routes / Route Handlers** — fullstack capability within one project
- **Built-in optimizations** — image optimization, font optimization, script loading
- **Server Components** — components that run exclusively on the server

**Why it matters in interviews:** Interviewers want to confirm you understand that Next.js is an opinionated abstraction over React, not a replacement. React handles the component model; Next.js handles the infrastructure.

---

### Q2. What are the rendering strategies available in Next.js?

**Answer:**

Next.js supports four rendering strategies:

**1. Static Site Generation (SSG)**
Pages are rendered at build time and served as static HTML. Ideal for content that does not change frequently.

```tsx
// Pages Router
export async function getStaticProps() {
  const data = await fetchBlogPosts();
  return { props: { data } };
}

// App Router (equivalent)
// async Server Component — by default fetches are cached
async function BlogPage() {
  const data = await fetch('https://api.example.com/posts', {
    cache: 'force-cache', // SSG behavior
  }).then(r => r.json());
  return <PostList posts={data} />;
}
```

**2. Server-Side Rendering (SSR)**
Pages are rendered on each request. Ideal for personalized or frequently changing content.

```tsx
// Pages Router
export async function getServerSideProps(context) {
  const data = await fetchUserDashboard(context.req.cookies.token);
  return { props: { data } };
}

// App Router
async function DashboardPage() {
  const data = await fetch('https://api.example.com/dashboard', {
    cache: 'no-store', // SSR behavior
  }).then(r => r.json());
  return <Dashboard data={data} />;
}
```

**3. Incremental Static Regeneration (ISR)**
Static pages are regenerated at a defined interval without a full rebuild.

```tsx
// Pages Router
export async function getStaticProps() {
  const data = await fetchProducts();
  return {
    props: { data },
    revalidate: 60, // regenerate every 60 seconds
  };
}

// App Router
async function ProductsPage() {
  const data = await fetch('https://api.example.com/products', {
    next: { revalidate: 60 },
  }).then(r => r.json());
  return <ProductList products={data} />;
}
```

**4. Client-Side Rendering (CSR)**
Data is fetched in the browser after the page loads. Use for private dashboards or highly interactive UIs.

```tsx
'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/data').then(r => r.json()).then(setData);
  }, []);
  return data ? <Chart data={data} /> : <Spinner />;
}
```

**Comparison Table:**

| Strategy | Render Time | Data Freshness | Use Case |
|----------|-------------|----------------|----------|
| SSG | Build | Stale until rebuild | Blog, marketing pages |
| SSR | Per request | Always fresh | Dashboards, personalized pages |
| ISR | Build + interval | Periodically fresh | E-commerce, news |
| CSR | Client runtime | On demand | Private data, interactive UIs |

---

### Q3. How does file-based routing work in Next.js?

**Answer:**

Next.js maps the file system to URL routes. Any file inside the `/app` (App Router) or `/pages` (Pages Router) directory becomes a publicly accessible route.

**App Router conventions:**

```
app/
  page.tsx              → /
  about/
    page.tsx            → /about
  blog/
    [slug]/
      page.tsx          → /blog/:slug
    page.tsx            → /blog
  (marketing)/
    landing/
      page.tsx          → /landing  (group doesn't appear in URL)
```

**Pages Router conventions:**

```
pages/
  index.tsx             → /
  about.tsx             → /about
  blog/
    index.tsx           → /blog
    [slug].tsx          → /blog/:slug
    [...slug].tsx       → /blog/a/b/c (catch-all)
    [[...slug]].tsx     → /blog (optional catch-all)
```

**Dynamic routes example:**

```tsx
// app/blog/[slug]/page.tsx
interface Props {
  params: { slug: string };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPost(params.slug);
  return <article>{post.content}</article>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}
```

---

### Q4. What is the difference between `Link` and `<a>` in Next.js?

**Answer:**

The `<Link>` component from `next/link` enables **client-side navigation** without a full page reload. It prefetches linked pages in the background when they appear in the viewport (in production builds), making navigation instant.

```tsx
import Link from 'next/link';

// Correct — client-side navigation, prefetching enabled
<Link href="/about">About</Link>

// Incorrect for internal links — triggers full page reload
<a href="/about">About</a>
```

**Key behaviors:**
- Wraps an `<a>` tag under the hood (Next.js 13+)
- `prefetch` prop defaults to `true` in production
- Supports `replace`, `scroll`, `shallow`, and `locale` props

**Why it matters:** Using `<a>` for internal links is a common beginner mistake that bypasses Next.js's navigation optimizations.

---

### Q5. What is the `Image` component in Next.js and why should you use it?

**Answer:**

`next/image` provides automatic image optimization:

- Lazy loading by default
- Automatic WebP/AVIF conversion based on browser support
- Responsive sizing via `srcset`
- Prevents Cumulative Layout Shift (CLS) via required `width`/`height` or `fill`

```tsx
import Image from 'next/image';

// Fixed dimensions
<Image
  src="/hero.jpg"
  alt="Hero image"
  width={1200}
  height={630}
  priority // load eagerly — use for above-the-fold images
/>

// Fill container
<div style={{ position: 'relative', height: '400px' }}>
  <Image
    src="/banner.jpg"
    alt="Banner"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>

// Remote images — must configure domains
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.example.com' },
    ],
  },
};
```

---

### Q6. What is `_app.js` and `_document.js` in the Pages Router?

**Answer:**

**`_app.js`** wraps every page component. It is used to:
- Persist layouts across page navigations
- Inject global styles
- Provide context (Redux store, theme, auth)

```tsx
// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { ThemeProvider } from '../context/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

**`_document.js`** customizes the HTML shell rendered by the server. It is used to:
- Modify `<html>`, `<head>`, and `<body>` tags
- Inject server-rendered CSS (e.g., styled-components)
- Add custom `lang` attribute

```tsx
// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

---

### Q7. How do you create an API route in Next.js?

**Answer:**

**Pages Router — API Routes:**

```tsx
// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ users: [] });
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    // create user logic
    res.status(201).json({ id: '1', name, email });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```

**App Router — Route Handlers:**

```tsx
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const users = await db.users.findMany();
  return NextResponse.json({ users });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = await db.users.create({ data: body });
  return NextResponse.json(user, { status: 201 });
}
```

---

### Q8. What is `getStaticPaths` and when is it required?

**Answer:**

`getStaticPaths` is required when using `getStaticProps` with **dynamic routes** in the Pages Router. It tells Next.js which paths to pre-render at build time.

```tsx
// pages/blog/[slug].tsx
export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: false,       // 404 for paths not returned
    // fallback: true      // render on-demand, show loading state
    // fallback: 'blocking' // render on-demand, SSR-like behavior
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);
  return { props: { post } };
}
```

**Fallback behavior:**

| `fallback` value | Behavior for unknown paths |
|-----------------|---------------------------|
| `false` | Returns 404 |
| `true` | Returns skeleton page, generates in background |
| `'blocking'` | Waits for server generation, then caches |

---

### Q9. How does environment variable handling work in Next.js?

**Answer:**

```bash
# .env.local (not committed to git)
DATABASE_URL=postgres://...
NEXT_PUBLIC_API_URL=https://api.example.com
STRIPE_SECRET_KEY=sk_...
```

- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser bundle
- All other variables are server-only
- Never prefix sensitive keys with `NEXT_PUBLIC_`

```tsx
// Server-side access only
const db = new Client(process.env.DATABASE_URL);

// Available on client and server
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

**File loading order (highest to lowest priority):**
1. `.env.$(NODE_ENV).local`
2. `.env.local`
3. `.env.$(NODE_ENV)`
4. `.env`

---

### Q10. What is the purpose of `next.config.js`?

**Answer:**

`next.config.js` is the primary configuration file for customizing Next.js behavior:

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.example.com' },
    ],
  },
  redirects: async () => [
    {
      source: '/old-path',
      destination: '/new-path',
      permanent: true, // 308 redirect
    },
  ],
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: 'https://backend.example.com/:path*',
    },
  ],
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
      ],
    },
  ],
  experimental: {
    serverActions: { allowedOrigins: ['localhost:3000'] },
  },
};

module.exports = nextConfig;
```

---

## 3. Intermediate Questions

---

### Q11. Explain Server Components vs Client Components in the App Router.

**Answer:**

The App Router introduces React Server Components (RSC) as the default. This fundamentally changes how you think about component architecture.

**Server Components:**
- Render on the server only — never shipped to the browser
- Can directly access databases, filesystems, secrets
- Cannot use hooks, browser APIs, or event handlers
- Reduce JavaScript bundle size significantly

**Client Components:**
- Marked with `'use client'` directive at the top of the file
- Run in the browser (and also on the server for initial HTML)
- Can use hooks, event handlers, and browser APIs

```tsx
// app/components/UserProfile.tsx — Server Component (default)
import { db } from '@/lib/db';

async function UserProfile({ userId }: { userId: string }) {
  // Direct database access — no API call needed
  const user = await db.user.findUnique({ where: { id: userId } });
  return (
    <div>
      <h1>{user.name}</h1>
      <LikeButton userId={userId} /> {/* Client Component */}
    </div>
  );
}
```

```tsx
// app/components/LikeButton.tsx — Client Component
'use client';
import { useState } from 'react';

export function LikeButton({ userId }: { userId: string }) {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '❤️' : '🤍'}
    </button>
  );
}
```

**Component boundary rules:**
- Server Components can import and render Client Components
- Client Components **cannot** import Server Components (but can receive them as `children` props)
- Passing Server Component output as `children` to a Client Component is valid

```tsx
// Valid pattern — Server Component as children
// app/layout.tsx (Server Component)
import { Sidebar } from './Sidebar'; // Client Component

export default function Layout({ children }) {
  return (
    <div>
      <Sidebar>{children}</Sidebar> {/* children is server-rendered */}
    </div>
  );
}
```

**Why it matters:** This is one of the most heavily tested concepts in Next.js 13+ interviews. Expect questions about where to place the `'use client'` boundary.

---

### Q12. How do Layouts work in the App Router?

**Answer:**

Layouts in the App Router are defined by creating a `layout.tsx` file in any route segment. They persist across navigations — they are not unmounted when child routes change.

```tsx
// app/layout.tsx — Root Layout (required)
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'My App', template: '%s | My App' },
  description: 'My Next.js application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

```tsx
// app/dashboard/layout.tsx — Nested Layout
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <DashboardSidebar />
      <section className="flex-1">{children}</section>
    </div>
  );
}
```

**Route Group Layouts** allow sharing layouts without affecting URL:

```
app/
  (shop)/
    layout.tsx    ← shared by products and cart
    products/
      page.tsx    → /products
    cart/
      page.tsx    → /cart
  (marketing)/
    layout.tsx    ← different layout
    home/
      page.tsx    → /home
```

**Special files in the App Router:**

| File | Purpose |
|------|---------|
| `layout.tsx` | Shared UI for a segment and its children |
| `page.tsx` | Unique UI for a route, makes route publicly accessible |
| `loading.tsx` | Instant loading UI using Suspense |
| `error.tsx` | Error UI boundary |
| `not-found.tsx` | 404 UI |
| `template.tsx` | Like layout but re-mounts on navigation |
| `default.tsx` | Fallback for parallel routes |

---

### Q13. What is Middleware in Next.js and what are its use cases?

**Answer:**

Middleware runs before a request is completed. It executes at the **Edge Runtime**, making it extremely fast and globally distributed.

```tsx
// middleware.ts (root of project)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  const isAuthRoute = request.nextUrl.pathname.startsWith('/dashboard');

  if (isAuthRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Add custom headers
  const response = NextResponse.next();
  response.headers.set('x-custom-header', 'my-value');
  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files and API
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
```

**Common use cases:**
- Authentication and authorization redirects
- A/B testing (rewrite to different pages)
- Internationalization / locale detection
- Rate limiting (edge-level)
- Geolocation-based routing
- Bot detection
- Security header injection

**Geolocation example:**

```tsx
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'US';
  const locale = countryToLocale[country] || 'en';

  if (!request.nextUrl.pathname.startsWith(`/${locale}`)) {
    return NextResponse.redirect(
      new URL(`/${locale}${request.nextUrl.pathname}`, request.url)
    );
  }
}
```

**Important limitations:**
- Middleware runs in the Edge Runtime — no Node.js APIs
- Cannot import native Node.js modules
- Avoid heavy computation — it runs on every matching request

---

### Q14. How does caching work in Next.js App Router?

**Answer:**

Next.js has a **multi-layered caching system** in the App Router:

**1. Request Memoization**
The same `fetch` URL called multiple times in one render tree is automatically deduplicated:

```tsx
// Both components call the same URL — only one network request is made
async function UserName({ id }) {
  const user = await getUser(id); // fetch internally
  return <span>{user.name}</span>;
}

async function UserAvatar({ id }) {
  const user = await getUser(id); // same fetch — uses memoized result
  return <img src={user.avatar} />;
}

async function getUser(id: string) {
  const res = await fetch(`https://api.example.com/users/${id}`);
  return res.json();
}
```

**2. Data Cache**
Persists `fetch` results across requests and deployments:

```tsx
// Cached indefinitely (until manually revalidated)
fetch(url, { cache: 'force-cache' });

// Not cached — fresh on every request
fetch(url, { cache: 'no-store' });

// Cached, revalidate every N seconds
fetch(url, { next: { revalidate: 3600 } });

// Tagged cache — revalidate by tag
fetch(url, { next: { tags: ['products'] } });
```

**3. Full Route Cache**
Static routes are rendered and cached on the server at build time.

**4. Router Cache (Client-side)**
The browser caches visited route segments in memory. This cache is cleared on full page refresh.

**On-demand revalidation:**

```tsx
// app/api/revalidate/route.ts
import { revalidateTag, revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { tag, secret } = await req.json();

  if (secret !== process.env.REVALIDATION_SECRET) {
    return new Response('Unauthorized', { status: 401 });
  }

  revalidateTag(tag);         // Revalidate by cache tag
  // revalidatePath('/blog'); // Or revalidate a specific path

  return Response.json({ revalidated: true });
}
```

---

### Q15. How do you implement authentication in Next.js?

**Answer:**

Authentication in Next.js involves several layers: session management, route protection, and UI-level guards.

**Pattern 1: NextAuth.js (Auth.js v5)**

```tsx
// auth.ts
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const user = await verifyUser(credentials.email, credentials.password);
        return user ?? null;
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: { ...session.user, id: token.sub },
    }),
  },
});
```

```tsx
// app/api/auth/[...nextauth]/route.ts
import { handlers } from '@/auth';
export const { GET, POST } = handlers;
```

```tsx
// middleware.ts — Protect routes
import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
});
```

```tsx
// Server Component — access session
import { auth } from '@/auth';

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect('/login');
  return <h1>Welcome, {session.user.name}</h1>;
}
```

**Pattern 2: JWT-based Custom Auth**

```tsx
// app/api/login/route.ts
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = await authenticateUser(email, password);
  if (!user) return Response.json({ error: 'Invalid credentials' }, { status: 401 });

  const token = await new SignJWT({ sub: user.id, email: user.email })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));

  cookies().set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
  });

  return Response.json({ success: true });
}
```

---

### Q16. How does the `useRouter` hook differ between the Pages and App Router?

**Answer:**

The two routers have **different imports**:

```tsx
// Pages Router
import { useRouter } from 'next/router';

// App Router
import { useRouter } from 'next/navigation';
```

**Pages Router `useRouter`:**

```tsx
'use client'; // not needed in Pages Router
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const { slug } = router.query; // dynamic route params
  const handleSubmit = () => router.push('/success');
  const handleBack = () => router.back();
  return <button onClick={handleSubmit}>Submit</button>;
}
```

**App Router navigation hooks:**

```tsx
'use client';
import { useRouter, usePathname, useSearchParams, useParams } from 'next/navigation';

function MyComponent() {
  const router = useRouter();    // for navigation
  const pathname = usePathname(); // current path
  const searchParams = useSearchParams(); // URL search params
  const params = useParams();    // dynamic route params

  return (
    <button onClick={() => router.push('/success')}>
      Submit
    </button>
  );
}
```

**Key difference:** In the App Router, `useRouter` no longer provides access to route params or query — those are provided by separate hooks.

---

### Q17. What are Parallel Routes and Intercepting Routes?

**Answer:**

**Parallel Routes** allow rendering multiple pages in the same layout simultaneously using **slots** (prefixed with `@`):

```
app/
  layout.tsx
  @dashboard/
    page.tsx
  @analytics/
    page.tsx
  page.tsx
```

```tsx
// app/layout.tsx
export default function Layout({
  children,
  dashboard,
  analytics,
}: {
  children: React.ReactNode;
  dashboard: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div>
      <div className="main">{children}</div>
      <div className="sidebar">
        {dashboard}
        {analytics}
      </div>
    </div>
  );
}
```

**Intercepting Routes** allow intercepting a navigation and showing a modal overlay instead of navigating away:

```
app/
  feed/
    page.tsx
  photo/
    [id]/
      page.tsx        ← full page view
  (.)photo/
    [id]/
      page.tsx        ← intercepted modal view (same level)
```

This enables the Instagram-style photo modal: clicking a photo shows a modal while the URL updates to `/photo/123`; refreshing or navigating directly shows the full-page view.

---

### Q18. How does Streaming and Suspense work in Next.js?

**Answer:**

Streaming allows sending HTML to the browser progressively — the page shell renders immediately while slower data fetches complete in the background.

**`loading.tsx` for automatic Suspense:**

```tsx
// app/dashboard/loading.tsx
export default function Loading() {
  return <DashboardSkeleton />;
}

// app/dashboard/page.tsx — automatically wrapped in Suspense
export default async function DashboardPage() {
  const data = await fetchSlowData(); // this suspends
  return <Dashboard data={data} />;
}
```

**Manual Suspense boundaries for granular streaming:**

```tsx
// app/dashboard/page.tsx
import { Suspense } from 'react';

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Renders immediately */}
      <StaticHeader />

      {/* Streams in when ready */}
      <Suspense fallback={<RevenueCardSkeleton />}>
        <RevenueCard /> {/* async component */}
      </Suspense>

      <Suspense fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable /> {/* another async component */}
      </Suspense>
    </div>
  );
}
```

**`AsyncRevenueCard` example:**

```tsx
async function RevenueCard() {
  const revenue = await fetchRevenue(); // slow query
  return <Card value={revenue} />;
}
```

**Why it matters:** Streaming prevents a slow data source from blocking the entire page. Each `Suspense` boundary is independently streamed.

---

### Q19. What are Server Actions and how do you use them?

**Answer:**

Server Actions are asynchronous functions that run on the server. They can be invoked from Client Components and replace the need for API routes in many CRUD scenarios.

```tsx
// app/actions/users.ts
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  // Validation
  if (!email.includes('@')) {
    return { error: 'Invalid email' };
  }

  await db.user.create({ data: { name, email } });
  revalidatePath('/users');
  redirect('/users');
}

export async function deleteUser(id: string) {
  await db.user.delete({ where: { id } });
  revalidatePath('/users');
}
```

**Using Server Actions in a form:**

```tsx
// app/users/new/page.tsx — Server Component
import { createUser } from '../actions/users';

export default function NewUserPage() {
  return (
    <form action={createUser}>
      <input name="name" type="text" required />
      <input name="email" type="email" required />
      <button type="submit">Create User</button>
    </form>
  );
}
```

**Using Server Actions in a Client Component with `useFormState`:**

```tsx
'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { createUser } from '../actions/users';

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button type="submit" disabled={pending}>{pending ? 'Creating...' : 'Create'}</button>;
}

export default function UserForm() {
  const [state, formAction] = useFormState(createUser, null);
  return (
    <form action={formAction}>
      {state?.error && <p className="error">{state.error}</p>}
      <input name="name" type="text" required />
      <input name="email" type="email" required />
      <SubmitButton />
    </form>
  );
}
```

**Programmatic invocation:**

```tsx
'use client';
import { deleteUser } from '../actions/users';

export function DeleteButton({ userId }: { userId: string }) {
  return (
    <button onClick={() => deleteUser(userId)}>
      Delete
    </button>
  );
}
```

---

### Q20. How does error handling work in the App Router?

**Answer:**

The App Router provides file-based error handling at each route segment level.

```tsx
// app/dashboard/error.tsx
'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

```tsx
// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>404 — Page Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  );
}
```

**Triggering not-found:**

```tsx
import { notFound } from 'next/navigation';

async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  if (!product) notFound(); // renders not-found.tsx
  return <ProductDetail product={product} />;
}
```

**Global error handling:**

```tsx
// app/global-error.tsx — catches errors in root layout
'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Application Error</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
```

---

## 4. Advanced Questions

---

### Q21. Explain the Next.js compilation pipeline and how Turbopack differs from Webpack.

**Answer:**

**Next.js Compilation Pipeline:**

1. **SWC Compiler** — Rust-based, replaces Babel for transpilation. ~17x faster than Babel for transforms.
2. **Bundler** — Webpack (default) or Turbopack (`next dev --turbo`)
3. **Code splitting** — Automatic per-route code splitting
4. **Tree shaking** — Removes unused exports
5. **Minification** — SWC minifier replaces Terser

**Turbopack vs Webpack:**

| Aspect | Webpack | Turbopack |
|--------|---------|-----------|
| Language | JavaScript | Rust |
| Architecture | Graph-based, full rebuild | Incremental computation engine |
| Dev server startup | Slower (full module graph) | Faster (lazy compilation) |
| HMR speed | Seconds for large apps | Milliseconds |
| Production builds | Battle-tested | Gaining stability |
| Custom config | Extensive ecosystem | Limited customization (early) |

**How Turbopack achieves speed:**
- Compiles only what the browser requests (lazy)
- Uses a persistent incremental cache — unchanged modules are never recomputed
- Parallelizes work across all CPU cores with Rayon (Rust parallelism)

**Custom Webpack configuration:**

```js
// next.config.js
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add SVG support
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Add custom plugin
    if (!dev && !isServer) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }

    return config;
  },
};
```

---

### Q22. What is Partial Prerendering (PPR) in Next.js 14+?

**Answer:**

Partial Prerendering is an experimental rendering model that combines static and dynamic rendering within a single route. The **static shell** is served immediately from cache; **dynamic holes** are streamed in.

```tsx
// next.config.js
module.exports = {
  experimental: { ppr: true },
};
```

```tsx
// app/product/[id]/page.tsx
import { Suspense } from 'react';
import { staticShell, DynamicPrice, PersonalizedRecommendations } from './components';

// The static parts render at build time
// Dynamic parts are streamed in per-request
export default function ProductPage({ params }) {
  return (
    <div>
      {/* Static — served from CDN immediately */}
      <ProductHeader id={params.id} />
      <ProductImages id={params.id} />

      {/* Dynamic — streamed in per request */}
      <Suspense fallback={<PriceSkeleton />}>
        <DynamicPrice id={params.id} /> {/* real-time pricing */}
      </Suspense>

      <Suspense fallback={<RecsSkeleton />}>
        <PersonalizedRecommendations userId={getCurrentUser()} />
      </Suspense>
    </div>
  );
}
```

**Why it matters:** PPR eliminates the binary choice between a fully static or fully dynamic page. A product page can serve its HTML shell from a CDN edge in <10ms while still showing personalized, real-time content.

---

### Q23. How does the Edge Runtime work and when should you use it?

**Answer:**

The Edge Runtime is a lightweight JavaScript environment that runs on CDN edge nodes worldwide — closer to users than traditional server regions.

**Comparison:**

| Feature | Node.js Runtime | Edge Runtime |
|---------|----------------|--------------|
| Cold start | ~250ms | ~5ms |
| Max execution time | No hard limit | ~25-30 seconds |
| Node.js APIs | Full | Not available |
| Web standard APIs | Subset | Full (fetch, Request, Response, etc.) |
| npm packages | All | Limited (must be edge-compatible) |
| Streaming | Yes | Yes |

**Opting into Edge Runtime:**

```tsx
// app/api/fast-lookup/route.ts
export const runtime = 'edge';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  const result = await fetch(`https://search-api.example.com/?q=${query}`);
  return result;
}
```

```tsx
// Pages Router
export const config = {
  runtime: 'experimental-edge',
};

export default function handler(req, res) { ... }
```

**Use edge for:**
- Authentication middleware
- Geolocation-based routing
- A/B testing
- Simple API proxies and transformations

**Avoid edge for:**
- Heavy computation
- Database connections (unless edge-compatible like PlanetScale HTTP API, Neon)
- Node.js-specific packages

---

### Q24. How do you implement advanced caching strategies with ISR and on-demand revalidation?

**Answer:**

**Time-based ISR with tags:**

```tsx
// app/products/page.tsx
async function ProductsPage() {
  const products = await fetch('https://api.example.com/products', {
    next: {
      revalidate: 3600,
      tags: ['products'],
    },
  }).then(r => r.json());

  return <ProductGrid products={products} />;
}
```

**On-demand revalidation webhook:**

```tsx
// app/api/webhooks/cms/route.ts
import { revalidateTag, revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

const WEBHOOK_SECRET = process.env.CMS_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  // Verify webhook authenticity
  const signature = req.headers.get('x-webhook-signature');
  if (!verifySignature(signature, WEBHOOK_SECRET)) {
    return new Response('Unauthorized', { status: 401 });
  }

  const payload = await req.json();
  const { type, slug, collection } = payload;

  if (collection === 'products') {
    revalidateTag('products');
    if (slug) revalidatePath(`/products/${slug}`);
  }

  if (collection === 'blog') {
    revalidateTag('posts');
  }

  return Response.json({
    revalidated: true,
    timestamp: new Date().toISOString(),
  });
}
```

**`unstable_cache` for non-fetch data sources:**

```tsx
import { unstable_cache } from 'next/cache';

const getCachedUser = unstable_cache(
  async (userId: string) => {
    return db.user.findUnique({ where: { id: userId } });
  },
  ['user'], // cache key parts
  {
    tags: ['users'],
    revalidate: 3600,
  }
);

export async function UserCard({ userId }: { userId: string }) {
  const user = await getCachedUser(userId);
  return <div>{user?.name}</div>;
}
```

---

### Q25. How do you handle SEO in Next.js?

**Answer:**

**Metadata API (App Router):**

```tsx
// app/blog/[slug]/page.tsx
import type { Metadata, ResolvingMetadata } from 'next';

interface Props {
  params: { slug: string };
}

// Static metadata
export const metadata: Metadata = {
  title: 'My Blog',
};

// Dynamic metadata
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params.slug);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `https://mysite.com/blog/${params.slug}`,
    },
  };
}
```

**Sitemap generation:**

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const products = await getAllProducts();

  const postUrls = posts.map(post => ({
    url: `https://mysite.com/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: 'https://mysite.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...postUrls,
  ];
}
```

**Robots.txt:**

```tsx
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
    ],
    sitemap: 'https://mysite.com/sitemap.xml',
  };
}
```

**JSON-LD Structured Data:**

```tsx
// app/blog/[slug]/page.tsx
export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    author: { '@type': 'Person', name: post.author.name },
    datePublished: post.publishedAt,
    image: post.coverImage,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>{post.content}</article>
    </>
  );
}
```

---

### Q26. Explain how to implement internationalization (i18n) in Next.js.

**Answer:**

**App Router i18n (manual approach with middleware):**

```tsx
// middleware.ts
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'fr', 'de', 'ja'];
const defaultLocale = 'en';

function getLocale(request: NextRequest) {
  const headers = { 'accept-language': request.headers.get('accept-language') || '' };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hasLocale = locales.some(
    l => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );

  if (!hasLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}
```

```
app/
  [lang]/
    layout.tsx
    page.tsx
    about/
      page.tsx
  dictionaries/
    en.json
    fr.json
```

```tsx
// app/[lang]/layout.tsx
import { getDictionary } from '../dictionaries';

export default async function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
```

**Pages Router built-in i18n:**

```js
// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
    localeDetection: true,
  },
};
```

```tsx
// pages/about.tsx
import { useRouter } from 'next/router';

export default function About() {
  const { locale, locales, asPath } = useRouter();
  return (
    <div>
      <p>Current locale: {locale}</p>
      {locales.map(l => (
        <Link href={asPath} locale={l} key={l}>{l}</Link>
      ))}
    </div>
  );
}
```

---

### Q27. How do you implement optimistic updates with Server Actions?

**Answer:**

```tsx
'use client';
import { useOptimistic, useTransition } from 'react';
import { toggleLike } from '../actions';

interface Post {
  id: string;
  title: string;
  likes: number;
  isLiked: boolean;
}

export function LikeButton({ post }: { post: Post }) {
  const [isPending, startTransition] = useTransition();
  const [optimisticPost, updateOptimistic] = useOptimistic(
    post,
    (state: Post, liked: boolean) => ({
      ...state,
      isLiked: liked,
      likes: liked ? state.likes + 1 : state.likes - 1,
    })
  );

  const handleLike = () => {
    startTransition(async () => {
      // Optimistically update UI immediately
      updateOptimistic(!optimisticPost.isLiked);
      // Then perform the actual server action
      await toggleLike(post.id);
    });
  };

  return (
    <button onClick={handleLike} disabled={isPending}>
      {optimisticPost.isLiked ? '❤️' : '🤍'} {optimisticPost.likes}
    </button>
  );
}
```

---

### Q28. How do you handle file uploads in Next.js?

**Answer:**

**Route Handler with FormData:**

```tsx
// app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file received' }, { status: 400 });
  }

  // Validate file type and size
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ error: 'Invalid file type' }, { status: 422 });
  }

  if (file.size > 5 * 1024 * 1024) { // 5MB limit
    return NextResponse.json({ error: 'File too large' }, { status: 422 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filename = `${Date.now()}-${file.name}`;
  const uploadPath = path.join(process.cwd(), 'public/uploads', filename);

  await writeFile(uploadPath, buffer);

  return NextResponse.json({ url: `/uploads/${filename}` });
}
```

**Upload to S3 via presigned URL (recommended for production):**

```tsx
// app/api/upload-url/route.ts
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3 = new S3Client({ region: process.env.AWS_REGION });

export async function POST(req: Request) {
  const { filename, contentType } = await req.json();
  const key = `uploads/${Date.now()}-${filename}`;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: key,
    ContentType: contentType,
  });

  const presignedUrl = await getSignedUrl(s3, command, { expiresIn: 60 });

  return Response.json({
    presignedUrl,
    publicUrl: `https://${process.env.AWS_S3_BUCKET}.s3.amazonaws.com/${key}`,
  });
}
```

```tsx
// Client-side upload to presigned URL
'use client';

async function uploadFile(file: File) {
  // 1. Get presigned URL from our API
  const { presignedUrl, publicUrl } = await fetch('/api/upload-url', {
    method: 'POST',
    body: JSON.stringify({ filename: file.name, contentType: file.type }),
    headers: { 'Content-Type': 'application/json' },
  }).then(r => r.json());

  // 2. Upload directly to S3 (doesn't go through our server)
  await fetch(presignedUrl, {
    method: 'PUT',
    body: file,
    headers: { 'Content-Type': file.type },
  });

  return publicUrl;
}
```

---

## 5. Scenario-Based / Real-World Interview Problems

---

### Scenario 1: E-commerce Product Page

**Problem:** Design a product detail page for an e-commerce site. The product information updates rarely but inventory/price changes frequently. How do you architect this?

**Solution:**

```tsx
// app/products/[id]/page.tsx
import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';

// Cached product info — revalidated on-demand via CMS webhook
const getProduct = unstable_cache(
  async (id: string) => db.product.findUnique({ where: { id } }),
  ['product'],
  { tags: ['products'] }
);

export async function generateStaticParams() {
  const products = await db.product.findMany({ select: { id: true } });
  return products.map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);
  return {
    title: product?.name,
    description: product?.description,
  };
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  if (!product) notFound();

  return (
    <div>
      <ProductImages images={product.images} />
      <ProductInfo product={product} />

      {/* Dynamic — not cached, fetched per-request */}
      <Suspense fallback={<PriceAndStockSkeleton />}>
        <PriceAndStock productId={params.id} />
      </Suspense>

      {/* Personalized recommendations — CSR */}
      <PersonalizedRecommendations productId={params.id} />
    </div>
  );
}

// Opt this specific component out of caching
async function PriceAndStock({ productId }: { productId: string }) {
  const inventory = await fetch(
    `https://inventory-api.internal/products/${productId}`,
    { cache: 'no-store' }
  ).then(r => r.json());

  return (
    <div>
      <PriceTag price={inventory.price} salePrice={inventory.salePrice} />
      <StockIndicator inStock={inventory.quantity > 0} quantity={inventory.quantity} />
      <AddToCartButton productId={productId} />
    </div>
  );
}
```

---

### Scenario 2: Multi-Tenant SaaS Dashboard

**Problem:** You're building a multi-tenant SaaS where each company has its own subdomain (`acme.app.com`, `globex.app.com`). How do you handle routing and data isolation?

**Solution:**

```tsx
// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];

  // Skip for main domain and localhost
  if (subdomain === 'www' || subdomain === 'app' || hostname.includes('localhost')) {
    return NextResponse.next();
  }

  // Rewrite to tenant-specific route
  const url = req.nextUrl.clone();
  url.pathname = `/_tenants/${subdomain}${url.pathname}`;
  return NextResponse.rewrite(url);
}
```

```
app/
  _tenants/
    [tenant]/
      layout.tsx    ← loads tenant config, injects into context
      dashboard/
        page.tsx
      settings/
        page.tsx
```

```tsx
// app/_tenants/[tenant]/layout.tsx
async function TenantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { tenant: string };
}) {
  const tenantConfig = await getTenantConfig(params.tenant);
  if (!tenantConfig) notFound();

  return (
    <TenantProvider config={tenantConfig}>
      <ThemeProvider theme={tenantConfig.theme}>
        {children}
      </ThemeProvider>
    </TenantProvider>
  );
}
```

---

### Scenario 3: Real-Time Chat Feature

**Problem:** How do you add real-time chat to a Next.js application?

**Solution:**

Next.js Route Handlers support Server-Sent Events for one-directional streaming. For full-duplex communication, use WebSockets via a separate server or a service like Pusher.

```tsx
// app/api/chat/stream/route.ts — SSE for live updates
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const roomId = searchParams.get('roomId');

  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();

      const sendEvent = (data: unknown) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
      };

      // Subscribe to message events
      const unsubscribe = messageQueue.subscribe(roomId, (message) => {
        sendEvent(message);
      });

      req.signal.addEventListener('abort', () => {
        unsubscribe();
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
```

```tsx
// app/api/chat/send/route.ts
import { sendMessage } from '../actions/chat';

export async function POST(req: Request) {
  const { roomId, content, userId } = await req.json();
  const message = await db.message.create({
    data: { roomId, content, userId, createdAt: new Date() },
  });
  messageQueue.publish(roomId, message);
  return Response.json(message);
}
```

```tsx
// Client component — chat UI
'use client';
import { useEffect, useRef, useState } from 'react';

export function ChatWindow({ roomId, userId }: { roomId: string; userId: string }) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const es = new EventSource(`/api/chat/stream?roomId=${roomId}`);
    es.onmessage = (e) => {
      setMessages(prev => [...prev, JSON.parse(e.data)]);
    };
    return () => es.close();
  }, [roomId]);

  const sendMessage = async (content: string) => {
    await fetch('/api/chat/send', {
      method: 'POST',
      body: JSON.stringify({ roomId, content, userId }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  return <ChatUI messages={messages} onSend={sendMessage} />;
}
```

---

## 6. Coding Challenges with Solutions

---

### Challenge 1: Infinite Scroll with Server Components and Client Pagination

**Requirement:** Build an infinite scroll blog list that maintains SEO (first page is SSR) and loads subsequent pages client-side.

```tsx
// app/blog/page.tsx — Server Component for initial load
import { BlogListClient } from './BlogListClient';

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page) || 1;
  const initialPosts = await getPosts({ page: 1, limit: 10 });

  return (
    <div>
      <h1>Blog</h1>
      <BlogListClient initialPosts={initialPosts.posts} hasMore={initialPosts.hasMore} />
    </div>
  );
}
```

```tsx
// app/blog/BlogListClient.tsx
'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

interface Post { id: string; title: string; excerpt: string; slug: string; }

export function BlogListClient({
  initialPosts,
  hasMore: initialHasMore,
}: {
  initialPosts: Post[];
  hasMore: boolean;
}) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const nextPage = page + 1;
    const res = await fetch(`/api/posts?page=${nextPage}&limit=10`);
    const data = await res.json();
    setPosts(prev => [...prev, ...data.posts]);
    setPage(nextPage);
    setHasMore(data.hasMore);
    setLoading(false);
  }, [loading, hasMore, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) loadMore(); },
      { threshold: 0.1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
      <div ref={loaderRef}>
        {loading && <PostsSkeleton />}
        {!hasMore && <p>No more posts</p>}
      </div>
    </>
  );
}
```

---

### Challenge 2: Type-safe API layer with Route Handlers

**Requirement:** Create a fully type-safe REST-like API layer.

```tsx
// lib/api.ts — type-safe client
type ApiResponse<T> = { data: T; error?: never } | { data?: never; error: string };

async function apiFetch<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url, {
      ...options,
      headers: { 'Content-Type': 'application/json', ...options?.headers },
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: res.statusText }));
      return { error: err.message || 'Request failed' };
    }
    const data = await res.json();
    return { data };
  } catch (e) {
    return { error: e instanceof Error ? e.message : 'Unknown error' };
  }
}

// Type-safe API routes
interface User { id: string; name: string; email: string; }
interface CreateUserInput { name: string; email: string; }

export const api = {
  users: {
    list: () => apiFetch<User[]>('/api/users'),
    get: (id: string) => apiFetch<User>(`/api/users/${id}`),
    create: (data: CreateUserInput) =>
      apiFetch<User>('/api/users', { method: 'POST', body: JSON.stringify(data) }),
    delete: (id: string) =>
      apiFetch<void>(`/api/users/${id}`, { method: 'DELETE' }),
  },
};
```

```tsx
// Usage in a component
'use client';
import { api } from '@/lib/api';

async function handleCreateUser(data: CreateUserInput) {
  const { data: user, error } = await api.users.create(data);
  if (error) {
    toast.error(error);
    return;
  }
  toast.success(`Created user ${user.name}`);
}
```

---

### Challenge 3: Rate Limiting in Route Handlers

```tsx
// lib/rate-limit.ts
const store = new Map<string, { count: number; resetAt: number }>();

export function rateLimit({
  limit = 10,
  windowMs = 60_000,
}: {
  limit?: number;
  windowMs?: number;
}) {
  return function checkLimit(identifier: string): { success: boolean; remaining: number } {
    const now = Date.now();
    const record = store.get(identifier);

    if (!record || record.resetAt < now) {
      store.set(identifier, { count: 1, resetAt: now + windowMs });
      return { success: true, remaining: limit - 1 };
    }

    if (record.count >= limit) {
      return { success: false, remaining: 0 };
    }

    record.count++;
    return { success: true, remaining: limit - record.count };
  };
}

// Usage
// app/api/contact/route.ts
import { rateLimit } from '@/lib/rate-limit';

const limiter = rateLimit({ limit: 5, windowMs: 60_000 });

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') ?? 'anonymous';
  const { success, remaining } = limiter(ip);

  if (!success) {
    return Response.json(
      { error: 'Too many requests' },
      {
        status: 429,
        headers: { 'Retry-After': '60', 'X-RateLimit-Remaining': '0' },
      }
    );
  }

  const body = await req.json();
  await sendContactEmail(body);
  return Response.json(
    { success: true },
    { headers: { 'X-RateLimit-Remaining': String(remaining) } }
  );
}
```

---

## 7. System Design Questions

---

### Q1. Design a scalable blog platform using Next.js.

**Architecture Overview:**

```
┌─────────────────────────────────────────────────────────┐
│                     CDN (Vercel/Cloudflare)             │
│          Serves static assets & cached pages            │
└──────────────┬──────────────────────┬───────────────────┘
               │                      │
        ┌──────▼──────┐       ┌───────▼──────┐
        │  Next.js    │       │  Next.js     │
        │  (SSG/ISR)  │       │  (Edge MW)   │
        │  Blog pages │       │  Auth/Geo    │
        └──────┬──────┘       └──────────────┘
               │
     ┌─────────┼──────────────┐
     │         │              │
┌────▼───┐ ┌──▼─────┐ ┌──────▼──────┐
│Postgres│ │ Redis  │ │  S3/CDN     │
│(posts, │ │(cache, │ │  (images,   │
│authors)│ │sessions│ │  attachments│
└────────┘ └────────┘ └─────────────┘
```

**Key design decisions:**

1. **Rendering strategy:** Blog index → ISR (revalidate: 60s). Blog posts → ISR with on-demand revalidation from CMS. Author pages → SSG.

2. **Data model:**

```sql
-- Core tables
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT DEFAULT 'draft', -- draft | published | archived
  author_id UUID REFERENCES users(id),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_status_published ON posts(status, published_at DESC);
```

3. **Comment system:** Third-party (Disqus, Giscus) or custom with optimistic UI + Server Actions.

4. **Search:** Algolia or Meilisearch with incremental indexing on post publish.

5. **Scaling consideration:** Use `stale-while-revalidate` pattern — ISR with short windows for popular posts, longer windows for older content.

---

### Q2. Design a Next.js-based e-commerce checkout flow.

**Architecture:**

```tsx
// Checkout flow — multi-step with URL-based state
app/
  checkout/
    page.tsx           → /checkout (cart review)
    shipping/
      page.tsx         → /checkout/shipping
    payment/
      page.tsx         → /checkout/payment
    confirmation/
      [orderId]/
        page.tsx       → /checkout/confirmation/[orderId]
    layout.tsx         → progress indicator shared layout
```

**Cart state management (server-persisted, edge-fast):**

```tsx
// Server Action for cart mutations
'use server';
import { cookies } from 'next/headers';

export async function addToCart(productId: string, quantity: number) {
  const sessionId = cookies().get('cart-session')?.value || generateId();

  const cart = await redis.get(`cart:${sessionId}`) || { items: [] };
  const existingItem = cart.items.find(i => i.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  await redis.set(`cart:${sessionId}`, cart, { ex: 7 * 24 * 3600 });
  cookies().set('cart-session', sessionId, { httpOnly: true, maxAge: 7 * 24 * 3600 });

  revalidatePath('/cart');
}
```

---

## 8. Performance Optimization & Best Practices

---

### Bundle Analysis and Reduction

```bash
# Analyze bundle
ANALYZE=true npm run build

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({});
```

**Dynamic imports for code splitting:**

```tsx
import dynamic from 'next/dynamic';

// Split heavy component into separate chunk
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false, // disable SSR for client-only libraries
});

// Split modal that appears rarely
const AdvancedModal = dynamic(() => import('./AdvancedModal'));

export function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <HeavyChart data={data} />
      {showModal && <AdvancedModal />}
    </>
  );
}
```

---

### Font Optimization

```tsx
// app/layout.tsx
import { Inter, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

// Local font — zero network request
const customFont = localFont({
  src: './fonts/CustomFont.woff2',
  variable: '--font-custom',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

---

### Core Web Vitals Optimization

**LCP (Largest Contentful Paint):**
```tsx
// Add priority to above-the-fold images
<Image src="/hero.jpg" alt="Hero" width={1200} height={600} priority />

// Preconnect to external domains
// In layout.tsx metadata:
export const metadata = {
  other: {
    'link': [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    ],
  },
};
```

**CLS (Cumulative Layout Shift):**
```tsx
// Always specify dimensions for images
<Image src={src} alt={alt} width={400} height={300} /> // never skip dimensions

// Reserve space for async content
<div style={{ minHeight: '200px' }}>
  <Suspense fallback={<Skeleton height={200} />}>
    <AsyncContent />
  </Suspense>
</div>
```

**INP (Interaction to Next Paint):**
```tsx
// Defer non-critical JS
const HeavyInteraction = dynamic(() => import('./HeavyInteraction'), { ssr: false });

// Use startTransition for non-urgent updates
import { startTransition } from 'react';

function SearchInput() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value); // urgent — immediate
    startTransition(() => {
      performSearch(e.target.value).then(setResults); // non-urgent
    });
  };
}
```

---

### Deployment Best Practices

**Vercel deployment configuration:**

```json
// vercel.json
{
  "regions": ["iad1", "lhr1", "syd1"],
  "functions": {
    "app/api/heavy/**": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-DNS-Prefetch-Control", "value": "on" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

**Docker deployment:**

```dockerfile
# Dockerfile
FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

```js
// next.config.js — enable standalone output
module.exports = {
  output: 'standalone',
};
```

---

### Security Best Practices

```tsx
// Input validation with Zod
import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string().min(1).max(100).trim(),
  email: z.string().email().toLowerCase(),
  age: z.number().int().min(13).max(120).optional(),
});

// app/actions/users.ts
'use server';
import { createUserSchema } from '@/lib/validations';

export async function createUser(formData: FormData) {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    age: formData.get('age') ? Number(formData.get('age')) : undefined,
  };

  const validated = createUserSchema.safeParse(raw);
  if (!validated.success) {
    return { error: validated.error.flatten().fieldErrors };
  }

  // Use validated.data — type-safe and sanitized
  const user = await db.user.create({ data: validated.data });
  return { success: true, user };
}
```

**CSRF protection:**

Server Actions in Next.js are automatically protected against CSRF via Origin header validation. For Route Handlers:

```tsx
// app/api/protected/route.ts
export async function POST(req: Request) {
  const origin = req.headers.get('origin');
  const allowedOrigins = [process.env.NEXT_PUBLIC_APP_URL];

  if (!allowedOrigins.includes(origin)) {
    return new Response('Forbidden', { status: 403 });
  }

  // proceed...
}
```

---

## 9. Common Interview Mistakes & Tips

---

### Mistake 1: Incorrect Server/Client Component Placement

**Wrong:**
```tsx
// Marking everything as Client Component unnecessarily
'use client'; // ← wrong if this component doesn't need client interactivity
import { db } from '@/lib/db';

export async function UserList() {
  const users = await db.user.findMany(); // This doesn't work in a client component at runtime
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

**Right:**
```tsx
// No 'use client' — this is a Server Component
import { db } from '@/lib/db';

export async function UserList() {
  const users = await db.user.findMany();
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

**Rule of thumb:** Only add `'use client'` when you need hooks, event handlers, or browser APIs. Push the client boundary as low as possible in your component tree.

---

### Mistake 2: Confusing `cache: 'force-cache'` with ISR

Both cache data, but:
- `cache: 'force-cache'` — data is cached indefinitely until revalidated
- `next: { revalidate: N }` — data is revalidated after N seconds (ISR behavior)
- `cache: 'no-store'` — never cache, always fetch fresh (SSR behavior)

---

### Mistake 3: Putting Secrets in Client Components

```tsx
// WRONG — NEXT_PUBLIC_ exposes to browser
const stripeKey = process.env.NEXT_PUBLIC_STRIPE_SECRET; // ← security issue

// RIGHT — use server-only secret
// In a Server Component or API route:
const stripeKey = process.env.STRIPE_SECRET_KEY; // ← only available on server
```

---

### Mistake 4: Not Using `generateStaticParams` for Performance

Without `generateStaticParams`, dynamic routes using ISR are rendered on first request. Adding `generateStaticParams` pre-renders them at build time.

```tsx
// Add this for best performance
export async function generateStaticParams() {
  const posts = await getPopularPosts(); // pre-render only popular posts
  return posts.map(p => ({ slug: p.slug }));
}
// Other slugs will be rendered on-demand (fallback behavior)
```

---

### Mistake 5: Blocking Rendering with Sequential Data Fetches

**Wrong (sequential — slow):**
```tsx
async function Page() {
  const user = await getUser();         // 200ms
  const posts = await getPosts();       // 200ms
  const analytics = await getAnalytics(); // 200ms
  // Total: ~600ms
}
```

**Right (parallel — fast):**
```tsx
async function Page() {
  const [user, posts, analytics] = await Promise.all([
    getUser(),      // \
    getPosts(),     //  } all run in parallel — ~200ms total
    getAnalytics(), // /
  ]);
}
```

---

### Interview Tips

1. **Explain trade-offs clearly.** Don't just say "use SSG." Explain when SSG is inappropriate (personalized content, high-frequency updates) and why you'd choose SSR or ISR instead.

2. **Know both routers.** Many companies haven't fully migrated to the App Router. Be prepared to discuss both.

3. **Understand the mental model.** Server Components aren't just "faster components" — they fundamentally change the data-fetching architecture by co-locating data fetching with UI.

4. **Caching is a first-class topic.** Demonstrate understanding of the four caching layers: Request Memoization, Data Cache, Full Route Cache, Router Cache.

5. **Talk about observability.** Mention how you'd instrument a Next.js app: error tracking (Sentry), analytics (Vercel Analytics, PostHog), performance monitoring (DataDog, Lighthouse CI).

6. **Security mindset.** Proactively mention input validation, CORS, rate limiting, and secret management — even if not asked.

7. **Performance metrics.** Know Core Web Vitals (LCP, CLS, INP) and be ready to explain how Next.js features (Image component, font optimization, streaming) directly improve each metric.

8. **Think out loud.** In system design questions, narrate your reasoning: "I'd use ISR here because the data changes maybe once an hour, so a 3600-second revalidation window gives us static-like performance with acceptable freshness."

---

### Quick Reference: When to Use What

| Scenario | Solution |
|----------|---------|
| Marketing homepage | SSG with ISR |
| User dashboard | SSR (`cache: 'no-store'`) or CSR |
| Blog post | ISR with on-demand revalidation |
| Product listing | ISR (short window) |
| Auth redirect | Middleware |
| Form submission | Server Action |
| Real-time data | CSR + polling or WebSocket/SSE |
| A/B testing | Middleware with cookie-based routing |
| Heavy client UI | `dynamic()` with `ssr: false` |
| Background data refresh | ISR + `revalidateTag` webhook |

---

## 10. PDF Export Instructions

### Method 1: Browser Print-to-PDF (Recommended)

1. Open the rendered document in a modern browser (Chrome or Edge recommended).
2. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (macOS).
3. In the print dialog, set **Destination** to **Save as PDF**.
4. Configure:
   - **Paper size:** A4 or Letter
   - **Margins:** Minimum or Custom (0.5in recommended)
   - **Scale:** 85–90% for better fit
   - Enable **Background graphics** for syntax highlighting
5. Click **Save** and choose your file destination.

### Method 2: Using Pandoc (CLI)

```bash
# Install Pandoc
brew install pandoc       # macOS
sudo apt install pandoc   # Ubuntu/Debian

# Install a PDF engine
brew install --cask mactex  # macOS
sudo apt install texlive    # Ubuntu

# Convert markdown to PDF
pandoc document.md \
  --pdf-engine=xelatex \
  --variable mainfont="Inter" \
  --variable fontsize=11pt \
  --variable geometry="margin=1in" \
  --highlight-style=tango \
  --toc \
  --toc-depth=3 \
  -o "nextjs-interview-guide.pdf"
```

### Method 3: Using `md-to-pdf` (Node.js)

```bash
# Install
npm install -g md-to-pdf

# Convert with custom config
md-to-pdf document.md \
  --config-file pdf.config.json

# pdf.config.json
{
  "stylesheet": "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-light.min.css",
  "body_class": "markdown-body",
  "css": "body { font-family: 'Inter', sans-serif; max-width: 900px; margin: 0 auto; padding: 2rem; } code { font-size: 0.85em; } pre code { font-size: 0.8em; }",
  "pdf_options": {
    "format": "A4",
    "margin": "20mm",
    "printBackground": true
  }
}
```

### Method 4: VS Code Extension

1. Install the **Markdown PDF** extension by `yzane`.
2. Open the `.md` file in VS Code.
3. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
4. Type and select **Markdown PDF: Export (pdf)**.
5. The PDF will be generated in the same directory as the markdown file.

### Method 5: Using Docusaurus or Nextra

For a fully styled, navigable PDF with a professional appearance, render this document with a static site generator:

```bash
# With Docusaurus
npx create-docusaurus@latest interview-guide classic
# Add this file to /docs and run:
npm run build
# Then print to PDF from the browser
```

---

*Document generated: Next.js Interview Questions & Answers — Beginner to Advanced*
*Covers Next.js 13–15 | App Router, Pages Router, Server Components, and beyond*