import './TrackCard.css';

const TrackCard = ({ track }) => {
  return (
    <div>
      <p>Title: {track.title}</p>
      <p>Artist: {track.artist}</p>
    </div>
  );
}

export default TrackCard;