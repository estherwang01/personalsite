// withScreenSizeCheck.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withScreenSizeCheck = (WrappedComponent) => {
    const minWidth =1000; 
    const minHeight=700; 
  const WithScreenSizeCheck = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const checkScreenSize = () => {
        // Get the current screen width
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 

        // Check if the screen width is less than the minimum width
        if (screenWidth < minWidth || screenHeight < minHeight) {
          // Redirect to the error page using React Router
          navigate('/error'); // Adjust the path to your error page route
        }
      };

      // Check screen size on mount
      checkScreenSize();

      // Check screen size on window resize
      window.addEventListener('resize', checkScreenSize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', checkScreenSize);
      };
    }, [navigate]);

    return <WrappedComponent {...props} />;
  };

  return WithScreenSizeCheck;
};

export default withScreenSizeCheck;
