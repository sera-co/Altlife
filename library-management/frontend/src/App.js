import React, { useEffect, useState } from 'react';
import './styles.css';
import { axiosWithApiKey } from './api';

const api = axiosWithApiKey();

function App() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);

        const resp = await api.get('/api/analytics/books-due-today');
        setRows(resp.data || []);
      } catch (e) {
        setError(e?.response?.data?.message || e.message || 'Failed to load pending returns');
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <div className="page">
      <h1>Library Dashboard</h1>
      <h2>Books Due Today</h2>

      {loading && <div className="status">Loading...</div>}
      {error && <div className="status error">{error}</div>}

      {!loading && !error && (
        <div className="tableWrap">
          <table className="table">
            <thead>
              <tr>
                <th>Member Name</th>
                <th>Book Name</th>
                <th>Issued Date</th>
                <th>Target Return Date</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={4} className="empty">
                    No books due today.
                  </td>
                </tr>
              ) : (
                rows.map((r, idx) => (
                  <tr key={idx}>
                    <td>{r.memberName}</td>
                    <td>{r.bookName}</td>
                    <td>{r.issuedDate}</td>
                    <td>{r.targetReturnDate}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
