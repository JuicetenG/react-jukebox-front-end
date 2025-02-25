import './EditForm.css';
import { useState } from "react";

const EditForm = ({ currentTrack, editTrack, setEditing }) => {
  const [formData, setFormData] = useState({
    title: currentTrack.title,
    artist: currentTrack.artist
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    editTrack(currentTrack._id, formData);
    setEditing(false);
  }

  return (
    <div className="edit-form-container">
      <form className='edit-form' onSubmit={handleSubmit}>
        <label htmlFor="title">Track title:</label>
        <input type="text" name='title' id='title' value={formData.title} onChange={handleChange} />
        <label htmlFor="age">Artist:</label>
        <input type="text" name='artist' id='artist' value={formData.artist} onChange={handleChange} />
        <button type="submit">submit changes</button>
        <button type="button"onClick={() => setEditing(false)}>cancel</button>
      </form>
    </div>
  );

};

export default EditForm;