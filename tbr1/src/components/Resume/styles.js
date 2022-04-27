import { makeStyles } from "@mui/styles";


const styles = makeStyles((theme) => ({
  resume__wrapper: {
    margin: "60px 0px 0px 0px",
  },

  svg: {
    display: "flex",
    width: "100%",

    transition: "all 2.5s ease",
    marginTop: "-10px",
    '&:hover': {
      backgroundColor: "rgba(0, 0, 0, 0.87)",

      boxShadow: "2px 2px 10px rgba(2, 3, 11, 0.1)",
      borderImageSource: "linear - gradient(to left, #00C853, #B2FF59)",
      scale: "1.1",
    }
  },
  filler: {
    paddingTop: "50px",
    height: "100px",
    maxWidth: "1000px",
  }


}));

export default styles;

// display: flex;
// border: "solid red 10px";
//  justify-content: center;
//  align-content: center;
// background-color: rgba(2, 3, 11, 0.1);
//  border-radius: 30px;
//  padding: 2rem;
//  color: whitesmoke;
//  font-weight: bold;
//  text-align: center;
//  text-decoration: none;
//  transition: all 0.3s ease;
//  overflow-inline: auto;
//  max-width: 100%;
//  max-height: 100%;

// .resume__wrapper:hover{
//   background-color: rgba(0, 0, 0, 0.5);
//   color: rgb(212, 255, 0);
//   box-shadow: 0px 0px 10px rgba(255,255,100,1);
//   font-size: larger;
// }