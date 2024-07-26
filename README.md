# Virtual HR Manager

# Run locally

## Dependencies

- python
- react.js

## Python dependencies

```cmd
pip install flask
pip install flask-cors
pip install -q -U google-generativeai
```

Get Gemini API key from [here](https://aistudio.google.com/app/apikey)
set environment variable GOOGLE_API_KEY to your api key
either via command or create `.env` in `Backend` folder and put
```
GOOGLE_API_KEY=your_api_key
```

## react dependencies

you need to have node.js, npm and react-scripts
and then run
```
npm install
```
to install dependencies

## Run Backend server

Run the flask backend server using
```
flask --app Backend/main run
```

## Run frontend server

Run the react project using
```
cd Frontend
npm start
```
