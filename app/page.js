import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-4">
      <div className="font-bold text-5xl flex gap-2 justify-center items-center">Buy Me a Chai
        <span>
          <img src="/tea.gif" alt="" width={88} className="rounded object-cover"/>
        </span>
      </div>
      <p>A crowdfunding platform for creaters. Get funded by your fans and followers. Start now!</p>
      <div>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10">
      
    </div>
    </>
  );
}
