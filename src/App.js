import React, { useState, useEffect } from 'react';
import {
  Typography,
  TextField,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import themes from './themes';

const App = () => {
  // add persistence with useEffect

  const [exercises, setExercises] = useState(JSON.parse(localStorage.getItem('exercises')) || []);

  useEffect(() => {
    localStorage.setItem('exercises', JSON.stringify(exercises));
  }, [exercises]);

  const [title, setTitle] = useState('');
  const [theme, setTheme] = useState(themes.orangeTheme);

  const classes = makeStyles(() => ({
    root: {
      margin: 'auto',
      marginTop: '20vh',
      padding: 20,
      maxWidth: 400,
    },
    form: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-evenly',
    },
    center: {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
  }))();

  const handleClick = () => {
    const lastId = Math.max(exercises.map(exercise => exercise.id));
    let id;
    lastId == null ? (id = 0) : (id = lastId + 1);
    setExercises([...exercises, { id, title }]);
    setTitle('');
  };

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleClick();
  };

  const handleDelete = id => {
    setExercises(exercises.filter(exercise => exercise.id !== id));
  };

  const handleSelect = e => {
    setTheme(e.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Typography variant="h2" align="center" gutterBottom>
          Exercises
        </Typography>
        <div className={classes.center}>
          <FormControl>
            <Select value={theme} onChange={handleSelect}>
              <MenuItem value={themes.orangeTheme}>Orange</MenuItem>
              <MenuItem value={themes.blueTheme}>Blue</MenuItem>
              <MenuItem value={themes.greenTheme}>Green</MenuItem>
            </Select>
          </FormControl>
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField name="title" label="Exercise" value={title} onChange={handleChange} />
          <Button variant="contained" color="primary" onClick={handleClick}>
            CREATE
          </Button>
        </form>
        <List>
          {exercises.map(exercise => (
            <ListItem key={exercise.id}>
              <ListItemText primary={exercise.title} />
              <IconButton color="primary" onClick={() => handleDelete(exercise.id)}>
                {' '}
                <Delete />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
