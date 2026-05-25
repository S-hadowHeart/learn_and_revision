class A 
{
    public void hi()
    {
        System.out.println("hieeee");
    }
}

class B extends A
{
    public void hi()
    {
        System.out.println("heeeli");
    }
}

class PolyTest
{
    public static void main(String[] args)
    {
        A ob1 = new B();
        ob1.hi();

    }
}