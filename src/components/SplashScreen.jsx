import { useState, useEffect } from "react";

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(p => p + 1), 40);
      return () => clearTimeout(timer);
    } else {
      onFinish();
    }
  }, [progress, onFinish]);

  return (
    <div style={styles.container}>
      <div style={styles.frame}>
        <span style={styles.progressText}>{progress}%</span>
      </div>

      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default SplashScreen;

const styles = {
  container: {
    backgroundColor: "#000",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  frame: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "white",
    fontFamily: "Orbitron, sans-serif",
  },
  progressText: {
    padding: "10px 20px",
    border: "3px solid white",
  },
  redDot: {
    width: "14px",
    height: "14px",
    backgroundColor: "red",
    borderRadius: "50%",
  },
};
