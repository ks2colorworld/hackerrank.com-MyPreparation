using System;
public interface AdvancedArithmetic{
    int divisorSum(int n);
}

public class Calculator : AdvancedArithmetic
{
  public int divisorSum(int n)
  {
    // online : https://www.hackerrank.com/challenges/30-interfaces/problem?isFullScreen=true
    return 0;
  }
}

class Solution{
  static void Main(string[] args){
    int n = Int32.Parse(Console.ReadLine());
    AdvancedArithmetic myCalculator = new Calculator();
    int sum = myCalculator.divisorSum(n);
    Console.WriteLine("I implemented: AdvancedArithmetic\n" + sum); 
  }
}



/* 1
❯ csc Day19-Interfaces.cs 
❯ mono Day19-Interfaces.exe < Day19-Interfaces-input.txt 
*/

/* 2 
❯ dotnet tool install -g dotnet-script
❯ dotnet script Day19-Interfaces.cs < Day19-Interfaces-input.txt
*/