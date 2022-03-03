import { Container, Card, Box, Typography, Button, Fade, Modal, Backdrop, Grid } from "@material-ui/core";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import "./ListaTodos.css";



export default function ListaTodos() {
    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)

        function createPokemonObject(results) {
            results.forEach(async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setAllPokemons(currentList => [...currentList, data])
                await allPokemons.sort((a, b) => a.id - b.id)
            })
        }
        createPokemonObject(data.results)
    }

    return (
        <>
            <Box className="bg">
                <Container maxWidth="xs">
                    <Box display='flex' justifyContent="center" paddingTop={10} >
                        <img className="img" src="https://i.imgur.com/FQ8CYwp.png" />
                    </Box>

                    <Box display='flex' justifyContent="center" paddingTop={10} >
                        <Card>
                            {allPokemons.map((data) => {
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
                                                            <Typography>Tipo: {data.types[0].type.name}</Typography>
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
                    </Box>
                    <Box display='flex' justifyContent="center" paddingTop={1} >
                        <Link to='/home' className="text-decorator-none">
                            <Button className="botao">
                                Início
                            </Button>
                        </Link>
                        <Link to='/lista-id-nome' className="text-decorator-none">
                            <Button className="botao">
                                Listar Pokemón por ID ou nome
                            </Button>
                        </Link>
                    </Box>
                    <Stack spacing={2}>
                        <Pagination onClick={() => getAllPokemons()} />
                    </Stack>
                </Container>
            </Box>
        </>
    );
} 