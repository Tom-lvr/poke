import {Container, Row, Col} from 'react-bootstrap';
import './LigneAtk.css';
import pika from '../images/pika.png'
import A1 from '../images/A1.png'
import axios from "axios";
import React, { useState } from 'react';


export default function LigneAtk (props) {
    
 
        
        const [atkPoke, setatkPoke] = useState("");
        const [imgPoke, setimgPoke] = useState("");

        var atkpk=[];
        var nameType=[];
        var nb=0;
        var imgBar;
    
        var i=0;
    
        const getType = async (id) => {
            try {
                const url = `https://pokeapi.co/api/v2/pokemon/${id}`
                const res = await axios.get(url)
                setatkPoke(res.data.stats[1].base_stat);
                setimgPoke(res.data.sprites["front_default"])
    
                console.log(res)
            } catch (e) {
                console.log(e)
            };
        } 
    
        var appel= (num) => {
    
            getType(num);
            atkpk[num]=atkPoke;
        }

        var chooseBar =(classmnt)=>
        {
            switch (classmnt)
            {
                case 1:
                    imgBar="A1";
                    break;
                case 1:
                    imgBar="A";
                    break;
                case 1:
                    imgBar="A3";
                    break;
                case 1:
                    imgBar="A4";
                    break;
                case 1:
                    imgBar="A5";
                    break;

            }

        }

        return(            
            <div className="ligne">
                {appel(props.id)}
                <Container>
                    <Row>
                        <Col xs={1} md={1} lg={1} xl={1}>
                            <div className="classm">

                                {props.classm}

                            </div>
                        </Col>
                        <Col xs={2} md={2} lg={2} xl={2}>
                        <img className="img" src={imgPoke} />
                            
                        </Col>
                        <Col xs={7} md={7} lg={7} xl={7}>
                            <img src={A1} alt="barre" className="barre1"></img>
                        </Col>
                        <Col xs={2} md={2} lg={2} xl={2}>
                        <div className="chiffre">
                            {atkpk[props.id]}
                        </div>
                        </Col>
                
                
                
                
                    </Row>
               </Container>
            </div>
                
        );
    }