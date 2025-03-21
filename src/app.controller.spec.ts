import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnagramTests, AnagramTest } from '../test/anagramTestsData';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  // Anagram Solver Tests
  describe('AnagramSolver', () => {
    AnagramTests.forEach((Test: AnagramTest) => {
      it(Test.description, () => {
        // expect(appController.getAnagram(Test.anagramRequest.word)).toStrictEqual(Test.anagramRequest);
      });
    });
  });
});
