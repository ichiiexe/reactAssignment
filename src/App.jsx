function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ul className="flex flex-col min-w-96 w-3/5 rounded-lg bg-gray-700">
        <h1 className="m-6 font-bold text-3xl text-center">Expandable Form</h1>
        <Section title="Section 1" text={["Name:", "Email:"]} />
        <Section title="Section 2" text={["Address:", "City"]} />
        <Section title="Section 3" text={["Phone", "Website"]} />
      </ul>
    </>
  );
}

export default App;
