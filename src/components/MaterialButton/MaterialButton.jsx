import { Button } from '@mui/material';

const MaterialButton = ({ color = '#53575A', title = "Workspace - 1", width, hoverColor, isbordered = true, onClick }) => {
    return (
        <Button
            onClick={onClick}
            variant="contained"
            sx={{
                background: color,
                border: '2px solid transparent',
                width: width && width,
                '&:hover': {
                    background: hoverColor ? hoverColor : '#53575A',
                    border: isbordered && '2px solid #FFBF3C',
                    boxShadow: 'none'
                },
                '&:focus': {
                    border: '2px solid #FFBF3C',
                },
                boxShadow: 'none',
                '& .MuiButton-label': {
                    color: '#ffffff' // Optional: Set the text color to white
                }
            }}
        >
            {title}
        </Button>
    );
};

export default MaterialButton;
