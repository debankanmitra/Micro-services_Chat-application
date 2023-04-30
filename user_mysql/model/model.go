package model

import (
	"msql/config"

	"gorm.io/gorm"
)

var (
	database *gorm.DB
)

// User represents a database table containing user data.
type User struct {
	ID    uint   `gorm:"primaryKey"`
	Name  string `gorm:"" json:"Name"`
	Age   int
	Email string `gorm:"unique;not null" json:"Email"`
}

func init() {
	// connecting to database , config.Connect() returns a db
	database = config.Connect()

	// automatically creates or updates database tables based on the Go structs defined in the code.
	// When you call the AutoMigrate function, GORM inspects the struct fields and generates the corresponding database table schema.
	database.AutoMigrate(&User{})
}

// CRUD functions of database
// Read retrieves a single User by ID from the database.
func Read(id int) *User {
	// db.Find() will return the results of the query, which in this case is a pointer to the User struct
	// &user is a pointer to the User struct that will hold the results of the query
	var user *User
	database.Find(&user, "id= ?", id)
	return user
}

func Create(user *User) *User {
	database.Create(user)
	return user
}

func Delete(id int) *User {
	var user *User
	database.Where("id= ?", id).Delete(&user)
	return user
}
