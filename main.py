from openai import OpenAI

client = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")

messages = []

while True:
    user_input = input("You: ")
    if user_input.lower() == "exit":
        break
    messages.append({"role": "user", "content": user_input})
    response = client.chat.completions.create(
        model="gemma2:9b", stream=True, messages=messages
    )
    bot_reply = ""
    for chunk in response:
        bot_reply += chunk.choices[0].delta.content or ""
        print(chunk.choices[0].delta.content or "", end="", flush=True)
        messages.append({"role": "assistant", "content": bot_reply})
