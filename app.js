// Please don't show your API Key on the internet 
const API_KEY = OPENAI_API_KEYNUMBER;

const submitButton = document.querySelector('#submit');
const outputElement = document.querySelector('#output');

async function getMessage() {
  console.log('clicked');
  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: "user",content: "Hello! How are you?"}],
      max_tokens: 100,
    })
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
    const data = await response.json();
    console.log(data);
    outputElement.textContent = data.choices[0].message.content;
  } catch(error) {
    console.log(error);
  }
}

submitButton.addEventListener('click', getMessage);