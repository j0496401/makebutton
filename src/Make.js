import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
    
  formControl: {
    margin: theme.spacing(),
    minWidth: '25ch',
  }
}));


export default function InputSlider() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    buttonValue: 'Button Value',
    inputStyleName: 'ClassName',
    fontFamily: 'Arial',
    fontSize: 30,
    paddingY: 30,
    paddingX: 30,
    borderRadius: 30,
    borderSize: 30,
    boxShadowOffsetY: 30,
    boxShadowOffsetX: 30,
    boxShadowBlurRadius: 30,
    boxShadowSpreadRadius: 30,
    textShadowOffsetY: 30,
    textShadowOffsetX: 30,
    textShadowBlurRadius: 30
  });

  const [checkbox, setCheckbox] = React.useState({
    fontWeight: true,
    fontStyle: true,
    boxShadow: true,
    boxShadowInset: true,
    textShadow: true
  });


  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleChangecheckbox = event => {
    setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
  };


  return (
    <div className={classes.root}>
    <Grid>
      <Grid item xs={12}>
        <h1>
          {state.buttonValue}
          {state.inputStyleName}
          {state.fontFamily}
          {state.fontSize}
          {checkbox.fontWeight}
        </h1>
      </Grid>

      <Grid item xs={12}>
        <Chip color="primary" label="Text"/>
      </Grid>

      <Grid>
        <TextField
          name="buttonValue"
          label="Button Value"
          variant="outlined"
          size="small"
          onChange={handleChange}
        />

        <TextField
          name="inputStyleName"
          label="Class Name"
          variant="outlined"
          size="small"
          onChange={handleChange}
        />

        <FormControl variant="outlined" size="small" className={classes.formControl}>
          <InputLabel>Font Family</InputLabel>
          <Select
            onChange={handleChange}
            label="Font Family"
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

        <TextField
          label="FontSize"
          variant="outlined"
          size="small"
          onChange={handleChange}
          name="fontSize"
          inputProps={{
            step: 5,
            min: 0,
            max: 50,
            type: 'number',
          }}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={checkbox.fontWeight}
              onChange={handleChangecheckbox}
              name="fontWeight"
              color="primary"
            />
          }
          label="Bold"
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
          label="Italic"
        />
      </ Grid>

      <Grid>
        <Chip color="primary" label="Size"/>
      </Grid>
    
      <Grid>
        <TextField
            label="PaddingY"
            variant="outlined"
            size="small"
            onChange={handleChange}
            name="paddingY"
            inputProps={{
              step: 5,
              min: 0,
              max: 50,
              type: 'number',
            }}
          />

          <TextField
            label="PaddingX"
            variant="outlined"
            size="small"
            onChange={handleChange}
            name="paddingX"
            inputProps={{
              step: 5,
              min: 0,
              max: 50,
              type: 'number',
            }}
          />
        </Grid>

        <Grid>
          <Chip color="primary" label="Border"/>
        </Grid>

        <Grid>
          <TextField
            label="BorderRadius"
            variant="outlined"
            size="small"
            onChange={handleChange}
            name="borderRadius"
            inputProps={{
              step: 5,
              min: 0,
              max: 50,
              type: 'number',
            }}
          />

          <TextField
            label="BorderSize"
            variant="outlined"
            size="small"
            onChange={handleChange}
            name="borderSize"
            inputProps={{
              step: 5,
              min: 0,
              max: 50,
              type: 'number',
            }}
          />
        </Grid>

        <Grid>
          <Chip color="primary" label="Box Shadow"/>
        </Grid>

        <Grid>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkbox.boxShadow}
                onChange={handleChangecheckbox}
                name="boxShadow"
                color="primary"
              />
            }
            label="Box Shadow"
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
            label="Inset"
          />

          <TextField
            label="BoxShadowOffsetY"
            variant="outlined"
            size="small"
            onChange={handleChange}
            name="boxShadowOffsetY"
            inputProps={{
              step: 5,
              min: 0,
              max: 50,
              type: 'number',
            }}
          />

          <TextField
            label="BoxShadowOffsetX"
            variant="outlined"
            size="small"
            onChange={handleChange}
            name="boxShadowOffsetX"
            inputProps={{
              step: 5,
              min: 0,
              max: 50,
              type: 'number',
            }}
          />

          <TextField
            label="BoxShadowBlurRadius"
            variant="outlined"
            size="small"
            onChange={handleChange}
            name="boxShadowBlurRadius"
            inputProps={{
              step: 5,
              min: 0,
              max: 50,
              type: 'number',
            }}
          />

          <TextField
            label="BoxShadowSpreadRadius"
            variant="outlined"
            size="small"
            onChange={handleChange}
            name="boxShadowSpreadRadius"
            inputProps={{
              step: 5,
              min: 0,
              max: 50,
              type: 'number',
            }}
          />
        </Grid>

        <Grid>
          <Chip color="primary" label="Text Shadow"/>
        </Grid>

        <Grid>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkbox.textShadow}
                onChange={handleChangecheckbox}
                name="textShadow"
                color="primary"
              />
            }
            label="Text Shadow"
          />

          <TextField
            label="TextShadowOffsetY"
            variant="outlined"
            size="small"
            onChange={handleChange}
            name="textShadowOffsetY"
            inputProps={{
              step: 5,
              min: 0,
              max: 50,
              type: 'number',
            }}
          />

          <TextField
            label="TextShadowOffsetX"
            variant="outlined"
            size="small"
            onChange={handleChange}
            name="textShadowOffsetX"
            inputProps={{
              step: 5,
              min: 0,
              max: 50,
              type: 'number',
            }}
          />

          <TextField
            label="TextShadowBlurRadius"
            variant="outlined"
            size="small"
            onChange={handleChange}
            name="textShadowBlurRadius"
            inputProps={{
              step: 5,
              min: 0,
              max: 50,
              type: 'number',
            }}
          />
      </Grid>
    </Grid>
  </div>
  );
}