import { Container, Card, Box, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
    return (
        <>
            <Container className="bg" >
                <Container maxWidth="xs">
                    <Card className="card">
                        <Box display='flex' justifyContent="center" paddingTop={10} >
                            <img className="img" src="https://i.imgur.com/FQ8CYwp.png" />
                        </Box>
                        <Box display='flex' justifyContent="center" paddingTop={10} >
                            <Link to='/lista-todos' className="text-decorator-none">
                                <Button className="botao">
                                    TODOS OS POKEMÓNS
                                </Button>
                            </Link>
                            <Link to='/lista-id-nome' className="text-decorator-none">
                                <Button className="botao">
                                    POKEMÓN POR NOME OU ID
                                </Button>
                            </Link>
                        </Box>
                    </Card >
                </Container>
            </Container>
        </>
    );
}