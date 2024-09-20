import DetailsStory from "../../Components/DetailsStory/index.jsx";
import Details from "../../Components/DetailsStory/story.jsx";
import img from '../../assets/Screenshot.png'
export default function FoodDetails(){
    const Data = {
        title: "Food Program 1",
        author: "John Doe",
        date: "September 13, 2024",
        tags: ["React", "Microsoft", "JavaScript"],
        content: (
            <div>
                <p>Microsoft has decided to move away from React for their internal projects...</p>
                {/* Add more content here */}
            </div>
        ),
        src:img
    };

    return(
        <Details {...Data}/>
    )
}