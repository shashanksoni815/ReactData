import { useState } from 'react'
// import axios from "axios";
import axios from 'axios';
// import './App.css'

function App() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
        { inputs: prompt },
        {
          headers: {
            Authorization: `Bearer 	hf_...CdET`, // 👈 replace with Hugging Face API key
          },
          responseType: "arraybuffer",
        }
      );

      // Convert binary to base64
      const base64 = btoa(
        new Uint8Array(response.data)
          .reduce((data, byte) => data + String.fromCharCode(byte), "")
      );

      setImageUrl(`data:image/png;base64,${base64}`);
    } catch (error) {
      console.error("Error generating image:", error);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI UI/Image Generator</h2>
      <input
        type="text"
        placeholder="Describe your UI..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "60%", padding: "8px" }}
      />
      <button onClick={generateImage} style={{ marginLeft: "10px", padding: "8px" }}>
        Generate
      </button>

      {loading && <p>Loading...</p>}

      {imageUrl && (
        <div>
          <h3>Generated Image:</h3>
          <img src={imageUrl} alt="Generated" style={{ maxWidth: "400px", marginTop: "10px" }} />
        </div>
      )}
    </div>
  );
}

export default App;