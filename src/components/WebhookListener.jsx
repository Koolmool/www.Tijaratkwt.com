import React, { useEffect, useState } from "react";

import { useMockServer } from "../mockServer"; // Import useMockServer

const WebhookListener = () => {
  const [webhookData, setWebhookData] = useState(null);
  const { saveData } = useMockServer(); // use saveData function from useMockServer

  useEffect(() => {
    const listenToWebhook = () => {
      // Simulated incoming webhook data
      const simulatedData = {
        event: "customer_information",
        data: {
          customerId: "C123",
          customerName: "Jane Doe",
          customerEmail: "jane.doe@example.com",
          customerLocation: "123 Main Street, Anytown",
        },
      };
      setWebhookData(simulatedData);
      saveData(simulatedData.data.customerId, simulatedData.data); // Save the customer information from the webhook
    };

    listenToWebhook();

    return () => {
      // Cleanup logic (if necessary)
    };
  }, [saveData]); // Add saveData to the dependency array

  // Removed the rendering of webhookData as it should not be shown on the website
  return null;
};

export default WebhookListener;
