import FinderPage from "./finder";
import LandingPage from "./landing";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section>
        <LandingPage />
      </section>
      <section>
        <FinderPage />
      </section>
    </div>
  );
}
