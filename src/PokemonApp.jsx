import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';


export const PokemonApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch( getPokemons() );    

    }, []);

    const { pokemons = [], isLoading, page } = useSelector( state => state.pokemon );
    // console.log({ pokemons, isLoading, page } );

    

    return (
        <>
            <h1>Pokemon App</h1>
            <hr />
            <span>Loading: { isLoading ? 'true' : 'false' } </span>

            <ul>
                {
                    pokemons.map( pokemon => 
                        <li key={ pokemon.name }>{ pokemon.name }</li>
                    )
                }
            </ul>

            <button
                disabled={ isLoading }
                onClick={ () => dispatch( getPokemons( page ) ) }
            >
                Next
            </button>
        </>
    )

}