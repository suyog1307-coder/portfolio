CREATE DATABASE IF NOT EXISTS portfolio_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE portfolio_db;

CREATE TABLE IF NOT EXISTS Project (
  id          INT           NOT NULL AUTO_INCREMENT,
  title       VARCHAR(191)  NOT NULL,
  description TEXT          NOT NULL,
  imageUrl    VARCHAR(191)  NULL,
  techStack   VARCHAR(191)  NOT NULL,
  githubUrl   VARCHAR(191)  NULL,
  liveUrl     VARCHAR(191)  NULL,
  createdAt   DATETIME(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS ContactMessage (
  id        INT           NOT NULL AUTO_INCREMENT,
  name      VARCHAR(191)  NOT NULL,
  email     VARCHAR(191)  NOT NULL,
  message   TEXT          NOT NULL,
  createdAt DATETIME(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
