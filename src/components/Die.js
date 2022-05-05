import React from 'react'

function Die(props) {

    const styles ={ 
        backgroundColor: props.held ? "#59E391" : "white"
    }

  return (
    <div className='section' >
        <h2 onClick={props.holdDice} style={styles}>{props.value}</h2>
    </div>
  )
}

export default Die