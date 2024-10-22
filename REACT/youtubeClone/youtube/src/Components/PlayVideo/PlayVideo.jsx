import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY } from '../../data'
import { valueConverter } from '../../data'
import moment from 'moment'


function PlayVideo({videoId}) {
    const [apiData,setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentsData, setCommentsData] = useState([]);


    const fetchVideoData = async ()=> {
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res=>res.json()).then(data=> setApiData(data.items[0]))
    }

    const fetchOtherData = async ()=> {
        const otherDataURl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(otherDataURl).then(response => response.json()).then(data=> setChannelData(data.items[0]))
    }

    const fetchCommentsData = async ()=> {
        const comments_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=20&videoId=${videoId}&key=${API_KEY}`
        await fetch(comments_url).then(res=>res.json()).then(data=>setCommentsData(data.items));
    }

    useEffect(()=>{
        fetchVideoData()
    },[]);

    useEffect(()=>{
        fetchOtherData()
    },[apiData]);

    

    useEffect(()=>{
        fetchCommentsData()
    },[])

    console.log(commentsData);


  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className='play-video-info'>
            <p>{apiData?valueConverter(apiData.statistics.viewCount):"16k"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"2 days ago"}</p>
            <div>
                <span><img src={like} alt="" />{apiData?valueConverter(apiData.statistics.likeCount):104}</span>
                <span><img src={dislike} alt="" /></span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className='publisher'>
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
            <div>
                <p>{apiData?apiData.snippet.channelTitle:""}</p>
                <span>{channelData?valueConverter(channelData.statistics.subscriberCount):"255K"} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='vid-description'>
            <p>{apiData ? apiData.snippet.description.slice(0,250):"Description here"}</p>
            <hr />
            <h4>{apiData?valueConverter(apiData.statistics.commentCount):216} Comments</h4>
            {commentsData.map((item,index)=>{
                return (
                <div key={index} className='comment'>
                    <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                    <div>
                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                        <p>A gloabl computer network providing commercial and of interconnected networks 
                            absolutely stupendous using standerdized communication protocols</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                )})}
            
        </div>
    </div>
  )
}

export default PlayVideo