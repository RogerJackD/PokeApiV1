import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const PokemonCard = ({ name, url }) => {
  const { data, isLoading } = useFetch(url)

  if (isLoading) return (
    <div className="text-center p-2">
      <div className="spinner-border spinner-border-sm text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )

  // Función simplificada para el color
  const getTypeColor = () => {
    const firstType = data?.types?.[0]?.type?.name || 'normal'
    const colors = {
      fire: 'bg-danger',
      water: 'bg-primary',
      grass: 'bg-success',
      electric: 'bg-warning',
      psychic: 'bg-purple',
      // ...otros colores
    }
    return colors[firstType] || 'bg-secondary'
  }

  return (
    <div className="col-6 col-md-3 mb-3 px-2">
      <div className={`card h-100 shadow-sm border-0 overflow-hidden ${getTypeColor()}-subtle`}>
        <div className="card-header bg-white bg-opacity-75 p-1 border-bottom-0">
          <h6 className="card-title text-capitalize mb-0 fw-bold small text-truncate px-1">
            {name}
            <span className="text-muted ms-1 fs-7">#{data?.id}</span>
          </h6>
        </div>
        
        <div className="card-body p-1 text-center">
          <div className="row g-1">
            <div className="col-6 pe-1">
              <div className="bg-white bg-opacity-75 rounded p-1">
                <p className="small fw-bold text-muted mb-0">Normal</p>
                <div className="d-flex justify-content-center gap-1">
                  <img 
                    src={data?.sprites?.front_default} 
                    alt={`${name} front`} 
                    className="img-fluid" 
                    style={{maxHeight: '50px'}}
                  />
                  <img 
                    src={data?.sprites?.back_default} 
                    alt={`${name} back`} 
                    className="img-fluid" 
                    style={{maxHeight: '50px'}}
                  />
                </div>
              </div>
            </div>
            
            <div className="col-6 ps-1">
              <div className="bg-white bg-opacity-75 rounded p-1">
                <p className="small fw-bold text-muted mb-0">Shiny</p>
                <div className="d-flex justify-content-center gap-1">
                  <img 
                    src={data?.sprites?.front_shiny} 
                    alt={`${name} shiny front`} 
                    className="img-fluid" 
                    style={{maxHeight: '50px'}}
                  />
                  <img 
                    src={data?.sprites?.back_shiny} 
                    alt={`${name} shiny back`} 
                    className="img-fluid" 
                    style={{maxHeight: '50px'}}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Tipos - solo muestra el primer tipo para ahorrar espacio */}
          {data?.types?.[0] && (
            <span className={`badge ${getTypeColor()} text-white text-capitalize mt-1 px-1 small`}>
              {data.types[0].type.name}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}



// import React from 'react'
// import { useFetch } from '../hooks/useFetch'

// export const PokemonCard = ({ name, url}) => {

//   const {data, isLoading} = useFetch(url);

//   if (isLoading) return <div>waiting for: {name}...</div>;
//   return (
//     <section>
//         <h2 className='text-capitalize'>   {name} </h2>
//         <img src= {data.sprites?.front_default} alt="" />
//         <img src= {data.sprites?.back_default} alt="" />

//         <img src= {data.sprites?.front_shiny} alt="" />
//         <img src= {data.sprites?.back_shiny} alt="" />





//     </section>
//   )
// }
