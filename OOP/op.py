class A :
    def myoop(self):
        print("i am from class A")
    
class B(A):
    def myoop(self):
        print("i am from class B")
    
obj = B()
obj.myoop()

