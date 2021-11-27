import axios from "axios";
import React, { useState } from 'react';
import "../components/Navbar.css";

export default function Type () {
    const [nbPokeType, setnbPokeType] = useState("");
    const [namePokeType, setnamePokeType] = useState("");

    const url1 = `https://pokeapi.co/api/v2/pokemon/type/1`;
    const url2 = `https://pokeapi.co/api/v2/pokemon/type/2`;
    const url3 = `https://pokeapi.co/api/v2/pokemon/type/3`;
    const url4 = `https://pokeapi.co/api/v2/pokemon/type/4`;
    const url5 = `https://pokeapi.co/api/v2/pokemon/type/5`;
    var nbParType = 8;
    var nameType = '';

    const getType = async () => {
        try {
            const res = await axios.get(url1)
            setnbPokeType(res.data.pokemon.length);
            nbParType=nbPokeType;
            setnamePokeType(res.data.name);
            nameType=namePokeType;

            /*res = await axios.get(url1)
            setnbPokeType(res.data.pokemon.length);
            nbParType[1] = nbPokeType;
            setnamePokeType(res.data.name);
            nameType[1] = namePokeType;

           res = await axios.get(url2)
            setnbPokeType(res.data.pokemon.length);
            nbParType[2] = nbPokeType;
            setnamePokeType(res.data.name);
            nameType[2] = namePokeType;

             res = await axios.get(url3)
            setnbPokeType(res.data.pokemon.length);
            nbParType[3] = nbPokeType;
            setnamePokeType(res.data.name);
            nameType[3] = namePokeType;

             res = await axios.get(url4)
            setnbPokeType(res.data.pokemon.length);
            nbParType[4] = nbPokeType;
            setnamePokeType(res.data.name);
            nameType[4] = namePokeType;*/

            console.log(res)
        } catch (e) {
            console.log(e)
        };
    } 

    var appel= () => {

        getType()
    }

    return (
        <div class="App">
            
            <div className="widget">
                {appel()}
                {nbParType}
                {nameType}
                <div className="divTable">
                    <div className="divTableBody">
                        <div className="divTableRow">
                            <div className="divTableCell">{nameType[1]}</div>
                            <div className="divTableCell">{nbParType[1]}</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">{nameType[2]}</div>
                            <div className="divTableCell">{nbParType[2]}</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">{nameType[3]}</div>
                            <div className="divTableCell">{nbParType[3]}
                            </div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">{nameType[4]}</div>
                            <div className="divTableCell">{nbParType[4]}</div>
                        </div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">{nameType[0]}</div>
                        <div className="divTableCell">{nbParType[0]}</div>
                    </div>
                </div>
            </div>
        </div>
    );

};