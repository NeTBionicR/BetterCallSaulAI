import { useEffect } from "react";

const AthenaChatWidget = () => {
  useEffect(() => {
    const roomIdKey = "athena-chatbot-widget-roomId";
    let roomId = localStorage.getItem(roomIdKey);
    if (!roomId) {
      roomId = crypto.randomUUID();
      localStorage.setItem(roomIdKey, roomId);
    }

    const baseUrl = "https://athenachat.bot";
    const slug = "bettercallsaulai1577";
    const iframeUrl = `${baseUrl}/chatbot/agent/${slug}?roomId=${roomId}`;

    fetch(`${baseUrl}/chatbot/bot/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        const bot = data.bot;
        const container = document.createElement("div");
        container.id = "athena-chat-react-wrapper";
        container.style.position = "fixed";
        container.style.bottom = "20px";
        container.style.right = "20px";
        container.style.width = "60px";
        container.style.height = "60px";
        container.style.borderRadius = "50%";
        container.style.backgroundColor = bot.buttonColor;
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";
        container.style.cursor = "pointer";
        container.style.zIndex = "9999";

        const avatar = document.createElement("img");
        avatar.src = bot.avatar;
        avatar.alt = "Chatbot Avatar";
        avatar.style.width = "100%";
        avatar.style.height = "100%";
        avatar.style.borderRadius = "50%";

        container.appendChild(avatar);

        container.addEventListener("click", () => {
          if (!document.getElementById("athena-chat-iframe")) {
            const iframe = document.createElement("iframe");
            iframe.src = iframeUrl;
            iframe.id = "athena-chat-iframe";
            iframe.setAttribute("allow", "microphone");
            iframe.style.position = "fixed";
            iframe.style.bottom = "100px";
            iframe.style.right = "20px";
            iframe.style.width = "375px";
            iframe.style.height = "500px";
            iframe.style.border = "none";
            iframe.style.borderRadius = "16px";
            iframe.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.2)";
            iframe.style.zIndex = "9999";

            const closeBtn = document.createElement("div");
            closeBtn.innerText = "×";
            closeBtn.style.position = "fixed";
            closeBtn.style.bottom = "590px";
            closeBtn.style.right = "32px";
            closeBtn.style.fontSize = "24px";
            closeBtn.style.cursor = "pointer";
            closeBtn.style.color = "white";
            closeBtn.style.zIndex = "10000";
            closeBtn.style.background = "#f00";
            closeBtn.style.borderRadius = "100%";
            closeBtn.style.width = "32px";
            closeBtn.style.height = "32px";
            closeBtn.style.display = "flex";
            closeBtn.style.alignItems = "center";
            closeBtn.style.justifyContent = "center";

            closeBtn.addEventListener("click", () => {
              iframe.remove();
              closeBtn.remove();
            });

            document.body.appendChild(iframe);
            document.body.appendChild(closeBtn);
          }
        });

        document.body.appendChild(container);
      })
      .catch((err) => console.error("Failed to load Athena chatbot:", err));
  }, []);

  return null;
};

export default AthenaChatWidget;
