import pymongo

SERVER_ADDR = "68.183.21.138"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.test
collection=db.restaurants

#bourough
def findBorough(borough):
    found = collection.find({"borough":borough})
    for item in found:
        print("Displaying restaurants in borough: " + borough + "\n")
        print("Name: "+ item['name'] + "\n")

def findZipcode(zipcode):
    found = collection.find({"address.zipcode":zipcode})
    for item in found:
        print("Displaying restaurants in zipcode: " + zipcode + "\n")
        print("ZipCode: "+ item['name']+ "\n")
        
def findZipGrade(zipcode,grade):
    found = collection.find({"address.zipcode":zipcode,"grades.grade":grade})
    for item in found:
        print("Displaying restaurants in zipcode: " + zipcode + " and grade: " + grade + "\n")
        print("Zip + Grade: "+ item['name']+ "\n")
def findZipScore(zipcode,score):
    found = collection.find({"address.zipcode":zipcode,"grades.score":{"$lt": score}})
    for item in found:
        print("displaying with zip: " + zipcode + " and score below :" + score + "\n")
        print("Zip+Score: " + item['name']+ "\n")
