'''
A generator function is a special type of function that uses the yield keyword to return values on by one , instead of
returning everything at once.

✔ Why yield is useful

Saves memory

Handles big data streams

Used in pipelines, reading large files, API pagination, async-like patterns

return get and give full data it's make memory big but in yield i will give data one by one
'''

# If file is 5GB → ❌ your RAM will die.
def read_lines_bad(filename):
    with open(filename) as f:
        return f.readlines()

# With yield (good – reads one line at a time):
def read_lines(filename):
    with open(filename) as f:
        for line in f:
            yield line

for line in read_lines("bigfile.txt"):
    print(line)
