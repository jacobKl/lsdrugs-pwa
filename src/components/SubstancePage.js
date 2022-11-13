import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContextProvider';

function SubstancePage({params}) {

  let { substance } = useParams();

  const { state } = useContext(AppContext);
  const [ currentSubstance, setCurrentSubstance] = useState({});

  useEffect(() => {
      const sub = state.initialSubstances.filter(item => item.name == `${substance}`)[0];
      setCurrentSubstance(sub);
  }, [])

  return (
    <div data-aos="fade-in" className="substance-page">
        <Link to="/app/" className="w-100 text-uppercase text-bold p-2 my-1 btn btn-light">Wróć</Link>
        <img className="substance-img" src={`https://www.lsdrugs.pl/${currentSubstance.img}`} alt={currentSubstance.name} />
        <div className="p-3">
            <h2>{currentSubstance.name}</h2>
            <p className="text-muted">{currentSubstance.intro}</p>
            <p className="substance-content" dangerouslySetInnerHTML={{__html: currentSubstance.content}} />
            <div className="bg-light p-3 rounded">
                <h4>Źródła</h4>
                <p dangerouslySetInnerHTML={{__html: currentSubstance.sources}} />
            </div>

        </div>
    </div>
  )
}

export default SubstancePage