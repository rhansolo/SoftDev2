#TangoTangoMangoMongo:Dennis Chen, Robin Han, Imad Belkebeer
#SoftDev pd7
#K#08: Ay Mon, Go Git It From Yer Flask
#3/6/19

from flask import Flask, redirect, url_for, render_template, session, request
import pymongo
import os
import json

import mongo

app = Flask(__name__)
app.secret_key = os.urandom(32)
collection = None

@app.route('/')
def home():
    return render_template('main.html')

@app.route('/display', methods = ["GET","POST"])
def display():
    SERVER_ADDR = request.form['serverid']
    global collection
    connection = mongo.connect(SERVER_ADDR)
    collection = mongo.importDB(SERVER_ADDR)
    return render_template("newpage.html")

@app.route('/getSenP', methods = ["POST"])
def senParty():
    party = request.form['party']
    people = mongo.get_senators_from_party(party)
    return render_template("newpage.html",info = people)
@app.route('/getSenI', methods = ["POST"])
def senInfo():
    name = request.form["name"]
    tmp = str.split(name)
    if (len(tmp) < 2):
        info = ["Type in a first name and last name!"]
    else:   
        info = mongo.get_senator_info(name)
    return render_template("newpage.html",info = info)

@app.route('/getConI', methods = ["POST"])
def senContact():
    name = request.form["name"]
    tmp = str.split(name)
    if (len(tmp) < 2):
        contact = ["Type in a first name and last name!"]
    else:   
        contact = mongo.get_contact_info(name)
    return render_template("newpage.html",info = contact)

@app.route('/getSMI', methods = ["POST"])
def senSocial():
    name = request.form["name"]
    tmp = str.split(name)
    if (len(tmp) < 2):
        info = ["Type in a first name and last name!"]
    else:   
        info = mongo.get_social_media_info(name)
    return render_template("newpage.html",info = info)

@app.route('/getSenS', methods = ["POST"])
def senState():
    state = request.form["State"]
    senators = mongo.get_senators_from_state(state)
    return render_template("newpage.html",info = senators)



if __name__ == "__main__":
    app.debug = True
    app.run()
