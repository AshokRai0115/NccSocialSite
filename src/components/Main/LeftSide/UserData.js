import { Component } from "react";

class UserData extends Component {
  render() {
    return (
      <div className="user-data full-width">
        <div className="user-profile">
          <div className="username-dt">
            <div className="usr-pic">
            <img src={`./images/${this.props.user.username}.png`} alt="" />
            </div>
          </div>
          <div className="user-specs">
            <h3>{this.props.user.username}</h3>
            <span>{this.props.user.post}</span>
          </div>
        </div>
        <ul className="user-fw-status">
          <li>
            <h4>Following</h4>
            <span>{this.props.user['following_count']}</span>
          </li>
          <li>
            <h4>Followers</h4>
            <span>{this.props.user['follower_count']}</span>
          </li>
          <li>
            <a href="./my-profile.html" title="">
              View Profile
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserData;
