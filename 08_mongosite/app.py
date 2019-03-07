#Team TangoTongoMangoMongo: Robin Han,
#SoftDev2 pd7
#K #07: Import/Export Bank
#2019-03-01

from flask import Flask, render_template
import pymongo
import os
import json
import urllib.request as request

app = Flask(__name__)
app.secret_key = os.urandom(32)


@app.route('/')
def home():
	return render_template('main.html')

@app.route('/display', methods = ["POST"])
def display():
	SERVER_ADDR = request.form['serverid']
	connection=pymongo.MongoClient(SERVER_ADDR)
	db=connection.GarlicHumus
	collection=db.senators
	import_db()
	return render_template('newpage.html') 



def import_db():
	f = open("senators.json","r")
	data = json.loads(f.read())
	f.close()
	collection.insert_many(data)
#import_db()
def get_senators_from_party(party):
    results = collection.find({"party":party})
    print("Senators from the " + party + " party: ")
    for res in results:
    	print(res['person']['name'])
def get_senator_info(person):
	name = str.split(person)
	print("Basic Info of " + name+ " :")
	results = collection.find({"person.firstname":name[0],"person.lastname":name[1]})
	for res in results:
		print("Name: " + res['person']['name'])
		print("Gender: " + res['person']['gender'])
		print("Birthday: " + res['person']['birthday'])
		print("Description: " + res['description'])
		print("State: " + res['state'])
	if (results.count() == 0):
		print("Senator Not Found")
def get_contact_info(person):
	name = str.split(person)
	results = collection.find({"person.firstname":name[0],"person.lastname":name[1]})
	print("Contact Info of " + person+ " :")
	for res in results:
		print("Email: " + res['extra']['contact_form'])
		print("Fax: " + res['extra']['fax'])
		print("Office Address: " + res['extra']['address'])
	if (results.count() == 0):
		print("Senator Not Found")
def get_social_media_info(person):
	name = str.split(person)
	results = collection.find({"person.firstname":name[0],"person.lastname":name[1]})
	print("Social Media of " + person+ " :")
	for res in results:
		print("Youtube: " + res['person']['youtubeid'])
		print("Twitter: " + res['person']['twitterid'])
		print("Website: " + res['website'])
	if (results.count() == 0):
		print("Senator Not Found")
def get_senators_from_state(state):
	print("Senators from " + state + " :")
	results = collection.find({"state":state})
	for res in results:
		print(res['person']['name'])


if __name__ == "__main__":
    app.debug = True
    app.run()
