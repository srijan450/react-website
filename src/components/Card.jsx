import React from 'react'

function Card({ img, title, body }) {
    return (
        <div className="card m-4 shadow" style={{ width: "18rem" }}>
            <img src={img} style={{ height: '16rem' }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>

                <p className="card-text">{body}</p>

            </div>
        </div>
    )
}

export default Card
