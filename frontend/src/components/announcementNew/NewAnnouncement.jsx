import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AnnouncementApi from '../../api/AnnouncementApi';
import AnnouncementForm from './AnnouncementForm';

//to add new announcement in database
function NewAnnouncement() {
  const [announce, setAnnounce] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const createAnnounce = async () => {
      try {
        if (announce !== null) {
          const response = await AnnouncementApi.createPost(announce);
          history.push('/announce');
        }
      } catch (error) {
        console.log(error);
      }
    };
    createAnnounce();
  }, [history, announce]);

  return <AnnouncementForm setAnnounce={setAnnounce} />;
}

export default NewAnnouncement;
