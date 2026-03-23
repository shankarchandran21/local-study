
import Content from '../../components/content'
import VirtualDomStructure from '../../assets/images/VirtualDom.png'
import VirtualDomCallStack from '../../assets/images/VirtualDomCallStack.png'
function Index() {
  return (
    <div>
      <Content 
      title='What is Virtual DOM & How the Virtual DOM Works in React' 
      content='The Virtual DOM is a lightweight, in-memory representation of the Real DOM. It is a key concept in React, designed to optimize UI updates and improve application performance. Instead of directly interacting with the Real DOM, which can be slow and resource-intensive, React uses the Virtual DOM to calculate and apply only the necessary changes to the Real DOM.' 
      ol={[
        {title:"Initial Rendering",listContent:"React creates a Virtual DOM tree that mirrors the structure of the UI. This tree is composed of JavaScript objects representing the elements of the UI."},
        {title:"State or Props Changes",listContent:"When the application state or props change, React generates a new Virtual DOM tree reflecting the updated UI."},
        {title:"Diffing Algorithm",listContent:`React compares the new Virtual DOM tree with the previous one using an efficient diffing algorithm. This process identifies the minimal set of changes (or "diffs") required.`},
        {title:"Reconciliation",listContent:"Based on the differences, React determines the most efficient way to update the Real DOM. Only the affected parts of the Real DOM are updated, avoiding unnecessary re-renders."},
        {title:"Real DOM Update",listContent:"Finally, React applies the calculated changes to the Real DOM, ensuring the UI is updated efficiently."},
        
      ]} />

      <Content
        title='When we say Virtual DOM is “lightweight,” it means'
        content='It uses less memory and is simpler than the Real DOM
            The Real DOM includes everything the browser needs to render elements on the screen—styles, layout, events, painting, geometry, etc.
            Those are heavy and complex structures maintained by the browser engine.
            But the Virtual DOM is just a plain JavaScript object version of the DOM.so it is stored in the Heap and The call stack is used only to execute functions, not to permanently hold the Virtual DOM.'
        >
        <div className='flex gap-5 justify-center flex-wrap'>
          <div className='flex flex-col justify-center'>
                <h5>Virtual Dom Stored in heap:</h5>
                <img src={ VirtualDomStructure } alt='VirtualDom structure'/>
          </div>
          <div className='flex flex-col justify-center items-center  xl:items-start '>
                <h5>Call Stack used to execute functions:</h5>
                <div className='flex flex-wrap justify-center '>
                      <img src={VirtualDomCallStack } alt='VirtualDom structure'/>
                    <Content
                      title='What Happen in Call Stack'
                      ul={[`✅ renderComponent() → goes into the call stack `,
                            `✅ Inside that function, the Virtual DOM object (vdom) is created → stored in the Heap`,
                            `✅ After the function returns, it is removed from the stack`,
                            `✅ The Virtual DOM object stays in the Heap if still referenced`]}
                    />
                </div>
          </div>
        </div>
      </Content>
      
    </div>
  )
}

export default Index
