import React from 'react'
import Content from '../../components/content'

function Index() {
const reactOl =[
  {
    title:'Component-Based Architecture',
    listContent:'UI is broken into reusable components (functional/class). Each component handles its own logic and UI.'
  },
  {
    title:'JSX (JavaScript XML)',
    listContent:'Allows writing HTML-like syntax inside JavaScript for easier UI development.'
  },
  {
    title:'Virtual DOM',
    listContent:'React uses a virtual copy of the DOM to update only the necessary parts instead of re-rendering the whole page — this improves performance.'
  },
  {
    title:'State & Props',
    listContent:['Props are read-only data passed from parent to child components.','State is mutable data managed within a component.'],
  },
  {
    title:'Hooks (for Functional Components)',
    listContent:'Hooks like useState, useEffect, useContext, etc., allow using state and lifecycle methods without classes.',
  },
  {
    title:'One-Way Data Flow',
    listContent:'Data flows in one direction (parent to child) making the app more predictable and easier to debug.',
  },
  {
    title:'SPA Behavior',
    listContent:'React is often used to build Single Page Applications(SPAs) where navigation does not require full page reloads.',
  },
]

const whyReactOl =[
  {title:'Easy to Learn & Use',
   listContent:['React has a simple learning curve compared to Angular.','Works just with JavaScript and JSX, no need to learn extra syntax like templates or decorators.']
  },
  {title:'Component-Based Architecture',
   listContent:['React makes UI development reusable and modular.','You build once and use components anywhere.','This reduces duplicate code and improves maintainability.']
  },
   {title:'High Performance (Virtual DOM)',
   listContent:['React updates only the changed parts using Virtual DOM.','This makes UI updates faster compared to frameworks that re-render the whole DOM.']
  },
   {title:'Strong Community & Ecosystem',
   listContent:['Backed by Meta (Facebook).','Huge community, job opportunities, and third-party libraries.','Regular updates and long-term support.']
  },
   {title:'Reusable Logic with Hooks',
   listContent:['React hooks like useState, useEffect, useContext, useMemo, etc., make logic reusable without classes.','Vue and Angular take more steps to achieve the same.']
  },
   {title:'SPA + SSR + Mobile',
   listContent:['SPA development','SSR (Server-Side Rendering) using Next.js','Mobile apps with React Native So one ecosystem for web + mobile.']
  },
   {title:'Large Industry Adoption',
   listContent:['React makes UI development reusable and modular.','You build once and use components anywhere.','This reduces duplicate code and improves maintainability.']
  },
   {title:'High Performance (Virtual DOM)',
   listContent:['Meta','Netflix','Airbnb','Uber','WhatsApp','Instagram','Reddit','Pinterest','Dropbox','Atlassian','Salesforce','Microsoft','Apple','Amazon']
  },
]
  return (
    <div>
        <Content title='React'
         content='React is a JavaScript library used for building user interfaces, mainly for single-page applications (SPA). It is maintained by Meta (Facebook) and focuses on creating reusable UI components.' 
         ol={reactOl} />
         <Content title='Why React instead of other frontend technologies (like Angular, Vue, or plain JS frameworks)?'
          ol={whyReactOl}
         />
          <Content title='Short Interview Answer You Can Use'
          content={`I prefer React over other options because it's easy to learn, component-based, and very flexible. It provides great performance using the virtual DOM and allows reusability through hooks. The ecosystem is strong, supported by Meta, and widely used in the industry. Also, React gives me freedom to choose routing, state management, and styling tools based on project needs, which is harder with frameworks like Angular or Vue.`}
         />
    </div>
  )
}

export default Index
