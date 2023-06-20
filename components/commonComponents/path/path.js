import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Path = () => {
    const router = useRouter()
    const [path,setPath] = useState(null)

    useEffect(() => {
        const paths = router.pathname.split('/')
        let makepath = ""
        if(paths.length > 1){
            paths.map((path,idx) => {
                if(idx > 0 && !path.includes("[")){
                    return makepath = `${makepath} / ${path}`
                }
            })
        }
        
        if(paths.length > 1){
           return setPath(makepath)
        }
    },[router])
  return (
    <div className='capitalize px-4 py-10 '><a href="/">Home</a> {path}</div>
  )
}

export default Path