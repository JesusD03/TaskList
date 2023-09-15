import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import PropTypes from 'prop-types'
import TaskRow from './TaskRow'

function TaskTable({taskList}) {

    const renderTasks = () => {
        return taskList.map((task) =>
            (<TaskRow key={task.id} task={task}></TaskRow>))
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>UserId</TableCell>
                        <TableCell align="right">Id</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Completed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderTasks()}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

TaskTable.propTypes = {
    taskList: PropTypes.array
}

export default TaskTable