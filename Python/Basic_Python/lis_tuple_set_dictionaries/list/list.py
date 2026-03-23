playList = ['shape of you', 'see you again', 'love me like you do']
fav_food = ['pizza', 'sushi', 'burger']
recent_location = ['new york', 'los angeles', 'chicago']

# it's mutable

#list method 

# Add an item to the end of the list
playList.append('blinding lights')

# remove the last item from the list
recent_location.pop()

#remove the first item from the list
fav_food.pop(0)

#push an item to the front of the list
recent_location.insert(0, 'san francisco')

# Insert an item at a specific position
fav_food.insert(1, 'pasta')

# Remove an item from the list
fav_food.remove('sushi')

#reverse the list
playList.reverse()

#find the index of an item
index_of_burger = fav_food.index('burger')

#find the length of the list
length_of_playlist = len(playList)

#find the count of an item in the list
count_of_pizza = fav_food.count('pizza')

#sort the list
recent_location.sort()

#sort the list in descending order
playList.sort(reverse=True)

#sort the list based on length of the string
fav_food.sort(key=len)

#list Slicing

'''
list[start : end]

start index → included
end index → NOT included

'''
first_two_songs = playList[1:3]
print("First two songs:", first_two_songs)

