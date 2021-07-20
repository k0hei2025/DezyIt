import { Grid, Typography } from '@material-ui/core'
import React, { Fragment } from 'react'
import classes from './home.module.css'

export default function home() {
               return (
                              <Fragment>
 
                              <Grid container spacing={3} className={classes.grid1} >
                               
                               

                              <Grid item md={6} sm={12} >
                           
                           <Grid container>
                            <Grid item md={4} sm={2} ></Grid>
                            
                            <Grid item md={2} sm={2} ></Grid>                              
                         
                            <Grid  item md={6} sm={8} className={classes.content}>
                               <h1 style={{
                                              marginTop:'5rem',
                               }}><b>   Your Personal Design Sprint Master! </b> </h1>
                              <Typography variant="h6" style={{
                                             marginTop:'2rem'
                              }}>Time to inovate? let's Dezy it!</Typography> 
      
                            </Grid>   
                              

                             <Grid item md={4}></Grid>
                             <Grid item md={2}></Grid>
                             <Grid item md={6} className={classes.content} style={{marginTop:'3rem'}}>
                                            <p style={{
                                                           fontSize:'2rem'
                                            }}>
                                                           Download Now!
                                            </p>
                                            <b style={{
                                                           color:"#302b70"
                                            }}> And Enjoy Beta Version For free!</b>
                                            <br/>
                                            <br/>
                                               <img  style={{
                                 width:'300px',
                                 height:'40px'
                              }} src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"/>
                                
                             </Grid>
                              </Grid>
                            



                             
                              </Grid>
                             


                             
                              <Grid item md={6} sm={12}>
                              <div className={classes.img}>
                              <img src="https://static.wixstatic.com/media/ec9816_58d376c7bae642ff8c9bc2d22895f107~mv2.png/v1/fill/w_358,h_577,al_c,q_95/Design%20Thinking%20Sprint%20-%20Centre3.webp"/>
                              </div>

                      


                              </Grid>

                              


                              <Grid> </Grid>
            
                              </Grid>
                          
                              <Grid container spacing={3} > 
                              
                              <Grid item md={3}></Grid>
                              <Grid item md={3} sm={12}>

<img src="https://static.wixstatic.com/media/ec9816_120f89a1570549e882031fbfb5ee5905~mv2.png/v1/fill/w_600,h_450,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp" width="350px" height="350px"/>

                              </Grid>
                              <Grid item md={3} sm={12}>

<Typography variant='h4' style={{
               marginTop:'4rem'
}}>What is Design Sprint?</Typography>
<p style={{
               marginTop:'3rem',
               spacing:'60px'
}}>The sprint is a five-day process for answering critical business questions through design, prototyping and testing ideas with customers. Developed at Google Ventures, it’s a “greatest hits” of business strategy, innovation, behaviour science, design thinking, and more—packaged into a battle-tested process that any team can use.

</p>

                              </Grid>
                              <Grid item md={3} sm={0}></Grid>
                                
                             </Grid>

</Fragment>
               
               
               
               
               )
}
