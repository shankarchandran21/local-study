trip={
    "trip_id":"UB12345",
    "pickup":"Chennai Central",
    "drop":"Airport",
    "fare":430.7,
    "driver":"Ravi",
    "status":"Completed"
}

# Access value using key
print(trip["driver"])

# Access value using key in safeway
# if the key is not there in trip it's not throw error it shows none
print(trip.get('somethingKey'))

#get all keys
print(trip.keys())

#get all values
print(trip.values())


#iterate

for key,value in trip.items():
    print(key,":",value)

#if the key present in trip it will update value if the key is not present it will add the value

trip.update({'car_modal':"Suzuki"})
print(trip)