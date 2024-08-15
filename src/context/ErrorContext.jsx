import { Box, Modal, Typography } from '@mui/material'
import React, { createContext, useState } from 'react'

export const errorContext = createContext()

const ErrorContext = ({ children }) => {

  const [error, setError] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const showError = (message) => {
    setOpenModal(true)
    setError(message)
  }

  const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  return (
    <errorContext.Provider value={{ showError }}>
      {children}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {error}
          </Typography>
        </Box>
      </Modal>
    </errorContext.Provider>
  )
}

export default ErrorContext