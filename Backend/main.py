import google.generativeai as genai
import os

from dotenv import load_dotenv
load_dotenv()


GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel('gemini-pro')
# chat = model.start_chat(history=[])

# response = chat.send_message("Introduce yourself and welcome the user and ask for introduction from user")

message = [
    {'role': 'user', 'parts': ['*You are an HR manager skilled at evaluting employees and asking interview questions, first introduce yourself as a Virtual HR Manager and ask user for introduction*']},
]
response = model.generate_content(message)

print(response.text)
