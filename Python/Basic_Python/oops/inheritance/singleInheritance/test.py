from inheritance import dad


class son(dad):
    def home(self):
        print('house color is red')

test = son()
test.home()