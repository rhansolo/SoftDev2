#Robin Han
#SoftDev2 pd7
#K16 -- Do you even list?
#2019-04-12
LC_LETTERS = "abcdefghijklmnopqrstuvwxyz"
UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
NUMBERS = "1234567890"
CHARACTERS = ".?!&#,;:-_*"


def check_pass(password):
    parse = [1 if x in LC_LETTERS else (2 if x in UC_LETTERS else 3)for x in password ]
    if (1 in parse and 2 in parse and 3 in parse):
        return True
    return False

def checkPassStrength(password):
    parse = [1 if x in LC_LETTERS else (2 if x in UC_LETTERS else (3 if x in NUMBERS else 4)) for x in password ]
    total = [3 if parse.count(1) > 3 else parse.count(1),3 if parse.count(2) > 3 else parse.count(2),3 if parse.count(3) > 3 else parse.count(3),3 if parse.count(4) > 3 else parse.count(4)]
    return (10 if sum(total,0) > 10 else  sum(total,0))


pass1 = "1234dkkeE"
pass2 = "abcbd"
pass3 = "cXd!3fegF$@rg"
pass4 = "ab@4deflg"
print("checking requirements for " + pass1)
print(check_pass(pass1))
print("checking requirements for " + pass2)
print(check_pass(pass2))
print("checking requirements for " + pass3)
print(checkPassStrength(pass3))
print("checking strength for " + pass4)
print(checkPassStrength(pass4))
