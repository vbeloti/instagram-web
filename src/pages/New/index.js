import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';

function New({ history }) {
  const [data, setData] = useState({
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', data.image);
    formData.append('author', data.author);
    formData.append('place', data.place);
    formData.append('description', data.description);
    formData.append('hashtags', data.hashtags);

    console.log(formData);

    await api.post('posts', formData);

    history.push('/');
    console.log(history);
  };

  const handleImageChange = (e) => {
    setData({ ...data, image: e.target.files[0] });
  };

  const HandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form id="new-post" onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />

      <input
        type="text"
        name="author"
        placeholder="Autor do Post"
        value={data.author}
        onChange={HandleChange}
      />
      <input
        type="text"
        name="place"
        placeholder="Local do Post"
        value={data.place}
        onChange={HandleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Descrição do Post"
        value={data.description}
        onChange={HandleChange}
      />
      <input
        type="text"
        name="hashtags"
        placeholder="Hashtags do Post"
        value={data.hashtags}
        onChange={HandleChange}
      />

      <button stype="submit">Enviar</button>
    </form>
  );
}

export default New;
