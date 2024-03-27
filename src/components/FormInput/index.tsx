import { Box, TextField, Typography } from '@mui/material';

type FormInputProps = {
	label: string;
	required?: boolean;
	type?: 'text' | 'email';
};

const FormInput = ({
	label,
	required = false,
	type = 'text',
}: FormInputProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
			}}>
			<Typography component="label" mb={1} sx={{fontWeight: "bold"}}>
				{label} {required}
			</Typography>
			<TextField
				variant='outlined'
				size='small'
				sx={{
					'& fieldset': {
						border: 'none',
					},
					boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
					backgroundColor: 'transparent',
					maxWidth:"250px"
				}}
				type={type}
			/>
		</Box>
	);
};

export default FormInput;
