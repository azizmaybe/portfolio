const Footer = () => {
  return (
    <footer className="py-16 px-8 bg-[#111111] border-t border-[#9B0018] text-center">
      <div className="container">
        <div className="font-['Titillium_Web',_sans-serif] font-black text-[2rem] mb-4">
          DRIVEN BY <span className="text-[#E8002D]">PASSION</span>
        </div>
        <p className="text-[#888888] font-['JetBrains_Mono',_monospace] text-[0.8rem]">
          © {new Date().getFullYear()} MOHAMED AZIZ BEN SALEM. BUILT FOR SPEED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
