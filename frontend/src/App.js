import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!text && !image) return;

    const formData = new FormData();
    formData.append("text", text);
    if (image) formData.append("image", image);

    setChat((prev) => [
      ...prev,
      { sender: "user", text, image: image ? URL.createObjectURL(image) : null },
    ]);
    setText("");
    setImage(null);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5001/api/chat", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      const modelReply =
        data.candidates?.[0]?.content?.parts?.map(
          (part) => part.text
        )?.join("\n") || "No response";
      setChat((prev) => [
        ...prev,
        { sender: "ai", text: modelReply, image: null },
      ]);
    } catch (e) {
      setChat((prev) => [
        ...prev,
        { sender: "ai", text: "Error: " + e.message, image: null },
      ]);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Gemini Multimodal Chat</h2>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: 6,
          padding: 20,
          minHeight: 300,
          marginBottom: 16,
          background: "#fafafa",
        }}
      >
        {chat.map((item, idx) => (
          <div key={idx} style={{ marginBottom: 16 }}>
            <b>{item.sender === "user" ? "You" : "Gemini"}:</b>
            <div>{item.text}</div>
            {item.image && (
              <img
                src={item.image}
                alt=""
                style={{ maxWidth: 180, display: "block", marginTop: 8 }}
              />
            )}
          </div>
        ))}
        {loading && <div>Gemini is typing...</div>}
      </div>
      <form onSubmit={sendMessage}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message..."
          rows={3}
          style={{ width: "100%", marginBottom: 4 }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginBottom: 8 }}
        />
        <br />
        <button type="submit" disabled={loading || (!text && !image)}>
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
