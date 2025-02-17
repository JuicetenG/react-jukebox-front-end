import './NowPlaying.css';

const NowPlaying = ({ currentTrack, deleteTrack }) => {
  return (
    <div>
      <h2>Now Playing</h2>
      {currentTrack !== null ? (
        <div>
          <p>Title: {currentTrack.title}</p>
          <p>Artist: {currentTrack.artist}</p>
          <button onClick={() => deleteTrack(currentTrack._id)}>remove track</button>
        </div>
      ) : (
        <p>Select a track!</p>
      )}
    </div>
  );
}

export default NowPlaying;