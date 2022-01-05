import React from 'react'
import { Typography, AppBar, Toolbar, Container, ImageList, ImageListItem, TextField, Button } from '@material-ui/core'
import ImagesData from './ImagesData.json'
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const App = () => {
    return (
        <div>
            <AppBar>
                <Toolbar >

                    <Typography variant="h5">photo<CameraAltIcon />graphy</Typography>

                </Toolbar>
            </AppBar>
            <Container style={{ "marginTop": "70px", "textAlign": "center" }}>
                <Typography variant='h2'>Our Latest Version of Photos</Typography>
                <Typography paragraph>pleasure to take and pic your style</Typography>
            </Container>

            <Container>
                <ImageList rowHeight={210} cols={3}>
                    {ImagesData.map(imageObj =>
                        <ImageListItem key={imageObj.id} cols={1}>
                            <img src={imageObj.img} alt={imageObj.title} />
                        </ImageListItem>
                    )}

                </ImageList>
            </Container>
            <center>
                <Container>
                    <Typography variant="h4">ContactForm</Typography>
                    <form>
                        <TextField style={{ "width": "500px", "margin": "5px" }} type="text" label="Name" variant="outlined" /> <br />
                        <TextField style={{ "width": "500px", "margin": "5px" }} type="email" label="E-mail" variant="outlined" /> <br />
                        <TextField style={{ "width": "500px", "margin": "5px" }} type="text" label="Proposal" variant="outlined" /> <br />
                        <TextField style={{ "width": "500px", "margin": "5px" }} type="text" label="Address" variant="outlined" /> <br />
                        <Button variant="contained" color="primary">submit</Button>
                    </form>
                </Container>
            </center>



        </div>
    )
}


export default App