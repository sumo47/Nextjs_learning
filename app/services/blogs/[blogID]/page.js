import React from 'react'

export default async function page({params}) {
  console.log(await params)
  const { blogID } = await params;
  return (
    <div>
        <h1>blogID = {blogID}</h1>
      
    </div>
  )
}
