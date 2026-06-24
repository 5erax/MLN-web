import {
  resistanceLesson,
  resistanceLessonQuiz,
} from './resistanceLessonData.js';

import {
  expandedLessons,
  expandedLessonQuizzes,
} from './expandedLessonsData.js';

export const lessons = [
  ...expandedLessons,
  resistanceLesson,
];

export const lessonQuizzes = {
  ...expandedLessonQuizzes,
  [resistanceLesson.slug]: resistanceLessonQuiz,
};