import React, { useState } from 'react';
import axios from 'axios';

const Astrology = () => {
  const [date, setDate] = useState('');
  const [astrologyData, setAstrologyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAstrologyData = async () => {
    setLoading(true);
    setError(null);
    setAstrologyData(null);

    try {
      const response = await axios.get(`https://api.astrology.com/astrology/${date}`);
      setAstrologyData(response.data);
    } catch (error) {
      setError('Failed to fetch astrology data');
    }

    setLoading(false);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAstrologyData();
  };

  return (
    <div>
      <h2>Astrology</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date of Birth:
          <input type="date" value={date} onChange={handleDateChange} />
        </label>
        <button type="submit">Fetch Astrology Data</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {astrologyData && (
        <div>
          <h3>Astrology Data:</h3>
          <pre>{JSON.stringify(astrologyData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Astrology;
