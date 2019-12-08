import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import instagram from './images/iconmonstr-instagram-11.svg';
import soundcloud from './images/iconmonstr-soundcloud-1.svg';
import facebook from './images/iconmonstr-facebook-4.svg';
import youtube from './images/iconmonstr-youtube-6.svg';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      background: 'none',
      border: 0,
      borderRadius: 0,
      boxShadow: 'none',

    },
  }),
);


const SocialBar = () : JSX.Element | null => {
    const classes = useStyles();
    const socialMedaLinks = [
        {
            title: 'instagram',
            image: instagram,
            url: 'https://www.instagram.com/fizzy_beats/',
        },
        {
            title: 'Soundcloud',
            image: soundcloud,
            url: 'https://soundcloud.com/fizzybeats',
        },
        {
            title: 'Facebook',
            image: facebook,
            url: 'https://www.facebook.com/FizzybeatsDnB/',
        }
        ,
        {
            title: 'Youtube',
            image: youtube,
            url: 'https://www.youtube.com/user/fizzybeatsDnB',
        }
    ];
    return (
    <React.Fragment>
        <div className={classes.root}>
            <Typography component="h4">
            LISTEN TO FIZZY BEATS ON:
            </Typography>
            <Grid container spacing={3}>
                {socialMedaLinks.map(({ title, image, url}) => {
                    return (
                        <Grid item xs={6} sm={3} key={title}>
                            <Paper className={classes.paper}>
                                <a href={url} target="_blank">
                                <img src={image} alt={title} />
                                </a>
                            </Paper>
                    </Grid>
                    )

                })}
            </Grid>
        </div>
    </React.Fragment>
    )
}

export default SocialBar;