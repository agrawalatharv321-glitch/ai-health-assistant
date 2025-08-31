async function sendMessage(userMessage) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMessage })
  });
  const data = await response.json();
  return data.reply;
}
