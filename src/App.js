import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import {Navbar,Feed,ChannelDetail,SearchFeed,VideoDetail} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#212121' }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
 
export default App;
