import React, { useEffect, useState } from "react";
import AnnounceApi from "../../api/AnnouncementApi";
import AnnounceCard from "./AnnouncementCard";
import Auth from "../../services/Auth";
import UserApi from "../../api/UserApi";

function AnnouncementPage() {
  const [announcement, setAnnouncement] = useState([]);
  const [user, setUser] = useState({});
  const userMail = Auth.getUserMail();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await AnnounceApi.getAllPosts();
      setAnnouncement(response.data);
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    function getUserByMail() {
      UserApi.getUserByMail(userMail).then((res) => {
        setUser(res.data);
      });
    }
    userMail !== null && getUserByMail();
  }, [userMail]);

  const announceList = announcement.map((announcement) => (
    <AnnounceCard
      key={announcement.id}
      announcement={announcement}
      user={user}
    />
  ));

  return announcement.length === 0 ? (
    <div className="center-data">
      <p>No Announcement Yet..</p>
    </div>
  ) : (
    <div className="row">{announceList}</div>
  );
}

export default AnnouncementPage;
