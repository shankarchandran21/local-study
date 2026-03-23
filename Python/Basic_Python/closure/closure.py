def message (msg):
    def inner():
        print("Hi shankar you receive message:",msg)
    return inner
sayHi = message("How are you shankar")
sayHi()