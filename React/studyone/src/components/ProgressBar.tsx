import React, { useEffect, useRef, useState } from 'react'

function ProgressBar() {
    const [file,setFile] = useState<File | null>(null)
    const refFile = useRef<HTMLInputElement | null>(null)
    const [progress,setProgress] = useState(0)
    const [isLoading,setIsLoading] = useState(false)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const value= e.target.files?.[0]|| null

        setFile(value)
    }


const handleSubmit= ()=>{
    if(!file) return
    console.log(refFile.current?.files?.[0])
    setIsLoading(true)
    setProgress(0)

}


useEffect(()=>{
    if(!isLoading) return
    const timer = setInterval(()=>{
        setProgress((prev)=>{
            if(prev>=100){
                setIsLoading(false)
                clearInterval(timer)
                return 100
            }
            return prev+10
        })
    },500)

    return ()=>clearInterval(timer)
},[isLoading])
  return (
    <div>
            <input type='file' placeholder='Upload file' ref={refFile} onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
            {true&&(
               <div className='p-5'>
                <div className='w-full h-6  bg-gray-500 rounded-2xl z-10'>
                    <div style={{width:`${progress}%`}} className={`${progress === 100 ? "bg-green-400" : "bg-blue-600" } z-50 rounded-2xl h-6  overflow-hidden transition-all duration-300`}>
                    <h1 className='transition-all duration-300'> {progress}</h1>
                    </div>
                </div>
               
               </div>
            )}
    </div>
  )
}

export default ProgressBar