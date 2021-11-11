import React from "react";
import "./Announcements.css";

const AnnouncementItem = () => {
  return (
    <div className="announcementItem">
      <div className="annItem_container">
        <div className="annItem-cont_date">
          <p>May 15,2021</p>
        </div>
        <div className="annItem-cont_info">
          <div className="annItem-info_title">
            <h2>This is a Title</h2>
          </div>
          <div className="annItem-info_detail">
            <p>
              This is a description that says Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Announcements = () => {
  return (
    <div className="announcements">
      <h1>Announcements</h1>
      <div className="ants_container">
        <div className="ants-cont_latest">
          <h3>Newest:</h3>
          <div className="ants-latest_sec">
            <h2>
              This is the Latest Announcement. Came Right Now. The App is Under
              Development
            </h2>
          </div>
        </div>
        <div className="ants-cont_older">
          <h3>Older:</h3>
          <div className="ants-older_sec">
            <AnnouncementItem />
            <AnnouncementItem />
            <AnnouncementItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
