export const metadata = {
  title:"Home : Work Manager"
}

import { connectDB } from "@/helper/db";
connectDB();


export default function Home() {
  return (
    <div>
      <h1 className="text-5xl">Welcome to work manager</h1>
    </div>
  );
}
