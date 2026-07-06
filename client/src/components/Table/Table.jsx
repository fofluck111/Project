function Table({ table, setTable }) {

  const selectTable = (num) => {
    setTable(num);
    localStorage.setItem("table", num);
  };

  return (
    <div className="table-section">

      <h3>เลือกโต๊ะ</h3>

      <div className="table-grid">

        {[1,2,3,4,5,6].map((num) => (
          <button
            key={num}
            className={`table-btn ${table === num ? "active" : ""}`}
            onClick={() => selectTable(num)}
          >
            {num}
          </button>
        ))}

      </div>

    </div>
  );
}

export default Table;