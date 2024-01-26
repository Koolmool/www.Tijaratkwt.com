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

  if (!webhookData) return null;

  return (
    <div>
      Webhook event received: <pre>{JSON.stringify(webhookData, null, 2)}</pre>
    </div>
  );
};

export default WebhookListener;
