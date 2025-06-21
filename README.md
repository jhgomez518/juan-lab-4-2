Reflection Questions

1. How did array methods like push() and filter() help you manipulate data in this activity?

    I leaned heavy on push() (for reasons I discuss later) in order to sort through a given array by creating
    empty array(s), and shuffling through data with string manipulations (methods) + pushes. This resulted in a rather
    roundabout but still (apparently) effective way of getting to the solutions to the filterItems() task.

2. What challenges did you face when trying to filter and search for items in the array?

   So I first took all item strings and divided each compound word into single words and put them into an empty array
   through which I would later loop through to find matches. The biggest conundrum was:
   how do I get each sub-term to "retain"/"remember" its original index, that way when I find a match to the original term
   in the Array, I could simply do Array[index]? In the end I decided to simply attach the index as a string, save it as a number when
   checking matches, removing it to check the strings, and then calling Array[index] whenever I found a match. It was a very
   "Mickey Mouse" solution but like...honestly, I am excited that it seemed to work.

3. How would you modify this code to make it more efficient or user-friendly?

    So I totally forgot that there is a filter() function. This means I missed the opportunity to employ my knowledge of
    some Array Iteration/Sort/Search methods, BUT it did allow me to push my reasoning to still find a solution within the
    confines of pushing, string manipulation, and comparisons. My end result for "filterItems()" is admittedly super NOT elegant,
    but I was pleased that I was nevertheless able to come up with a creative solution (next time I will read the problem more
    carefully and consider what it is I am probably expected to be doing in my solution). I definitely made my life harder with the
    filterItems() problem. Still--A SOLUTION IS A SOLUTION RIGHT??
