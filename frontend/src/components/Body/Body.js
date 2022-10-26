import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Body.css'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Stack } from '@mui/system';
import { Avatar, Button, Typography } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Body = () => {
    return (
        <Box sx={{ bgcolor: '#FFFFFF', height: '100vh', width: '100%' }}>
            <Box sx={{ mt: 2, mr: 2 }}>
                <Grid container spacing={3}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={6}>
                        <Box boxShadow={4}>
                            <Box sx={{ height: '42vh', mt: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid className="CA" item xs={8} >
                                        <Box sx={{ height: '40vh', width: '100%' }}>
                                            <Box sx={{ height: '28vh', }}>
                                                <Box>
                                                    <Stack direction='row'>
                                                        <Box> <Avatar sx={{ ml: 2 }} src="/broken-image.jpg" /></Box>
                                                        <Box sx={{ ml: 2, mt: 2 }}>
                                                            <Typography variant='h7' sx={{ fontWeight: 600, }}>Pet3011 PAr3011 <BorderColorIcon fontSize='small' /></Typography>
                                                        </Box>
                                                    </Stack>
                                                    <Box sx={{ ml: 2 }}>
                                                        <Box mt={1}>
                                                            <Button size="small" variant="contained">Chart</Button><Button sx={{ ml: 1 }} size="small" variant="contained">Chart</Button>
                                                        </Box>
                                                        <Typography mt={2} variant="subtitle2" gutterBottom>Male Dob:01-jan-1980(42 yrs)</Typography>
                                                        <Typography variant="subtitle2" gutterBottom>Ethnicity:Caucasian (European</Typography>
                                                        <Typography variant="subtitle2" gutterBottom>Occupation: Management</Typography>
                                                        <Typography variant="subtitle2" gutterBottom>Account#: 15326243 MRN: - (EBS Demo Facility - 35)</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Stack direction='row' spacing={1}>
                                                {[0, 1, 2, 3].map((value) => (
                                                    <Box sx={{ height: '10vh', width: '6em', border: 1, borderRadius: 2 }}>
                                                        <Box sx={{ justifyContent: 'center' }}>
                                                            <Typography align="center" sx={{ color: '#FFFFFF', bgcolor: '#2196F3' }}>Risk</Typography>
                                                            <Typography variant="subtitle2" sx={{ bgcolor: 'grey' }}> This Year:N/A</Typography>
                                                            <Typography variant="subtitle2" sx={{ bgcolor: 'grey' }}> Last Year:N/A</Typography>
                                                        </Box>
                                                    </Box>
                                                ))}
                                            </Stack>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{ height: '40vh', width: '100%' }}>
                                            <Box>
                                                <Typography mt={2} variant="subtitle2" gutterBottom>No details provided</Typography>
                                                <Typography variant="subtitle2" gutterBottom>Primary: + 9174376575</Typography>
                                                <Typography variant="subtitle2" gutterBottom>Emargency: +176465765</Typography>
                                                <Typography variant="subtitle2" gutterBottom>Policy Number: 99999999</Typography>
                                                <Typography variant="subtitle2" gutterBottom>Insurer: Medicare</Typography>
                                            </Box>
                                            <Box >
                                                <Typography sx={{ fontWeight: 600 }} variant='h7'>Screenings</Typography>
                                                <Stack direction='row'>
                                                    <Typography variant='h7' sx={{ mr: 2, mt: 2 }}>DM</Typography>
                                                    <Typography variant='h7' sx={{ mr: 2, mt: 2 }}>BP</Typography>
                                                </Stack>
                                                <Stack direction='row'>
                                                    <Typography variant='h7' sx={{ mr: 2, mt: 1 }}>Colorectal</Typography>
                                                    <Typography variant='h7' sx={{ mr: 2, mt: 1 }}>Breast Cancer</Typography>
                                                </Stack>
                                                <Stack direction='row'>
                                                    <Typography variant='h7' sx={{ mr: 2, mt: 1 }}>Fall Risk</Typography>
                                                    <Typography variant='h7' sx={{ mr: 2, mt: 1 }}>Tobacco</Typography>
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Box sx={{ width: '100%', height: '40vh' }} >
                            <Stack direction='column'>
                                <Box boxShadow={4} sx={{ width: '100%', height: '15vh' }}>
                                    <Box><Typography align="center" sx={{ color: '#FFFFFF', bgcolor: '#2196F3' }}>< BusinessCenterIcon />Recent Activity:</Typography></Box>

                                    <Typography>Follow Up</Typography>

                                </Box>
                                <Box boxShadow={4} sx={{ width: '100%', height: '15vh', mt: 8.5 }}>
                                    <Typography align="center" sx={{ color: '#FFFFFF', bgcolor: '#2196F3' }}>Latest Note</Typography>
                                    <Typography>5. Types of Wellnaeds</Typography>

                                </Box>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 2 }}>
                    <Grid container spacing={3}>
                        <Grid item xs>
                        </Grid>
                        <Grid item xs={9}>
                            <Box sx={{ width: '100%', height: '44vh' }}>
                                <Grid item xs={12}>
                                    <Grid container >
                                            <Grid item>
                                                <Paper
                                                    sx={{
                                                        height: 300,
                                                        width: 220,
                                                        mr: 2,
                                                        mb: 2,
                                                        border:1,
                                                        borderColor:'blue'
                                                    }}
                                                >
                                                    <Typography sx={{ fontWeight: 600 }} variant='h7'>Primary Physician:</Typography>
                                                   
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper
                                                    sx={{
                                                        height: 300,
                                                        width: 220,
                                                        mr: 2,
                                                        mb: 2,
                                                        border:1,
                                                        borderColor:'green'
                                                    }}
                                                >
                                                    <Typography sx={{ fontWeight: 600 }} variant='h7'>Primary Physician:</Typography>

                                                </Paper>
                                            </Grid>   <Grid item>
                                                <Paper
                                                    sx={{
                                                        height: 300,
                                                        width: 220,
                                                        mr: 2,
                                                        mb: 2,
                                                        border:1,
                                                        borderColor:'orange'
                                                    }}
                                                >
                                                    <Typography sx={{ fontWeight: 600 }} variant='h7'>Primary Physician:</Typography>

                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper
                                                    sx={{
                                                        height: 300,
                                                        width: 220,
                                                        mr: 2,
                                                        mb: 2,
                                                        border:1,
                                                        borderColor:'red'
                                                    }}
                                                >
                                                    <Typography sx={{ fontWeight: 600 }} variant='h7'>Primary Physician:</Typography>
                                                </Paper>
                                            </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Body