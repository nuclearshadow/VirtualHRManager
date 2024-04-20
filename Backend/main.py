from flask import Flask, request
import google.generativeai as genai
import os

from dotenv import load_dotenv
load_dotenv()


GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

genai.configure(api_key=GOOGLE_API_KEY)


model = genai.GenerativeModel('gemini-pro')
history = []

chat = model.start_chat(history=[])

def gen_message():
    # message = [
    #     {'role': 'user', 'parts': ['*You are an HR manager skilled at evaluting employees and asking interview questions, first introduce yourself as a Virtual HR Manager and ask user for introduction*']},
    # ]
    # model.send_message(message)
    return chat.send_message("*You are an HR manager skilled at evaluting employees and asking interview questions, first introduce yourself as a Virtual HR Manager and ask user for introduction*")

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello world"

@app.route("/send", methods=['POST'])
def send():
    message = request.form['message']
    message += " *Give feedback on how good of an answer that was and ask the next interview question"
    return chat.send_message(message).text
        
