
const Footer = () => {
  return (
    <div>
      <p className="text-center font-thin text-sm text-slate-300">
        <span className="text-amber-400">&copy;</span>
        &nbsp;Copyright {new Date().getFullYear()} Herb Segismar
      </p>
    </div>
  );
}

export default Footer