import API from "../axios/index.js";

export const getHomePageDetails =()=>{
    return API.get('api/method/nakba23.api.get_home_details')
}
// export const getStories =(data)=>{
//     return API.get(`/api/resource/Nakba Story?fields=["name", "title", "published_on", "published", "story_description", "intro_image", "creation", "modified"]&filters={"story_type":${data.type}, "published": 1}&limit_start=${data?.limit_start|| 0}`)
// }
export const getStories = (data) => {
    const filters = JSON.stringify(data.filters); // Stringify the filters object
    const fields = JSON.stringify([
        "name",
        "title",
        "published_on",
        "published",
        "story_description",
        "intro_image",
        "creation",
        "modified"
    ]); // Stringify fields as well

    return API.get(`/api/resource/Nakba Story?fields=${encodeURIComponent(fields)}&filters=${encodeURIComponent(filters)}&limit_start=${data?.limit_start || 0}`);
};

export const getStory =(id)=>{
    return API.get(`/api/resource/Nakba Story/${id}`)
}
