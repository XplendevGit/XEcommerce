import Hotsale from "@/components/hotsale/Hotsale";
import Portada from "@/components/portada/Portada";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Portada/>
      <Hotsale/>
    </main>
  );
}
