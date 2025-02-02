export type ChatMessage = {
    id: string;
    role: "assistant" | "user";
    content: string;
    timestamp: Date;
  };