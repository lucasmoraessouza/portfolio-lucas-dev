import { Header } from "./components/Header";
import { Informations } from "./components/Informations";

export default function App() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <Informations />
    </main>
  );
}
