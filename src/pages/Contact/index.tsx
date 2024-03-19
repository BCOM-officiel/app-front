import ContactTeamForm from "../../components/ContactTeamForm";
import Box from '@mui/material/Box';

export default function Contact() {
  return (
    <>
    <Box sx={{paddingTop: "200px", marginBottom:"50px", backgroundImage: "linear-gradient(to bottom, #111, #333)",
        color: "#fff",}}/>
    <ContactTeamForm />
    </>
    
  );
}
