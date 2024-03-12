import { Button } from '@mui/material';

type FormSubmitProps = {
	children: React.ReactNode;
};

const FormSubmit = ({ children }: FormSubmitProps) => {
	return (
		<Button
			variant='contained'
			type='submit'
			sx={{
				textTransform: 'none',
				color: 'black',
				backgroundColor: 'white',
				px: 6,
				borderRadius: 90,
				boxShadow: 'none',
				fontWeight: 600,
			}}>
			{children}
		</Button>
	);
};

export default FormSubmit;
