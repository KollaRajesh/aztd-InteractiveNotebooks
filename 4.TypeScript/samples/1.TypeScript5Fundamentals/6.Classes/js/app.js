"use strict";
//tsc -init // create default configuration
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Example: 1 
var Video = /** @class */ (function () {
    //constructor
    function Video(newTitle, newYear) {
        this.title = '';
        this.year = 2024;
        console.log('Creating a new video');
        this.title = newTitle;
        this.year = newYear;
    }
    Video.prototype.printItem = function () {
        console.log(this.title + " was released in " + this.year);
    };
    return Video;
}());
//Usage
var video = new Video('The Wish', 2024);
video.printItem();
// example:2 
var Album = /** @class */ (function () {
    //constructor with parameter properties 
    function Album(title, year) {
        this.title = title;
        this.year = year;
        this._producer = '';
        console.log('Creating a new Album');
    }
    Object.defineProperty(Album.prototype, "Producer", {
        //Properties 
        get: function () {
            return this._producer.toUpperCase();
        },
        set: function (newProducer) {
            this._producer = newProducer;
        },
        enumerable: false,
        configurable: true
    });
    Album.prototype.printItem = function () {
        console.log(this.title + " was released in " + this.year);
        console.log("Medium: " + Album.medium);
    };
    Album.medium = 'Audio/Video';
    return Album;
}());
//Usage
var album = new Album('Spider man returns', 2025);
album.printItem();
album.Producer = 'Scott';
//example: 3
// extending class,using Inheritance
var DocumentaryVideo = /** @class */ (function (_super) {
    __extends(DocumentaryVideo, _super);
    function DocumentaryVideo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subject = '';
        return _this;
        //constructor
    }
    return DocumentaryVideo;
}(Video));
//usage
var docVideo = new DocumentaryVideo('Aqua man- The figther Vidoe', 2023);
docVideo.printItem();
//example: 4
// extending class,using Inheritance
var DocumentaryAlbum = /** @class */ (function (_super) {
    __extends(DocumentaryAlbum, _super);
    function DocumentaryAlbum(newTitle, newYear, subject) {
        if (subject === void 0) { subject = ''; }
        var _this = _super.call(this, newTitle, newYear) || this;
        _this.subject = subject;
        return _this;
    }
    DocumentaryAlbum.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("subject:" + this.subject + " " + this.year);
    };
    return DocumentaryAlbum;
}(Album));
//usage
var docAlbum = new DocumentaryAlbum('Aqua man- The figther -Album', 2023);
docAlbum.printItem();
//Abstract Class
// Example: 5
var Person = /** @class */ (function () {
    function Person(name, email) {
        this.name = name;
        this.email = email;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, email, role) {
        var _this = _super.call(this, name, email) || this;
        _this.name = name;
        _this.email = email;
        _this.role = role;
        return _this;
    }
    Employee.prototype.ToString = function () {
        return this.name + " is employee and role is " + this.role;
    };
    return Employee;
}(Person));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, email) {
        var _this = _super.call(this, name, email, 'Manager') || this;
        _this.name = name;
        _this.email = email;
        _this.reportees = new Array();
        return _this;
    }
    Manager.prototype.ToString = function () {
        var result = _super.prototype.ToString.call(this);
        result = result + " \n \t Reportees:";
        this.reportees.forEach(function (employee, index, employees) { result = result + " \n " + employee.ToString(); });
        return result;
    };
    return Manager;
}(Employee));
var employee1 = new Employee('scott', 'scott@noOrg.com', 'Lead');
var employee2 = new Employee('rob', 'rob@noOrg.com', 'devloper');
var employee3 = new Employee('mark', 'mark@noOrg.com', 'tester');
var manager = new Manager('Michele', 'michele@noOrg.com');
manager.reportees.push(employee1);
manager.reportees.push(employee2);
manager.reportees.push(employee3);
console.log(manager.ToString());
//class expression
//Example:6
var exEmployee = /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1(name, email, role) {
        var _this = _super.call(this, name, email) || this;
        _this.name = name;
        _this.email = email;
        _this.role = role;
        return _this;
    }
    class_1.prototype.ToString = function () {
        return this.name + " is employee and role is " + this.role;
    };
    return class_1;
}(Person));
var exemployee = new exEmployee('Daniel', 'Daniel@noOrg.com', 'DevLead');
console.log(exemployee.ToString());
//Another expression for extending class with expression 
var Course = /** @class */ (function (_super) {
    __extends(Course, _super);
    function Course() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subject = '';
        return _this;
    }
    return Course;
}(/** @class */ (function () {
    function class_2() {
        this.title = '';
    }
    return class_2;
}())));
var myCourse = new Course();
myCourse.subject = "TypeScript";
myCourse.title = "Quick training";
console.log(myCourse.subject);
console.log(myCourse.title);
