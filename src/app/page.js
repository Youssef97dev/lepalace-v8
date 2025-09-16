import Loader from "@/components/Loader";
import { PalaceProvider } from "@/context/PalaceContext";

export default function Home() {
  return (
    <PalaceProvider>
      <Loader />
    </PalaceProvider>
  );
}
