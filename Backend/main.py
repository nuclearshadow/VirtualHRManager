from flask import Flask, request
from flask_cors import CORS, cross_origin
import google.generativeai as genai
import os

from dotenv import load_dotenv
load_dotenv()


GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel('gemini-pro')

chat = model.start_chat(history=[])

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

chat_name = "Jonathan"
init_message = f"*You are an HR manager skilled at evaluting employees and asking interview questions, first introduce yourself in a short way as a Virtual HR Manager with just the name {chat_name} only, you are taking interview of the user applying for a job, ask user for introduction. Keep your responses short and DO NOT put system text surrouned by ** in the response.*"

@app.route("/chat/get-init-message", methods=['GET'])
def chat_get_init_message():
    chat.history.clear()
    return chat.send_message(init_message).text
    
@app.route("/chat/send-message", methods=['POST'])
def chat_send_message():
    message = request.form['message']
    if len(chat.history) < 5:
        message += " *Give a short feedback to the answer in a few words and then ask the next interview question"
    else:
        message += " *if the previous question was a technical question then check if the given answer is correct and ask the next technical question"
    return chat.send_message(message).text
