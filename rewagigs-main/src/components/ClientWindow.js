import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function ClientWindow({ seller,i }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log("dialogue is open now");
  };

  const handleClose = () => {
    setOpen(false);
    console.log("dialogue is close now", open);
  };

  const meButton = () => {
    setOpen(true);
    console.log("someone clickked me");
    handleClickOpen();
  };
  return (
    <div key={i}>
      <Card sx={{ maxWidth: 320, height: 250, bgcolor: "#7CAF96" }}  key={i}>
        <CardContent  key={i}>
          <img src={seller.picture} height="100px" maxwidth="150px" alt="img" />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom  key={i}>
            {seller.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={meButton}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        style={{ width: "700px", height: "500px", padding: "30px" }}
      >
        <DialogTitle>{seller.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <img
              src={seller.picture}
              height="100px"
              maxWidth="150px"
              alt="img"
            />
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {seller.name}
            </Typography>

            <p>
              <b> {seller.service}</b>
            </p>
            {seller.Description}
            <h3>Rating:{seller.rating}</h3>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Book Order</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ClientWindow;
