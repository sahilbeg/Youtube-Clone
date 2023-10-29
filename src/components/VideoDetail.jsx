import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams(); // Use destructuring to extract id from params

  useEffect(() => {
    // Fetch video details and update videoDetail state
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items));
  }, [id]);

  if(!videoDetail?.snippet) return 'Loading...';
  // Construct the YouTube video URL
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  const { snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount} } = videoDetail;
  return (
    <Box minHeight="95vh"> 
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={videoUrl} controls={true} 
            className="react-player" controLs />
            <Typography color='#ffffff' variant="h5" fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: '#ffffff'}} py={1} px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography variant={{ sm: 'subtitle1', md: 'h6'}} color="#ffffff">
                    {channelTitle}
                    <CheckCircle sx={{fontSize:12, color: 'gray', ml: '5px'}} />
                  </Typography>
                </Link>
                <Stack>
                  <Typography variant="body1" sx={{ opacity: 0.7}}>
                    {parseInt(viewCount).toLocaleString()} Views
                  </Typography>
                </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md:1,xs:5}} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
