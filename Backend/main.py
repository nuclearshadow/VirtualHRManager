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
init_message = f"*You are an HR manager skilled at evaluting employees and asking interview questions, first introduce yourself in a short way as a Virtual HR Manager with just the name {chat_name} only, you are taking interview of the user applying for a job, ask user for introduction. Keep your responses short.*"

@app.route("/chat/get-init-message", methods=['GET'])
def chat_get_init_message():
    chat.history.clear()
    return chat.send_message(init_message).text
    
@app.route("/chat/send-message", methods=['POST'])
def chat_send_message():
    message = request.form['message']
    message += " *Give feedback on how good of an answer that was and ask the next interview question"
    return chat.send_message(message).text
