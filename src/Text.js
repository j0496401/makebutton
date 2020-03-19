import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
    root: {
        width: 250,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
      },
    input: {
        width: 42,
    },
      
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    }
  }));


export default function InputSlider() {
  const classes = useStyles();
  const [buttonValue, setbuttonValue] = React.useState('ButtonValue');
  const [inputStyleName, setinputStyleName] = React.useState('inputStyleName');
  const [fontFamily, setfontFamily] = React.useState('Arial');
  const [fontSize, setfontSize] = React.useState(30);

  
  const handleChangeButtonValue = event => {
    setbuttonValue(event.target.value);
  };

  const handleChangeinputStyleName = event => {
    setinputStyleName(event.target.value);
  };

  const handleChangefontFamily = event => {
    setfontFamily(event.target.value);
  };

  
  const handleSliderChange = (event, newValue) => {
    setfontSize(newValue);
  };

  const handleInputChange = event => {
    setfontSize(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (fontSize < 0) {
      setfontSize(0);
    } else if (fontSize > 100) {
      setfontSize(100);
    }
  };





  return (
    <div className={classes.root}>
        <h1>{buttonValue}{inputStyleName}{fontFamily}{fontSize}</h1>

        <TextField
          id="outlined-helperText"
          label="Button Value"
          variant="outlined"
          onChange={handleChangeButtonValue}
          value={buttonValue}
        />

        <TextField
          id="outlined-helperText"
          label="Class Name"
          variant="outlined"
          onChange={handleChangeinputStyleName}
          value={inputStyleName}
        />


        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">FontFamily</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={fontFamily}
          onChange={handleChangefontFamily}
          label="fontFamily"
        >
          <MenuItem value={'-apple-system'}>-apple-system</MenuItem>
          <MenuItem value={'BlinkMacSystemFont'}>BlinkMacSystemFont</MenuItem>
          <MenuItem value={'"Segoe UI"'}>Segoe UI</MenuItem>
          <MenuItem value={'Roboto UI'}>Roboto</MenuItem>
          <MenuItem value={'"Helvetica Neue"'}>"Helvetica Neue"</MenuItem>
          <MenuItem value={'Arial'}>Arial</MenuItem>
          <MenuItem value={'sans-serif'}>sans-serif</MenuItem>
          <MenuItem value={'"Apple Color Emoji"'}>"Apple Color Emoji"</MenuItem>
          <MenuItem value={'"Segoe UI Emoji"'}>"Segoe UI Emoji"</MenuItem>
          <MenuItem value={'"Segoe UI Symbol"'}>"Segoe UI Symbol"</MenuItem>
        </Select>
      </FormControl>


      <Typography id="input-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2} alignItems="center">

        <Grid item xs>
          <Slider
            value={typeof fontSize === 'number' ? fontSize : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={fontSize}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}