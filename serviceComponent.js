import React from 'react'

const ServiceComponent = (props) => {
  return (
    <div  className="grid_item" >
            <div  className="card">
                <div  className="img_contain">
                    <img className="img_container" src={props.imgUrl} alt="web development" />
                </div>
                <div  className="card_content">
                    <h3>{props.title}</h3>
                    <p>{props.content}
                    </p>
                </div>
            </div>
        </div>
  )
}

export default  ServiceComponent