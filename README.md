# Sequelize Set Up

Tables
- Users
- climbingTypes
- goalSettings
- packingLists
- climbingSessions

# Deploy
https://zany-plum-iguana-sock.cyclic.app


## start with npm 
npm init
npm i cors dotenv express nodemon fs pg pg-hstore sequelize seque
lize-cli

## sequelize-cli 
- Initialize sequelize-cli
npx sequelize-cli init

- Generate tables
npx sequelize-cli model:generate --name Users --attributes username:string,password:string,email:string,phone:string,description:string

npx sequelize-cli model:generate --name ClimbingTypes --attributes type_name:string,hold_type:string,description:string

npx sequelize-cli model:generate --name GoalSettings --attributes goal:string,achievement:string,description:string,user_id:integer

npx sequelize-cli model:generate --name PackingLists --attributes packing_item:string,important_level:integer,check:string,type_id:integer,user_id:integer
    
npx sequelize-cli model:generate --name ClimbingSessions --attributes session_date:date,duration:string,description:string,type_id:integer,user_id:integer

## sequelize migration
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo

## sequelize seed
npx sequelize db:seed:all


