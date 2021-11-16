import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function forgotpassword() {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Pagina em Construção
                </Typography>
                <Link href="/login" color="secondary">
                    Vá para pagina de Login
                </Link>
            </Box>
        </Container>
    );
}