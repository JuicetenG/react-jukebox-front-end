import './App.css';
import { useState, useEffect } from 'react';
import TrackList from './components/TrackList/TrackList';
import TrackForm from './components/TrackForm/TrackForm';
import NowPlaying from './components/NowPlaying/NowPlaying';

import * as trackService from './services/trackService';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {

    const fetchTracks = async () => {
      const trackData = await trackService.index();
      setTracks(trackData);
    };

    fetchTracks();
  }, []);

  const createTrack = async (trackFormData) => {
    try {
      const newTrack = await trackService.create(trackFormData);
      setTracks([...tracks, newTrack]);
    } catch(err) {
      console.log(err);
    }
  };

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

  console.log(currentTrack);
  return (
    <div className="app-container">
      <h1>JukeBox</h1>
      <TrackList 
        tracks={tracks} 
        setCurrentTrack={setCurrentTrack} 
      />
      <TrackForm createTrack={createTrack} />
      <NowPlaying 
        currentTrack={currentTrack} 
        deleteTrack={deleteTrack}
      />
    </div>
  );

};

export default App;