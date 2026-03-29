import { useState } from "react"

function App() {
  // text user wants to analyze
  const [inputText, setInputText] = useState("This product was easy to use and worked really well.")

  // backend result state
  const [sentiment, setSentiment] = useState("-")
  const [positiveScore, setPositiveScore] = useState("-")
  const [negativeScore, setNegativeScore] = useState("-")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // send text to backend
  const handleAnalyze = async () => {
    // clear old error
    setError("")
    setLoading(true)

    try {
      // call backend api
      const response = await fetch("https://mod4-backend-cloud-computing-tk-2026.2.rahtiapp.fi/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: inputText,
        }),
      })

      // convert response to json
      const result = await response.json()

      // show backend error if request failed
      if (!response.ok) {
        setError(result.error || "Request failed")
        setLoading(false)
        return
      }

      // save result values
      setSentiment(result.sentiment)
      setPositiveScore(result.positive_score)
      setNegativeScore(result.negative_score)
    } catch (err) {
      // show fetch or network error
      setError("Backend request failed")
    }

    setLoading(false)
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Sentiment Analysis Frontend</h1>
        <p style={styles.description}>
          This frontend sends text to the backend service and shows the returned sentiment result.
        </p>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Text to analyze</h2>

          <textarea
            style={styles.textArea}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Write text here"
          />

          <button style={styles.button} onClick={handleAnalyze} disabled={loading}>
            {loading ? "Analyzing..." : "Analyze sentiment"}
          </button>
        </div>

        {error && (
          <div style={styles.errorBox}>
            {error}
          </div>
        )}

        <div style={styles.results}>
          <div style={styles.resultCard}>
            <h2 style={styles.sectionTitle}>Sentiment</h2>
            <p style={styles.resultValue}>{sentiment}</p>
          </div>

          <div style={styles.resultCard}>
            <h2 style={styles.sectionTitle}>Positive score</h2>
            <p style={styles.resultValue}>{positiveScore}</p>
          </div>

          <div style={styles.resultCard}>
            <h2 style={styles.sectionTitle}>Negative score</h2>
            <p style={styles.resultValue}>{negativeScore}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f8",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "760px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  },
  title: {
    marginTop: 0,
    marginBottom: "12px",
    fontSize: "2rem",
  },
  description: {
    marginTop: 0,
    marginBottom: "20px",
    color: "#555",
    lineHeight: 1.5,
  },
  section: {
    marginBottom: "20px",
  },
  sectionTitle: {
    marginBottom: "10px",
    fontSize: "1.1rem",
    color: "#333",
  },
  textArea: {
    width: "100%",
    minHeight: "140px",
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #d0d7de",
    backgroundColor: "#f8f9fb",
    lineHeight: 1.6,
    color: "#222",
    resize: "vertical",
    boxSizing: "border-box",
    marginBottom: "14px",
    fontFamily: "Arial, sans-serif",
    fontSize: "1rem",
  },
  button: {
    padding: "12px 18px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#0a66c2",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
  },
  results: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },
  resultCard: {
    padding: "16px",
    borderRadius: "12px",
    backgroundColor: "#eef4ff",
  },
  resultValue: {
    margin: 0,
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#0a66c2",
  },
  errorBox: {
    marginBottom: "20px",
    padding: "14px",
    borderRadius: "10px",
    backgroundColor: "#fff1f1",
    color: "#b42318",
  },
}

export default App