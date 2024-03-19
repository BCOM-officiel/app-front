import { Typography, Box } from "@mui/material";
import CustomButton from "../../../components/button";
import imgEvent1 from "../../../assets/imgEvent1.png";
import imgEvent2 from "../../../assets/imgEvent2.png";

const Evenement = () => {
    return (
        <Box
        sx={{
            pl: '120px',
            backgroundColor: '#164462',
            color: '#fff',
            py: 5,
        }}>
        <Typography
            component='h1'
            sx={{
                fontFamily: "'PT Sans Narrow', sans-serif",
                fontSize: '48px',
                my: 2,
            }}>
            Évenements.
        </Typography>
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '2fr 4fr 3fr',
                gridTemplateRows: '600px 200px',
                gap: 5,
            }}>
            <Typography
                sx={{
                    gridRow: '1 / -1',
                    fontSize: '1.2rem',
                }}>
                Nous sommes ravis de vous annoncer notre événement exceptionnel, une
                célébration de l’innovation et de la créativité, réunissant les
                talents découverts. Cet événement sera une opportunité unique de
                découvrir une multitude de services et de produits innovants. Chaque
                talent se verra attribuer un stand dédié, offrant ainsi une
                expérience immersive pour le public. Venez rencontrer les visages
                derrière ces projets inspirants, échanger avec eux et découvrir les
                histoires fascinantes qui se cachent derrière chaque création. Cet
                événement sera bien plus qu’une simple exposition ; ce sera une
                véritable rencontre entre les talents et leur public, une occasion
                de tisser des liens et d’inspirer l’avenir. Rejoignez-nous pour
                célébrer l’ingéniosité et le talent sous toutes ses formes !
            </Typography>
            <Box
                component='img'
                sx={{
                    width: '100%',
                    height: 'auto',
                }}
                src={imgEvent1}
            />
            <Box
                component='img'
                sx={{
                    width: '100%',
                    height: 'auto',

                    gridColumn: '3 / 4',
               
                }}
                src={imgEvent2}
            />
            <CustomButton
                sx={{
                    justifySelf: 'flex-end',
                    alignSelf: 'center',
                    gridColumn: '3 / 4',
                    mr: '120px',
                }}>
                En savoir +
            </CustomButton>
        </Box>
    </Box>
    );
    };

export default Evenement;