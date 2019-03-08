import pymongo
import json

def connect(addr):
    connection = pymongo.MongoClient(addr)
    return connection

def importDB(addr):
    connection = pymongo.MongoClient(addr)
    db = connection.GarlicHummus
    global collection
    collection = db.senators
    if collection.count() > 0:
        collection.drop()
        collection = db.senators
    f = open("senators.json","r",encoding='utf8')
    data = json.loads(f.read())
    f.close()
    collection.insert_many(data)
    return collection

def get_senators_from_party(party):
    results = collection.find({"party":party})
    sen = []
    for res in results:
        sen.append(res['person']['name'])
    if (results.count() == 0):
        sen = ['Party does not exist']
    return sen
def get_senator_info(person):
    name = str.split(person)
    info = []
    results = collection.find({"person.firstname":name[0],"person.lastname":name[1]})
    for res in results:
        info.append('Name: ' + res['person']['name'])
        info.append('Gender: ' + res['person']['gender'])
        info.append('Birthday: ' + res['person']['birthday'])
        info.append('Description: ' + str(res['description']))
        info.append('State: ' + res['state'])
    if (results.count() == 0):
        info = ['Senator does not exist']
    return info
def get_contact_info(person):
    name = str.split(person)
    info = []
    results = collection.find({"person.firstname":name[0],"person.lastname":name[1]})
    for res in results:
        info.append('Contact Form: ' + res['extra']['contact_form'])
        info.append('Fax: ' + res['extra']['fax'])
        info.append('Address: ' + res['extra']['address'])
    if (results.count() == 0):
        info = ['Senator does not exist']
    return info
def get_social_media_info(person):
    name = str.split(person)
    info = []
    results = collection.find({"person.firstname":name[0],"person.lastname":name[1]})
    for res in results:
        info.append('Youtube: ' + res['person']['youtubeid'])
        info.append('Twitter: ' + res['person']['twitterid'])
        info.append('Website: ' + res['website'])
    if (results.count() == 0):
        info = ['Senator does not exist']
    return info
def get_senators_from_state(state):
    sen = []
    results = collection.find({"state":state})
    for res in results:
        sen.append(res['person']['name'])
    if (results.count() == 0):
        sen = ['State does not exist']
    return sen
