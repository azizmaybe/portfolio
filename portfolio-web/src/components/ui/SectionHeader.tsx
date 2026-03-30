

interface SectionHeaderProps {
  title: string;
  label: string;
}

const SectionHeader = ({ title, label }: SectionHeaderProps) => {
  return (
    <div className="mb-20">
      <span className="font-['JetBrains_Mono',_monospace] text-xs text-[#E8002D] uppercase tracking-widest mb-2 block">{label}</span>
      <h2 className="text-[clamp(2rem,5vw,4rem)] leading-none border-l-8 border-[#E8002D] pl-6">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
