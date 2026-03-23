playList = ['shape of you', 'see you again', 'love me like you do']
fav_food = ['pizza', 'sushi', 'burger']
recent_location = ['new york', 'los angeles', 'chicago']



#checking item in list
if 'pizza' in fav_food:
    print("Pizza is in favorite food list.")

# get index and value
for i,food in enumerate(fav_food):
    print(f"{i}{food}")


