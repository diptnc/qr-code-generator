import { useEffect, useState } from "react";
import QRCode from "qrcode";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Slider from "@material-ui/core/Slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { saveAs } from "file-saver";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Head from "next/head";









const Index = () => {
  const [text, setText] = useState('https://diptanuchakraborty.in');
  const [size, setSize] = useState(256);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fileType, setFileType] = useState("png");
  const [margin, setMargin] = useState(4);

  const handleDownload = () => {
    const canvas = document.getElementById("qrcode");
    canvas.toBlob(function (blob) {
      saveAs(blob, `qrcode.${fileType}`);
    });
  };
useEffect(() => {
    if (text) {
      generateQRCode();
    }
  }, [text, size, margin, fgColor, bgColor, fileType]);

 //donot change the size of the canvas in preview but while downloading change the size of the canvas
 
  const generateQRCode = () => {
    QRCode.toCanvas(
      document.getElementById("qrcode"),
      text,
      {
        width: size,
        height: size,
        margin: margin,
        color: {

          dark: fgColor,
          light: bgColor,
        },
      },
      function (error) {
        if (error) console.error(error);
        console.log("success!");
      }
    );
  };




  return (
    <>
    <Head>

    <title>QR Code Generator Web App - Create Custom QR Codes</title>
    <meta name="description" content="Generate QR codes quickly and easily with our web-based QR code generator. Customizable options available for free. Try it now!" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="keywords" content="QR code generator, custom QR codes, create QR codes, QR code maker, QR code creator, personalized QR codes"
    />
    <meta name="author" content="Diptanu Chakraborty" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="QR Code Generator Web App - Create Custom QR Codes" />
    <meta property="og:description" content="Generate QR codes quickly and easily with our web-based QR code generator. Customizable options available for free. Try it now!" />



    </Head>
    <div className="app_body">
      <Container maxWidth="sm">
        {" "}
   {/* //Header compnent */}
        <h1>QR Code Generator</h1>

        <FormControl fullWidth>
          <TextField
            label="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            margin="normal"
          />
        </FormControl>
      
    
    
        <div style={{ marginTop: "1rem" }}>  <Grid container spacing={3}>    <Grid item xs={12}>
          <FormControl  fullWidth>
            <InputLabel id="size-label">Size</InputLabel>
            {/* //style the slider */}
            
            <Slider
          
              value={size}
              onChange={(e, value) => setSize(value)}
              aria-labelledby="size-label"
              valueLabelDisplay="top"
              step={1}
              valueLabelFormat={(value) => `${value} px`}
     
     
            
             
              min={128}
              max={512}

            />

          </FormControl>
          {/* //margin slider */}
          <FormControl  fullWidth style={{marginTop:'20px'}}>
            <InputLabel id="margin-label">Margin</InputLabel>
            <Slider

     
              value={margin}
              onChange={(e, value) => setMargin(value)}
              aria-labelledby="margin-label"
        
              step={1}
              marks
              min={0}
              max={10}
              valueLabelFormat={(value) => `${value} px`}
              valueLabelDisplay="top"
            />
          </FormControl>

          </Grid>
{/* //get forground , backgroud and filtype in resoponsive single line  */}
          <Grid item xs={4}> 
{/* //style the select */}
          <FormControl style={{ marginLeft: "1rem" }} fullWidth>
            <InputLabel id="fg-color-label">Foreground Color</InputLabel>
            <Select
            
              labelId="fg-color-label"  
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}

            >
              <MenuItem value="#ffffff">White</MenuItem>
              <MenuItem value="#000000">Black</MenuItem>
              <MenuItem value="#ff0000">Red</MenuItem>
              <MenuItem value="#00ff00">Green</MenuItem>
              <MenuItem value="#0000ff">Blue</MenuItem>
            </Select>


          </FormControl>
          </Grid> 
          <Grid item xs={4} >

          <FormControl style={{ marginLeft: "1rem" }} fullWidth>
            <InputLabel id="bg-color-label">Background Color</InputLabel>
            <Select
              labelId="bg-color-label"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            >
              <MenuItem value="#ffffff">White</MenuItem>
              <MenuItem value="#000000">Black</MenuItem>
              <MenuItem value="#ff0000">Red</MenuItem>
              <MenuItem value="#00ff00">Green</MenuItem>
              <MenuItem value="#0000ff">Blue</MenuItem>
              <MenuItem value="#0000000">Transparent</MenuItem>
            </Select>
          </FormControl>

          </Grid>
          <Grid item xs={4}>
          <FormControl style={{ marginLeft: "1rem" }} fullWidth>
            <InputLabel id="file-type-label">File Type</InputLabel>
            <Select
              labelId="file-type-label"
              value={fileType}
              onChange={(e) => setFileType(e.target.value)}
            >
              <MenuItem value="png">PNG</MenuItem>
              <MenuItem value="jpg">JPG</MenuItem>
     

            </Select>
          </FormControl> 

          </Grid>


          </Grid>
        </div>
       
       <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
        <div style={{ marginTop: "1rem" }}>
          <h4>Preview</h4>
          <canvas
            id="qrcode"
            width={250}
            height={250}
            style={{ border: "1px solid #000" }}
          />


        </div>
        </Grid>
        <div style={{ marginTop: "1rem" }}>
          <Button variant="contained" color="primary" onClick={handleDownload}>
            Download
          </Button>
        </div>
      </Container>
    </div>

    {/* //footer */}
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <h3>QR Code Generator</h3> 
         
        </div>
        <div className="footer__right"><p className="text-footer">
           developed by
          <a href="https://diptanuchakraborty.in"> diptanuchakraborty.in</a>
         
        </p>
          </div>
      </div>
    </footer>
    </>);
};

export default Index;
