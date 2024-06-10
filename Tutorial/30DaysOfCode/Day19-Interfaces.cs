using System;
public interface AdvancedArithmetic{
    int divisorSum(int n);
}

public class Calculator : AdvancedArithmetic
{
  public int divisorSum(int n)
  {
    // online : https://www.hackerrank.com/challenges/30-interfaces/problem?isFullScreen=true
    // List<int> d = new List<int>();
    int sum = 0;
    for (int i =1; i <= n; i++){
      if (n%i ==0){
        // d.Add(i);
        sum += i;
      }
    }
    return sum;
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
