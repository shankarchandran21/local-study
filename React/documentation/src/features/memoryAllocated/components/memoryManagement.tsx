import Content from '../../../components/content'
import memoryStructures from '../../../assets/images/memoryStructure.png'
import memoryOrder from '../../../assets/images/memoryOrder.png'
import variableCreate from '../../../assets/images/variableCreate.png'
import stackExample from '../../../assets/images/stackExample.png'
import heapExample from '../../../assets/images/heapExample.png'
import garbageCollected from '../../../assets/images/garbageCollected.png'
import exampleTextCodeSegment from '../../../assets/images/exampleTextCodeSegment.png'
import astTree from '../../../assets/images/astTree.png'
function MemoryManagement() {
  return (
        <div>
      <Content title='Memory Management'>
          <div className='flex items-center justify-center'>
              <img  src={memoryStructures} alt='Memory Management'/>
          </div>
      </Content>
      <Content 
      title='HigherAddress & LowerAddress'
      content='Memory is just a sequence of numbered addresses,Think of RAM like a long street where each house has a number. The numbers go in increasing order:'
      ul={[`Lower address = a smaller memory number (e.g., 1000)`,`Higher address = a bigger memory number (e.g., 5000)`]}
      >
       <div className='flex justify-center items-center'>
           <img src={memoryOrder} alt='Memory Order'/>
       </div>
        <div className='ml-4'>
                  <Content title='Why does this matter?'
                      content='You don’t see addresses, but the engine uses them,When you create variables, arrays, objects, or functions, the JavaScript engine stores them somewhere in memory. Each one has a memory address — but you never access it directly.' 
                      ul={['Stack grows downward (from higher address → lower address)','Heap grows upward (from lower address → higher address)']}>
                        <div className='flex justify-center items-center'>
                            <img src={variableCreate} alt='variableCreate'/>
                        </div>
                        <Content
                          ul={['a and references to b, c are stored in the stack.','The actual object { name: "John" } and the array contents [1, 2, 3] live in the heap.']}
                        />

                  </Content>
        </div>
      </Content>

      <Content 
      title='Command Line Argument'
      content='A command line argument is any piece of data or parameter that you pass to a program when you run it from the command line (terminal/console),Think of it like giving instructions to a program before it starts running.'
        ul={['terminal Command : node app.js hello 123','app.js → the program you are running','hello → first command line argument','123 → second command line argument',`Access passed from terminal value :>process.argv → an array in Node.js that contains the command line arguments passed when starting the program`]}
      />

      <Content title='Dynamic Memory Layout (Stack & Heap)'>
            <div className='ml-4'>
                   <Content 
                    title='Stack' 
                    ol={[
                      {title:"What it is",listContent:"A memory structure that stores primitive values (like numbers, strings, booleans) and references to objects."},
                      {title:"How it works",listContent:['It’s LIFO (Last In, First Out) – the last item you put in is the first one to be removed.','Very fast because of the predictable memory structure.']},
                      {title:"What goes here",listContent:['Primitive types: number, string, boolean, null, undefined, symbol','References (not actual objects) to objects/functions in the heap.']},
                      {title:"Stack overflow",listContent:'Happens when you call too many nested functions (stack gets full).'},
                      {title:"Example",}
                    ]}
                   >
                <div className='flex justify-center items-center'>
                    <img src={stackExample} alt='stackExample'/>
                </div>
                <h5 className='ml-15'><span className='font-bold'>Memory management:</span> Automatically cleared when function execution finishes.</h5>
             </Content>

             <Content 
             title='Heap'
             ol={[
              {title:"What it is",listContent:"A large, unstructured memory pool for storing objects, arrays, functions—anything non-primitive"},
              {title:"How it works",listContent:['Slower than stack, because memory is dynamic and scattered.','Objects in heap are accessed via references stored in the stack.']},
              {title:"What goes here:",listContent:"Objects, arrays, functions, classes, closures"},
              {title:"Memory leaks",listContent:'Happen when you keep references to objects that are no longer needed'},
              {title:"Example:",},
             ]}
             >
                 <div className='flex items-center justify-center'>
                      <img src={heapExample} alt='heapExample'/> 
                 </div>
             </Content>
             <Content 
             title='Garbage Collection' 
             content='Garbage Collection (GC) in JavaScript is the automatic process of finding and removing unused memory so your program doesn’t run out of space or crash.'
             ol={[
               {title:"Root Objects",listContent:['window (in browsers)','global (in Node.js)','Currently running functions','Local variables','Anything that can still be reached from these roots is considered alive.']},
              {title:"Why do we need garbage collection?",listContent:"In languages like C or C++, developers manually free memory. But in JavaScript, you don't manually free memory—the JS engine (like V8 in Chrome) handles it for you."},
              {title:"What is the main idea?",listContent:['When you create values, objects, arrays, functions, etc., memory is allocated.',`But if something is no longer reachable (not referenced by any variable or object), it's considered garbage.`,'Those unused objects are automatically deleted from memory by the Garbage Collector.']},
              {title:"How does garbage collection work?",listContent:['Modern JS engines mostly use Mark-and-Sweep Algorithm','Mark – Start from the global/root objects (like window), mark everything reachable.','Sweep – Anything not marked is considered unused and memory is freed.']},
              {title:"You don’t control when GC runs!",listContent:"You can't manually trigger garbage collection. The engine decides when to run it, based on memory usage."},
              {title:"When garbage collection does NOT work (Memory Leaks!)",listContent:"If references are still there but not actually needed, GC won’t remove them:"},
             
             ]}
             >
                <div className='flex flex-col items-center'>
                  <div>
                      <h5>Garbage Collected:</h5>
                      <img src={garbageCollected} alt='garbageCollected'/>
                  </div>
                   <div>
                      <h5>Garbage Not Collected(Memory Leak):</h5>
                      <img src={garbageCollected} alt='garbageCollected'/>
                  </div>
                </div>
             </Content>
            </div>
      </Content>

      <Content 
      title='Data Segment'
      content='In JS the engine (V8, SpiderMonkey) manages stack and heap automatically.There’s no need for separate initialized/uninitialized data segments, because memory is dynamic.'
      ol={[
        {title:"Initialized Data Segment",listContent:"This segment stores global and static variables that are explicitly initialized with a value before the program runs."},
        {title:"Uninitialized Data Segment",listContent:`This segment holds global and static variables that are not assigned any value explicitly.They are automatically initialized to zero (for numeric types) by the system at runtime.`},
      ]}
      >
          <div className='flex justify-center'>
                         <h1 className='font-bold text-red-800'>JS is not using Data Segment just knowing what is that...!!!</h1>
          </div>
      </Content>
        <Content title='Code/Text Segment'
        content='When you write a function in JavaScript, the instructions (what the function does) are stored in a special memory area managed by the JavaScript engine. This is like the code/text segment in lower-level languages.'
        >
          <div className='flex justify-center'>
              <img src={exampleTextCodeSegment} alt='exampleTextCodeSegment'/>
          </div>
        </Content>
        <Content  
        ol={[
          {title:"JS Engine parses the code → creates AST",listContent:['AST = Abstract Syntax Tree → a tree representation of your code.','Each node = a construct in your code (variables, functions, operators).']}
        ]}
        >
            <div className='flex justify-center'>
                <img src={astTree} alt='astTree'/>
            </div>
        </Content>
        <Content 
          title='JS Engine compiles the AST → bytecode / machine code'
          ul={
            ['Modern engines like V8 use Just-In-Time (JIT) compilationis a technique used by modern JS engines (like V8 in Chrome/Node.js) to convert JavaScript code into machine code at runtime, just before it is executed.','The machine code is what your CPU can actually execute.']
          }
        />
    </div>
  )
}

export default MemoryManagement
