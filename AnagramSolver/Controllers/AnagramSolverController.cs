using Microsoft.AspNetCore.Mvc;

namespace AnagramSolver.Controllers;

[ApiController]
[Route("[controller]")]
public class AnagramSolverController : ControllerBase
{
    private string _wordsFile = "./words.txt";
    
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
        
        StreamReader sr = new StreamReader(_wordsFile);
        string? line = sr.ReadLine();
        // Searches words.txt for anagrams from given word
        while (line != null) {
            if (line.Length != word.Length)  {
                line = sr.ReadLine();
                continue;
            }
            
            Dictionary<char, int> lineDict = GetWordDictionary(line.ToLower());
            
            // Checks if read line is an anagram
            if (wordDict.Count == lineDict.Count && !wordDict.Except(lineDict).Any())
                foundAnagrams.Add(line);

            line = sr.ReadLine();
        }
        sr.Close();

        solver.Word = word;
        solver.Anagrams = foundAnagrams.ToArray();
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
