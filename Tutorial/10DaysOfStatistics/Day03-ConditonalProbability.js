// online : https://www.hackerrank.com/challenges/s10-mcq-4/problem?isFullScreen=true

/* 
Suppose a family has 2 children, one of which is a boy. What is the probability that both children are boys?

- 1 / 3
- 1 / 2
- 2 / 3
- 1 / 9
 */


/* 
Simply put, when you have a previous condition you end up altering the samples.
At first, if a couple has 2 children, you samples are (B,G)(B,B)(G,B)(G,G). 
But now you know one of them is a boy, which changes your samples to (B,G)(B,B)(G,B). 
Thus the probability is now 1/3.
 */