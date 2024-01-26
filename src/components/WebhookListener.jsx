import React, { useEffect, useState } from "react";

const WebhookListener = () => {
  const [webhookData, setWebhookData] = useState(null);

  useEffect(() => {
    // Updated webhook setup logic to handle customer information
    const listenToWebhook = () => {
      // Extend simulated incoming webhook data to include customer information
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
    };

    listenToWebhook();

    // Cleanup function in case of component unmounting
    return () => {
      // Placeholder for cleanup logic, e.g. unsubscribing from events
    };
  }, []);

  if (!webhookData) return null;

  return (
    <div>
      Webhook event received: <pre>{JSON.stringify(webhookData, null, 2)}</pre>
    </div>
  );
};

export default WebhookListener;
