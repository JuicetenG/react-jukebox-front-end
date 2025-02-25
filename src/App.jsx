import './App.css';
import { useState, useEffect } from 'react';
import TrackList from './components/TrackList/TrackList';
import TrackForm from './components/TrackForm/TrackForm';
import NowPlaying from './components/NowPlaying/NowPlaying';

import * as trackService from './services/trackService';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {

    const fetchTracks = async () => {
      const trackData = await trackService.index();
      setTracks(trackData);
    };

    fetchTracks();
  }, []);

  async function createTrack(trackFormData) {
    try {
      const newTrack = await trackService.create(trackFormData);
      setTracks([...tracks, newTrack]);
    } catch(err) {
      console.log(err);
    }
  };

  async function editTrack(trackId, trackFormData) {
    try {
      const updatedTrack = await trackService.update(trackId, trackFormData);

      if(updatedTrack.err) {
        throw new Error(updatedTrack.err);
      }

      const updatedTrackList = tracks.map((track) => (
        track._id !== updatedTrack._id ? track : updatedTrack
      ));

      setTracks(updatedTrackList);
      setCurrentTrack(updatedTrack);
      setEditing(false);
    } catch(err) {
      console.log(err);
    }
  }

  function setCurrent(track) {
    editing === false ? setCurrentTrack(track) : null;
  }

  async function deleteTrack(trackId) {
    try {
      await trackService.deleteTrack(trackId);

      const filteredTracks = tracks.filter((track) => {
        return track._id !== trackId;
      })

      setTracks(filteredTracks);
      if(currentTrack._id === trackId) setCurrentTrack(null);

    } catch(err) {
      console.log(err)
    }
  }


  return (
    <div className="app-container">
      <h1>JukeBox</h1>
      <TrackList 
        tracks={tracks} 
        setCurrent={setCurrent} 
        editing={editing}
      />
      <TrackForm createTrack={createTrack} />
      <NowPlaying 
        currentTrack={currentTrack} 
        deleteTrack={deleteTrack}
        editTrack={editTrack}
        editing={editing}
        setEditing={setEditing}
      />
    </div>
  );

};

export default App;