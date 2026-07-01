function Table({ table, setTable }) {
  const tables = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div style={{ padding: 20 }}>
      <h2>🍽️ เลือกโต๊ะ</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {tables.map((t) => (
          <button
            key={t}
            onClick={() => setTable(t)}
            style={{
              padding: 10,
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              background: table === t ? "#22c55e" : "#e5e7eb",
              color: table === t ? "white" : "black"
            }}
          >
            โต๊ะ {t}
          </button>
        ))}
      </div>

      <p style={{ marginTop: 10 }}>
        โต๊ะที่เลือก: {table || "ยังไม่ได้เลือก"}
      </p>
    </div>
  );
}

export default Table;