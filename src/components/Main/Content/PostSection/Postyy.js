import { Component } from "react";
import SkillSet from "./Skillset";

class Postyy extends Component{
    render(){
        return(
            <div className="postyy post-bar">
            <div className="post_topbar">
              <div className="usy-dt">
                <img src={`./images/${this.props.post['post_pic']}.png`} alt="" />
                <div className="usy-name">
                  <h3>{this.props.post.name}</h3>
                  <span>{this.props.post.post_datetime} min ago</span>
                </div>
              </div>
              <div className="ed-opts">
                <a href="./index.html#" title="" className="ed-opts-open">
                  <i className="la la-ellipsis-v"></i>
                </a>
                <ul className="ed-options">
                  <li>
                    <a href="./index.html#" title="">
                      Edit Post
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      Unsaved
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      Unbid
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      Close
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      Hide
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="epi-sec">
              <ul className="descp">
                <li>
                  <img src="./images/icon8.png" alt="" />
                  {/* <span>Epic Coder</span> */}
                </li>
                <li>
                  <img src="./images/icon9.png" alt="" />
                  <span>{this.props.post.location}</span>
                </li>
              </ul>
              <ul className="bk-links" style={{ display: "none" }}>
                <li>
                  <a href="./index.html#" title="">
                    <i className="la la-bookmark"></i>
                  </a>
                </li>
                <li>
                  <a href="./index.html#" title="">
                    <i className="la la-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="job_descp">
              <h3>{this.props.post.position}</h3>
              <ul className="job-dt">
                <li>
                  <a href="./index.html#" title="">
                  {this.props.post.work_nature}
                  </a>
                </li>
                <li>
                  <span>{this.props.post.pay_rate} / hr</span>
                </li>
              </ul>
              <p>
              {this.props.post.description}
                <a href="./index.html#" title="">
                  view more
                </a>
              </p>
              <ul className="skill-tags">
                {this.props.post.skills.map(skill=>{
                    return(
                        <SkillSet skill={skill}/>
                )
                })}
              </ul>
            </div>
            <div className="job-status-bar">
              <ul className="like-com">
                <li>
                  <a href="./index.html#">
                    <i className="fas fa-heart"></i> Like
                  </a>
                  <img src="./images/liked-img.png" alt="" />
                  <span>{this.props.post.like_count}</span>
                </li>
                <li>
                  <a href="./index.html#" className="com">
                    <i className="fas fa-comment-alt"></i> Comment {this.props.post.comment_count}
                  </a>
                </li>
              </ul>
              <a href="./index.html#">
                <i className="fas fa-eye"></i>Views {this.props.post.views_count}
              </a>
            </div>
          </div>
        )
    }
}

export default Postyy;