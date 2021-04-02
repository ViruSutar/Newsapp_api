## Mysql DB
CREATE USER developer IDENTIFIED BY 'developer';

GRANT ALL PRIVILEGES ON assignmentdb.* to developer;

flush privileges;

## How to run
1)RUN FOLLOWING COMMAND 
npm i 

2)To use Dummy data (It will store dummy data from the seeders folder) 
Note:Check user id field in the ./seeders/20210402064705-articl-add  file to avoid errors

npx sequelize-cli db:seed:all


3)Use following routes to signup,signin...etc



 ## Routes

 ## SIGNUP
 ## POST
 http://localhost:5252/auth/signup

 ## SIGNIN
 ## POST
 http://localhost:5252/auth/signin

## CREATE ARTICLE (ONLY LOGGED IN USER CAN PERFORM THIS ACTION)
## POST
 http://localhost:5252/article/create/:userId

## UPDATE ARTICLE(ONLY OWNER OF ARTICLE CAN PERFORM THIS ACTION)
## PATCH
http://localhost:5252/article/update/:userId/:articleId

## DELETE ARTICLE (ONLY OWNER OF ARTICLE CAN PERFORM THIS ACTION)
## DELETE
http://localhost:5252/article/delete/:userId/:articleId

## NEWS LISTING (ONLY LOGGED IN USER CAN PERFORM THIS ACTION)
## GET
http://localhost:5252/article/getAll

## NEWS ARTICLE DETAILS (ONLY LOGGED IN USER CAN PERFORM THIS ACTION)
## GET
http://localhost:5252/article/getArticle/:articleId




