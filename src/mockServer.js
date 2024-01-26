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

  // Simulate a webhook event being received
  const simulateWebhook = (eventData) => {
    console.log("Webhook event received:", eventData);
    // Here you would typically update your state or perform some action in response to the webhook event
  };

  const sendCustomerWebhook = (customerData) => {
    console.log("Sending customer webhook:", customerData);
    // Here you would typically send a webhook to the frontend with the customer data
  };

  // Add other server simulation functions here if needed

  return { saveData, simulateWebhook };
};
