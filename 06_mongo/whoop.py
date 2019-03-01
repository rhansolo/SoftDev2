import pymongo

SERVER_ADDR = "68.183.21.138"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.test
collection=db.restaurants

#bourough
x = "Queens"
def findBorough(borough):
    found = collection.find({"borough":borough})
    for item in found:
        print("Displaying restaurants in borough: " + borough + "\n")
        print("Name: "+ item['name'] + "\n")

findBorough(x)
