# row = 5
# for i in range(row):
#     for j in range(,i+2):
#         print(j,end=' ')
#     print()


# row = 5
# alph = ['A','B','C','D','E']
# for i in range(row):
#     for j in alph[:i+1]:
#         print(j,end=" ")
#     print()

row = 5
alph = 65
for i in range(row):
    for j in range(alph,alph+i+1):
        print(chr(j),end=" ")
    print()

# for i in range(3,5): # [3,4]
#     print(i)