# NEST JS USEER Authentication , ChatIMport and Task Filtering API
## 1.Overview
This Project is a **NEST JS -based API ** that includes:
- **User Registration & Login **(secure password hasing and Authunctaion) 
- **Chat Import via Excel** (upload the chat Excell file to import chat data)
- ** Task Filtering ** (view task by status :done , pening, ongoing )
- ** TypeScript & PostgreSQL** for strong typing and data base managemnet 

---
##Installing & Setup

### 1. clone the repo
```sh
git clone https://github.com/ashu3814/Chat-Import-via-Excel-Sheet.git

```
2. Install Dependancy
```sh
npm inastall
```
3. config DB
create a PostgeresSQL
```src/app.module.ts:```

```sh
TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'login',
      password: null,
      database: 'test',
      entities: [],
      synchronize: true,
    }),
```
4. Run The Appliction 
```sh 
npm run start
```

#API End Point 
##User Authuntication 
* Register: ```POST /auth/register```
```sh
privide the email and password
```


* Login : ```POST /auth/login ```
```sh
privide the email and password
```

# Chat Import 
* Upload Excell File :```POST /chat/import```
  

#TECH STACk
* Framework : NestJS
* DataBase  : PostgreSQL 
* Authuntication : Bctypt for password
*File Upload : Multer
* Type Safity : Type Script 












