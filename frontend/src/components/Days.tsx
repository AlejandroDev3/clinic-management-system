const SelectorDias = () => {
  return (
    <select name="dia" id="dia-select" className="h-12 w-full rounded-xl pl-3 transition-all hover:scale-105 hover:bg-slate-100 border border-input">
      <option value="">Día</option>
      {Array.from({ length: 31 }, (_, i) => i + 1).map((dia) => (
        <option key={dia} value={dia}>
          {dia}
        </option>
      ))}
    </select>
  );
};

export default SelectorDias