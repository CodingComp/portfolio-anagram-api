import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { AnagramTests, AnagramTest } from './anagramTestsData';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // Anagram Solver Tests
  describe('AnagramSolver e2e', () => {
    AnagramTests.forEach((Test: AnagramTest) => {
      it(Test.description, () => {
        // return request(app.getHttpServer()).get(Test.get).expect(200).expect(Test.anagramRequest);
      });
    });
  });
});
