import React from 'react'
import { Link } from 'react-router-dom';

function Substance({name, image, intro}) {
  return (
      <div className="substance" data-aos="fade-in">
        <Link to={`/app/${name}`}>
          <img className="substance-img img-fluid" src={`https://www.lsdrugs.pl/${image}`} alt={name} />
          <div className="p-3">
              <h4>{name}</h4>
              <p className="text-muted substance-desc">{intro}</p>
          </div>
        </Link>
      </div>
  )
}

export default Substance