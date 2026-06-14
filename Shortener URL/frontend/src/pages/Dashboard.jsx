import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urls, setUrls] = useState([]);

  const fetchUrls = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/url/all"
      );

      setUrls(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  const shortenUrl = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/url/shorten",
        {
          longUrl,
        }
      );

      setShortUrl(response.data.shortUrl);
      setLongUrl("");

      fetchUrls();
    } catch (error) {
      console.log(error);
      alert("Failed to shorten URL");
    }
  };

  const deleteUrl = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/url/${id}`
      );

      fetchUrls();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <div className="dashboard">
      <h1 className="title">
        🔗 URL Shortener Dashboard
      </h1>

      <div className="stats-container">
        <div className="card blue">
          <h2>Total URLs</h2>
          <p>{urls.length}</p>
        </div>

        <div className="card green">
          <h2>Total Clicks</h2>
          <p>0</p>
        </div>
      </div>

      <div className="url-form">
        <input
          type="text"
          placeholder="Enter Long URL"
          value={longUrl}
          onChange={(e) =>
            setLongUrl(e.target.value)
          }
        />

        <button onClick={shortenUrl}>
          Shorten URL
        </button>
      </div>

      {shortUrl && (
        <div
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h3>Short URL Generated</h3>

          <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
          >
            {shortUrl}
          </a>
        </div>
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Original URL</th>
              <th>Short URL</th>
              <th>Clicks</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {urls.map((url) => (
              <tr key={url._id}>
                <td>{url.longUrl}</td>

                <td>
                  <a
                    href={url.shortUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {url.shortUrl}
                  </a>
                </td>

                <td>0</td>

                <td>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        url.shortUrl
                      )
                    }
                  >
                    Copy
                  </button>

                  <button>
                    Analytics
                  </button>

                  <button
                    onClick={() =>
                      deleteUrl(url._id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;