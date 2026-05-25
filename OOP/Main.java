class Department
{
    private final String departmentName;

    Department(String d)
    {
        departmentName = d;
    }

    public String getDep()
    {
        return departmentName;
    }

}

class Professor
{
    private final String professorName;
    private Department dep;
    Professor(String name , Department dep)
    {
        this.dep = dep;
        professorName= name;
    }
    public void print_professor()
    {
        System.out.println("ProfessorName: "+professorName+"\nDepartment : "+dep.getDep()+"\n_________________");
    } 

}


class Main
{
    public static void main(String[] args)
    {
        // Creating departments
        Department com = new Department("Computer");
        Department cvil = new Department("Civil");

        // Creating Professor
        Professor p1 = new Professor("Mico",com);
        Professor p2 = new Professor("Divu",cvil);
        Professor p3 = new Professor("Nico",com);

        p1.print_professor();
        p2.print_professor();
        p3.print_professor();

    }
}