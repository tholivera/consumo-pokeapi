import { Container, Card, Box, Typography, Button, Fade, Modal, Backdrop } from "@material-ui/core";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import "./ListaTodos.css";
import axios from "axios";



export default function ListaTodos() {
    const [pokemon, setPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    };
    const getPokemon = async () => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await axios.get(url);
            toArray.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokemonData(toArray);
        } catch (e) {
            console.log(e);
        }
    };
    console.log(pokemonData);

    return (
        <>
            <Container className="bg" >
                <Container maxWidth="xs">
                    <Card className="card">
                        <Box display='flex' justifyContent="center" paddingTop={10} >
                            <img className="img" src="https://i.imgur.com/FQ8CYwp.png" />
                        </Box>
                        <Container maxWidth="xs" >
                            <Card>
                                {pokemonData.map((data) => {
                                    return (
                                        <>
                                            <Box display='flex' justifyContent="center">
                                                <img className="img-pokemon" src={data.sprites["front_default"]} />
                                            </Box>
                                            <Box display='flex' justifyContent="center">
                                                <Typography>ID: {data.id}</Typography>
                                            </Box>
                                            <Box display='flex' justifyContent="center">
                                                <Typography>Nome: {data.name}</Typography>
                                            </Box>
                                            <Box display='flex' justifyContent="center" paddingY={1}>
                                                <Button className="botao" onClick={handleOpen}>
                                                    Mais Detalhes
                                                </Button>
                                                <Modal
                                                    aria-labelledby="transition-modal-title"
                                                    aria-describedby="transition-modal-description"
                                                    open={open}
                                                    onClose={handleClose}
                                                    closeAfterTransition
                                                    BackdropComponent={Backdrop}
                                                    BackdropProps={{
                                                        timeout: 500,
                                                    }}
                                                >
                                                    <Fade in={open}>
                                                        <Box className="estilo-modal">
                                                            <Box display='flex' justifyContent="center">
                                                                <img className="img-pokemon" src={data.sprites["front_default"]} />
                                                            </Box>
                                                            <Box display='flex' justifyContent="center">
                                                                <Typography>ID: {data.id}</Typography>
                                                            </Box>
                                                            <Box display='flex' justifyContent="center">
                                                                <Typography>Nome: {data.name}</Typography>
                                                            </Box>
                                                            <Box display='flex' justifyContent="center">
                                                                <Typography>Tipo: {pokemonType}</Typography>
                                                            </Box>
                                                            <Box display='flex' justifyContent="center">
                                                                <Typography>Altura: {data.height * 10} cm</Typography>
                                                            </Box>
                                                            <Box display='flex' justifyContent="center">
                                                                <Typography>Peso:{data.weight / 10} kg</Typography>
                                                            </Box>
                                                            <Box display='flex' justifyContent="center">
                                                                <Typography>Batalhas: {data.game_indices.length}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Fade>
                                                </Modal>
                                            </Box>
                                        </>
                                    );
                                })}

                            </Card>
                            <Box display='flex' justifyContent="center" paddingTop={10} >
                                <Link to='/home' className="text-decorator-none">
                                    <Button className="botao">
                                        Início
                                    </Button>
                                </Link>
                                <Link to='/lista-todos' className="text-decorator-none">
                                    <Button className="botao">
                                        Listar todos os Pokemóns
                                    </Button>
                                </Link>
                            </Box>
                        </Container>
                    </Card >
                </Container>
            </Container >

        </>
    );
}