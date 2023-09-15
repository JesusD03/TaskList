import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, TextField, FormControlLabel, Checkbox } from '@mui/material'

function TaskForm({addTask}) {

    const [userId, setUserId] = useState('')
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [completed, setCompleted] = useState(false)
    const handleClick = ()=>{
        addTask({userId, title, completed})
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField label="User ID" variant="standard" value={userId} onChange={(e)=>{setUserId(e.target.value)}}/>
            <TextField label="Title" variant="standard" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <FormControlLabel control={<Checkbox checked={completed} onChange={(e)=>{setCompleted(!completed)}} />} label="Completed" />
            <Button variant="contained" onClick={handleClick}>Save</Button>
        </Box>
    )
}

TaskForm.propTypes = {
    addTask: PropTypes.func
}

export default TaskForm
