import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary">HOME</h1>

        <div className="grid grid-cols-3 gap-8">
            <div className="h-32 shadow-100">1</div>
            <div className="h-32 shadow-200">2</div>
            <div className="h-32 shadow-300">3</div>
        </div>
    </div>
  );
}
