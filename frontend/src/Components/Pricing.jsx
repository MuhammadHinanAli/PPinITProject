import { Check } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {

  const pricing = [
    {
      imgUrl: "/img7.jpg",
      title: "QUARTER YEAR",
      price: 199,
      length: 3
    },
    {
      imgUrl: "/img6.jpg",
      title: "HALF YEAR",
      price: 349,
      length: 6
    },
    {
      imgUrl: "/img5.jpg",
      title: "FULL YEAR",
      price: 600,
      length: 12
    }
  ]
  return (
    <section className='pricing'>
      <h1>EAGLE FITNESS PLANS</h1>
      <div className="wrapper">
        {
          pricing.map(element => {
            return (
              <div className="card" key={element.title}>
                <img src={element.imgUrl} alt={element.title} />
                <div className="title">
                  <h1>{element.title}</h1>
                  <h1>PACKAGE</h1>
                  <h3>EUR {element.price}</h3>
                  <p>For {element.length} Months</p>
                </div>
                <div className="description">
                  <p>
                    <Check /> Equipment
                  </p>
                  <p>
                    <Check /> Free Training
                  </p>
                  <p>
                    <Check /> Free Sauna
                  </p>
                  <p>
                    <Check /> 24/7 Support
                  </p>
                  <p>
                    <Check /> 20 Days Freezing Option
                  </p>
                  <Link to={"/"}>Join Now</Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Pricing