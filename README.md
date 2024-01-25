### Clone the repo

`git clone https://github.com/Oreofreakshake/greenmv.git`

### Frontend setup

cd into the frontend dir ==> `cd frontend`

-   `npm install`
-   `npm run dev` (start server)

### Backend setup

cd into the backend dir ==> `cd backend`

-   `npm install`
-   `npx prisma migrate dev` (migrating, run this once))
-   `npm run dev` (start server)
-   `npx prisma studio` (database UI, optional to run)

### setup ENV

create a .env file and put this in the file

-   `DATABASE_URL="file:./dev.db"`
