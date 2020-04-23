import React from 'react'
import dataPokemones from './dataPokemones'
import '../Ruta/styles.css'

const  Board = () => {
 console.log(dataPokemones)

  const shuffle = (dataPokemones) =>{
    for(let i = dataPokemones.length-1; i>0 ; i--){ 
        let idRandom = Math.floor(Math.random()*(i+1));
        let temporal = dataPokemones[i];
        dataPokemones[i] = dataPokemones[idRandom];
        dataPokemones[idRandom] = temporal
    }
    return dataPokemones
  }

    return (
        <div className=''>
            <h1 className='text-white text-center mt-4 mb-4 font-weight-bold'>Memory Card Pokemon</h1>
            <div className=' d-flex'>
            <button className='btn btn-outline-info mb-4 ml-auto mr-4' type='text'>Reiniciar Partida</button>
            </div>

            <section className='card-deck container-card'>
                {
                shuffle(dataPokemones).map((item,index) => (
                    
                    <div className= 'border border-secondary rounded-lg bg-light mx-2 my-2' key={ index }>
                        <img className= 'size-card mt-4 ' src={ item.img } alt="sample pokemones"/>
                        <p className='text-black text-center font-weight-bold'>{ item.name } </p>
                    </div>
                ))
                }
            </section>  
        </div>
    )
}

export default  Board
