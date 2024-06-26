CREATE TABLE `class` (
  `classId` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `year` YEAR NOT NULL,
  `teacher` VARCHAR(100)  NULL,
  `moniter` VARCHAR(100)  NULL,
  `narration` TEXT NOT NULL,
  `status` TINYINT(1) NOT NULL DEFAULT 1,
  `totalStudents` BIGINT UNSIGNED  NULL DEFAULT 0,
  `countBoys` BIGINT UNSIGNED  NULL DEFAULT 0,
  `countGirls` BIGINT UNSIGNED  NULL DEFAULT 0,
  `filename` VARCHAR(255) DEFAULT NULL,
  `filepath` VARCHAR(255) DEFAULT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `deletedAt` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`classId`)
);

 -- common feilds for student and staff
CREATE TABLE `roles` (
  `roleId` INT NOT NULL AUTO_INCREMENT,
  `roleName` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`roleId`)
);


CREATE TABLE `users` (
  `userId` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(100) NOT NULL,
  `lastName` VARCHAR(100) NOT NULL,
  `roleId` INT NOT NULL,
  `narration` TEXT NOT NULL,
  `status` TINYINT(1) NOT NULL DEFAULT 1,
  `filename` VARCHAR(255) DEFAULT NULL,
  `filepath` VARCHAR(255) DEFAULT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `deletedAt` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`userId`),
  FOREIGN KEY (`roleId`) REFERENCES `roles`(`roleId`) ON DELETE CASCADE ON UPDATE CASCADE
);



CREATE TABLE `studentclass` (
  `studentClassId` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `classId` INT NOT NULL,
  `year` YEAR NOT NULL,
  `status` TINYINT(1) NOT NULL DEFAULT 1,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `deletedAt` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`studentClassId`),
  FOREIGN KEY (`userId`) REFERENCES `users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`classId`) REFERENCES `class`(`classId`) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE `staff_class` (
  `staffClassId` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `classId` INT NOT NULL,
  `year` YEAR NOT NULL,
  `status` TINYINT(1) NOT NULL DEFAULT 1,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `deletedAt` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`staffClassId`),
  FOREIGN KEY (`userId`) REFERENCES `users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`classId`) REFERENCES `class`(`classId`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `attendance` (
  `attendanceId` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `date` TEXT NOT NULL,
  `status` ENUM('present', 'absent') NOT NULL DEFAULT 'absent',
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`attendanceId`),
  FOREIGN KEY (`userId`) REFERENCES `users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `news` (
  `newsId` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `content` TEXT NOT NULL,
  `author` VARCHAR(100) NOT NULL,
  `publishDate` TEXT NOT NULL,
  `status` ENUM('draft', 'published', 'archived') NOT NULL DEFAULT 'draft',
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`newsId`)
);

CREATE TABLE `updates` (
  `updateId` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `content` TEXT NOT NULL,
  `updateDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`updateId`)
);



CREATE TABLE tasks (
    taskId INT NOT NULL primary KEY AUTO_INCREMENT,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    Description TEXT null,
    dueDate varchar(100) NOT NULL,
    userId INT not null,
    classId int not null,
      `filename` VARCHAR(255) DEFAULT NULL,
  `filepath` VARCHAR(255) DEFAULT NULL,
     `status` TINYINT(1) NOT NULL DEFAULT 1,
     `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(userId),
      FOREIGN KEY (classId) REFERENCES class(classId)
);



CREATE TABLE submittedtasks (
    staskId INT NOT NULL  primary KEY AUTO_INCREMENT,
	userId INT,
    taskId int,
      `filename` VARCHAR(255) DEFAULT NULL,
  `filepath` VARCHAR(255) DEFAULT NULL,
     `status` TINYINT(1) NOT NULL DEFAULT 1,
     `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(userId),
         FOREIGN KEY (taskId) REFERENCES tasks(taskId)
);
