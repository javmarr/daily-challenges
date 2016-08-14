def unique_chars(str):

    if str == None:
        return False

    if len(str) < 1:
        return True

    for char in str:
        if str.count(char) > 1:
            return False

    return True

assert unique_chars(None) is False
assert unique_chars('') is True
assert unique_chars('foo') is False
assert unique_chars('bar') is True
print 'Success: Tests passed!'
