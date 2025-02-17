import './TrackList.css';
import TrackCard from '../TrackCard/TrackCard';

const TrackList = ({ tracks, setCurrentTrack }) => {
  return (
    <ul className='track-list-container'>
      <h2>Track List</h2>
      {tracks.map((track, index) => (
        <li key={index} onClick={() => setCurrentTrack(track)}>
          <TrackCard track={track} />
        </li>
      ))}
    </ul>
  );
}

export default TrackList;