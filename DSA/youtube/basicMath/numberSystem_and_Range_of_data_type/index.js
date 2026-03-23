// Range of Data Types:
/*
decimal number system is base 10 because it's have 10 unique represented value 0,1,2,3,4,5,6,7,8,9 
octal number system is base 8 because it's have 8 unique represented value 0,1,2,3,4,5,6,7 
hex number system is base 16 because it's have 8 unique represented value 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F .it's look like (0-15) 



*/ 



// Number System:
/*
1 box is 1 bites
8 bites is 1 bytes
1KB(Kilobyte) equal to 1024 bytes
1MB(Megabyte) equal to 1024 KB
1GB(Gigabyte) equal to 1024 MB
1TB(Terabyte) equal to 1024 GB
 ________________
|_|_|_|_|_|_|_|_|  hear first box is Most Significant Bit (MSB) and last box is Least Significant Bit

🔹 MSB – Most Significant Bit

    Leftmost bit

    Has the highest value (weight)

    Affects the number the most

🔹 LSB – Least Significant Bit

        Rightmost bit

        Has the smallest value

        Changes the number the least


 ________________
|_|_|_|_|_|_|_|_|    

It the 8 bits there is 2 combination 1 or 0 so we can tell 2⁸ possible combinations 
2⁸ = 256 combination

Integer have signed and unsigned . In most of the compiler integer is 4byes for study we keep as 2bytes
2 bytes is equal to 16 bites (8*2) 

 ________________________________
|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|  => 16 bites

:> 2 we using in below that is not bytes that is combination 0 or 1 so for all bytes we keep as 2 only don't get confused

Unsigned:
    2¹⁶ = 65,536 hear we consider 0 also so that 65,536 -1 = 65,535
Signed:
    Most Significant Bit keep for + or - if 1 is there it consider as - (Negative) if 0 is there it consider as + (positive)
    2¹⁶ − 1 (2 power (16 − 1) = 2¹⁵ 
    2¹⁵  = 32,768

    if it's negative => -32,768 to -1
    if it's positive => 0 to 32,768 -1 = 32,767 (-1 for considering 0 also)

The range of positive and negative integer is => -32,768 to 32,767

so Formula for this is (-2 power bite-1) to (2 power bites-1) -1

*/ 


