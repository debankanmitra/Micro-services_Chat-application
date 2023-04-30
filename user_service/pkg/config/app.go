package config // whole point of this file is to return a variable called db which will help other files to interact with database

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	database *gorm.DB
)

func Connect() {
	// refer https://github.com/go-sql-driver/mysql#dsn-data-source-name for details
	dsn := "root:admin123@tcp(127.0.0.1:3306)/chat_user?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err)
	}

	database = db

}

func GetDB() *gorm.DB {
	return database
}
