import Content from "../../components/content"


function Index() {
  return (
    <div>
      <Content 
      title="Lighthouse Test Tool" 
      content="The Lighthouse test tool is an automated website auditing tool that analyzes and generates reports on key aspects of a website’s performance. Designed and maintained by Google, Lighthouse focuses on five primary areas: performance, accessibility, best practices, SEO, and Progressive Web App (PWA) features."
      />
      <Content 
      title="Key Features of Lighthouse" 
      ol={[
        {title:'Performance Analysis',listContent:' Measures load times and responsiveness to identify bottlenecks.'},
        {title:'Accessibility Audits',listContent:' Ensures your website is usable by people with disabilities.'},
        {title:'SEO Insights',listContent:'Highlights opportunities to improve search engine rankings.'},
        {title:'Best Practices Review',listContent:'Evaluates adherence to security and modern development practices.'},
        {title:'Progressive Web App Audits',listContent:'Checks for PWA readiness, ensuring offline functionality and fast loading.'},
      ]}
      />
      <Content  
        title="Why Is the Lighthouse Test Tool Important?"
        content="A fast, accessible, and user-friendly website is not just a luxury—it’s a necessity. The Lighthouse test tool ensures your website meets these standards, and here’s why it’s so critical:"
        ol={[
          {title:"Improves Website Performance",listContent:"Website speed directly impacts user experience and search engine rankings. Lighthouse identifies performance bottlenecks and offers practical solutions to resolve them."},
          {title:"Enhances Accessibility",listContent:"An accessible website caters to a broader audience, including people with disabilities. Lighthouse provides insights into accessibility improvements, ensuring your website meets WCAG (Web Content Accessibility Guidelines) standards."},
          {title:"Boosts SEO",listContent:"Search engines reward websites that follow SEO best practices. Lighthouse helps you identify and fix issues that could hurt your rankings, such as slow loading times or missing meta tags."},
          {title:"Strengthens Security and Best Practices",listContent:"The tool reviews your website for security vulnerabilities, outdated libraries, and adherence to web development best practices."},
          {title:"Facilitates PWA Development (Optional)",listContent:"For developers building Progressive Web Apps, Lighthouse ensures your app meets Google’s requirements for offline functionality, speed, and reliability."},
        ]}
      />
    </div>
  )
}

export default Index
