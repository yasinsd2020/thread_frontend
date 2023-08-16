import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

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
    <div className='capitalize px-4 py-4 mb-4 border-b '><Link href="/">Home</Link> {path}</div>
  )
}

export default Path