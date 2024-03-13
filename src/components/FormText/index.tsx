import { Box, TextField, Typography } from '@mui/material';

type FormTextProps = {
	label: string;
	required?: boolean;
	type?: 'text';
};

const FormText = ({
	label,
	required = false,
	type = 'text',
}: FormTextProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
			}}>
			<Typography component="label" mb={1} sx={{fontWeight: 700, fontSize: '20px'}}>
				{label} {required && '*'}
			</Typography>
			<TextField
				multiline
				rows={8}
				variant='outlined'
				size='small'
				InputProps={{
					sx: {
						'& fieldset': {
							border: 'none',
						},
					},
				}}
				sx={{
					boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
					backgroundColor: 'transparent',
					border: '8px solid #eda44e',
					
				}}
				type={type}
			/>
		</Box>
	);
};

export default FormText;
