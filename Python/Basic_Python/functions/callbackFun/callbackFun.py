'''
A callback function is a  function that you pass as an argument to another function ,so that it can be called (executed) later,
usually after some action is completed
'''


def button_click(callback):
    print("Button clicked")
    callback()

def show_message():
    print('Hi Shankar')

button_click(show_message)


def button_click2(callback,msg):
    print("Button clicked")
    callback(msg)

def show_message2(msg):
    print(msg)

button_click2(show_message2,'Hi Shankar')