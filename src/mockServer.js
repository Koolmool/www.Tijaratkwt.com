import { useState } from "react";

// This is a mock function to simulate a backend server operation
// In a real-world scenario, you would replace this with actual server API calls

export const useMockServer = () => {
  const [database, setDatabase] = useState({});

  const saveData = (key, data) => {
    const newData = { ...database, [key]: data };
    setDatabase(newData);
    console.log("Data saved to mock server:", newData);
  };

  // Add other server simulation functions here if needed

  return { saveData };
};
