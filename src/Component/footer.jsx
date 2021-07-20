import { Grid , TextField} from '@material-ui/core'
import React from 'react'
import classes from './footer.module.css'
import classNames from 'classnames'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function footer() {
               return (
                             <Grid container spacing={3} className={classes.container}>
                              <Grid item md={3}></Grid>
                              <Grid item md={8}> 

                           <Grid container spacing={3}>   
                           <Grid item md={3}>
                           <form className={classes.form}>
                                         <h1 className={classes.h1}>  Reach out to us </h1>

                                                 <input type='text' placeholder='Name'    className={classes.input} /> <br />
                                               <input type='text' placeholder='Email'     className={classes.input} /> <br />
                                                 <input type='text' placeholder='Phone '  className={classes.input} /> <br />
                                                  <textarea className={classes.textArea} rows='10'  placeholder='Type your message here...' /> <br />
                                                   <button className={classNames(classes.btn , classes.first)}> Submit </button>
                           </form>
                           </Grid>
                           <Grid item md={3}> 
                           <div className={classes.form}>
                           <h1 className={classes.h1}>About</h1>
                           
                             <button className={classNames(classes.btn1 , classes.first)}> Home </button> <br />
                               <button style={{
                                  paddingLeft:'4rem',
                                  paddingRight:'3rem'
                               }} className={classNames(classes.btn1 , classes.first)}> 
                                  
                                Our Product  </button> <br />
                                 <button style={{
                                  paddingLeft:'4rem',
                                  paddingRight:'4.4rem'
                               }} className={classNames(classes.btn1 , classes.first)}> Why Us? </button> <br />
                           </div>
                            
                           <Grid item md={2}>
                            <div className={classes.form}> 

                                <h1 style={{width:'1000px'}} className={classes.h1}> Download Dezy It </h1>
                              <img  style={{
                                 width:'300px',
                                 height:'40px'
                              }} src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"/>
                                
 
                            </div>
                              </Grid>

                            </Grid>
                              <Grid item md={3}> 
                           <div className={classes.form}>
                           <h1 className={classes.h1}>Contact</h1>
                                <p style={{
                                   color:'white'
                                }}>Email - support@dezyit.com</p>  
                                
                                <i  style={{
                                   color:'white',
                                   marginRight:'1rem'
                                }} ><InstagramIcon/></i>                       
                                 <i style={{
                                    color:'white',
                                    marginRight:'1rem'
                                 }} ><FacebookIcon/></i>
                                 <i style={{
                                    color:'white',
                                    marginRight:'1rem'
                                 }} ><LinkedInIcon/></i>
                              

                                 <p style={{
                                    color:'white'
                                 }}>@2020 by dezy it</p>
                                 
                           </div>
                            </Grid>
                              <Grid item md={1}></Grid>
                              <Grid item md={1}></Grid>
                           </Grid>
                           
                              </Grid>
                              <Grid item md={3}> </Grid>
                             </Grid>
               )
}
