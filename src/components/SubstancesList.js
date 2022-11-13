import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContextProvider';
import Substance from './Substance';

function SubstancesList() {
  const { state, dispatch } = useContext(AppContext);
  const [ name, setName ] = useState('');

  const controlFiltering = (value) => {
    if (value == '') {
      dispatch({type: 'RESET_FILTERS'});
    } else {
      dispatch({type: 'FILTER_SUBSTANCES', payload: name});
    }
    setName(value);
  }

  React.useEffect(() => {
    const getSubtances = async () => {
      try {
        const response = await fetch('https://www.lsdrugs.pl/api/substances');
        const json = await response.json();
        const formatted = json.filter(item => item.category === "Substancje").map(item => ({...item, name: item.name.split("-")[0].trim()}));

        dispatch({type: 'SAVE_INITIAL_SUBSTANCES', payload: formatted})
    } catch (err) {
        console.log(err);
      }
    }

    getSubtances();
  }, []);    

  return (
    <>
        <div className="p-2">
            <input className="form-control" type="search" placeholder="Wpisz nazwę substancji..." value={name} onInput={e => controlFiltering(e.target.value)} />
        </div>
        <div>
          {state.filteredSubstances ? state.filteredSubstances.map((item,j) => (<Substance name={item.name} key={j} image={item.img} intro={item.intro} />)) : null}
        </div>
    </>
  )
}

export default SubstancesList