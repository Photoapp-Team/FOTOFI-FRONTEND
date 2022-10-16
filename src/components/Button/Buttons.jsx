import * as React from 'react';

import Button from '@mui/material/Button';

const ButtonToEdit = (props) => {
    return (
          <Button
          OnClick={()=>{console.log("Keep touching me baby")}} 
          type="submit"
          variant="contained"
          color="primary"
          >
            Log In
          </Button>
      );
}

export default ButtonToEdit;