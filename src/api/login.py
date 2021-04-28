from flask import Flask

app = Flask(__name__)

@app.route('/login',methods=['GET','POST'])

def main():
    return {
        'userid':1,
        'title':"React + Python with ",
        'completed': False
        }