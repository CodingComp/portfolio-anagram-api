using Microsoft.AspNetCore.Mvc;

namespace AnagramSolver.Controllers;

[ApiController]
[Route("[controller]")]
public class AnagramSolverController : ControllerBase
{
    private string _wordsFile = "./words.txt";
    private static Dictionary<string, Dictionary<char, int>> words = new();

    public AnagramSolverController()
    {
        if (words.Count != 0) return;
        Console.WriteLine("INITIALIZE");
        /* Initializes words dictionary */
        StreamReader sr = new StreamReader(_wordsFile);
        string? line = sr.ReadLine();
        while (line != null) {
            words.Add(line, GetWordDictionary(line.ToLower()));
            line = sr.ReadLine();
        }
        sr.Close();
    }
    
    /// <summary>
    /// Finds all anagrams of a given word. 
    /// </summary>
    /// <param name="word">Word to find related anagrams</param>
    /// <returns>AnagramSolver object containing a list of all found anagrams from the given word</returns>
    [HttpGet("{word}", Name = "GetAnagrams")]
    public AnagramSolver Get(string word)
    {
        AnagramSolver solver = new AnagramSolver();
        
        Dictionary<char, int> wordDict = GetWordDictionary(word.ToLower());
        List<string?> foundAnagrams = [];
        
        foreach (var wordEntry in words) {
            // entry word size checks
            if (wordEntry.Key.Length > word.Length || wordEntry.Key.Length < 3) continue;
        
            // Valid anagram check
            bool isAnagram = true;
            foreach (var keyValuePair in wordEntry.Value.Except(wordDict)) {
                if (wordDict.ContainsKey(keyValuePair.Key) &&
                    wordDict[keyValuePair.Key] >= keyValuePair.Value) 
                    continue;
                
                isAnagram = false;
                break;
            }
    
            if (isAnagram) foundAnagrams.Add(wordEntry.Key);
        }

        solver.Word = word;
        solver.Anagrams = foundAnagrams.ToArray();
        
        // Sorts anagrams by word size. Longer words => Shorter words
        Array.Sort(solver.Anagrams, (a, b) => b.Length.CompareTo(a.Length));
        
        return solver;
    }
    
    /// <summary>
    /// Creates a dictionary from a given word by looping over each character and counting it. This counting is used for
    /// comparisons between two words to check if they are an anagram.
    /// </summary>
    /// <param name="word">Word that will be used for the dictionary</param>
    private Dictionary<char, int> GetWordDictionary(string word)
    {
        Dictionary<char, int> dict = new Dictionary<char, int>();
        
        for (int i = 0; i < word.Length; i++) {
            dict[word[i]] = dict.GetValueOrDefault(word[i], 0) + 1;
        }
        
        return dict;
    }
}
