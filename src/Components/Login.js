// import React, { useState } from 'react';
// import { TextField, Button, Typography, Box } from '@mui/material';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Perform login logic here (e.g., API call)

//     console.log('Username:', username);
//     console.log('Password:', password);

//     // Reset the form fields
//     setUsername('');
//     setPassword('');
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: '1rem',
//         maxWidth: '300px',
//         margin: '0 auto',
//       }}
//     >
//       <Typography variant="h4" component="h2" align="center">
//         Login
//       </Typography>
//       <form onSubmit={handleLogin}>
//         <TextField
//           id="username"
//           label="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           variant="outlined"
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           id="password"
//           label="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           variant="outlined"
//           fullWidth
//           margin="normal"
//         />
//         <Button type="submit" variant="contained" fullWidth>
//           Login
//         </Button>
//       </form>
//     </Box>
//   );
// }

// export default Login;

import React from 'react';
import { Container, Grid, Typography, TextField, Button, Checkbox, FormControlLabel, Link } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const LoginForm = () => {
  return (
    <section className="vh-100">
      <Container fluid className="h-custom">
        <Grid container justifyContent="center" alignItems="center" className="h-100">
          <Grid item md={9} lg={6} xl={5}>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
              style={{ maxWidth: '100%' }}
            />
          </Grid>
          <Grid item md={8} lg={6} xl={4} sx={{ pl: { xl: 1 } }}>
            <form>
              <Grid container direction="row" alignItems="center" justifyContent="center" >
                <Typography variant="body1" className="lead fw-normal mb-0 me-3">Sign in with</Typography>
                <Button variant="contained" color="primary" className="btn-floating mx-1" sx={{ borderRadius: '50%', padding: '12px' ,margin:'15px'}}>
                  <Facebook />
                </Button>
                <Button variant="contained" color="primary" className="btn-floating mx-1" sx={{ borderRadius: '50%', padding: '12px'  ,margin:'15px'}}>
                  <Twitter />
                </Button>
                <Button variant="contained" color="primary" className="btn-floating mx-1" sx={{ borderRadius: '50%', padding: '12px'  ,margin:'15px'}}>
                  <LinkedIn />
                </Button>
              </Grid>

              <Grid container alignItems="center" my={4}>
                <Typography variant="body1" className="text-center fw-bold mx-3 mb-0">Or</Typography>
              </Grid>
              <Grid container direction="column" spacing={3}>
                {/* Email input */}
                <Grid item>
                  <TextField
                    id="form3Example3"
                    label="Email address"
                    variant="outlined"
                    fullWidth
                    size="large"
                    placeholder="Enter a valid email address"
                  />
                </Grid>

                {/* Password input */}
                <Grid item>
                  <TextField
                    id="form3Example4"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    size="large"
                    type="password"
                    placeholder="Enter password"
                  />
                </Grid>
              </Grid>
             
              <Grid container justifyContent="space-between" alignItems="center">
                {/* Checkbox */}
                <FormControlLabel
                  control={<Checkbox value="" id="form2Example3" />}
                  label="Remember me"
                  className="form-check mb-0"
                />
                <Link href="#!" className="text-body">Forgot password?</Link>
              </Grid>

              <Grid container justifyContent="center" alignItems="center" mt={4} pt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                >
                  Login
                </Button>
                <Typography variant="body2" className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account? <Link href="/signup" className="link-danger">Register</Link>
                </Typography>
              </Grid>

            </form>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </section>
  );
};
const Footer = () => {
  return (
    <Container sx={{ py: 4, px: 4, px: { xl: 5 } }} className="bg-primary" style={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
      <Grid container justifyContent="center" alignItems="center" className="text-center text-md-start">
        {/* Left */}
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Typography variant="body2" className="text-white mb-3 mb-md-0">
            &copy; 2023. All rights reserved.
          </Typography>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Grid container justifyContent="flex-end">
            <Link href="#!" className="text-white me-4">
              <Facebook />
            </Link>
            <Link href="#!" className="text-white me-4">
              <Twitter />
            </Link>
            <Link href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </Link>
            <Link href="#!" className="text-white">
              <LinkedIn />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};


export default LoginForm;




