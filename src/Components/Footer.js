import React from 'react'

const Footer = () => {
    return (
      <Container sx={{ py: 4, px: 4, px: { xl: 5 } }} className="bg-primary" >
        <Grid container justifyContent="space-between" alignItems="center" className="text-center text-md-start">
          {/* Copyright */}
          <Typography variant="body2" className="text-white mb-3 mb-md-0">
            &copy; 2020. All rights reserved.
          </Typography>
  
          {/* Right */}
          <div>
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
          </div>
        </Grid>
      </Container>
    );
  };

export default Footer