import { useState, useEffect } from "react";
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

// const API_KEY = "YOUR_YOUTUBE_API_KEY"; // Replace with your YouTube API Key

const useFetchYouTubeResources_ = (videoLinks, audioLinks) => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchVideoDetails = async (links, type) => {
            const videoIds = links.map((link) => extractVideoId(link)).filter(Boolean);
            if (videoIds.length === 0) return [];

            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`
                );
                const data = await response.json();

                return data.items.map((video) => ({
                    id: video.id,
                    title: video.snippet.title,
                    type,
                    duration: parseISO8601Duration(video.contentDetails.duration),
                    thumbnail: video.snippet.thumbnails.high.url,
                    description: video.snippet.description,
                    link: `https://www.youtube.com/watch?v=${video.id}`,
                    publishedAt: new Date(video.snippet.publishedAt),
                    views: video.statistics.viewCount,
                    likes: video.statistics.likeCount,
                    comments: video.statistics.commentCount,
                }));
            } catch (error) {
                console.error("Error fetching YouTube data:", error);
                return [];
            }
        };

        const loadResources = async () => {
            const videoData = await fetchVideoDetails(videoLinks, "video");
            const audioData = await fetchVideoDetails(audioLinks, "audio");

            const sortedResources = [...videoData, ...audioData].sort(
                (a, b) => b.publishedAt - a.publishedAt // Sort from latest to oldest
            );

            setResources(sortedResources);
        };

        loadResources();
    }, [videoLinks, audioLinks]);

    return resources;
};


const useFetchYouTubeResources = (videoLinks, audioLinks) => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const STORAGE_KEY = "youtube_resources";

        const fetchVideoDetails = async (links, type) => {
            const videoIds = links.map((link) => extractVideoId(link)).filter(Boolean);
            if (videoIds.length === 0) return [];

            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`
                );
                const data = await response.json();

                return data.items.map((video) => ({
                    id: video.id,
                    title: video.snippet.title,
                    type,
                    duration: parseISO8601Duration(video.contentDetails.duration),
                    thumbnail: video.snippet.thumbnails.high.url,
                    description: video.snippet.description,
                    link: `https://www.youtube.com/watch?v=${video.id}`,
                    publishedAt: new Date(video.snippet.publishedAt),
                    views: video.statistics.viewCount,
                    likes: video.statistics.likeCount,
                    comments: video.statistics.commentCount,
                }));
            } catch (error) {
                console.error("Error fetching YouTube data:", error);
                return [];
            }
        };

        const loadResources = async () => {
            // Try fetching from local storage first
            const cachedData = localStorage.getItem(STORAGE_KEY);
            if (cachedData) {
                setResources(JSON.parse(cachedData));
            }

            // Fetch fresh data
            const videoData = await fetchVideoDetails(videoLinks, "video");
            const audioData = await fetchVideoDetails(audioLinks, "audio");

            const sortedResources = [...videoData, ...audioData].sort(
                (a, b) => b.publishedAt - a.publishedAt
            );

            setResources(sortedResources);

            // Store in localStorage for future use
            localStorage.setItem(STORAGE_KEY, JSON.stringify(sortedResources));
        };

        loadResources();
    }, [videoLinks, audioLinks]);

    return resources;
};

// Extract Video ID from a YouTube URL
const extractVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:.*v=|.*\/|.*vi=)|youtu\.be\/|youtube.com\/embed\/)([^?&]+)/);
    return match ? match[1] : null;
};

// Convert ISO8601 duration format (PT1H2M3S) to readable format
const parseISO8601Duration = (duration) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = match[1] ? match[1].replace("H", "") : "0";
    const minutes = match[2] ? match[2].replace("M", "") : "0";
    const seconds = match[3] ? match[3].replace("S", "") : "0";

    return `${hours !== "0" ? `${hours}:` : ""}${minutes}:${seconds.padStart(2, "0")}`;
};

export default useFetchYouTubeResources;