import React, {useState} from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';
import { useNavigate } from "react-router-dom";
import { AddClub } from '../../services/club-services';
import { Link } from "react-router-dom";

import {NotificationManager} from 'react-notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';


export default function host_event() {
    const [Heading, setEventname] = useState('');
    const [eventTag, setTag] = useState('');
    const [about, setDesc] = useState('');
    const [image, setImg] = useState('');

    const { authData, setAuth } = useAuth();
    // eikhaneo change lgte pare.use auth er upor depend kore
    const navigate = useNavigate();

    const handlerSubmit = async e => {
        e.preventDefault();
		setImg(null);
        console.log("In handleSubmit")
		const uploaded = await AddEvent( 
            // eikhane addevent ta korte hobe
			Heading,
            eventTag,
			about,
            image
		);
		if (uploaded) {
			NotificationManager.success(
				'Event uploaded successfully'
			);
		} else {
			NotificationManager.error('Error, Event info was not correct');
		}
    }
  

  return (


    <div className='clubinput'>
      
            
                <div>
                <form onSubmit={handlerSubmit}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <TextField id="input-with-sx" label="Club Name" variant="standard"
                            onChange={e => setEventname(e.target.value)}
                        />
                    </Box>


                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <TextField id="input-with-sx" label="Institution" variant="standard" 
                            onChange={e => setTag(e.target.value)}
                        />
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <TextField id="input-with-sx" label="Description" variant="standard" 
                            onChange={e => setDesc(e.target.value)}
                        />
                    </Box>
                    <div className="logging">
                    <Button
                        type='submit' onClick={handlerSubmit}
                        path_name='next'
                    >
                     Next
                    </Button>
                    <Button
                        type='submit' onClick={handlerSubmit}
                        path_name='archive'
                    >
                     AddFromArchive
                    </Button>

                    </div>
                    
                </form>
                
                </div>
               

    </div>
  );
}
