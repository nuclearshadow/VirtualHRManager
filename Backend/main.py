# from flask import Flask, request
# from flask_cors import CORS, cross_origin
# import google.generativeai as genai
# import os

# from dotenv import load_dotenv
# load_dotenv()


# GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

# genai.configure(api_key=GOOGLE_API_KEY)

# model = genai.GenerativeModel('gemini-pro')

# chat = model.start_chat(history=[])

# app = Flask(__name__)
# cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

# chat_name = "Jonathan"
# field_name = "PHP Delevoper"
# init_message = f"*You are an HR manager skilled at evaluting employees and asking interview questions, first introduce yourself in a short way as a Virtual HR Manager with just the name {chat_name} only, you are taking interview of the user applying for a {field_name} job, ask user for introduction. Keep your responses short and DO NOT put system text surrouned by ** in the response.*"

# @app.route("/chat/get-init-message", methods=['GET'])
# def chat_get_init_message():
#     chat.history.clear()
#     return chat.send_message(init_message).text
    
# @app.route("/chat/send-message", methods=['POST'])
# def chat_send_message():
#     message = request.form['message']
#     ended = False
#     if len(chat.history) < 5:
#         message += " *Give a short feedback to the answer in a few words and then ask the next interview question"
#     elif len(chat.history) < 10:
#         message += " *if the previous question was a technical question then check if the given answer is correct and ask the next technical question"
#     else:
#         message += " *Interview has ended, send a closing message & give me Decision either Rejected or Accepted for next round"
#         ended = True
#     return {
#         "message": chat.send_message(message).text,
#         "ended": ended,
#     } 


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
field_name = ""

@app.route("/chat/set-field-name", methods=['POST'])
def set_field_name():
    global field_name
    field_name = request.json.get('field_name', '')
    return {"status": "success"}

@app.route("/chat/get-init-message", methods=['GET'])
def chat_get_init_message():
    chat.history.clear()
    init_message = f"*You are an HR manager skilled at evaluating employees and asking interview questions. First, introduce yourself as {chat_name}. You are taking the interview of the user applying for a {field_name} job. Ask the user for their introduction. Keep your responses short and DO NOT put system text surrounded by ** in the response.*"
    return chat.send_message(init_message).text

@app.route("/chat/send-message", methods=['POST'])
def chat_send_message():
    message = request.form['message']
    ended = False
    if len(chat.history) < 5:
        message += " *Give short feedback to the answer in a few words and then ask the next interview question*"
    elif len(chat.history) < 10:
        message += " *If the previous question was a technical question, then check if the given answer is correct and ask the next technical question*"
    else:
        message += " *The interview has ended. Send a closing message & give me a decision either Rejected or Accepted for the next round*"
        ended = True
    return {
        "message": chat.send_message(message).text,
        "ended": ended,
    }

if __name__ == "__main__":
    app.run(debug=True)
