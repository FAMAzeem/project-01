import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <div>
      <section id='home'>
      <div className="container">
        <div className="row justify-content-center" >
            <div className="col-md-8 mt-5">
                <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                    Feels the Fresh Business Perspective
                </h1>
                <p className='lead text-center fs-4 mb-5 text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Adipisci beatae rem, doloribus perferendis, officiis quis eligendi natus, id commodi itaque nostrum nam.
                  Mollitia hic culpa, itaque enim officiis voluptatem eum.</p>
                  <div className="buttons d-flex justify-content-center">
                    <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">
                        Get Qoute
                    </NavLink>

                    <NavLink to="/service" className="btn btn-outline-light  rounded-pill px-4 py-2">
                        Our services
                    </NavLink>
                  </div>
            </div>
        </div>
      </div>
      </section>
       
<About />
<Services />
<Contact />
         
         

    </div>
    
  )
}

export default Home
