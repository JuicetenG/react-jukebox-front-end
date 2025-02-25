const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    const trackData = res.json();
    return trackData;
  } catch(err) {
    console.log(err);
  }
}

const create = async(trackFormData) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trackFormData)
    });

    const newTrackData = await response.json();
    return newTrackData;
  } catch(err) {
    console.log(err);
  }
}

const update = async(trackId, trackFormData) => {
  try {
    const response = await fetch(`${BASE_URL}/${trackId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trackFormData),
    });
    return response.json();
  } catch(err) {
    console.log(err);
  }
}

const deleteTrack = async (trackId) => {
  try {
    const response = await fetch(BASE_URL + `/${trackId}`, {
      method: 'DELETE'
    })

    const data = await response.json();
    return data;

  } catch(err) {
    console.log(err);
  }
}

export {
  index,
  create,
  update,
  deleteTrack
}