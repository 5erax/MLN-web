import {
  resistanceLesson,
  resistanceLessonQuiz,
} from './resistanceLessonData.js';

export const lessons = [resistanceLesson];

export const lessonQuizzes = {
  [resistanceLesson.slug]: resistanceLessonQuiz,
};
