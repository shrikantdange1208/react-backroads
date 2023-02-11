import React from 'react'
import tour_1 from '../images/tour-1.jpeg'
import tour_2 from '../images/tour-2.jpeg'
import tour_3 from '../images/tour-3.jpeg'
import tour_4 from '../images/tour-4.jpeg'
import tour_5 from '../images/tour-5.jpeg'
import tour_6 from '../images/tour-6.jpeg'
import Title from './Title'
import Tour from './Tour'
import { tours } from '../data'

export default function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />
        })}
      </div>
    </section>
  )
}
