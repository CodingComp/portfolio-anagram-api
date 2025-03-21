import { Controller, Get, Injectable, Param } from '@nestjs/common';
import * as fs from 'fs';

export type AnagramRequestData = {
  word: string;
  anagrams: string[];
};

// words.txt dictionary. Each word entry is mapped to a dictionary containing each character with its frequency count
// Example "Test" :
//      {   ...,
//          Test => {
//              "t" => 2
//              "e" => 1
//              "s" => 1
//          }, ...
//      }
type WordEntry = { [word: string]: WordCharacterMap };
type WordCharacterMap = { [character: string]: number };

let words: WordEntry = {};

@Injectable()
export class AppService {
  constructor() {
    this.initializeAnagramSolver();
  }

  // Reads from the words.txt file and stores the results in the words variable
  private initializeAnagramSolver(): void {
    // Reads all words from words.txt and stores them
    fs.readFileSync('./src/words.txt', 'utf8')
      .split('\n')
      .forEach((line: string) => {
        if (line.length >= 3) words[line] = this.createCharacterMap(line);
      });
  }

  
  // Creates a WordCharacterMap from a given word
  private createCharacterMap(word: string): WordCharacterMap {
    let charMap: WordCharacterMap = {};
    word = word.toLowerCase();

    for (let i: number = 0; i < word.length; i++) {
      if (charMap[word[i]] == undefined) charMap[word[i]] = 1;
      else charMap[word[i]] += 1;
    }

    return charMap;
  }

  
  // Finds all anagrams from a given word
  @Get('/AnagramSolver/:word')
  getAnagram(@Param('word') word: string): AnagramRequestData {
    let wordCharMap: WordCharacterMap = this.createCharacterMap(word);
    let foundAnagrams: string[] = [];

    // Loops over every word entry
    for (let wordEntry in words) {
      if (wordEntry.length > word.length) continue;

      let validAnagram: boolean = true;
      for (let char in words[wordEntry]) {
        // Checks if wordEntry is a valid anagram
        if (wordCharMap[char] == undefined || words[wordEntry][char] > wordCharMap[char]) {
          validAnagram = false;
          break;
        }
      }

      if (validAnagram) foundAnagrams.push(wordEntry);
    }

    // sorts results by length
    foundAnagrams.sort((a, b) => b.length - a.length);
    
    return {
      word: word,
      anagrams: foundAnagrams,
    };
  }
}
