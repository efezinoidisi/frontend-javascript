/// <reference path="Subject.ts"/>
/// <reference path="Teacher.ts"/>

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return `Here is the list of requirements for Cpp`;
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;
      if (!teacher.experienceTeachingC) return `No available teacher`;
      return `Available Teacher: ${teacher.firstName}`;
    }
  }
}