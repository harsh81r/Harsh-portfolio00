
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  // Function to navigate to LinkedIn
  const navigateToLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/harsh-khare-1a30412a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  };

  // Function to navigate to Travelo App
  const navigateToTravelo = () => {
    window.location.href = "https://travelo-app-pi.vercel.app"; // Replace with your actual URL
  };

  // Function to navigate to Background Color Change App
  const navigateToBackgroundColorChange = () => {
    window.location.href = "https://harsh81r.github.io/BackgroundColorChange_EverySecond/"; // Replace with your actual URL
  };

  // Function to navigate to Counter App
  const navigateToCounter = () => {
    window.location.href = "https://harsh81r.github.io/my-to-do-list-FINAL/"; // Replace with your actual URL



    
  };

  return (
    <div className="bg-indigo-950">
      <div className="max-w-screen-md mx-auto px-4 py-6 text-center">
        <h1 className="text-slate-100 text-xl font-bold mb-4">My-Project</h1>
        <p className="text-gray-200 mb-2">Welcome to our project </p>
        <Button 
          className="inline-block bg-blue-500 text-white rounded-lg px-5 py-2 hover:bg-white-100 transition duration-300" 
          onClick={navigateToLinkedIn}
        >
          Visit LinkedIn Profile
        </Button>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            {/* Card 1 */}
            <div className="m-4">
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                  component="img"
                  alt="Travelo App"
                  height="140"
                  image="https://media.licdn.com/dms/image/v2/D5622AQHGPfSxzppHtA/feedshare-shrink_2048_1536/B56ZPHJvXVHoAo-/0/1734213041305?e=1738800000&v=beta&t=748gV5iom3hDlGpOpPU2IvsdexVucYpKa5M18MM5yWQ"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Travelo -App
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Discover your next adventure with travel; it helps to make personalized plans with a fingertip.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={navigateToTravelo}>view-app</Button>
                </CardActions>
              </Card>
            </div>

            {/* Card 2 */}
            <div className="m-4">
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                  component="img"
                  alt="Background Color Change App"
                  height="140"
                  image="https://cdn1.vectorstock.com/i/1000x1000/78/35/abstract-blur-color-background-vector-20687835.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Background-Color-Change App
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    This app changes background colors dynamically.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={navigateToBackgroundColorChange}>view-app</Button>
                </CardActions>
              </Card>
            </div>

            {/* Card 3 */}
            <div className="m-4">
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                  component="img"
                  alt="Counter App"
                  height="140"
                  image="https://play-lh.googleusercontent.com/pUzhlbMBg2l1dXXe8nXMaQiowYoAuzbjedd-O53VtLTAoDp_tB8sNC2s6_OHtlOOKQ"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Counter App
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    A simple counter application built with React.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={navigateToCounter}>view-app</Button>
                </CardActions>
              </Card>
            </div>

            {/* Add more cards as needed */}

            <div className="m-4">
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                  component="img"
                  alt="Counter App"
                  height="140"
                  image="./todo.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Todo-list
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      todo-list app using js 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={navigateToCounter}>view-app</Button>
                </CardActions>
              </Card>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}