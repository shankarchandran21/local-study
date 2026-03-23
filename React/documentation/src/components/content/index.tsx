
import{ memo } from "react";
import type { ContentProps } from "../../types";


function Index({title,content,ul,ol,children}:ContentProps) {
  return (
    <div className='p-3.5'>
        <div>
             {title &&  <h4 className='text-2xl font-bold'>{title} :</h4>}
             <p className='text-md ml-6.5'>{content}</p>
        </div>
        {ul && ul.length > 0 &&(
            <div className='p-2.5 ml-9'>
                <ul>
                   {ul?.map((items,index)=>(
                    <li key={index} className='text-md ml-6.5 list-disc'>{items}</li>
                   ))}
                </ul>
        </div>
        )}
        {(ol && ol.length > 0) &&(
            <div className='p-2.5 ml-9'>
                <ol>
                    {ol.map(({title,listContent},index)=>(
                         <li className=' ml-6.5 list-decimal  pt-2.5' key={index}>
                            <span className="text-base font-black ">{title} : </span>
                            {typeof listContent === 'string' ?listContent :<ul>
                                {listContent?.map((item,idx)=>(
                                    <li key={idx} className='text-md ml-6.5 list-disc'>{item}</li>
                                ))}
                              </ul>}
                         </li>
                    ))}
                </ol>
        </div>
        )}
        <div>
                {children}
        </div>
    </div>
  )
}

export default memo(Index)
