#Team GarlicHummus: Robin Han and Isaac Jon
#SoftDev2 pd7
#K #07: Import/Export Bank
#2019-03-01

import pymongo

SERVER_ADDR = "198.211.117.197"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.GarlicHumus
collection=db.senators

'''
    U.S. Senator Database
    Contains Information relating to the Senators of the United States including names, contact info, and websites.
    Raw Data: https://www.govtrack.us/api/v2/role?current=true&role_type=senator
    Import Directions:
        Remove 
        '{
 			"meta": {
  			"limit": 100,
  			"offset": 0,
  			"total_count": 100
 			},
 			"objects":' 
 		at the beginning of the JSON file and the corresponding '}' at the end
        When importing the JSON file, we needed to attach '--jsonArray' flag:
            mongoimport --db DATABASE_NAME --collection COLLECTION_NAME --drop --jsonArray --file DIRECTORY_NAME/pokedex.json
'''

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


#get_senators_from_party("Republican")
#get_contact_info("James Yo")
get_social_media_info("James Risch")
#get_senator_info("James Risch")
#get_senators_from_state("TN")
