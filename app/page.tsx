import Button from "./_components/Button";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Button
        amount="0.5"
        className="bg-[#C1A9FF] font-semibold p-2 rounded-xl border text-zinc"
      >
        Buy For 0.5 GHO
      </Button>
    </main>
  );
}
