import React from 'react'
import Card from '../Card'
import data from './data.js'

function Services() {

    return (
        <div>
            <h1 className="m-3 ms-5 text-secondary">Wecome to our services</h1>
            <div className="d-flex justify-content-around flex-wrap">


                {console.log(data.image)}

                {

                    data.map((value) => {
                        return (
                            <Card img={value.image}
                                title={value.title}
                                body={value.body}
                            />

                        )

                    })
                }


            </div>

        </div>
    )
}

export default Services
