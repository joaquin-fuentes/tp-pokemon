import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"

const initialState = {
    pokemones: [],
    status: 'idle',
    error: null,
    pokemon: {},
    tipos:[],
    tipo:{}, 
    detalles: [], 
};

export const getPokemones = createAsyncThunk('pokemones/getPokemones', async () => {
    const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
    return respuesta.data.results;
});

export const getPokemon = createAsyncThunk('pokemones/getPokemon', async (name) => {
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return respuesta.data;
});

export const getPokemonTipos = createAsyncThunk('pokemones/getPokemonTipos', async () => {
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/type`);
    return respuesta.data;
});

export const getTipo = createAsyncThunk('pokemones/getTipo', async (tipo) => {
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/type/${tipo}`);
    console.log(respuesta.data.pokemon);
    return respuesta.data;
});


const pokemonSlice = createSlice({
    name: 'pokemones',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPokemones.pending, (state) => {
                state.status = 'Cargando';
            })
            .addCase(getPokemones.fulfilled, (state, action) => {
                state.status = 'Exitoso';
                state.pokemones = action.payload;
            })
            .addCase(getPokemones.rejected, (state, action) => {
                state.status = 'Rechazado';
                state.error = action.error.message;
            })
            .addCase(getPokemon.fulfilled, (state, action) => {
                state.status = 'Exitoso';
                state.pokemon = action.payload;             
            })
            .addCase(getPokemon.pending, (state) => {
                state.status = 'Cargando';                           
            })
            .addCase(getPokemonTipos.fulfilled, (state, action) => {
                state.status = 'Exitoso';
                state.tipos = action.payload;
            })
            .addCase(getTipo.fulfilled, (state, action)=>{
                state.status = "Exitoso";
                state.tipo = action.payload;
                state.detalles = action.payload.pokemon.map((p)=> {
                    return p.pokemon.name
                });
            })
    },
});

export default pokemonSlice.reducer;