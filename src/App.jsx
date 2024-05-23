import { Section } from "./components/Item";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-dvh bg-slate-500">
        <ul className="flex flex-col min-w-96 w-3/5 rounded-lg bg-gray-700">
          <h1 className="m-6 font-bold text-3xl text-center">
            Expandable Form
          </h1>
          <Section title="Section 1" text={["Name:", "Email:"]} />
          <Section title="Section 2" text={["Address:", "City"]} />
          <Section title="Section 3" text={["Phone", "Website"]} />
        </ul>
      </div>
    </>
  );
}

export default App;
