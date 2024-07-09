using System;

string shortLongShort(string a, string b) => a.Length <= b.Length ? a + b + a : b + a + b;

string toJadenCase(string phrase) => string.Join(" ", phrase.Split(' ').Select(x => x.Substring(0, 1).ToUpper() + x.Substring(1)));

int findOutlier(int[] integers) => integers.Count(x => x % 2 == 0) == 1 ? integers.First(x => x % 2 == 0) : integers.First(x => x % 2 != 0);

string oddOrEven(int[] array) => array.Sum() % 2 == 0 ? "even" : "odd";

string likes(string[] names)
{
    switch (names.Length)
    {
        case 0:
            return "no one likes this";
        case 1:
            return $"{names[0]} likes this";
        case 2:
            return $"{names[0]} and {names[1]} like this";
        case 3:
            return $"{names[0]}, {names[1]} and {names[2]} like this";
        default:
            return $"{names[0]}, {names[1]} and {names.Length - 2} others like this";
    }
}

int digital_root(int n) => n < 10 ? n : digital_root(n.ToString().Sum(x => x - '0'));

string isIsogram(string str) => str.ToLower().Distinct().Count() == str.Length ? "Isogram" : "Not Isogram";



Console.WriteLine(shortLongShort("abc", "def")); // abcdefabc

Console.WriteLine(toJadenCase("How can mirrors be real if our eyes aren't real")); // How Can Mirrors Be Real If Our Eyes Aren't Real

Console.WriteLine(findOutlier(new int[] { 2, 4, 0, 100, 4, 11, 2602, 36 })); // 11

Console.WriteLine(oddOrEven(new int[] { 0, 1, 2 })); // odd

Console.WriteLine(likes(new string[] { "Alex", "Jacob", "Mark", "Max" })); // Alex, Jacob and 2 others like this

Console.WriteLine(digital_root(942)); // 6

Console.WriteLine(isIsogram("Dermatoglyphics")); // Isogram
