using System;

//for()  ,  while()  foreach()
//for (type variable; condition ,End)
class Program
{
   static void  Main(string[]args)
   {

    Console.WriteLine("What is your Value ? (x): > ");
     string input  = Console.ReadLine();
  
     int x  = int.Parse(input);
     int  y = 20;
     Console.WriteLine("Code Tech  ");
     Console.WriteLine("For Loop");
     for(int i = 0; i < 11 ; i++)
         {
         Console.WriteLine($"ID number: {i}");
         }

    Console.WriteLine("While  loop (Do)");
     do{

        Console.WriteLine($"{x} is less than ${y}" );
        x++;

     }while(x <  y);
   }


}