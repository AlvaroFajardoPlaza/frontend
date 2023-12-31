import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { Box, Button, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import AddDeviceForm from '../forms/AddDeviceForm';
import DeviceList from '../DeviceList/DeviceList';
import HubNavBar from '../MenuBars/HubNavBar';

const RoomPanel = ( room ) => {
    const [ AddDevicePopup, toggleAddDevicePopup ] = useState(false);

    //Podemos hacer fetch y traer la info de la room en la que nos encontramos.
    //El parámetro room no lo lee correctamente --- undefined --

    return (
        <>
        <HubNavBar></HubNavBar>
        <Box sx= {{
            padding:'1rem 2rem 1rem 2rem',
            bgcolor: '#E8F8F8',
            minHeight: '100vh'
        }}>
                <Paper elevation={8} sx={{
                    p: '2rem',
                    marginTop: '1rem',
                    marginBottom: '1rem'
                }}>
                    <Typography variant='h4'sx={{marginBottom:'1rem'}}>Dispositivos conectados en: { room.name }</Typography>
                    {/* {console.log('esto es el nombre de mi estancia actual: ', room)} */}
                    <Typography variant='body1'>En este área puedes visibilizar tus diferentes dispositivos y el estado de cada uno de ellos.</Typography>
                </Paper>
                        
                <Button color='primary' variant='contained' startIcon={<AddBoxIcon/>} 
                sx={{marginBottom: '2rem', marginTop:'1rem'}}
                onClick={ () => toggleAddDevicePopup(true)}>
                Añadir nuevo dispositivo
                </Button>
                {AddDevicePopup && <AddDeviceForm closePopUp={toggleAddDevicePopup}></AddDeviceForm>}
                
                <DeviceList refresh={AddDevicePopup}></DeviceList>
        </Box>
        </>
    )      
};

export default RoomPanel