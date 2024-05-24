import { Section } from "./components/Item";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-dvh">
        <ul className="flex flex-col gap-4 py-8 min-w-96 w-3/5 rounded-lg bg-black/5">
          <h1 className="mb-6 font-bold text-3xl text-center">
            Expandable Form
          </h1>
          <Section title="Section 1" text={["Name:", "Email:"]} />
          <Section title="Section 2" text={["Address:", "City:"]} />
          <Section title="Section 3" text={["Phone:", "Website:"]} />
          <Section title="Section 4" />
        </ul>
      </div>
    </>
  );
}

export default App;
