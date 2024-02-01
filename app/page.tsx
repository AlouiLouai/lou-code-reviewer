import InputComponent from "./components/Input";
import OutputComponent from "./components/Output";

export default function Home() {
  return (
    <main className="bg-black text-blue-500 flex flex-col h-screen">
      <div className="flex-none flex flex-col justify-center items-center bg-black rounded-lg h-1/3">
        <h1 className="text-4xl font-bold">Need code review ?</h1>
        <p className="text-gray-300">Our model team is always behind, trying to help you boost.</p>
      </div>

      <div className="flex-grow flex justify-between p-8">
        <div className="w-1/2 bg-black rounded-lg p-4 h-full border border-blue-500">
          <InputComponent />
        </div>

        <div className="w-1/2 bg-black rounded-lg p-4 h-full border border-blue-500 ml-4">
          <OutputComponent />
        </div>
      </div>
    </main>
  );
}
