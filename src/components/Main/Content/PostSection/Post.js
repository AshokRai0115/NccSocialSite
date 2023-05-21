import { Component } from "react";
import Postyy from "./Postyy";

const posts = [{
  "id": "1",
  "post_pic": "Shraddha",
  "name": "Shraddha Dongol",
  "location": "Norway",
  "position": "Chief Java Developer",
  "work_nature": "Freelance",
  "pay_rate": "30",
  "description": "Enthusiast Java developer. Worked in many core projects. Developed free libraries.",
  "skills": ["frontend", "backend", "Spring boot", "Hibernate"],
  "like_count": "3M",
  "comments": ["cmt1", "cmt2"],
  "comment_count": "2M",
  "views_count": "25M",
  
  "post_datetime": 1
},
{
  "id": "2",
  "post_pic": "Ankit",
  "name": "Ankit Blon",
  "location": "United States",
  "position": "Senior Architect Developer",
  "work_nature": "Full Time",
  "pay_rate": "20",
  "description": "Enthusiast Java developer. Worked in many core projects. Developed free libraries.",
  "skills": ["frontend", "backend", "SEO"],
  "like_count": "25k",
  "comments": ["cmt1", "cmt2"],
  "comment_count":"1k",
  "views_count": "25k",
  
  "post_datetime": 30
},

{
  "id": "3",
  "post_pic": "Rajesh",
  "name": "Rajesh Maharjan",
  "location": "Finland",
  "position": "Senior UI developer",
  "work_nature": "Part Time",
  "pay_rate": "10",
  "description": "Enthusiast Java developer. Worked in many core projects. Developed free libraries.",
  "skills": ["frontend", "HTML", "CSS", "Figma"],
  "like_count": "33k",
  "comments": ["cmt1", "cmt2"],
  "comment_count": "5k",
  "views_count": "300k",
  
  "post_datetime": 40
},
{
  "id": "4",
  "post_pic": "Shisir",
  "name": "Shisir Pradhan",
  "location": "Finland",
  "position": "Senior UI developer",
  "work_nature": "Part Time",
  "pay_rate": "10",
  "description": "Enthusiast Java developer. Worked in many core projects. Developed free libraries.",
  "skills": ["frontend", "HTML", "CSS", "Figma"],
  "like_count": "33k",
  "comments": ["cmt1", "cmt2"],
  "comment_count": "5k",
  "views_count": "300k",
  
  "post_datetime": 40
}
]

class Post extends Component {
  render() {
    return (
     <>
      {posts.map(post => {
        return(<Postyy post={post} />)
      })
    }
     </>
    );
  }
}

export default Post;
