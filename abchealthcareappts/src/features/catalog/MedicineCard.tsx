import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Medicine } from "../../app/models/medicine";

interface props{
    medicine: Medicine;
}
export default function MedicineCard({medicine}:props){
    return(
        <>
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader sx={{}}
            avatar={
                <Avatar sx={{bgcolor:'secondary.main'}}>
                    {medicine.nameMed.charAt(0).toUpperCase()}
                </Avatar>
            }
            title={medicine.nameMed}
            titleTypographyProps={{
                sx:{fontWeight:'bold',color:'primary.main'}
            }}
            />
      <CardMedia
        component="img"
        sx={{height:"140",
        backgroundSize:'contain',bgcolor:'primary.light'}}
        image="http://picsum.photos/200"
        title={medicine.nameMed}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        &#8377; &nbsp;{medicine.priceMed}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {medicine.descriptionMed}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
        </>
    )
}