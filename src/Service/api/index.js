import API from "../axios/index.js";

export const getHomePageDetails =()=>{
    return API.get('api/method/nakba23.api.get_home_details')
}
export const getStories =(data)=>{
    return API.get(`/api/resource/Nakba Story?fields=["name", "title", "published_on", "published", "story_description", "intro_image", "creation", "modified"]&filters={"story_type": ${data.type}, "published": 1}&limit_start=${data?.limit_start|| 0}`)
}
export const getStory =(id)=>{
    return API.get(`/api/resource/Nakba Story/${id}`)
}
