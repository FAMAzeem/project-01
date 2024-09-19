import React from 'react'

function About() {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src='/assets/about2.jpg'  className='w-75 mt-5'/>

                </div>
                <div className="col-md-6">
                    <h3 className='fs-5 mb-0'>
                       About Us
                    </h3>
                    <h1 className="display-6 mb-2">
                        Who<b>We</b>Are
                    </h1><hr className='w-50'/>
                    <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Perspiciatis, fuga quos? At earum
                     quas culpa natus consequuntur veritatis corrupti, 
                     sit in tempora, perspiciatis repellendus numquam? 
                     Distinctio pariatur quas optio, atque odit inventore quis
                      cumque culpa adipisci error veniam dignissimos excepturi
                       nesciunt aliquam nam quasi facere non, nemo corrupti? At,
                        perferendis! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                         Earum sint, quidem laboriosam odio provident suscipit
                          incidunt, minus magni dolorem placeat atque velit laborum 
                          consectetur eos.</p>
                          <button className="btn btn-primary rounded-pill px-4 py-2">Get Stsrted</button>
                          <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>

                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
