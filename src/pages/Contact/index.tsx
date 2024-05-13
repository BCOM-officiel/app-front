import ContactTeamForm from "../../components/ContactTeamForm";
import Box from '@mui/material/Box';

export default function Contact() {
  return (
    <>
    <Box sx={{paddingTop: "200px", marginBottom:"50px", background: `linear-gradient(to top, rgba(0,0,0,0.2), transparent 30%, #000)`,
        color: "#fff",}}/>
    <ContactTeamForm />
    </>
    
  );
}
