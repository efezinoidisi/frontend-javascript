"use strict";
/// <reference path="subjects/Subject.ts"/>
/// <reference path="subjects/Teacher.ts"/>
/// <reference path="subjects/Cpp.ts"/>
/// <reference path="subjects/React.ts"/>
/// <reference path="subjects/Java.ts"/>
exports.__esModule = true;
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
exports.cpp = new Subjects.Cpp();
exports.java = new Subjects.Java();
exports.react = new Subjects.React();
exports.cTeacher = {
    experienceTeachingC: 10,
    firstName: 'John',
    lastName: 'Doe'
};
console.log(exports.cpp);
exports.cpp.setTeacher(exports.cTeacher);
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
console.log(exports.java);
exports.java.setTeacher(exports.cTeacher);
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher());
console.log(exports.react);
exports.react.setTeacher(exports.cTeacher);
console.log(exports.react.getRequirements());
console.log(exports.react.getAvailableTeacher());
