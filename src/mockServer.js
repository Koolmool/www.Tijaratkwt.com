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
  // Placeholder for a real webhook URL
  const WEBHOOK_URL = "https://api.example.com/webhook";

  const simulateWebhook = (eventData) => {
    console.log(`Webhook event received at ${WEBHOOK_URL}:`, eventData);
    // In a real implementation, this is where you would make an API call to the webhook URL
    // Example: axios.post(WEBHOOK_URL, eventData);
  };

  const sendCustomerWebhook = (customerData) => {
    console.log("Sending customer webhook:", customerData);
    // Here you would typically send a webhook to the frontend with the customer data
  };

  // Add other server simulation functions here if needed

  return { saveData, simulateWebhook, sendCustomerWebhook };
};
