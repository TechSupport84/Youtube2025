using System;
using System.Runtime.Intrinsics.Arm;

class Program
{
    //Write()
    //WriteLine("")
    //variable
    //type:  int  double  string ,float
    //Python  :  name = "" age  =30, money = 3.3
    // ReadLine(); read from user 
    static void  Main(string[] args)
    {
        Console.WriteLine("Welcome to CodeWithJeancy");
        Console.WriteLine("What is your name ? ");
        string name =  Console.ReadLine();

        Console.WriteLine("What is your Age ? ");
        string age  = Console.ReadLine();

        int validAge = int.Parse(age);


        Console.WriteLine($"Your username is  {name} and  your age is  {validAge} years old");
    }
}