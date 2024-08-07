﻿using System;

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

//string isIsogram(string str) => str.ToLower().Distinct().Count() == str.Length ? "Isogram" : "Not Isogram";

string isIsogram(string str)
{
    for (int i = 0; i < str.Length; i++)
    {
        for (int j = i + 1; j < str.Length; j++)
        {
            if (char.ToLower(str[i]) == char.ToLower(str[j]))
            {
                return "Not Isogram";
            }
        }
    }
    return "Isogram";
}

int findEvenIndex(int[] arr)
{
    for (int i = 0; i < arr.Length; i++)
    {
        if (arr.Take(i).Sum() == arr.Skip(i + 1).Sum())
        {
            return i;
        }
    }
    return -1;
}

string validBraces(string braces)
{
    string[] open = { "(", "{", "[" };
    string[] close = { ")", "}", "]" };
    string[] stack = new string[braces.Length];
    int index = 0;
    for (int i = 0; i < braces.Length; i++)
    {
        if (open.Contains(braces[i].ToString()))
        {
            stack[index++] = braces[i].ToString();
        }
        else if (close.Contains(braces[i].ToString()))
        {
            if (index == 0)
            {
                return "false";
            }
            if (open[Array.IndexOf(close, braces[i].ToString())] != stack[--index])
            {
                return "false";
            }
        }
    }
    return index == 0 ? "true" : "false";
}

int[] tribonacci(int[] arr, int n)
{
    if (n == 0)
    {
        return [];
    }
    else if (n == 1)
    {
        return [arr[0]];
    }
    else if (n == 2)
    {
        return [arr[0], arr[1]];
    }
    else
    {
        int[] result = new int[n];
        result[0] = arr[0];
        result[1] = arr[1];
        result[2] = arr[2];
        for (int i = 3; i < n; i++)
        {
            result[i] = result[i - 1] + result[i - 2] + result[i - 3];
        }
        return result;
    }
    }


string high (string s)
{
    string[] words = s.Split(' ');
    int[] scores = words.Select(x => x.Sum(y => y - 'a' + 1)).ToArray();
    return words[Array.IndexOf(scores, scores.Max())];
}

string rgb(int r, int g, int b)
{
    return string.Join("", new int[] { r, g, b }.Select(x => x < 0 ? "00" : x > 255 ? "FF" : x.ToString("X2")));
}


Console.WriteLine(shortLongShort("abc", "def")); // abcdefabc

Console.WriteLine(toJadenCase("How can mirrors be real if our eyes aren't real")); // How Can Mirrors Be Real If Our Eyes Aren't Real

Console.WriteLine(findOutlier(new int[] { 2, 4, 0, 100, 4, 11, 2602, 36 })); // 11

Console.WriteLine(oddOrEven(new int[] { 0, 1, 2 })); // odd

Console.WriteLine(likes(new string[] { "Alex", "Jacob", "Mark", "Max" })); // Alex, Jacob and 2 others like this

Console.WriteLine(digital_root(942)); // 6

Console.WriteLine(isIsogram("Dermatoglyphics")); // Isogram

Console.WriteLine(findEvenIndex(new int[] { 1, 2, 3, 4, 3, 2, 1 })); // 3

Console.WriteLine(validBraces("()")); // true
Console.WriteLine(validBraces("(){}[]")); // true
Console.WriteLine(validBraces("([{}])")); // true
Console.WriteLine(validBraces("({})[({})]")); // true
Console.WriteLine(validBraces("(({{[[]]}}))")); // true
Console.WriteLine(validBraces("{}{})([]")); // false

Console.WriteLine(tribonacci(new int[] { 1, 1, 1 }, 10)); // 1, 1, 1, 3, 5, 9, 17, 31, 57, 105

Console.WriteLine(high("today is a day to consider the past")); // consider

Console.WriteLine(high("z b a ")); // z

Console.WriteLine(rgb(255, 255, 255)); // FFFFFF

Console.WriteLine(rgb(255, 255, 300)); // FFFFFF

Console.WriteLine(rgb(0, 0, 0)); // 000000

Console.WriteLine(rgb(255, 16, 9)); // FF1009
