import './NowPlaying.css';
import EditForm from '../EditForm/EditForm';'../EditForm/EditForm';

const NowPlaying = ({ currentTrack, deleteTrack, editTrack, editing, setEditing }) => {
  
  return (
    <div>
      <h2>Now Playing</h2>
      {currentTrack !== null ? (
        <div>
          {editing === false ? (
            <div>
              <p>Title: {currentTrack.title}</p>
              <p>Artist: {currentTrack.artist}</p>
              <button onClick={() => deleteTrack(currentTrack._id)}>remove track</button>
              <button onClick={() => {setEditing(true)}}>edit track</button>
            </div>
          ) : (
            <EditForm 
              editTrack={editTrack} 
              currentTrack={currentTrack}
              setEditing={setEditing}
            />
          )}
        </div>
      ) : (
        <p>Select a track!</p>
      )}
    </div>
  );
}

export default NowPlaying;