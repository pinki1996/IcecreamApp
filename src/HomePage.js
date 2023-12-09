import React from 'react'
import Card from './Card'

const HomePage = (props) => { //props =>data={setStage}
  return (
    <div>
      <div className='cards'>
        <div className='card'>
          <Card info ={props.data}/>
        </div>
        
      </div>
    </div>
  )
}

export default HomePage