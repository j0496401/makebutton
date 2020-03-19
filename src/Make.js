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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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

    const [state, setState] = React.useState({
      buttonValue: 'Button Value',
      inputStyleName: 'ClassName',
      fontFamily: 'Arial',
    });

    const [checkbox, setCheckbox] = React.useState({
      fontWeight: true,
      fontStyle: true,
      boxShadow: true,
      boxShadowInset: true,
      textShadow: true
    });

    const [fontSize, setfontSize] = React.useState(30);
  

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleChangecheckbox = event => {
      setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
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
        <h1>
          {state.buttonValue}
          {state.inputStyleName}
          {state.fontFamily}
          {fontSize}
          {checkbox.fontWeight}
        </h1>

        <TextField
          id="outlined-helperText"
          label="Button Value"
          variant="outlined"
          onChange={handleChange}
          value={state.buttonValue}
          name="buttonValue"
        />

        <TextField
          id="outlined-helperText"
          label="Class Name"
          variant="outlined"
          onChange={handleChange}
          value={state.inputStyleName}
          name="inputStyleName"
        />


        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">FontFamily</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state.fontFamily}
          onChange={handleChange}
          label="fontFamily"
          name="fontFamily"
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
            name="fontSize"
            max= {50}
            min= {0}
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            name="fontSize"
            value={fontSize}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 5,
              min: 0,
              max: 50,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>

      <FormControlLabel
        control={
          <Checkbox
            checked={checkbox.fontWeight}
            onChange={handleChangecheckbox}
            name="fontWeight"
            color="primary"
          />
        }
        label="Primary"
      />
            <FormControlLabel
        control={
          <Checkbox
            checked={checkbox.fontStyle}
            onChange={handleChangecheckbox}
            name="fontStyle"
            color="primary"
          />
        }
        label="Primary"
      />
            <FormControlLabel
        control={
          <Checkbox
            checked={checkbox.boxShadow}
            onChange={handleChangecheckbox}
            name="boxShadow"
            color="primary"
          />
        }
        label="Primary"
      />
                  <FormControlLabel
        control={
          <Checkbox
            checked={checkbox.boxShadowInset}
            onChange={handleChangecheckbox}
            name="boxShadowInset"
            color="primary"
          />
        }
        label="Primary"
      />
                  <FormControlLabel
        control={
          <Checkbox
            checked={checkbox.textShadow}
            onChange={handleChangecheckbox}
            name="textShadow"
            color="primary"
          />
        }
        label="Primary"
      />

    </div>
  );
}