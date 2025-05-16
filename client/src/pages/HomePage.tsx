// src/pages/HomePage.tsx
import React from 'react';
import { AlertTriangle, Map, Bell } from 'lucide-react';

const HomePage = () => {
  return (
    <main style={styles.container}>
      <div style={styles.backgroundGradient} />
      <div style={styles.glassmorphicOverlay}>
        <header style={styles.header}>
          <h1 style={styles.title}>RoadGuard</h1>
          <p style={styles.subtitle}>Stay informed. Stay safe. Empower your street.</p>
        </header>
        
        <section style={styles.navSection}>
          <a href="#" style={styles.card}>
            <div style={styles.iconContainer}>
              <AlertTriangle size={24} color="#FF6B6B" />
            </div>
            <div style={styles.cardContent}>
              <h2 style={styles.cardTitle}>Report</h2>
              <p style={styles.cardText}>Submit hazards or incidents you spot.</p>
            </div>
          </a>
          
          <a href="#" style={styles.card}>
            <div style={styles.iconContainer}>
              <Map size={24} color="#4ECDC4" />
            </div>
            <div style={styles.cardContent}>
              <h2 style={styles.cardTitle}>Map</h2>
              <p style={styles.cardText}>See nearby reports in real-time.</p>
            </div>
          </a>
          
          <a href="#" style={styles.card}>
            <div style={styles.iconContainer}>
              <Bell size={24} color="#FFD166" />
            </div>
            <div style={styles.cardContent}>
              <h2 style={styles.cardTitle}>Street Feed</h2>
              <p style={styles.cardText}>Scroll through alerts & updates.</p>
            </div>
          </a>
        </section>
      </div>
    </main>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '2rem',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundGradient: {
    position: 'absolute',
    top: '-50%',
    left: '-20%',
    width: '140%',
    height: '200%',
    background: 'radial-gradient(circle at top right, rgba(111, 76, 255, 0.15), transparent 50%), radial-gradient(circle at bottom left, rgba(66, 153, 225, 0.15), transparent 50%)',
    zIndex: 0,
  },
  glassmorphicOverlay: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: '550px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '3.5rem',
    background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '0 0 0.5rem 0',
    fontWeight: '700',
    letterSpacing: '-0.03em',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '400',
    margin: 0,
  },
  navSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    width: '100%',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(12px)',
    borderRadius: '16px',
    padding: '1.5rem',
    textDecoration: 'none',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    transform: 'translateY(0)',
    cursor: 'pointer',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(5px)',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: '1.25rem',
    margin: '0 0 0.25rem 0',
    color: '#ffffff',
    fontWeight: '600',
  },
  cardText: {
    fontSize: '0.95rem',
    margin: 0,
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '400',
  },
};

export default HomePage;