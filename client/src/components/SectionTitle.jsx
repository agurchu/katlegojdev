// src/components/SectionTitle.jsx
export default function SectionTitle({ children }) {
  return (
    <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent text-center">
      {children}
    </h2>
  );
}
