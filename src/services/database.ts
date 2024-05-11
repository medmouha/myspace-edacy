import sqlite3 from "sqlite3";

export class Database {
        db: sqlite3.Database

        constructor() {
                this.db = new sqlite3.Database(process.env.SQLITE_DB || 'myspace.db', (err) => {
                        if (err) {
                                console.log("Error openong database ", err);
                        } else {
                                console.log("Database ouverte");
                                this.createtable();
                        }
                })
        }

        private createtable() {
                this.db.run(`create table if not exists 
            users (id integer PRIMARY KEY AUTOINCREMENT,
                    firstname TEXT,
                    lastname TEXT,
                    login TEXT,
                    password TEXT,
                    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`, (err) => {
                        if (err) {
                                console.log("Error creating table ", err);
                        } else {
                                console.log("Table created successfully");
                        }
                });
        }

        public query(sql:string, params:any[]=[]) : Promise<any> {
                return new Promise((resolve, reject) =>{
                        this.db.all(sql, params, (err, rows) =>{
                             if (err) {
                                reject(err);
                             } else {
                                resolve(rows);
                             }
                        })
                })
        }
}

