import './TrackForm.css';
import { useState } from "react";

const initialState = {
  title: '',
  artist: ''
}

const TrackForm = ({ createTrack }) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: ''
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    createTrack(formData);
    setFormData(initialState);
  }

  return (
    <div className="form-container">
      <form className='track-form' onSubmit={handleSubmit}>
        <label htmlFor="title">Track title:</label>
        <input type="text" name='title' id='title' value={formData.title} onChange={handleChange} />
        <label htmlFor="age">Artist:</label>
        <input type="text" name='artist' id='artist' value={formData.artist} onChange={handleChange} />
        <button type='submit'>Add a track!</button>
      </form>
    </div>
  );

};

export default TrackForm;